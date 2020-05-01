'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs$1 = _interopDefault(require('fs'));
var path$1 = _interopDefault(require('path'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

const fs = require("fs");
const path = require("path");
const prism = require("prismjs");
const marked = require("marked");
const matter = require("gray-matter");
const formatDate = require("date-fns/format");
const readingTime = require("reading-time");

// Support JSX syntax highlighting
require("prismjs/components/prism-jsx.min");

const cwd = process.cwd();
const POSTS_DIR = path.join(cwd, "src/routes/blog/posts/");
const EXCERPT_SEPARATOR = "<!-- more -->";
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text);

  if (href.indexOf("/") === 0) {
    // Do not open internal links on new tab
    return html;
  } else if (href.indexOf("#") === 0) {
    // Handle hash links to internal elements
    const html = linkRenderer.call(renderer, "javascript:;", title, text);
    return html.replace(
      /^<a /,
      `<a onclick="document.location.hash='${href.substr(1)}';" `
    );
  }

  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};

renderer.code = (code, language) => {
  const parser = prism.languages[language] || prism.languages.html;
  const highlighted = prism.highlight(code, parser, language);
  return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

const posts = fs
  .readdirSync(POSTS_DIR)
  .filter(fileName => /\.md$/.test(fileName))
  .map(fileName => {
    const fileMd = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
    const { data, content: rawContent } = matter(fileMd);
    const { title, date, summary } = data;
    const slug = fileName.split(".")[0];
    let content = rawContent;
    let excerpt = "";

    if (rawContent.indexOf(EXCERPT_SEPARATOR) !== -1) {
      const splittedContent = rawContent.split(EXCERPT_SEPARATOR);
      excerpt = splittedContent[0];
      content = splittedContent[1];
    }

    const html = marked(content);
    const readingStats = readingTime(content);
    const printReadingTime = readingStats.text;
    const printDate = formatDate(new Date(date), "MMMM d, yyyy");

    return {
      title: title || slug,
      slug,
      html,
      date,
      excerpt,
      printDate,
      printReadingTime,
      summary
    };
  });

posts.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  if (dateA > dateB) return -1;
  if (dateA < dateB) return 1;
  return 0;
});

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

const contents = JSON.stringify(
  posts.map(post => {
    return {
      title: post.title,
      slug: post.slug,
      summary: post.summary,
      date: post.date,
      readingTime: post.printReadingTime
    };
  })
);

function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}

var route_0 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get
});

var usingArray_map = "<hr>\n<p>title: Using .map\nslug: Using .map\ndate: &#39;2020-04-29T08:38:00.000Z&#39;\nsummary: A simple guide to the .map function</p>\n<hr>\n<h1 id=\"hello-world\">Hello World!</h1>\n<p>Welcome to this guide on the .map method.</p>\n<p><img src=\"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif\" alt=\"test\"></p>\n<pre><code class=\"language-js\">// ok\nconst awesome = true;</code></pre>\n";

var route_1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': usingArray_map
});

const lookup = new Map();
posts.forEach(post => {
  lookup.set(post.slug, JSON.stringify(post));
});

function get$1(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}

var route_2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$1
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src\components\GradientHeading.svelte generated by Svelte v3.21.0 */

const css = {
	code: ".GradientHeading.svelte-1kiplsl{background-image:linear-gradient(180deg, #5b5cf1, #21b3ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;line-height:0.9;transition:background-image 225ms ease;animation:svelte-1kiplsl-hue 10s infinite alternate;text-transform:uppercase;font-weight:700;white-space:normal;font-size:4.8rem}.dark-mode .GradientHeading{background-image:linear-gradient(to bottom, #f15b74, #ff6021)}@keyframes svelte-1kiplsl-hue{from{-webkit-filter:hue-rotate(0deg)}to{-webkit-filter:hue-rotate(-20deg)}}@media(min-width: 768px){.h1.svelte-1kiplsl{font-size:9.375em}}",
	map: "{\"version\":3,\"file\":\"GradientHeading.svelte\",\"sources\":[\"GradientHeading.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  export let depth = 1;\\r\\n  export let className = \\\"\\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .GradientHeading {\\r\\n    background-image: linear-gradient(180deg, #5b5cf1, #21b3ff);\\r\\n    -webkit-background-clip: text;\\r\\n    background-clip: text;\\r\\n    -webkit-text-fill-color: transparent;\\r\\n    line-height: 0.9;\\r\\n    transition: background-image 225ms ease;\\r\\n    animation: hue 10s infinite alternate;\\r\\n    text-transform: uppercase;\\r\\n    font-weight: 700;\\r\\n    white-space: normal;\\r\\n    font-size: 4.8rem;\\r\\n  }\\r\\n\\r\\n  :global(.dark-mode .GradientHeading) {\\r\\n    background-image: linear-gradient(to bottom, #f15b74, #ff6021);\\r\\n  }\\r\\n\\r\\n  @keyframes hue {\\r\\n    from {\\r\\n      -webkit-filter: hue-rotate(0deg);\\r\\n    }\\r\\n    to {\\r\\n      -webkit-filter: hue-rotate(-20deg);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @media (min-width: 768px) {\\r\\n    .h1 {\\r\\n      font-size: 9.375em;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n{#if depth === 1}\\r\\n  <h1 class=\\\"GradientHeading h{depth} {className} -ml-1 mb-8 lg:mb-16 lg:-ml-2\\\">\\r\\n    <slot />\\r\\n  </h1>\\r\\n{:else}\\r\\n  {#if depth === 2}\\r\\n    <h2 class=\\\"GradientHeading h{depth} {className}\\\">\\r\\n      <slot />\\r\\n    </h2>\\r\\n  {:else}\\r\\n    <h3 class=\\\"GradientHeading h{depth} {className}\\\">\\r\\n      <slot />\\r\\n    </h3>\\r\\n  {/if}\\r\\n{/if}\\r\\n\"],\"names\":[],\"mappings\":\"AAME,gBAAgB,eAAC,CAAC,AAChB,gBAAgB,CAAE,gBAAgB,MAAM,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CAC3D,uBAAuB,CAAE,IAAI,CAC7B,eAAe,CAAE,IAAI,CACrB,uBAAuB,CAAE,WAAW,CACpC,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,gBAAgB,CAAC,KAAK,CAAC,IAAI,CACvC,SAAS,CAAE,kBAAG,CAAC,GAAG,CAAC,QAAQ,CAAC,SAAS,CACrC,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,MAAM,AACnB,CAAC,AAEO,2BAA2B,AAAE,CAAC,AACpC,gBAAgB,CAAE,gBAAgB,EAAE,CAAC,MAAM,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,AAChE,CAAC,AAED,WAAW,kBAAI,CAAC,AACd,IAAI,AAAC,CAAC,AACJ,cAAc,CAAE,WAAW,IAAI,CAAC,AAClC,CAAC,AACD,EAAE,AAAC,CAAC,AACF,cAAc,CAAE,WAAW,MAAM,CAAC,AACpC,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,GAAG,eAAC,CAAC,AACH,SAAS,CAAE,OAAO,AACpB,CAAC,AACH,CAAC\"}"
};

