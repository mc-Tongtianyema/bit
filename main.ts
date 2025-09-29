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
let reading = 0
basic.showString("Hello!")
basic.showString("This is Tools")
basic.showLeds(`
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    # . . . #
    `)
basic.showString("is Brightness")
