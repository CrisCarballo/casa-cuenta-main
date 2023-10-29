
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('grupos/',  include('grupos.urls')),
    path('usuarios/',  include('usuarios.urls')), 
    path('cuentas/',  include('cuentas.urls')), 
    path('movimientos/',  include('movimientos.urls')), 
]