const GradientHeading = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { depth = 1 } = $$props;
	let { className = "" } = $$props;
	if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0) $$bindings.depth(depth);
	if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
	$$result.css.add(css);

	return `${depth === 1
	? `<h1 class="${"GradientHeading h" + escape(depth) + " " + escape(className) + " -ml-1 mb-8 lg:mb-16 lg:-ml-2" + " svelte-1kiplsl"}">${$$slots.default ? $$slots.default({}) : ``}</h1>`
	: `${depth === 2
		? `<h2 class="${"GradientHeading h" + escape(depth) + " " + escape(className) + " svelte-1kiplsl"}">${$$slots.default ? $$slots.default({}) : ``}</h2>`
		: `<h3 class="${"GradientHeading h" + escape(depth) + " " + escape(className) + " svelte-1kiplsl"}">${$$slots.default ? $$slots.default({}) : ``}</h3>`}`}`;
});

/* src\routes\index.svelte generated by Svelte v3.21.0 */

const css$1 = {
	code: "header.svelte-158vcqo{background-image:linear-gradient(225deg, #010220 0%, #000000 100%);height:80vh;overflow:hidden;position:relative}.wave1.svelte-158vcqo{position:absolute;bottom:-30%;width:100%;animation:svelte-158vcqo-wave 4s ease infinite alternate}.wave2.svelte-158vcqo{position:absolute;bottom:-20%;width:100%;animation:svelte-158vcqo-wave 2s ease infinite alternate, svelte-158vcqo-hue 5s ease infinite;animation-delay:0.2s}.intro.svelte-158vcqo{position:absolute;bottom:10%}.figure-holder.svelte-158vcqo{position:absolute;right:30%;top:30%}.square.svelte-158vcqo{height:82px;width:82px;opacity:0.4;transform:rotate(45deg);border:10px solid #ffffff;box-shadow:inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);filter:blur(8px);animation:svelte-158vcqo-rotate 8s linear infinite;margin-left:80px}.triangle.svelte-158vcqo{opacity:0.9;animation:svelte-158vcqo-hover 4s ease alternate infinite}.polygon.svelte-158vcqo{opacity:0.9;animation:svelte-158vcqo-rotateStep 5s steps(1, end) infinite;position:absolute;left:-100px;top:0;filter:blur(8px)}.waves.svelte-158vcqo{opacity:0.6}.logo_container.svelte-158vcqo{max-height:52px;display:flex}.logo_container > img{max-height:52px}@media(min-width: 768px){header.svelte-158vcqo{clip-path:polygon(0 0, 100% 0, 100% 80%, 0% 100%)}.intro.svelte-158vcqo{bottom:50%}}@keyframes svelte-158vcqo-hover{from{transform:translateY(0)}to{transform:translateY(-20%)}}@keyframes svelte-158vcqo-rotateStep{0%{transform:rotate(0)}20%{transform:rotate(72deg)}40%{transform:rotate(144deg)}60%{transform:rotate(216deg)}80%{transform:rotate(288deg)}100%{transform:rotate(360deg)}}@keyframes svelte-158vcqo-rotate{from{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes svelte-158vcqo-hue{from{-webkit-filter:hue-rotate(0deg)}to{-webkit-filter:hue-rotate(-360deg)}}@keyframes svelte-158vcqo-wave{0%{transform:translateY(0%)}100%{transform:translateY(-5%)}}@media(prefers-reduced-motion: reduce){.wave1.svelte-158vcqo,.wave2.svelte-158vcqo,.square.svelte-158vcqo{animation:none}}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import Row from \\\"../components/Row.svelte\\\";\\r\\n  import GradientHeading from \\\"../components/GradientHeading.svelte\\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  header {\\r\\n    background-image: linear-gradient(225deg, #010220 0%, #000000 100%);\\r\\n    height: 80vh;\\r\\n    overflow: hidden;\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  .wave1 {\\r\\n    position: absolute;\\r\\n    bottom: -30%;\\r\\n    width: 100%;\\r\\n    animation: wave 4s ease infinite alternate;\\r\\n  }\\r\\n\\r\\n  .wave2 {\\r\\n    position: absolute;\\r\\n    bottom: -20%;\\r\\n    width: 100%;\\r\\n    animation: wave 2s ease infinite alternate, hue 5s ease infinite;\\r\\n    animation-delay: 0.2s;\\r\\n  }\\r\\n\\r\\n  .intro {\\r\\n    position: absolute;\\r\\n    bottom: 10%;\\r\\n  }\\r\\n\\r\\n  .figure-holder {\\r\\n    position: absolute;\\r\\n    right: 30%;\\r\\n    top: 30%;\\r\\n  }\\r\\n\\r\\n  .square {\\r\\n    height: 82px;\\r\\n    width: 82px;\\r\\n    opacity: 0.4;\\r\\n    transform: rotate(45deg);\\r\\n    border: 10px solid #ffffff;\\r\\n    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);\\r\\n    filter: blur(8px);\\r\\n    animation: rotate 8s linear infinite;\\r\\n    margin-left: 80px;\\r\\n  }\\r\\n\\r\\n  .triangle {\\r\\n    opacity: 0.9;\\r\\n    animation: hover 4s ease alternate infinite;\\r\\n  }\\r\\n\\r\\n  .polygon {\\r\\n    opacity: 0.9;\\r\\n    animation: rotateStep 5s steps(1, end) infinite;\\r\\n    position: absolute;\\r\\n    left: -100px;\\r\\n    top: 0;\\r\\n    filter: blur(8px);\\r\\n  }\\r\\n\\r\\n  .waves {\\r\\n    opacity: 0.6;\\r\\n  }\\r\\n\\r\\n  .logo_container {\\r\\n    max-height: 52px;\\r\\n    display: flex;\\r\\n  }\\r\\n\\r\\n  :global(.logo_container > img) {\\r\\n    max-height: 52px;\\r\\n  }\\r\\n\\r\\n  @media (min-width: 768px) {\\r\\n    header {\\r\\n      clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);\\r\\n    }\\r\\n\\r\\n    .intro {\\r\\n      bottom: 50%;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes hover {\\r\\n    from {\\r\\n      transform: translateY(0);\\r\\n    }\\r\\n    to {\\r\\n      transform: translateY(-20%);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes rotateStep {\\r\\n    0% {\\r\\n      transform: rotate(0);\\r\\n    }\\r\\n\\r\\n    20% {\\r\\n      transform: rotate(72deg);\\r\\n    }\\r\\n\\r\\n    40% {\\r\\n      transform: rotate(144deg);\\r\\n    }\\r\\n\\r\\n    60% {\\r\\n      transform: rotate(216deg);\\r\\n    }\\r\\n\\r\\n    80% {\\r\\n      transform: rotate(288deg);\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      transform: rotate(360deg);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes rotate {\\r\\n    from {\\r\\n      transform: rotate(0);\\r\\n    }\\r\\n    to {\\r\\n      transform: rotate(1turn);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes hue {\\r\\n    from {\\r\\n      -webkit-filter: hue-rotate(0deg);\\r\\n    }\\r\\n    to {\\r\\n      -webkit-filter: hue-rotate(-360deg);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes wave {\\r\\n    0% {\\r\\n      transform: translateY(0%);\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      transform: translateY(-5%);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @media (prefers-reduced-motion: reduce) {\\r\\n    .wave1,\\r\\n    .wave2,\\r\\n    .square {\\r\\n      animation: none;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n  <title>Home | Portfolio of Mohammed Mulazada</title>\\r\\n</svelte:head>\\r\\n\\r\\n<header class=\\\"h-full\\\">\\r\\n  <a href=\\\"/\\\" class=\\\"logo_container px-10 mt-10\\\">\\r\\n    <img src=\\\"mo_logo.svg\\\" alt=\\\"logo from moniac\\\" />\\r\\n    <aside class=\\\"text-white pl-4\\\">\\r\\n      <h1>Mohammed Mulazada</h1>\\r\\n      <h2>Front-end Developer</h2>\\r\\n    </aside>\\r\\n  </a>\\r\\n  <div class=\\\"px-10 intro text-white\\\">\\r\\n    <h1 class=\\\"text-4xl leading-none mb-4\\\">\\r\\n      <span class=\\\"font-bold text-6xl\\\">Welcome</span>\\r\\n      <br />\\r\\n      to my portfolio\\r\\n    </h1>\\r\\n    <p class=\\\"max-w-lg\\\">\\r\\n      I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a\\r\\n      passion for all things web, I am looking for challenges and new things to\\r\\n      learn each and every day.\\r\\n    </p>\\r\\n  </div>\\r\\n\\r\\n  <figure class=\\\"waves\\\">\\r\\n    <img class=\\\"wave1\\\" alt=\\\"\\\" src=\\\"wave1.png\\\" />\\r\\n    <img class=\\\"wave2\\\" alt=\\\"\\\" src=\\\"wave2.svg\\\" />\\r\\n  </figure>\\r\\n\\r\\n  <div class=\\\"figure-holder\\\">\\r\\n    <figure class=\\\"square\\\" />\\r\\n    <figure class=\\\"triangle\\\">\\r\\n      <img alt=\\\"\\\" src=\\\"./triangle.svg\\\" />\\r\\n    </figure>\\r\\n    <figure class=\\\"polygon\\\">\\r\\n      <img alt=\\\"\\\" src=\\\"./polygon.svg\\\" />\\r\\n    </figure>\\r\\n  </div>\\r\\n</header>\\r\\n\\r\\n<main class=\\\"px-10 py-16\\\">\\r\\n  <GradientHeading depth={2}>\\r\\n    My\\r\\n    <br />\\r\\n    work\\r\\n  </GradientHeading>\\r\\n\\r\\n</main>\\r\\n\"],\"names\":[],\"mappings\":\"AAME,MAAM,eAAC,CAAC,AACN,gBAAgB,CAAE,gBAAgB,MAAM,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CACnE,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,AACpB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,mBAAI,CAAC,EAAE,CAAC,IAAI,CAAC,QAAQ,CAAC,SAAS,AAC5C,CAAC,AAED,MAAM,eAAC,CAAC,AACN,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,mBAAI,CAAC,EAAE,CAAC,IAAI,CAAC,QAAQ,CAAC,SAAS,CAAC,CAAC,kBAAG,CAAC,EAAE,CAAC,IAAI,CAAC,QAAQ,CAChE,eAAe,CAAE,IAAI,AACvB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,GAAG,AACb,CAAC,AAED,cAAc,eAAC,CAAC,AACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,GAAG,CACV,GAAG,CAAE,GAAG,AACV,CAAC,AAED,OAAO,eAAC,CAAC,AACP,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,MAAM,CAAE,IAAI,CAAC,KAAK,CAAC,OAAO,CAC1B,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAChD,MAAM,CAAE,KAAK,GAAG,CAAC,CACjB,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,MAAM,CAAC,QAAQ,CACpC,WAAW,CAAE,IAAI,AACnB,CAAC,AAED,SAAS,eAAC,CAAC,AACT,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,oBAAK,CAAC,EAAE,CAAC,IAAI,CAAC,SAAS,CAAC,QAAQ,AAC7C,CAAC,AAED,QAAQ,eAAC,CAAC,AACR,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,yBAAU,CAAC,EAAE,CAAC,MAAM,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,QAAQ,CAC/C,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,MAAM,CACZ,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,KAAK,GAAG,CAAC,AACnB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,OAAO,CAAE,GAAG,AACd,CAAC,AAED,eAAe,eAAC,CAAC,AACf,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,AACf,CAAC,AAEO,qBAAqB,AAAE,CAAC,AAC9B,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,MAAM,eAAC,CAAC,AACN,SAAS,CAAE,QAAQ,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,IAAI,CAAC,AACpD,CAAC,AAED,MAAM,eAAC,CAAC,AACN,MAAM,CAAE,GAAG,AACb,CAAC,AACH,CAAC,AAED,WAAW,oBAAM,CAAC,AAChB,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,AAC1B,CAAC,AACD,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,IAAI,CAAC,AAC7B,CAAC,AACH,CAAC,AAED,WAAW,yBAAW,CAAC,AACrB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,OAAO,CAAC,CAAC,AACtB,CAAC,AAED,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,KAAK,CAAC,AAC1B,CAAC,AAED,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AAED,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AAED,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AAED,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AACH,CAAC,AAED,WAAW,qBAAO,CAAC,AACjB,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,CAAC,CAAC,AACtB,CAAC,AACD,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,OAAO,KAAK,CAAC,AAC1B,CAAC,AACH,CAAC,AAED,WAAW,kBAAI,CAAC,AACd,IAAI,AAAC,CAAC,AACJ,cAAc,CAAE,WAAW,IAAI,CAAC,AAClC,CAAC,AACD,EAAE,AAAC,CAAC,AACF,cAAc,CAAE,WAAW,OAAO,CAAC,AACrC,CAAC,AACH,CAAC,AAED,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,EAAE,CAAC,AAC3B,CAAC,AAED,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,GAAG,CAAC,AAC5B,CAAC,AACH,CAAC,AAED,MAAM,AAAC,yBAAyB,MAAM,CAAC,AAAC,CAAC,AACvC,qBAAM,CACN,qBAAM,CACN,OAAO,eAAC,CAAC,AACP,SAAS,CAAE,IAAI,AACjB,CAAC,AACH,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$1);

	return `${($$result.head += `${($$result.title = `<title>Home | Portfolio of Mohammed Mulazada</title>`, "")}`, "")}

<header class="${"h-full svelte-158vcqo"}"><a href="${"/"}" class="${"logo_container px-10 mt-10 svelte-158vcqo"}"><img src="${"mo_logo.svg"}" alt="${"logo from moniac"}">
    <aside class="${"text-white pl-4"}"><h1>Mohammed Mulazada</h1>
      <h2>Front-end Developer</h2></aside></a>
  <div class="${"px-10 intro text-white svelte-158vcqo"}"><h1 class="${"text-4xl leading-none mb-4"}"><span class="${"font-bold text-6xl"}">Welcome</span>
      <br>
      to my portfolio
    </h1>
    <p class="${"max-w-lg"}">I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a
      passion for all things web, I am looking for challenges and new things to
      learn each and every day.
    </p></div>

  <figure class="${"waves svelte-158vcqo"}"><img class="${"wave1 svelte-158vcqo"}" alt="${""}" src="${"wave1.png"}">
    <img class="${"wave2 svelte-158vcqo"}" alt="${""}" src="${"wave2.svg"}"></figure>

  <div class="${"figure-holder svelte-158vcqo"}"><figure class="${"square svelte-158vcqo"}"></figure>
    <figure class="${"triangle svelte-158vcqo"}"><img alt="${""}" src="${"./triangle.svg"}"></figure>
    <figure class="${"polygon svelte-158vcqo"}"><img alt="${""}" src="${"./polygon.svg"}"></figure></div></header>

<main class="${"px-10 py-16"}">${validate_component(GradientHeading, "GradientHeading").$$render($$result, { depth: 2 }, {}, {
		default: () => `My
    <br>
    work
  `
	})}</main>`;
});

