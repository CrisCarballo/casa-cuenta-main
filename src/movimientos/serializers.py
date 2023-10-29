from rest_framework import serializers
from movimientos.models import MovimientoCuenta

class MovimientoCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovimientoCuenta
        depth = 1
        fields = '__all__'
