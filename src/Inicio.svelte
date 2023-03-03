<script>
    import { Link } from "svelte-routing";
</script>

<section class="cabecera py-4 mb-4">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="text-center display-2 fw-bolder text-light my-4">
                    Concesionario
                </h1>
                <p class="lead text-center text-light">
                    Backend en <a
                        class="link-light"
                        target="_blank"
                        rel="noreferrer"
                        href="https://concesionariobackend.herokuapp.com/"
                        >Heroku</a
                    >
                </p>
            </div>
        </div>
    </div>
    <div class="patron" />
</section>
<section class="container mb-5">
    <div class="row">
        <div class="col-12 col-lg-4">
            <Link
                class="link card mb-4 mb-lg-0 text-decoration-none text-dark"
                to="/"
            >
                <div
                    class="card-header d-flex align-items-center flex-column pt-4"
                >
                    <div class="icono display-6 rounded-circle mb-3">
                        <i class="bi bi-house-door-fill" />
                    </div>
                    <p class="h4">Inicio</p>
                    <p class="text-center">
                        Página de inicio de la aplicación web
                    </p>
                </div>
                <div class="card-body ps-2 pe-4">
                    <ul class="list-group">
                        <li class="list-group-item d-flex border-0 px-0">
                            <div class="icono bg-transparent">
                                <i class="bi bi-check-circle text-success" />
                            </div>
                            <div class="d-flex align-items-center">
                                Información sobre las secciones del
                                concesionario
                            </div>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
        <div class="col-12 col-lg-4">
            <Link
                class="link card mb-4 mb-lg-0 text-decoration-none text-dark"
                to="/vendedores"
            >
                <div
                    class="card-header d-flex align-items-center flex-column pt-4"
                >
                    <div class="icono display-6 rounded-circle mb-3">
                        <i class="bi bi-person-fill" />
                    </div>
                    <p class="h4">Vendedores</p>
                    <p class="text-center">
                        Sección de vendedores del concesionario
                    </p>
                </div>
                <div class="card-body ps-2 pe-4">
                    <ul class="list-group">
                        <li class="list-group-item d-flex border-0 px-0">
                            <div class="icono bg-transparent">
                                <i class="bi bi-check-circle text-success" />
                            </div>
                            <div class="d-flex align-items-center">
                                CRUD de vendedores en una base de datos
                            </div>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
        <div class="col-12 col-lg-4">
            <Link
                class="link card mb-4 mb-lg-0 text-decoration-none text-dark"
                to="/coches"
            >
                <div
                    class="card-header d-flex align-items-center flex-column pt-4"
                >
                    <div class="icono display-6 rounded-circle mb-3">
                        <i class="bi bi-car-front-fill" />
                    </div>
                    <p class="h4">Coches</p>
                    <p class="text-center">
                        Sección de coches del concesionario
                    </p>
                </div>
                <div class="card-body ps-2 pe-4">
                    <ul class="list-group">
                        <li class="list-group-item d-flex border-0 px-0">
                            <div class="icono bg-transparent">
                                <i class="bi bi-check-circle text-success" />
                            </div>
                            <div class="d-flex align-items-center">
                                CRUD de coches en una base de datos
                            </div>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
    </div>
</section>

<style>
    .patron {
        background-size: 1450px 485px;
        padding-bottom: 300px;
    }

    .bi-check-circle {
        font-size: 1.1rem;
    }

    :global(.link.card) {
        transition: 0.5s;
        text-decoration: none;
    }

    :global(.link.card:hover) {
        transform: scale(1.03);
    }

    .icono {
        background-color: #cddaf0;
        color: #0648b3;
        width: 60px;
        line-height: 60px;
        text-align: center;
    }

    .link-light:hover {
        color: #b3c7eb !important;
    }
</style>
