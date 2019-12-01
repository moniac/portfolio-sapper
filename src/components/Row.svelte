<script>
  export let flexDirection = "row";
  let justifyContent = "space-around";
</script>

<style>
  .Row {
    display: flex;
    align-items: center;
  }
</style>

<div
  class="Row"
  style={`flex-direction: ${flexDirection}; justify-content: ${justifyContent}`}>
  <slot />
</div>
