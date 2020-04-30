<script context="module">
  export async function preload({ params, query }) {
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
</script>

<script>
  import GradientHeading from "../../components/GradientHeading.svelte";
  export let post;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  :global(table, caption, tbody, tfoot, thead, tr, th, td) {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  :global(table) {
    border-collapse: collapse;
    border-spacing: 0;
  }

  :global(table) {
    border-collapse: collapse;
    width: 100%;
  }
  :global(tr) {
    border-bottom: 1px solid #ccc;
  }

  :global(th) {
    font-weight: bold;
  }
  :global(th, td) {
    text-align: left;
    padding: 4px;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <style>
    code[class*="language-"],
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
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 3.1rem;
      margin-bottom: 1.55rem;
      font-weight: bold;
    }

    h1 {
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
  </style>
</svelte:head>

<div class="container mx-auto max-w-2xl py-8 lg:py-8 px-4 ">
  <GradientHeading>{post.title}</GradientHeading>

  <div class="content">
    {@html post.html}
  </div>
</div>