/* src\routes\blog\index.svelte generated by Svelte v3.21.0 */

const css$2 = {
	code: "ul.svelte-1emtgb4{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n  export function preload({ params, query }) {\\r\\n    return this.fetch(`blog.json`)\\r\\n      .then(r => r.json())\\r\\n      .then(posts => {\\r\\n        return { posts };\\r\\n      });\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n  export let posts;\\r\\n  import GradientHeading from \\\"../../components/GradientHeading.svelte\\\";\\r\\n\\r\\n  $: searchTerm = \\\"\\\";\\r\\n  $: filteredPost = posts.filter(post =>\\r\\n    post.title.toLowerCase().includes(searchTerm.toLowerCase())\\r\\n  );\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  ul {\\r\\n    margin: 0 0 1em 0;\\r\\n    line-height: 1.5;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n  <title>Blog</title>\\r\\n</svelte:head>\\r\\n\\r\\n<div class=\\\"container mx-auto max-w-2xl py-8 lg:py-24 px-8\\\">\\r\\n  <GradientHeading>\\r\\n    Recent\\r\\n    <br />\\r\\n    posts\\r\\n  </GradientHeading>\\r\\n\\r\\n  <input\\r\\n    class=\\\"shadow appearance-none border rounded w-full py-2 px-3 mb-8\\r\\n    text-gray-700 leading-tight focus:outline-none focus:shadow-outline\\\"\\r\\n    type=\\\"text\\\"\\r\\n    bind:value={searchTerm} />\\r\\n\\r\\n  <ul>\\r\\n    {#each filteredPost as post}\\r\\n      <!-- we're using the non-standard `rel=prefetch` attribute to\\r\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\r\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\r\\n\\t\\t\\t\\twaiting for the 'click' event -->\\r\\n      <li>\\r\\n        <a class=\\\"underline\\\" rel=\\\"prefetch\\\" href=\\\"blog/{post.slug}/\\\">\\r\\n          {post.title}\\r\\n        </a>\\r\\n        <summary class=\\\"italic\\\">\\r\\n          {post.summary}\\r\\n          <br />\\r\\n          {post.readingTime}\\r\\n        </summary>\\r\\n      </li>\\r\\n    {/each}\\r\\n  </ul>\\r\\n</div>\\r\\n\"],\"names\":[],\"mappings\":\"AAqBE,EAAE,eAAC,CAAC,AACF,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AAClB,CAAC\"}"
};

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$2);
	let searchTerm = "";
	let filteredPost = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

	return `${($$result.head += `${($$result.title = `<title>Blog</title>`, "")}`, "")}

<div class="${"container mx-auto max-w-2xl py-8 lg:py-24 px-8"}">${validate_component(GradientHeading, "GradientHeading").$$render($$result, {}, {}, {
		default: () => `Recent
    <br>
    posts
  `
	})}

  <input class="${"shadow appearance-none border rounded w-full py-2 px-3 mb-8\r\n    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}" type="${"text"}"${add_attribute("value", searchTerm, 1)}>

  <ul class="${"svelte-1emtgb4"}">${each(filteredPost, post => `
      <li><a class="${"underline"}" rel="${"prefetch"}" href="${"blog/" + escape(post.slug) + "/"}">${escape(post.title)}</a>
        <summary class="${"italic"}">${escape(post.summary)}
          <br>
          ${escape(post.readingTime)}</summary>
      </li>`)}</ul></div>`;
});

