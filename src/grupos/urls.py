from django.urls import path

from .views import *

urlpatterns = [
    path('motivo/', GetMotivoGrupoAPI.as_view()),
    path('crear-grupo/', PostGruposAPI.as_view())
]
