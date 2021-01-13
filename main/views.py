from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    # return HttpResponse("Hello, world. You're at the index.")
    # return render(request, 'main/index.html', {})
    return render(request, 'main/base.html', { 'page_name': "main/pages/index_main.html" })

def page1(request):
    # return HttpResponse("Hello, world. You're at the index.")
    return render(request, 'main/base.html', { 'page_name': "main/pages/page1_main.html" })

def index_main(request):
    # return HttpResponse("Hello, world. You're at the index.")
    return render(request, 'main/pages/index_main.html', {})

def page1_main(request):
    # return HttpResponse("Hello, world. You're at the index.")
    return render(request, 'main/pages/page1_main.html', {})
