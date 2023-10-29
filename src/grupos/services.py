from grupos.models import Grupo

def grupo_create(*, nombre: str, descripcion: str, monto_actual: float, id_tipo_cuenta: int, id_usuario: int) -> Grupo:
    grupo = Grupo.objects.create(
        nombre=nombre,
        descripcion=descripcion
    )

    return grupo