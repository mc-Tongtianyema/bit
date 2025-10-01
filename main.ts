let reading = 0
input.onButtonPressed(Button.A, function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    225
    )
    basic.showNumber(reading)
})
input.onButtonPressed(Button.B, function () {
	
})
