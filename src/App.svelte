<script>
	import { setContext } from "svelte";
	import { Router } from "svelte-routing";
	import Contenido from "./Contenido.svelte";
	import Footer from "./Footer.svelte";
	import Nav from "./Nav.svelte";

	const URL = {
		vendedores: "https://concesionariobackend.herokuapp.com/api/vendedores",
		coches: "https://concesionariobackend.herokuapp.com/api/coches",
	};

	setContext("URL", URL);
</script>

<Router>
	<Nav />
	<Contenido />
	<Footer />
</Router>

<div id="capa-opaca" class="d-none" />
<div
	id="spinner-loading"
	class="position-absolute top-50 start-50 translate-middle d-none"
>
	<div class="spinner-border" role="status" />
</div>
<div
	class="toast-container position-fixed top-0 start-50 translate-middle-x p-3"
>
	<div
		id="toast-alerta"
		class="toast align-items-center text-bg-success border-0"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
	>
		<div class="d-flex">
			<div class="toast-body" />
			<button
				type="button"
				class="btn-close btn-close-white me-2 m-auto"
				data-bs-dismiss="toast"
				aria-label="Close"
			/>
		</div>
	</div>
</div>

<style>
	.spinner-border {
		border-width: 0.5rem;
		z-index: 1000;
		width: 8rem;
		height: 8rem;
	}

	#capa-opaca {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 500;
	}
</style>
