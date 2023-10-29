from django.db import models

# Create your models here.


class TipoCuenta(models.Model):
    nombre = models.CharField(
        max_length=150, verbose_name='nombre', db_column='nombre')
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'TiposCuenta'
        verbose_name = 'Tipos Cuentas'


class Cuenta(models.Model):
    nombre = models.CharField(
        max_length=150, verbose_name='nombre', db_column='nombre')
    descripcion = models.CharField(
        max_length=150, verbose_name='descripcion', db_column='descripcion')
    is_active = models.BooleanField(default=True)
    fecha_alta = models.DateTimeField(
        auto_now_add=True, db_column='fecha_alta', verbose_name='fecha_alta')
    fecha_baja = models.DateTimeField(
        db_column='fecha_baja', verbose_name='fecha_baja', null=True, default=None)
    fecha_ultima_modif = models.DateTimeField(
        db_column='fecha_ultima_modif', verbose_name='fecha_ultima_modif', null=True, default=None)
    monto_actual = models.DecimalField(
        max_digits=30, decimal_places=2, db_column='monto_actual', default=0.00)
    id_usuario = models.ForeignKey(
        'auth.User', models.DO_NOTHING, db_column='id_usuario', related_name='movimientos_usuario')
    id_tipo = models.ForeignKey(
        'cuentas.TipoCuenta', models.DO_NOTHING, db_column='id_tipo', related_name='movimientos_cuenta')

    class Meta:
        db_table = 'Cuentas'
        verbose_name = 'Cuentas'
