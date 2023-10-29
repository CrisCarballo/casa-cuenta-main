from django.db import models

# Create your models here.
class MovimientoCuenta(models.Model):
    fecha_alta = models.DateTimeField(
        auto_now_add=True, db_column='fecha_alta', verbose_name='fecha_alta')
    fecha_baja = models.DateTimeField(
        db_column='fecha_baja', verbose_name='fecha_baja', null=True, default=None)
    monto_movimiento = models.DecimalField(
        max_digits=30, decimal_places=2, db_column='monto_movimiento', default=0.00)
    monto_cuenta = models.DecimalField(
        max_digits=30, decimal_places=2, db_column='monto_cuenta', default=0.00)
    id_grupo_usuario = models.ForeignKey(
        'grupos.GrupoxUsuario', models.DO_NOTHING, db_column='id_grupo_usuario', related_name='movimientos_grupo')
    entrada = models.BooleanField(default=True)
    id_cuenta = models.ForeignKey(
        'cuentas.Cuenta', models.DO_NOTHING, db_column='id_cuenta', related_name='movimientos_cuenta')

    class Meta:
        db_table = 'MovimientosCuenta'
        verbose_name = 'Movimientos Cuenta'
