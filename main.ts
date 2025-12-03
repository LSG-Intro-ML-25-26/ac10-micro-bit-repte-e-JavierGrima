input.onButtonPressed(Button.A, function grafico_temperatura() {
    let temperatura_actual: number;
    let temperatura_maxima = 50
    while (true) {
        temperatura_actual = input.temperature()
        led.plotBarGraph(temperatura_actual, temperatura_maxima)
    }
})
input.onButtonPressed(Button.B, function moure_gota() {
    let accX: number;
    let accY: number;
    let x = 2
    let y = 2
    while (true) {
        led.plot(x, y)
        basic.pause(50)
        led.unplot(x, y)
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)
        if (accX <= 150 && x > 0) {
            x = x - 1
        }
        
        if (accX > 150 && x < 4) {
            x = x + 1
        }
        
        if (accY <= 150 && y > 0) {
            y = y - 1
        }
        
        if (accY > 150 && y < 4) {
            y = y + 1
        }
        
    }
})
