let reading = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    225
    )
    basic.showNumber(reading)
})
