from typing import Iterable
from cuentas.models import Cuenta, TipoCuenta


def cuentas_activas_by_user(id_usuario: int) -> Iterable[Cuenta]:
    cuentas = Cuenta.objects.filter(
        id_usuario=id_usuario, is_active=True).order_by('monto_actual')
    return cuentas


def cuenta_by_id(id_usuario: int, id_cuenta: int) -> Iterable[Cuenta]:
    cuentas = Cuenta.objects.filter(
        id_usuario=id_usuario, id=id_cuenta).order_by('monto_actual')
    return cuentas.last()


def tipos_cuentas_get() -> Iterable[TipoCuenta]:
    tipos = TipoCuenta.objects.filter(is_active=True)
    return tipos
