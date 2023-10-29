from django.shortcuts import render
from rest_framework.views import APIView
from movimientos.selectors import movimientos_by_cuenta
from rest_framework.response import Response
from movimientos.serializers import MovimientoCuentaSerializer
# Create your views here.

class GetMovimientoCuenta(APIView):

    def get(self, request, id):
        try: 
            movimientos = movimientos_by_cuenta(id_cuenta=id)
            status = 200 if movimientos else 204
            return Response(MovimientoCuentaSerializer(movimientos, many=True).data,
                            status=status)
        except Exception as err:
            return Response(str(err) + " Get movimientos",
                            status=500)
