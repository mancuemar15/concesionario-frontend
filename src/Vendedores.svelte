<script>
    import { onMount, getContext } from "svelte";
    import Boton from "./Boton.svelte";
    import Buscar from "./Buscar.svelte";
    import Vendedor from "./Vendedor.svelte";
    import { jsonData } from "./store";
    import { mostrarSpinner, ocultarSpinner } from "./helpers";

    const URL = getContext("URL");

    let vendedor = {};
    let vendedoresFiltrados = [];
    let busqueda = "";

    const getVendedores = async () => {
        mostrarSpinner();
        const response = await fetch(URL.vendedores);
        $jsonData = await response.json();
        ocultarSpinner();
    };

    onMount(getVendedores);

    $: vendedoresFiltrados = $jsonData.filter((vendedor) =>
        RegExp(busqueda, "i").test(vendedor.nombre)
    );
</script>

<section class="cabecera">
    <div class="container-fluid px-3 px-md-4">
        <h1 class="titulo text-center text-light display-5 fw-bold py-4">
            Vendedores
        </h1>
        <Buscar bind:busqueda />
    </div>
    <div class="patron" />
</section>
<section class="container-fluid px-3 px-md-4">
    <div class="row my-3">
        <div class="col-md-6 d-flex justify-content-center d-lg-block">
            <Vendedor {vendedor}>
                <Boton
                    tipo="insertar"
                    documento={vendedor}
                    coleccion="vendedores"
                />
            </Vendedor>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-auto g-3">
        {#each vendedoresFiltrados as vendedor}
            <div class="col d-flex justify-content-center d-lg-block">
                <Vendedor {vendedor}>
                    <Boton
                        tipo="modificar"
                        documento={vendedor}
                        coleccion="vendedores"
                    />
                    <Boton
                        tipo="eliminar"
                        documento={vendedor}
                        coleccion="vendedores"
                    />
                </Vendedor>
            </div>
        {/each}
    </div>
</section>
