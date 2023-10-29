from grupos.models import *
from typing import Iterable

def get_motivo_grupo() -> Iterable[MotivoGrupo]:
    return MotivoGrupo.objects.filter(is_active=True)
