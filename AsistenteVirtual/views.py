from django.shortcuts import render
from django.http import JsonResponse
from .ChatBot.chatbot import chat
import os

def index (request):
    return render(request, 'index.html')
    

def chatBot(request):
    mensaje = request.GET.get('message', '')

    if mensaje:
        respuesta = chat(mensaje)
    else:
        respuesta = "No se recibió ningún mensaje"

    resultado = {"mensaje": respuesta}
    
    return JsonResponse(resultado, json_dumps_params={'ensure_ascii': False})