/* src\routes\blog\[slug].svelte generated by Svelte v3.21.0 */

const css$3 = {
	code: ".content.svelte-h6ymk4 h2{font-size:1.4em;font-weight:500}table, caption, tbody, tfoot, thead, tr, th, td{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}table{border-collapse:collapse;border-spacing:0}table{border-collapse:collapse;width:100%}tr{border-bottom:1px solid #ccc}th{font-weight:bold}th, td{text-align:left;padding:4px}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n  export async function preload({ params, query }) {\\r\\n    // the `slug` parameter is available because\\r\\n    // this file is called [slug].svelte\\r\\n    const res = await this.fetch(`blog/${params.slug}.json`);\\r\\n    const data = await res.json();\\r\\n\\r\\n    if (res.status === 200) {\\r\\n      return { post: data };\\r\\n    } else {\\r\\n      this.error(res.status, data.message);\\r\\n    }\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n  import GradientHeading from \\\"../../components/GradientHeading.svelte\\\";\\r\\n  export let post;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  /*\\r\\n\\t\\tBy default, CSS is locally scoped to the component,\\r\\n\\t\\tand any unused styles are dead-code-eliminated.\\r\\n\\t\\tIn this page, Svelte can't know which elements are\\r\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\r\\n\\t\\tso we have to use the :global(...) modifier to target\\r\\n\\t\\tall elements inside .content\\r\\n\\t*/\\r\\n  .content :global(h2) {\\r\\n    font-size: 1.4em;\\r\\n    font-weight: 500;\\r\\n  }\\r\\n\\r\\n  :global(table, caption, tbody, tfoot, thead, tr, th, td) {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    font-size: 100%;\\r\\n    font: inherit;\\r\\n    vertical-align: baseline;\\r\\n  }\\r\\n  :global(table) {\\r\\n    border-collapse: collapse;\\r\\n    border-spacing: 0;\\r\\n  }\\r\\n\\r\\n  :global(table) {\\r\\n    border-collapse: collapse;\\r\\n    width: 100%;\\r\\n  }\\r\\n  :global(tr) {\\r\\n    border-bottom: 1px solid #ccc;\\r\\n  }\\r\\n\\r\\n  :global(th) {\\r\\n    font-weight: bold;\\r\\n  }\\r\\n  :global(th, td) {\\r\\n    text-align: left;\\r\\n    padding: 4px;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n  <title>{post.title}</title>\\r\\n  <style>\\r\\n    code[class*=\\\"language-\\\"],\\r\\n    pre[class*=\\\"language-\\\"] {\\r\\n      color: #f8f8f2;\\r\\n      background: none;\\r\\n      text-shadow: 0 1px rgba(0, 0, 0, 0.3);\\r\\n      font-family: Consolas, Monaco, \\\"Andale Mono\\\", \\\"Ubuntu Mono\\\", monospace;\\r\\n      font-size: 1em;\\r\\n      text-align: left;\\r\\n      white-space: pre;\\r\\n      word-spacing: normal;\\r\\n      word-break: normal;\\r\\n      word-wrap: normal;\\r\\n      line-height: 1.5;\\r\\n\\r\\n      -moz-tab-size: 4;\\r\\n      -o-tab-size: 4;\\r\\n      tab-size: 4;\\r\\n\\r\\n      -webkit-hyphens: none;\\r\\n      -moz-hyphens: none;\\r\\n      -ms-hyphens: none;\\r\\n      hyphens: none;\\r\\n    }\\r\\n\\r\\n    /* Code blocks */\\r\\n    pre[class*=\\\"language-\\\"] {\\r\\n      padding: 1em;\\r\\n      margin: 0.5em 0;\\r\\n      margin-bottom: 1.55rem;\\r\\n      overflow: auto;\\r\\n      border-radius: 0.3em;\\r\\n    }\\r\\n\\r\\n    :not(pre) > code[class*=\\\"language-\\\"],\\r\\n    pre[class*=\\\"language-\\\"] {\\r\\n      background: #272822;\\r\\n    }\\r\\n\\r\\n    /* Inline code */\\r\\n    :not(pre) > code[class*=\\\"language-\\\"] {\\r\\n      padding: 0.1em;\\r\\n      border-radius: 0.3em;\\r\\n      white-space: normal;\\r\\n    }\\r\\n\\r\\n    .token.comment,\\r\\n    .token.prolog,\\r\\n    .token.doctype,\\r\\n    .token.cdata {\\r\\n      color: slategray;\\r\\n    }\\r\\n\\r\\n    .token.punctuation {\\r\\n      color: #f8f8f2;\\r\\n    }\\r\\n\\r\\n    .namespace {\\r\\n      opacity: 0.7;\\r\\n    }\\r\\n\\r\\n    .token.property,\\r\\n    .token.tag,\\r\\n    .token.constant,\\r\\n    .token.symbol,\\r\\n    .token.deleted {\\r\\n      color: #f92672;\\r\\n    }\\r\\n\\r\\n    .token.boolean,\\r\\n    .token.number {\\r\\n      color: #ae81ff;\\r\\n    }\\r\\n\\r\\n    .token.selector,\\r\\n    .token.attr-name,\\r\\n    .token.string,\\r\\n    .token.char,\\r\\n    .token.builtin,\\r\\n    .token.inserted {\\r\\n      color: #a6e22e;\\r\\n    }\\r\\n\\r\\n    .token.operator,\\r\\n    .token.entity,\\r\\n    .token.url,\\r\\n    .language-css .token.string,\\r\\n    .style .token.string,\\r\\n    .token.variable {\\r\\n      color: #f8f8f2;\\r\\n    }\\r\\n\\r\\n    .token.atrule,\\r\\n    .token.attr-value,\\r\\n    .token.function,\\r\\n    .token.class-name {\\r\\n      color: #e6db74;\\r\\n    }\\r\\n\\r\\n    .token.keyword {\\r\\n      color: #66d9ef;\\r\\n    }\\r\\n\\r\\n    .token.regex,\\r\\n    .token.important {\\r\\n      color: #fd971f;\\r\\n    }\\r\\n\\r\\n    .token.important,\\r\\n    .token.bold {\\r\\n      font-weight: bold;\\r\\n    }\\r\\n    .token.italic {\\r\\n      font-style: italic;\\r\\n    }\\r\\n\\r\\n    .token.entity {\\r\\n      cursor: help;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n      margin-bottom: 1.55rem;\\r\\n      font-size: 1.125rem;\\r\\n    }\\r\\n\\r\\n    h1,\\r\\n    h2,\\r\\n    h3,\\r\\n    h4,\\r\\n    h5,\\r\\n    h6 {\\r\\n      /* margin-top: 3.1rem;\\r\\n      margin-bottom: 1.55rem; */\\r\\n      font-weight: bold;\\r\\n    }\\r\\n\\r\\n    h1 {\\r\\n      font-size: 2.375rem;\\r\\n    }\\r\\n\\r\\n    h2 {\\r\\n      font-size: 2rem;\\r\\n    }\\r\\n\\r\\n    .content > * {\\r\\n      margin-bottom: 1.55rem;\\r\\n    }\\r\\n\\r\\n    img {\\r\\n      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\\r\\n        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\\r\\n        0 22.3px 17.9px rgba(0, 0, 0, 0.072),\\r\\n        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 0px 50px rgba(0, 0, 0, 0.12);\\r\\n      border-radius: 4px;\\r\\n      width: 100%;\\r\\n    }\\r\\n  </style>\\r\\n</svelte:head>\\r\\n\\r\\n<div class=\\\"container mx-auto max-w-2xl py-8 lg:py-24 px-8\\\">\\r\\n  <GradientHeading>{post.title}</GradientHeading>\\r\\n\\r\\n  <div class=\\\"content\\\">\\r\\n    {@html post.html}\\r\\n  </div>\\r\\n</div>\\r\\n\"],\"names\":[],\"mappings\":\"AA6BE,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACpB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AAClB,CAAC,AAEO,+CAA+C,AAAE,CAAC,AACxD,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,AAC1B,CAAC,AACO,KAAK,AAAE,CAAC,AACd,eAAe,CAAE,QAAQ,CACzB,cAAc,CAAE,CAAC,AACnB,CAAC,AAEO,KAAK,AAAE,CAAC,AACd,eAAe,CAAE,QAAQ,CACzB,KAAK,CAAE,IAAI,AACb,CAAC,AACO,EAAE,AAAE,CAAC,AACX,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,AAC/B,CAAC,AAEO,EAAE,AAAE,CAAC,AACX,WAAW,CAAE,IAAI,AACnB,CAAC,AACO,MAAM,AAAE,CAAC,AACf,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,GAAG,AACd,CAAC\"}"
};

