use codegen_schema::types::{ParserDefinition, ParserRef};

use crate::{nodes::EbnfNode, serialization::GenerateEbnf};

impl GenerateEbnf for ParserRef {
    fn generate_ebnf(&self) -> EbnfNode {
        return self.definition.generate_ebnf();
    }
}

impl GenerateEbnf for ParserDefinition {
    fn generate_ebnf(&self) -> EbnfNode {
        match &self {
            ParserDefinition::Choice(sub_exprs) => {
                return EbnfNode::choices(
                    sub_exprs
                        .iter()
                        .map(|choice| choice.definition.generate_ebnf())
                        .collect(),
                );
            }

            ParserDefinition::DelimitedBy {
                open,
                expression,
                close,
            } => {
                return EbnfNode::sequence(vec![
                    EbnfNode::production_ref(open.reference.to_owned()),
                    expression.definition.generate_ebnf(),
                    EbnfNode::production_ref(close.reference.to_owned()),
                ]);
            }

            ParserDefinition::OneOrMore(expr) => {
                return EbnfNode::one_or_more(expr.generate_ebnf());
            }

            ParserDefinition::Optional(expr) => {
                return EbnfNode::optional(expr.generate_ebnf());
            }

            ParserDefinition::Reference(name) => {
                return EbnfNode::production_ref(name.to_owned());
            }

            ParserDefinition::Repeat {
                min,
                max,
                expression,
            } => {
                return EbnfNode::repeat(*min, *max, expression.generate_ebnf());
            }

            ParserDefinition::SeparatedBy {
                expression,
                separator,
            } => {
                return EbnfNode::sequence(vec![
                    expression.definition.generate_ebnf(),
                    EbnfNode::zero_or_more(EbnfNode::sequence(vec![
                        EbnfNode::production_ref(separator.reference.to_owned()),
                        expression.definition.generate_ebnf(),
                    ])),
                ]);
            }

            ParserDefinition::Sequence(elements) => {
                return EbnfNode::sequence(
                    elements
                        .iter()
                        .map(|element| element.definition.generate_ebnf())
                        .collect(),
                );
            }

            ParserDefinition::TerminatedBy {
                expression,
                terminator,
            } => {
                return EbnfNode::sequence(vec![
                    expression.definition.generate_ebnf(),
                    EbnfNode::production_ref(terminator.reference.to_owned()),
                ]);
            }

            ParserDefinition::ZeroOrMore(expr) => {
                return EbnfNode::zero_or_more(expr.generate_ebnf());
            }
        }
    }
}
