<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import GradientHeading from "../../components/GradientHeading.svelte";
  export let posts;

  $: searchTerm = "";
  $: filteredPost = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container mx-auto max-w-2xl py-8 lg:py-24 px-8">
  <GradientHeading>
    Recent
    <br />
    posts
  </GradientHeading>

  <input
    class="shadow appearance-none border rounded w-full py-2 px-3 mb-8
    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    bind:value={searchTerm} />

  <ul>
    {#each filteredPost as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li>
        <a class="underline" rel="prefetch" href="blog/{post.slug}/">
          {post.title}
        </a>
        <summary class="italic">
          {post.summary}
          <br />
          {post.readingTime}
        </summary>
      </li>
    {/each}
  </ul>
</div>
