<script>
  export let depth = 1;
  export let className = "";
</script>

<style>
  .GradientHeading {
    background-image: linear-gradient(180deg, #5b5cf1, #21b3ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 0.9;
    transition: background-image 225ms ease;
    animation: hue 10s infinite alternate;
    text-transform: uppercase;
    font-weight: 700;
    white-space: normal;
    font-size: 4.8em;
  }

  :global(.dark-mode .GradientHeading) {
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
  }

  @keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-20deg);
    }
  }

  @media (min-width: 768px) {
    .h1 {
      font-size: 9.375em;
    }
  }
</style>

{#if depth === 1}
  <h1 class="GradientHeading h{depth} {className} -ml-1 mb-4 lg:mb-16 lg:-ml-2">
    <slot />
  </h1>
{:else}
  {#if depth === 2}
    <h2 class="GradientHeading h{depth} {className}">
      <slot />
    </h2>
  {:else}
    <h3 class="GradientHeading h{depth} {className}">
      <slot />
    </h3>
  {/if}
{/if}
