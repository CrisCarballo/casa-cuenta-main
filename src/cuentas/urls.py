from django.urls import path

from .views import *

urlpatterns = [
    path('cuenta/list/', GetCuentasActivasByUser.as_view()),
    path('tipo/list/', GetTipoCuentas.as_view()),

    path('crear-cuenta/', CreateCuenta.as_view()),
    path('modificar-cuenta/<int:id>/', UpdateCuenta.as_view()),
    path('eliminar-cuenta/<int:id>/', DeleteCuenta.as_view()),
    path('get-cuenta/<int:id>/', GetCuentabyID.as_view()),

]
