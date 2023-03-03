<script>
    import { Route } from "svelte-routing";
    import Coches from "./Coches.svelte";
    import Inicio from "./Inicio.svelte";
    import Vendedores from "./Vendedores.svelte";
</script>

<main>
    <Route path="/" component={Inicio} />
    <Route path="/vendedores" component={Vendedores} />
    <Route path="/coches" component={Coches} />
</main>

<style>
    main {
        min-height: 100%;
    }
</style>