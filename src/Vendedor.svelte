<script>
    export let vendedor = {
        nombre: "",
        numeroIdentificacion: 0,
        email: "",
        comision: 0,
        vehiculosVendidos: 0,
    };
</script>

<div class="card">
    <div class="card-body">
        <div class="row g-1">
            <div class="col-12">
                <input
                    type="text"
                    class="w-100 border-0 m-0"
                    name="nombre"
                    placeholder="Nombre"
                    bind:value={vendedor.nombre}
                />
            </div>
            <div class="col-4">
                <input
                    type="number"
                    class="w-100 border-0 m-0"
                    name="numeroIdentificacion"
                    placeholder="Nº id"
                    min="0"
                    max="99999"
                    step="1"
                    bind:value={vendedor.numeroIdentificacion}
                />
            </div>
            <div class="col-4">
                <input
                    type="number"
                    class="w-100 border-0 m-0"
                    name="comision"
                    placeholder="% venta"
                    min="0"
                    step="1"
                    max="25"
                    bind:value={vendedor.comision}
                />
            </div>
            <div class="col-4">
                <input
                    type="number"
                    class="w-100 border-0 m-0"
                    name="vehiculosVendidos"
                    placeholder="Ventas"
                    min="0"
                    step="1"
                    bind:value={vendedor.vehiculosVendidos}
                />
            </div>
            <div class="col-12">
                <input
                    type="email"
                    class="w-100 border-0 m-0"
                    name="email"
                    placeholder="Email"
                    bind:value={vendedor.email}
                />
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
