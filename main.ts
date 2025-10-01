let reading = 0
let X = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    225
    )
    basic.showNumber(reading)
})
input.onButtonPressed(Button.B, function () {
    X = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(X) > 32) {
        basic.showIcon(IconNames.Sad)
    } else if (Math.abs(y) > 32) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
