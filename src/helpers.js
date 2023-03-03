const ok = (mensaje = "Operación realizada con éxito") => {
    const toastAlerta = document.querySelector("#toast-alerta");
    const toast = new bootstrap.Toast(toastAlerta);

    toastAlerta.classList.remove("text-bg-danger");
    toastAlerta.classList.add("text-bg-success");
    document.querySelector("#toast-alerta .toast-body").innerHTML = mensaje;

    toast.show();
};

const ko = (mensaje = "No se ha podido realizar la operación.") => {
    const toastAlerta = document.querySelector("#toast-alerta");
    const toast = new bootstrap.Toast(toastAlerta);

    toastAlerta.classList.remove("text-bg-success");
    toastAlerta.classList.add("text-bg-danger");
    document.querySelector("#toast-alerta .toast-body").innerHTML = mensaje;

    toast.show();
};

function mostrarSpinner() {
    document.querySelector("#spinner-loading").classList.remove("d-none");
    document.querySelector("#capa-opaca").classList.remove("d-none");
}

function ocultarSpinner() {
    document.querySelector("#capa-opaca").classList.add("d-none");
    document.querySelector("#spinner-loading").classList.add("d-none");
}

export { ok, ko, mostrarSpinner, ocultarSpinner };