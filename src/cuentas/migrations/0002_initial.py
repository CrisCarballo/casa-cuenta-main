# Generated by Django 4.1.8 on 2023-10-08 02:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('grupos', '0002_alter_grupo_managers_remove_grupo_clave_unica_and_more'),
        ('cuentas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movimientocuenta',
            name='id_grupo_usuario',
            field=models.ForeignKey(db_column='id_grupo_usuario', on_delete=django.db.models.deletion.DO_NOTHING, related_name='movimientos_grupo', to='grupos.grupoxusuario'),
        ),
    ]
