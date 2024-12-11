const facturar = (monto, medioPago) => {
    medioPago = medioPago.toUpperCase()
    if (monto >= 200 && monto <= 400) {
        switch (medioPago) {
            case "C":
                monto = monto * 0.9
                break;
            case "E":
                monto = monto * 0.7
                break;
            case "D":
                monto = monto * 0.8;
        }
    } else if (monto > 400) {
        monto = monto * 0.6
    }
    return monto;
}