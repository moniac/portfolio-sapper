const fs = require('fs');
const path = require('path');
const prism = require('prismjs');
const marked = require('marked');
const matter = require('gray-matter');
const formatDate = require('date-fns/format');
const readingTime = require('reading-time');

// Support JSX syntax highlighting
require('prismjs/components/prism-javascript.min');
require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-typescript.min');

const cwd = process.cwd();
const POSTS_DIR = path.join(cwd, 'src/routes/blog/posts/');
const EXCERPT_SEPARATOR = '<!-- more -->';
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
	const html = linkRenderer.call(renderer, href, title, text);
	console.log(title, text, 'FROM _POSTS');

	if (href.indexOf('/') === 0) {
		// Do not open internal links on new tab
		return html;
	} else if (href.indexOf('#') === 0) {
		// Handle hash links to internal elements
		const html = linkRenderer.call(renderer, 'javascript:;', title, text);
		return html.replace(
			/^<a /,
			`<a onclick="document.location.hash='${href.substr(1)}';" `,
		);
	}

	return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};

renderer.code = (code, language) => {
	const parser = prism.languages[language] || prism.languages.html;
	const highlighted = prism.highlight(code, parser, language);
	return `<pre class="language-${language} line-numbers"><code class="language-${language}">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

const posts = fs
	.readdirSync(POSTS_DIR)
	.filter((fileName) => /\.md$/.test(fileName))
	.map((fileName) => {
		const fileMd = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8');
		const { data, content: rawContent } = matter(fileMd);
		const { title, date, summary } = data;
		const slug = fileName.split('.')[0];
		let content = rawContent;
		let excerpt = '';

		if (rawContent.indexOf(EXCERPT_SEPARATOR) !== -1) {
			const splittedContent = rawContent.split(EXCERPT_SEPARATOR);
			excerpt = splittedContent[0];
			content = splittedContent[1];
		}

		renderer.heading = (text, level) => {
			const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
			const formattedText = escapedText.endsWith('-')
				? escapedText.slice(0, -1)
				: escapedText;

			return `
			<div class="title-heading">
                <h${level} id="${formattedText}">
                  <a name="${formattedText}" class="anchor" href="blog/${slug}/#${formattedText}">
                  	<svg aria-hidden="true" class="octicon octicon-link" height="24" version="1.1" viewbox="0 0 16 16" width="24"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
                  </a>
                    ${text}
				</h${level}>
				</div>`;
		};

		const html = marked(content);
		const readingStats = readingTime(content);
		const printReadingTime = readingStats.text;
		const printDate = formatDate(new Date(date), 'MMMM d, yyyy');

		return {
			title: title || slug,
			slug,
			html,
			date,
			excerpt,
			printDate,
			printReadingTime,
			summary,
		};
	});

posts.sort((a, b) => {
	const dateA = new Date(a.date);
	const dateB = new Date(b.date);

	if (dateA > dateB) return -1;
	if (dateA < dateB) return 1;
	return 0;
});

posts.forEach((post) => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
