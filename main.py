from microbit import *

def grafico_temperatura():
    temperatura_maxima = 50

    while True:
        temperatura_actual = input.temperature()

        led.plot_bar_graph(temperatura_actual, temperatura_maxima)
