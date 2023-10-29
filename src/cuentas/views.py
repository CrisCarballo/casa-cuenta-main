from django.shortcuts import render
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response

from cuentas.services import cuenta_create, cuenta_update, cuenta_delete
from cuentas.selectors import cuentas_activas_by_user, tipos_cuentas_get, cuenta_by_id
from cuentas.serializers import CuentasSerializer, TipoCuentaSerializer

# Create your views here.


class GetTipoCuentas(APIView):
    def get(self, request):
        tipos_cuenta = tipos_cuentas_get()
        status = 200 if tipos_cuenta else 204
        return Response(TipoCuentaSerializer(tipos_cuenta, many=True).data,
                        status=status)


class GetCuentasActivasByUser(APIView):

    def get(self, request):
        cuentas = cuentas_activas_by_user(id_usuario=1)
        status = 200 if cuentas else 204
        return Response(CuentasSerializer(cuentas, many=True).data,
                        status=status)


class CreateCuenta(APIView):

    class InputSerializer(serializers.Serializer):
        nombre = serializers.CharField(
            max_length=150, allow_null=True, allow_blank=True)
        descripcion = serializers.CharField(
            max_length=150, allow_null=True, allow_blank=True)
        monto_actual = serializers.DecimalField(
            max_digits=30, decimal_places=2)
        id_tipo_cuenta = serializers.IntegerField()

    def post(self, request):
        try:
            id_usuario = 1
            serializer = self.InputSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            cuenta = cuenta_create(
                **serializer.validated_data,
                id_usuario=id_usuario
            )
            return Response(CuentasSerializer(cuenta).data,
                            status=200)
        except Exception as err:
            return Response(str(err) + " Error de Registro de Cuenta",
                            status=500)


class UpdateCuenta(APIView):

    class InputSerializer(serializers.Serializer):
        nombre = serializers.CharField(
            max_length=150, allow_null=True, allow_blank=True)
        descripcion = serializers.CharField(
            max_length=150, allow_null=True, allow_blank=True)


    def put(self, request, id):
        # try:
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        cuenta = cuenta_update(
            **serializer.validated_data,
            id_usuario=id
        )
        return Response(CuentasSerializer(cuenta).data,
                        status=200)
        # except Exception as err:
        #     return Response(str(err) + " - Error de Modificación de Cuenta",
        #                     status=500)


class DeleteCuenta(APIView):
    def delete(self, request, id):
        try:
            cuenta = cuenta_delete(
                id=id
            )
            return Response(CuentasSerializer(cuenta).data,
                            status=201)
        except Exception as err:
            return Response(str(err) + " - Error de Eliminación la Cuenta",
                            status=500)


class GetCuentabyID(APIView):

    def get(self, request, id):
        cuenta = cuenta_by_id(id_usuario=1, id_cuenta=id)
        status = 200 if cuenta else 204
        return Response(CuentasSerializer(cuenta).data,
                        status=status)