async function preload$1({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}<style>code[class*="language-"],
    pre[class*="language-"] {
      color: #f8f8f2;
      background: none;
      text-shadow: 0 1px rgba(0, 0, 0, 0.3);
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    /* Code blocks */
    pre[class*="language-"] {
      padding: 1em;
      margin: 0.5em 0;
      margin-bottom: 1.55rem;
      overflow: auto;
      border-radius: 0.3em;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: #272822;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: slategray;
    }

    .token.punctuation {
      color: #f8f8f2;
    }

    .namespace {
      opacity: 0.7;
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #f92672;
    }

    .token.boolean,
    .token.number {
      color: #ae81ff;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #a6e22e;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
      color: #f8f8f2;
    }

    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.class-name {
      color: #e6db74;
    }

    .token.keyword {
      color: #66d9ef;
    }

    .token.regex,
    .token.important {
      color: #fd971f;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }

    p {
      margin-bottom: 1.55rem;
      font-size: 1.125rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      /* margin-top: 3.1rem;
      margin-bottom: 1.55rem; */
      font-weight: bold;
    }

    h1 {
      font-size: 2.375rem;
    }

    h2 {
      font-size: 2rem;
    }

    .content > * {
      margin-bottom: 1.55rem;
    }

    img {
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 0px 50px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      width: 100%;
    }
  </style>`, "")}

<div class="${"container mx-auto max-w-2xl py-8 lg:py-24 px-8"}">${validate_component(GradientHeading, "GradientHeading").$$render($$result, {}, {}, { default: () => `${escape(post.title)}` })}

  <div class="${"content svelte-h6ymk4"}">${post.html}</div></div>`;
});

/* src\components\Nav.svelte generated by Svelte v3.21.0 */

const css$4 = {
	code: "nav.svelte-1li8552{border-bottom:1px solid rgba(160, 177, 255, 0.486);font-weight:300;padding:0 1em;max-height:57px}ul.svelte-1li8552::after{content:\"\";display:block;clear:both}li.svelte-1li8552{display:block;float:left;height:57px}.selected.svelte-1li8552{position:relative;display:inline-block}.selected.svelte-1li8552::after{position:absolute;content:\"\";width:calc(100% - 1em);height:2px;background-color:rgb(24, 119, 243);display:block;bottom:-1px}a.svelte-1li8552{text-decoration:none;padding:1em 0.5em;display:block}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  export let segment;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  nav {\\r\\n    border-bottom: 1px solid rgba(160, 177, 255, 0.486);\\r\\n    font-weight: 300;\\r\\n    padding: 0 1em;\\r\\n    max-height: 57px;\\r\\n  }\\r\\n\\r\\n  /* clearfix */\\r\\n  ul::after {\\r\\n    content: \\\"\\\";\\r\\n    display: block;\\r\\n    clear: both;\\r\\n  }\\r\\n\\r\\n  li {\\r\\n    display: block;\\r\\n    float: left;\\r\\n    height: 57px;\\r\\n  }\\r\\n\\r\\n  .selected {\\r\\n    position: relative;\\r\\n    display: inline-block;\\r\\n  }\\r\\n\\r\\n  .selected::after {\\r\\n    position: absolute;\\r\\n    content: \\\"\\\";\\r\\n    width: calc(100% - 1em);\\r\\n    height: 2px;\\r\\n    background-color: rgb(24, 119, 243);\\r\\n    display: block;\\r\\n    bottom: -1px;\\r\\n  }\\r\\n\\r\\n  a {\\r\\n    text-decoration: none;\\r\\n    padding: 1em 0.5em;\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .toggle {\\r\\n    float: right;\\r\\n  }\\r\\n\\r\\n  .toggle button {\\r\\n    border: none;\\r\\n    background: none;\\r\\n    height: 100%;\\r\\n    font-size: 24px;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<nav>\\r\\n  <ul class=\\\"px-4\\\">\\r\\n    <li>\\r\\n      <a class:selected={segment === undefined} href=\\\".\\\">Home</a>\\r\\n    </li>\\r\\n\\r\\n    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches\\r\\n\\t\\t     the blog data when we hover over the link or tap it on a touchscreen -->\\r\\n    <li>\\r\\n      <a rel=\\\"prefetch\\\" class:selected={segment === 'blog'} href=\\\"blog\\\">Blog</a>\\r\\n    </li>\\r\\n  </ul>\\r\\n</nav>\\r\\n\"],\"names\":[],\"mappings\":\"AAKE,GAAG,eAAC,CAAC,AACH,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CACnD,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,UAAU,CAAE,IAAI,AAClB,CAAC,AAGD,iBAAE,OAAO,AAAC,CAAC,AACT,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACb,CAAC,AAED,EAAE,eAAC,CAAC,AACF,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACd,CAAC,AAED,SAAS,eAAC,CAAC,AACT,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACvB,CAAC,AAED,wBAAS,OAAO,AAAC,CAAC,AAChB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACnC,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AACd,CAAC,AAED,CAAC,eAAC,CAAC,AACD,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,AAChB,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$4);

	return `<nav class="${"svelte-1li8552"}"><ul class="${"px-4 svelte-1li8552"}"><li class="${"svelte-1li8552"}"><a href="${"."}" class="${["svelte-1li8552", segment === undefined ? "selected" : ""].join(" ").trim()}">Home</a></li>

    
    <li class="${"svelte-1li8552"}"><a rel="${"prefetch"}" href="${"blog"}" class="${["svelte-1li8552", segment === "blog" ? "selected" : ""].join(" ").trim()}">Blog</a></li></ul></nav>`;
});

