# Generated by Django 4.2.6 on 2023-10-22 03:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cuentas', '0005_alter_cuenta_id_alter_cuenta_id_usuario_and_more'),
        ('grupos', '0004_alter_grupo_managers_remove_grupo_group_ptr_grupo_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='MovimientoCuenta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_alta', models.DateTimeField(auto_now_add=True, db_column='fecha_alta', verbose_name='fecha_alta')),
                ('fecha_baja', models.DateTimeField(db_column='fecha_baja', default=None, null=True, verbose_name='fecha_baja')),
                ('monto_movimiento', models.DecimalField(db_column='monto_movimiento', decimal_places=2, default=0.0, max_digits=30)),
                ('monto_cuenta', models.DecimalField(db_column='monto_cuenta', decimal_places=2, default=0.0, max_digits=30)),
                ('entrada', models.BooleanField(default=True)),
                ('id_cuenta', models.ForeignKey(db_column='id_cuenta', on_delete=django.db.models.deletion.DO_NOTHING, related_name='movimientos_cuenta', to='cuentas.cuenta')),
                ('id_grupo_usuario', models.ForeignKey(db_column='id_grupo_usuario', on_delete=django.db.models.deletion.DO_NOTHING, related_name='movimientos_grupo', to='grupos.grupoxusuario')),
            ],
            options={
                'verbose_name': 'Movimientos Cuenta',
                'db_table': 'MovimientosCuenta',
            },
        ),
    ]
