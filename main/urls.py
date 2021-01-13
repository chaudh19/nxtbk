from django.urls import path

from . import views

urlpatterns = [
    path('index', views.index, name='index'),
    path('page1', views.page1, name='page1'),
    path('pages/index_main', views.index_main, name='index_main'),
    path('pages/page1_main', views.page1_main, name='page1_main'),
]