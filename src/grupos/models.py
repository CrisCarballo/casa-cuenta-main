from django.db import models


class MotivoGrupo(models.Model):
    nombre = models.CharField(
        max_length=150, verbose_name='nombre', db_column='nombre')
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'MotivosGrupo'
        verbose_name = 'Motivos Grupo'


class Grupo(models.Model):
    descripcion = models.CharField(
        max_length=150, verbose_name='descripcion', db_column='descripcion')
    is_active = models.BooleanField(default=True)
    fecha_inicio = models.DateTimeField(
        auto_now_add=True, db_column='fecha_inicio', verbose_name='fecha_inicio')
    fecha_fin = models.DateTimeField(
        db_column='fecha_baja', verbose_name='fecha_baja', null=True, default=None)

    class Meta:
        db_table = 'Grupos'
        verbose_name = 'Grupos'


class GrupoxUsuario(models.Model):
    is_active = models.BooleanField(default=True)
    admin = models.BooleanField(default=True)
    fecha_inicio = models.DateTimeField(
        auto_now_add=True, db_column='fecha_inicio', verbose_name='fecha_inicio')
    fecha_fin = models.DateTimeField(
        db_column='fecha_baja', verbose_name='fecha_baja', null=True, default=None)
    id_grupo = models.ForeignKey(
        'grupos.Grupo', models.DO_NOTHING, db_column='id_grupo', related_name='grupos_usuario')
    id_usuario = models.ForeignKey(
        'auth.User', models.DO_NOTHING, db_column='id_usuario', related_name='usuario_grupos')
    monto = models.DecimalField(
        max_digits=30, decimal_places=2, db_column='monto', default=0.00)

    class Meta:
        db_table = 'GrupoxUsuario'
        verbose_name = 'GrupoxUsuario'
