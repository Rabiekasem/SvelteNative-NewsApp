<script>
function toggle() {
	window.document.body.classList.toggle('dark-mode')
}
</script>
<button on:click={toggle}>
	<slot/>
</button>
<style>
	button {
		background-color: #f76027;
		color: white;
		border: none;
		border-radius: 4px;
		padding: 10;
		text-transform: uppercase;
        margin-right: auto;
		
	}
	:global(body.dark-mode) button {
		background-color: #0084f6;
		color: white;
	}
</style>