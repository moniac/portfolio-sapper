<script>
  import Row from "../components/Row.svelte";
</script>

<style>
  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
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
  }

  .role {
    font-size: 40px;
    margin-bottom: 16px;
  }
</style>

<svelte:head>
  <title>Home | Portfolio of Mohammed Mulazada</title>
</svelte:head>
<Row>
  <div>
    <p class="role">Front-End</p>
    <h1>
      Develo-
      <br />
      per
    </h1>

    <p>
      Welcome to my portfolio. My name is Mohammed, but please call me Mo. On
      this site, you can see some of my work.
    </p>
  </div>

  <Row flexDirection="column">

    <picture>
      <source srcset="g/mo-366.webp" type="image/webp" />
      <img
        alt="Image of Mohammed Mulazada"
        style={`max-width:400px`}
        src="mo.png" />
    </picture>
    <img alt="" src={'shadow.png'} />
  </Row>
</Row>

<main>
  <section>
    <ul>
      <li>test</li>
    </ul>
  </section>
</main>
