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
  }

  .wave1 {
    position: absolute;
    bottom: -30%;
    width: 100%;
    animation: wave 4s ease infinite alternate;
  }

  .wave2 {
    position: absolute;
    bottom: -20%;
    width: 100%;
    animation: wave 2s ease infinite alternate, hue 5s ease infinite;
    animation-delay: 0.2s;
  }

  .intro {
    position: absolute;
    bottom: 10%;
  }

  .figure-holder {
    position: absolute;
    right: 30%;
    top: 30%;
  }

  .square {
    height: 82px;
    width: 82px;
    opacity: 0.4;
    transform: rotate(45deg);
    border: 10px solid #ffffff;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    filter: blur(8px);
    animation: rotate 8s linear infinite;
  }

  .waves {
    opacity: 0.6;
  }

  @media (min-width: 768px) {
    header {
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
    }

    .intro {
      bottom: 50%;
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
  <div class="px-10 intro text-white">
    <h1 class="text-4xl leading-none mb-4">
      <span class="font-bold text-6xl">Welcome</span>
      <br />
      to my portfolio
    </h1>
    <p class="max-w-lg">
      I am Mohammed Mulazada, a Front-End Developer based in Amsterdam. With a
      passion for all things web, I am looking for challenges and new things to
      learn each and every day.
    </p>
  </div>

  <figure class="waves">
    <img class="wave1" alt="" src="wave1.svg" />
    <img class="wave2" alt="" src="wave2.svg" />
  </figure>

  <div class="figure-holder">
    <figure class="square" />
  </div>
</header>

<main class="px-10 py-16">
  <GradientHeading depth={2}>
    My
    <br />
    work
  </GradientHeading>
</main>
