<script>
  import Row from "../components/Row.svelte";
  import GradientHeading from "../components/GradientHeading.svelte";
</script>

<style>
  header {
    background-image: linear-gradient(225deg, #010220 0%, #000000 100%);
    height: 80vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .wave1 {
    position: absolute;
    bottom: -30%;
    width: 100%;
    animation: wave 4s ease infinite alternate;
    z-index: 1;
  }

  .wave2 {
    position: absolute;
    bottom: -20%;
    width: 100%;
    animation: wave 2s ease infinite alternate, hue 5s ease infinite;
    animation-delay: 0.2s;
    z-index: 1;
  }

  .wave1,
  .wave2 {
    min-width: 1200px;
  }

  .intro {
    /* position: absolute;
    bottom: 10%; */
    z-index: 99;
  }

  .figure-holder {
    /* position: absolute;
    right: 30%;
    top: 30%; */
    display: flex;
    margin-top: 4rem;
    z-index: 10;
  }

  .figure-holder > * {
    margin-left: 2rem;
  }

  .square {
    height: 82px;
    width: 82px;
    opacity: 0.4;
    transform: rotate(45deg);
    border: 10px solid #ffffff;
    filter: blur(12px);
    animation: rotate 8s linear infinite;
    margin-left: 80px;
    z-index: 1;
  }

  .triangle {
    opacity: 0.9;
    animation: hover 4s ease alternate infinite;
    margin-top: 4rem;
  }

  .polygon {
    opacity: 0.9;
    animation: rotate 5s linear infinite reverse;
    filter: blur(8px);
    width: 6rem;
    transform-origin: 50% 80%;
    height: 4rem;
  }

  .waves {
    opacity: 0.6;
    z-index: 0;
  }

  .header-holder {
    display: flex;
    flex-direction: column-reverse;
  }

  .logo_container {
    max-height: 52px;
    display: flex;
  }

  :global(.logo_container > img) {
    max-height: 52px;
  }

  @media (min-width: 768px) {
    header {
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
      min-height: 800px;
    }

    .header-holder {
      flex-direction: row;
    }

    .figure-holder {
      margin-top: -15rem;
      margin-right: 10rem;
      margin-left: auto;
    }

    .wave1 {
      bottom: -20%;
    }

    .wave2 {
      bottom: -15%;
    }
  }

  @media (min-width: 1000px) {
    .wave1 {
      bottom: -18%;
    }

    .wave2 {
      bottom: -10%;
    }
  }

  @media (min-width: 2000px) {
    .wave1 {
      bottom: -45%;
    }

    .wave2 {
      bottom: -35%;
    }
  }

  @keyframes hover {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20%);
    }
  }

  @keyframes rotateStep {
    0% {
      transform: rotate(0);
    }

    20% {
      transform: rotate(72deg);
    }

    40% {
      transform: rotate(144deg);
    }

    60% {
      transform: rotate(216deg);
    }

    80% {
      transform: rotate(288deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }

  @keyframes wave {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(-5%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .wave1,
    .wave2,
    .square {
      animation: none;
    }
  }
</style>

<svelte:head>
  <title>Home | Portfolio of Mohammed Mulazada</title>
</svelte:head>

<header class="h-full">
  <a href="/" class="logo_container px-10 mt-10">
    <img src="mo_logo.svg" alt="logo from moniac" />
    <aside class="text-white pl-4">
      <h1>Mohammed Mulazada</h1>
      <h2>Front-end Developer</h2>
    </aside>
  </a>

  <div class="header-holder">
    <div class="px-10 intro text-white">
      <h1 class="text-4xl leading-none mb-4">
        <span class="font-bold text-6xl">Welcome</span>
        <br />
        to my portfolio
      </h1>
      <p class="max-w-lg">
        I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a
        passion for all things web, I am looking for challenges and new things
        to learn each and every day.
      </p>
    </div>

    <div class="figure-holder">
      <figure class="square" />
      <figure class="triangle">
        <img alt="" src="./triangle.svg" />
      </figure>
      <figure class="polygon">
        <img alt="" src="./polygon.svg" />
      </figure>
    </div>
  </div>
  <figure class="waves">
    <img class="wave1" alt="" src="wave1.svg" />
    <img class="wave2" alt="" src="wave2.svg" />
  </figure>
</header>

<main class="px-10 py-16">
  <GradientHeading depth={2}>
    My
    <br />
    work
  </GradientHeading>

</main>
