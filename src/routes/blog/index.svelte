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
  export let posts;
  import GradientHeading from "../../components/GradientHeading.svelte";
  console.log(posts);
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

<div class="container py-24 lg:py-32 px-4 mx-auto max-w-6xl">
  <GradientHeading>
    Recent
    <br />
    posts
  </GradientHeading>

  <ul>
    {#each posts as post}
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
