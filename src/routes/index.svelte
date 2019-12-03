<script>
  import Row from "../components/Row.svelte";
</script>

<style>
  h1 {
    font-size: 4.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
    white-space: normal;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 9.375em;
    }
  }

  h1 {
    background-image: linear-gradient(180deg, #5b5cf1, #21b3ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 0.9;
    margin-left: -6px;
    transition: background-image 225ms ease;
  }

  :global(.dark-mode h1) {
    background-image: linear-gradient(to bottom, #f15b74, #ff6021);
  }

  .role {
    font-size: 40px;
    margin-bottom: 16px;
  }

  .avatar {
    animation: hover 4s ease infinite alternate-reverse;
  }

  .shadow {
    animation: hoverShadow 4s ease infinite alternate-reverse;
    box-shadow: none;
  }

  @keyframes hover {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(2%);
    }
  }

  @keyframes hoverShadow {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.2);
    }
  }
</style>

<svelte:head>
  <title>Home | Portfolio of Mohammed Mulazada</title>
</svelte:head>
<div
  class="flex flex-col-reverse items-center px-6 justify-center lg:flex-row
  flex-row justify-between flex-wrap">
  <div>
    <p class="role">Front-End</p>
    <h1>
      Dev-
      <br />
      eloper
    </h1>

    <p>
      Welcome to my portfolio. My name is Mohammed, but please call me Mo.
      <br />
      This site is still a work in progress...
    </p>
  </div>

  <Row flexDirection="column">
    <picture class="avatar">
      <source srcset="g/mo-366.webp" type="image/webp" />
      <img
        alt="Image of Mohammed Mulazada"
        style={`max-width:400px`}
        src="mo.png" />
    </picture>
    <img class="shadow" alt="" src={'shadow.png'} />
  </Row>
</div>

<main>
  <section>
    <ul>
      <!-- <li>test</li> -->
    </ul>
  </section>
</main>
