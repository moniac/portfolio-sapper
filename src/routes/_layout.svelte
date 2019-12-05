<script type="modules">
  import Nav from "../components/Nav.svelte";
  import { onMount } from "svelte";

  export let segment;

  function activateDarkMode() {
    document.body.className = "dark-mode";
    localStorage.setItem("colorMode", "dark");
  }

  function activateLightMode() {
    document.body.className = "";
    localStorage.setItem("colorMode", "light");
  }

  function setColorScheme() {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    const isLightMode = window.matchMedia("(prefers-color-scheme: light)")
      .matches;
    const isNotSpecified = window.matchMedia(
      "(prefers-color-scheme: no-preference)"
    ).matches;
    const localValue = localStorage.getItem("colorMode");

    if (localValue === "dark") {
      activateDarkMode();
      return;
    }

    if (localValue === "light") {
      activateLightMode();
      return;
    }

    const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addListener(e => e.matches && activateDarkMode());
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addListener(e => e.matches && activateLightMode());

    if (isDarkMode) activateDarkMode();
    if (isLightMode) activateLightMode();
    if (isNotSpecified || hasNoSupport) {
      console.log(
        "You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time."
      );
      now = new Date();
      hour = now.getHours();
      if (hour < 4 || hour >= 16) {
        activateDarkMode();
      }
    }
  }

  onMount(() => {
    setColorScheme();
  });
</script>

<style>

</style>

<Nav {segment} />

<main class="container max-w-6xl mx-auto">
  <slot />
</main>
