from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers

from grupos.selectors import get_motivo_grupo
from grupos.services import grupo_create
from grupos.serializers import MotivoGrupoSerializer, GrupoSerializer

# Create your views here.


class GetMotivoGrupoAPI(APIView):

    def get(self, request):

        motivos = get_motivo_grupo()

        status = 200 if motivos.count() else 204
        return Response(MotivoGrupoSerializer(motivos, many=True).data,
                        status=status)

class PostGruposAPI(APIView):
    class InputSerializer(serializers.Serializer):
        nombre = serializers.CharField(
            max_length=150, allow_null=True, allow_blank=True)
        descripcion = serializers.CharField(
            max_length=150, allow_null=True, allow_blank=True)


    def post(self, request):
        try:
            id_usuario = 1
            serializer = self.InputSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            grupo = grupo_create(
                **serializer.validated_data,
                id_usuario=id_usuario
            )
            return Response(GrupoSerializer(grupo).data,
                            status=200)
        
        except Exception as err:
            return Response(str(err) + " Error de Registro de Grupo",
                            status=500)
