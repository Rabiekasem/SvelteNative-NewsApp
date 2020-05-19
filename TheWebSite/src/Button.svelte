<script>
  function toggle() {
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<button on:click={toggle}>
  <slot />
</button>

<style>
  button {
    background-image: linear-gradient(120deg, #b8d3d3 0%, #cfadbd 100%);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px;
    text-transform: uppercase;
    margin-right: auto;
    outline: none;
  }

  button:hover {
    background-image: linear-gradient(45deg, #968a8a 50%, transparent 40%);
    background-position: 100%;
    background-size: 400%;
    transition: 600ms ease-in-out;
    color: grey;
  }

  :global(body.dark-mode) button {
    background-color: #a8a8a8;
    color: black;
  }
</style>


