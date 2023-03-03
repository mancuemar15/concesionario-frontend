<script>
    export let busqueda = "";
</script>

<div class="row">
    <div
        class="col-md-6 d-flex justify-content-center align-items-center d-lg-block"
    >
        <div>
            <label for="buscador" class="d-inline text-light">Buscar:</label>
            <input
                type="search"
                class="form-control d-inline"
                id="buscador"
                bind:value={busqueda}
            />
        </div>
    </div>
</div>

<style>
    input {
        width: 225px;
    }

    @media (min-width: 1200px) {
        input {
            width: 275px;
        }
    }
</style>
