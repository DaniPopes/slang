use std::path::PathBuf;

use codegen_schema::types::{LanguageDefinition, LanguageSection, LanguageTopic};

use crate::{markdown::MarkdownWriter, navigation::NavigationEntry};

pub fn generate_reference_dir(
    language: &LanguageDefinition,
    repo_root: &PathBuf,
) -> NavigationEntry {
    let mut sections = Vec::<NavigationEntry>::new();

    for section in &language.sections {
        let mut topics = Vec::<NavigationEntry>::new();

        for topic in &section.topics {
            topics.push(NavigationEntry::Page {
                title: topic.title.to_owned(),
                path: topic.path.to_owned(),
                contents: generate_topic_page(language, section, topic, repo_root),
            });
        }

        sections.push(NavigationEntry::Directory {
            title: section.title.to_owned(),
            path: section.path.to_owned(),
            children: topics,
        });
    }

    return NavigationEntry::Directory {
        title: "Reference".to_owned(),
        path: "reference".to_owned(),
        children: sections,
    };
}

fn generate_topic_page(
    language: &LanguageDefinition,
    section: &LanguageSection,
    topic: &LanguageTopic,
    repo_root: &PathBuf,
) -> String {
    let mut page = MarkdownWriter::new();

    page.write_header(1, &topic.title);

    page.write_newline();
    page.write_snippet(
        repo_root,
        &language
            .language_dir
            .join(&section.path)
            .join(&topic.path)
            .join(LanguageTopic::NOTES_FILE_NAME),
    );

    return page.to_string();
}
