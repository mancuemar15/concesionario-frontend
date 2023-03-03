<script>
    import { Link } from "svelte-routing";

    const opcionesNav = [
        { pagina: "Inicio", ruta: "/" },
        { pagina: "Vendedores", ruta: "/vendedores" },
        { pagina: "Coches", ruta: "/coches" },
    ];

    function getProps({ isCurrent }) {
        return { className: isCurrent ? "active" : null };
    }
</script>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
        <Link class="navbar-brand mx-sm-4" to="/">
            <img
                class="logo"
                src="img/logo-concesionario.svg"
                alt="Logo del concesionario"
                width="100"
                height="34"
            />
        </Link>
        <button
            class="navbar-toggler m-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#contenidoNavbar"
            aria-controls="contenidoNavbar"
            aria-expanded="false"
            aria-label="Menú de navegación"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="contenidoNavbar">
            <ul
                class="navbar-nav me-auto mb-2 mb-sm-0 px-3 px-sm-0 py-2 py-sm-0"
            >
                {#each opcionesNav as opcion}
                    <li>
                        <Link
                            class="nav-link text-white text-blue position-relative"
                            to={opcion.ruta}
                            {getProps}>{opcion.pagina}</Link
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>

<style>
    nav {
        background-color: #0648b3 !important;
    }

    :global(.nav-link) {
        width: fit-content;
    }

    :global(#contenidoNavbar li > a::before) {
        position: absolute;
        content: "";
        width: calc(100% - 1px);
        height: 1px;
        background-color: #fff;
        bottom: -1px;
        left: 0;

        transform: scale(0, 1);
        transform-origin: right center;

        transition: transform 0.5s ease;
    }

    :global(#contenidoNavbar li > a:hover::before),
    :global(#contenidoNavbar li > a[className="active"]::before) {
        transform: scale(1, 1);
        transform-origin: left center;
    }

    :global(#contenidoNavbar li > a[className="active"]) {
        font-weight: 600;
    }

    @media (min-width: 576px) {
        .navbar-nav {
            gap: 15px;
        }
    }

    @media (max-width: 575.99px) {
        #contenidoNavbar > ul {
            background-color: #fff !important;
            border-radius: 10px !important;
            margin-top: 15px !important;
        }

        :global(.text-blue) {
            color: #0648b3 !important;
            font-weight: 500;
        }

        :global(.text-blue:hover),
        :global(.text-blue[className="active"]) {
            font-weight: 700 !important;
        }

        :global(#contenidoNavbar li > a::before) {
            background-color: #0648b3;
            width: 100%;
            bottom: 4px;
        }
    }
</style>
