const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validarVendedor(vendedor) {
    if (vendedor.numeroIdentificacion < 0 || vendedor.numeroIdentificacion > 99999) {
        return false;
    } else if (vendedor.comision < 0 || vendedor.comision > 25) {
        return false;
    } else if (vendedor.vehiculosVendidos < 0) {
        return false;
    } else if (!emailRegex.test(vendedor.email)) {
        return false;
    }
    return true;
}

function validarCoche(coche) {
    if (coche.numeroIdentificacion < 0) {
        return false;
    } else if (coche.precio < 0 || coche.precio > 9999999.99) {
        return false;
    }
    return true;
}

export { validarVendedor, validarCoche }