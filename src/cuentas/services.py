from cuentas.models import Cuenta
from datetime import datetime


def cuenta_create(*, nombre: str, descripcion: str, monto_actual: float, id_tipo_cuenta: int, id_usuario: int) -> Cuenta:
    cuenta = Cuenta.objects.create(
        nombre=nombre,
        descripcion=descripcion,
        monto_actual=monto_actual,
        id_tipo_id=id_tipo_cuenta,
        id_usuario_id=id_usuario
    )

    return cuenta


def cuenta_update(*, nombre: str, descripcion: str, id: int) -> Cuenta:
    cuenta = Cuenta.objects.filter(id=id).last().update(
        nombre=nombre,
        descripcion=descripcion,
    )
    cuenta = Cuenta.objects.filter(id=id).last()

    return cuenta


def cuenta_delete(*, id: int) -> Cuenta:
    cuenta = Cuenta.objects.filter(id=id).update(
        is_active=False, fecha_baja=datetime.now())
    cuenta = Cuenta.objects.filter(id=id).last()

    return cuenta
