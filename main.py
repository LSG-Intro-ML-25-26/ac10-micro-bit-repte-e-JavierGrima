from microbit import *


def grafico_temperatura():
    temperatura_maxima = 50
    
    while True:
        temperatura_actual = input.temperature()
        led.plot_bar_graph(temperatura_actual, temperatura_maxima)

def moure_gota():
    x = 2
    y = 2

    while True:
        led.plot(x, y)
        basic.pause(50)
        led.unplot(x, y)

        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)

        if accX <= 150 and x > 0:
            x = x - 1
        if accX > 150 and x < 4:
            x = x + 1

        if accY <= 150 and y > 0:
            y = y - 1
        if accY > 150 and y < 4:
            y = y + 1

input.on_button_pressed(Button.A, grafico_temperatura)
input.on_button_pressed(Button.B, moure_gota)