/* src\routes\_layout.svelte generated by Svelte v3.21.0 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main>${$$slots.default ? $$slots.default({}) : ``}</main>`;
});

/* src\routes\_error.svelte generated by Svelte v3.21.0 */

const css$5 = {
	code: "h1.svelte-13vgy2g,p.svelte-13vgy2g{margin:0 auto}h1.svelte-13vgy2g{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-13vgy2g{margin:1em auto}@media(min-width: 480px){h1.svelte-13vgy2g{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\r\\n\\texport let status;\\r\\n\\texport let error;\\r\\n\\r\\n\\tconst dev = undefined === 'development';\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\th1, p {\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\r\\n\\th1 {\\r\\n\\t\\tfont-size: 2.8em;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tmargin: 0 0 0.5em 0;\\r\\n\\t}\\r\\n\\r\\n\\tp {\\r\\n\\t\\tmargin: 1em auto;\\r\\n\\t}\\r\\n\\r\\n\\t@media (min-width: 480px) {\\r\\n\\t\\th1 {\\r\\n\\t\\t\\tfont-size: 4em;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{status}</title>\\r\\n</svelte:head>\\r\\n\\r\\n<h1>{status}</h1>\\r\\n\\r\\n<p>{error.message}</p>\\r\\n\\r\\n{#if dev && error.stack}\\r\\n\\t<pre>{error.stack}</pre>\\r\\n{/if}\\r\\n\"],\"names\":[],\"mappings\":\"AAQC,iBAAE,CAAE,CAAC,eAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,eAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$5);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-13vgy2g"}">${escape(status)}</h1>

