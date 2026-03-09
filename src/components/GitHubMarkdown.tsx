import { type Component, createMemo } from "solid-js";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "github-markdown-css/github-markdown.css";
import "../styles/markdown.css";
import { gfmHeadingId } from "marked-gfm-heading-id";

marked.use(gfmHeadingId());

interface Props {
  content: string;
}

const GitHubMarkdown: Component<Props> = (props) => {
  const html = createMemo(() => {
    const parsed = marked.parse(props.content || "") as string;
    return DOMPurify.sanitize(parsed, {
      ALLOWED_TAGS: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "a",
        "ul",
        "ol",
        "li",
        "code",
        "pre",
        "blockquote",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "em",
        "strong",
        "del",
        "hr",
        "br",
        "img",
      ],
      ALLOWED_ATTR: ["href", "target", "rel", "src", "alt"],
    });
  });

  return (
    <article
      class="markdown-body"
      innerHTML={html()}
    />
  );
};

export default GitHubMarkdown;
