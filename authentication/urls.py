from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithNumeroView, CustomUserCreate

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name='create_user'),
    path('token/obtain/', ObtainTokenPairWithNumeroView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]