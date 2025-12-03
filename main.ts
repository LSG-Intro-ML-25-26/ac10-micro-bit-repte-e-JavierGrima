function grafico_temperatura() {
    let temperatura_actual: number;
    let temperatura_maxima = 50
    while (true) {
        temperatura_actual = input.temperature()
        led.plotBarGraph(temperatura_actual, temperatura_maxima)
    }
}