<p class="${"svelte-13vgy2g"}">${escape(error.message)}</p>

${ ``}`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// blog/index.json.js
			pattern: /^\/blog.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/posts/using-array_map.md
			pattern: /^\/blog\/posts\/using-array_map\/?$/,
			handlers: route_1,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?).json$/,
			handlers: route_2,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: Blog, preload: preload }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: U5Bslugu5D, preload: preload$1, params: match => ({ slug: d(match[1]) }) }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/build";

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src\node_modules\@sapper\internal\App.svelte generated by Svelte v3.21.0 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  (assets => () => assets)(JSON.parse(fs$1.readFileSync(path$1.join(build_dir, 'build.json'), 'utf-8')));

	const template =  (str => () => str)(read_template(build_dir));

	const has_service_worker = fs$1.existsSync(path$1.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  'Internal server error';

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'max-age=600');

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		const session = session_getter(req, res);

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				if (opts) {
					opts = Object.assign({}, opts);

					const include_cookies = (
						opts.credentials === 'include' ||
						opts.credentials === 'same-origin' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
					);

					if (include_cookies) {
						opts.headers = Object.assign({}, opts.headers);

						const cookies = Object.assign(
							{},
							cookie.parse(req.headers.cookie || ''),
							cookie.parse(opts.headers.cookie || '')
						);

						const set_cookie = res.getHeader('Set-Cookie');
						(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
							const match = /([^=]+)=([^;]+)/.exec(str);
							if (match) cookies[match[1]] = match[2];
						});

						const str = Object.keys(cookies)
							.map(key => `${key}=${cookies[key]}`)
							.join('; ');

						opts.headers.cookie = str;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && try_serialize(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs$1.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs$1.existsSync(path$1.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs$1.existsSync(path$1.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'max-age=31536000, immutable'
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const cache = new Map();

	const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs$1.readFileSync(path$1.join(build_dir, file)))).get(file);

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path$1.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    middleware()
  )
  .listen(PORT, err => {
    if (err) console.log("error", err);
  });
