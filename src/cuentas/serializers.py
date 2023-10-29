from rest_framework import serializers
from cuentas.models import Cuenta, TipoCuenta


class CuentasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        depth = 1
        fields = '__all__'

class TipoCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCuenta
        fields = ['id', 'nombre']
    