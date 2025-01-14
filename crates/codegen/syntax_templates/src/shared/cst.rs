use std::cmp::{max, min};
use std::ops::Range;
use std::rc::Rc;

use serde::Serialize;

use super::kinds::*;
use super::language::TextRange;

#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub enum Node {
    Rule {
        kind: RuleKind,
        range: TextRange,
        children: Vec<Rc<Node>>,
    },
    Token {
        kind: TokenKind,
        range: TextRange,
        #[serde(skip_serializing_if = "Vec::is_empty")]
        trivia: Vec<Rc<Node>>,
    },
}

impl Node {
    pub fn range(&self) -> TextRange {
        match self {
            Self::Rule { range, .. } => range.clone(),
            Self::Token { range, .. } => range.clone(),
        }
    }

    pub fn range_including_trivia(&self) -> TextRange {
        match self {
            Self::Rule { range, .. } => range.clone(),
            Self::Token { range, trivia, .. } => {
                if trivia.is_empty() {
                    range.clone()
                } else {
                    Range {
                        start: min(
                            range.start,
                            trivia.first().unwrap().range_including_trivia().start,
                        ),
                        end: max(
                            range.end,
                            trivia.last().unwrap().range_including_trivia().end,
                        ),
                    }
                }
            }
        }
    }

    #[allow(dead_code)]
    pub(crate) fn rule(kind: RuleKind, children: Vec<Rc<Self>>) -> Rc<Self> {
        let mut flattened_children: Vec<Rc<Self>> = Vec::new();
        for child in children.into_iter() {
            match child.as_ref() {
                Node::Rule { children, .. } if children.is_empty() => {}
                Node::Rule {
                    kind: RuleKind::_SEQUENCE,
                    children,
                    ..
                }
                | Node::Rule {
                    kind: RuleKind::_DELIMITEDBY,
                    children,
                    ..
                }
                | Node::Rule {
                    kind: RuleKind::_TERMINATEDBY,
                    children,
                    ..
                } => flattened_children.extend(children.iter().cloned()),
                _ => flattened_children.push(child.clone()),
            }
        }
        let range = if flattened_children.is_empty() {
            Default::default()
        } else {
            Range {
                start: flattened_children
                    .first()
                    .unwrap()
                    .range_including_trivia()
                    .start,
                end: flattened_children
                    .last()
                    .unwrap()
                    .range_including_trivia()
                    .end,
            }
        };
        return Rc::new(Self::Rule {
            kind,
            range,
            children: flattened_children,
        });
    }

    #[allow(dead_code)]
    pub(crate) fn token(
        kind: TokenKind,
        range: TextRange,
        leading_trivia: Option<Rc<Self>>,
        trailing_trivia: Option<Rc<Self>>,
    ) -> Rc<Self> {
        let mut trivia = vec![];
        if let Some(leading_trivia) = leading_trivia {
            trivia.push(leading_trivia)
        }
        if let Some(trailing_trivia) = trailing_trivia {
            trivia.push(trailing_trivia)
        }
        Rc::new(Self::Token {
            kind,
            range,
            trivia,
        })
    }

    #[allow(dead_code)]
    pub(crate) fn top_level_rule(kind: RuleKind, node: Rc<Self>) -> Rc<Self> {
        match node.as_ref() {
            Self::Rule {
                kind: RuleKind::_SEQUENCE,
                range,
                children,
            }
            | Self::Rule {
                kind: RuleKind::_DELIMITEDBY,
                range,
                children,
            }
            | Self::Rule {
                kind: RuleKind::_TERMINATEDBY,
                range,
                children,
            } => Rc::new(Self::Rule {
                kind,
                range: range.clone(),
                children: children.clone(),
            }),
            _ => Rc::new(Self::Rule {
                kind,
                range: node.range(),
                children: vec![node],
            }),
        }
    }
}
