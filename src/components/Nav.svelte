<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(160, 177, 255, 0.486);
    font-weight: 300;
    padding: 0 1em;
    max-height: 57px;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    height: 57px;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(24, 119, 243);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .toggle {
    float: right;
  }

  .toggle button {
    border: none;
    background: none;
    height: 100%;
    font-size: 24px;
    cursor: pointer;
  }
</style>

<nav>
  <ul class="max-w-6xl mx-auto">
    <li>
      <a class:selected={segment === undefined} href=".">Home</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">Blog</a>
    </li>
  </ul>
</nav>
