import CMS from "decap-cms-app";

// Define a custom preview component
const BlogPostPreview = ({ entry }) => {
  return `
    <html>
      <head>
        <link rel="stylesheet" href="/assets/css/stylesheet.45e028aa8ce0961349adf411b013ee39406be2c0bc80d4ea3fc04555f7f4611a.css">
      </head>
      <body>
        <article class="single">
          <h1>${entry.getIn(["data", "title"])}</h1>
          <small>${entry.getIn(["data", "date"])}</small>
          <div class="content">${entry.getIn(["data", "body"])}</div>
        </article>
      </body>
    </html>
  `;
};

// Register the preview template
CMS.registerPreviewTemplate("blog", BlogPostPreview);
