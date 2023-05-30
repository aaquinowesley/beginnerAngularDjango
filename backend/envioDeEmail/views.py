from django.http import HttpResponse
from django.shortcuts import render
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.http import JsonResponse
# Create your views here.

# def enviar_email(request, texto='Cadastro'):
    # send_mail('Assunto', 'Esse é o email', 'wesleyaquinobsb@gmail.com', ['yogap81666@goflipa.com'])
    # html_content = render_to_string('emails/teste.html' , {'nome': 'Wesley'})
    # text_content = strip_tags(html_content)
    # email = EmailMultiAlternatives(texto, text_content, settings.EMAIL_HOST_USER, ['yogap81666@goflipa.com'] )
    # email.attach_alternative(html_content, 'text/html')
    # email.send()
    # return HttpResponse('Olá')

def enviar_email(request):
    texto = request.GET.get('texto', 'Cadastro')
    
    html_content = render_to_string('emails/teste.html', {'nome': 'Wesley'})
    text_content = strip_tags(html_content)
    email = EmailMultiAlternatives(texto, text_content, settings.EMAIL_HOST_USER, ['yogap81666@goflipa.com'])
    email.attach_alternative(html_content, 'text/html')
    email.send()
    
    data = {'message': 'Email enviado com sucesso!'}
    return JsonResponse(data)
