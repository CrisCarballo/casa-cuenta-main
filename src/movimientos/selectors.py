from movimientos.models import MovimientoCuenta
from typing import Iterable

def movimientos_by_cuenta(id_cuenta: int) -> Iterable[MovimientoCuenta]:
    mov_cuentas = MovimientoCuenta.objects.filter(
        id_cuenta=id_cuenta)
    return mov_cuentas
