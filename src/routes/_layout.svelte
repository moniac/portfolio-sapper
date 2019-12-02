<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>

</style>

<Nav {segment} />

<main class="container max-w-6xl mx-auto pt-16">
  <slot />
</main>
