<script>
    export let coche = {
        marca: "",
        modelo: "",
        numeroIdentificacion: 0,
        combustible: "",
        precio: 0,
    };
</script>

<div class="card">
    <div class="card-body">
        <div class="row g-1">
            <div class="col-6">
                <input
                    type="text"
                    class="w-100 border-0 m-0"
                    name="marca"
                    placeholder="Marca"
                    bind:value={coche.marca}
                />
            </div>
            <div class="col-6">
                <input
                    type="text"
                    class="w-100 border-0 m-0"
                    name="modelo"
                    placeholder="Modelo"
                    bind:value={coche.modelo}
                />
            </div>
            <div class="col-6">
                <input
                    type="number"
                    class="w-100 border-0 m-0"
                    name="numeroIdentificacion"
                    placeholder="Nº id"
                    min="0"
                    step="1"
                    bind:value={coche.numeroIdentificacion}
                />
            </div>
            <div class="col-6">
                <input
                    type="text"
                    class="w-100 border-0 m-0"
                    name="combustible"
                    placeholder="Combustible"
                    bind:value={coche.combustible}
                />
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <input
                            type="number"
                            class="w-50 border-0 m-0 text-center pe-0"
                            name="precio"
                            placeholder="Precio"
                            min="0"
                            max="9999999.99"
                            step="0.01"
                            bind:value={coche.precio}
                        />
                        <span class="d-flex align-items-center p-0">€</span>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-evenly pt-2">
                <slot />
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        width: 18rem;
        border-radius: 0px;
        box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
            0 3px 14px 2px rgba(0, 0, 0, 0.12),
            0 5px 5px -3px rgba(0, 0, 0, 0.2);
        transition: 0.4s;
    }

    .card:hover {
        box-shadow: 0 13px 22px 2px rgba(0, 0, 0, 0.2),
            0 8px 19px 2px rgba(0, 0, 0, 0.18),
            0 10px 10px -3px rgba(0, 0, 0, 0.24);
    }

    input {
        background-color: transparent;
        border-radius: 0;
        border-bottom: 1px solid black !important;
        padding: 6px 6px;
    }

    input:focus {
        outline: none;
        background-color: rgba(6, 72, 179, 0.1);
    }

    input:invalid {
        background-color: lightpink !important;
    }

    @media (min-width: 1200px) {
        .card {
            width: 21rem;
        }

        input {
            padding: 6px 12px;
        }
    }
</style>
