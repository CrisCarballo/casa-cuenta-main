from rest_framework import serializers
from grupos.models import *


class MotivoGrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotivoGrupo
        fields = '__all__'

class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo
        fields = '__all__'
    