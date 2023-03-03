<script>
    import { Link } from "svelte-routing";
</script>

<footer class="py-4 py-md-2 mt-4 bg-dark">
    <div class="container">
        <div class="row">
            <div
                class="col-md-5 d-flex justify-content-center justify-content-md-start align-items-center"
            >
                <p class="text-light m-0">&copy; Manuel Cuevas Martín</p>
            </div>
            <Link
                class="col-md-2 d-flex align-items-center justify-content-center my-4"
                to="/"
            >
                <img
                    class="logo"
                    src="img/logo-concesionario.svg"
                    alt="Logo del concesionario"
                    width="100"
                    height="34"
                />
            </Link>
            <div
                class="col-md-5 d-flex justify-content-center justify-content-md-end align-items-center"
            >
                <p class="text-light m-0">
                    Código fuente en
                    <a
                        href="https://github.com/mancuemar15/concesionariofrontend"
                        target="_blank"
                        rel="noreferrer">GitHub</a
                    >
                </p>
            </div>
        </div>
    </div>
</footer>

<style>
    a {
        color: #7db2ff;
    }

    a:hover {
        color: #3b8aff;
    }
</style>
