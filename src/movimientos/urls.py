from django.urls import path

from .views import *

urlpatterns = [
    path("movimientos_cuenta/<int:id>/", GetMovimientoCuenta.as_view() )
]
