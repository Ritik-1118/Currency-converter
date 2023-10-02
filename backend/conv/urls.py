from .views import CurrencyList, ConvertCurrency
from django.urls import path

urlpatterns = [
    path('convert/<str:from_currency>/<str:to_currency>/<str:amount>/',ConvertCurrency.as_view(),name="convert_currency"),
    path("currencies/", CurrencyList.as_view(), name="Currency_list"),
]