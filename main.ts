let start = 0
let elapsed = 0
let reading = 0
let steps = 0
let degrees = 0
let X = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    start = 0
    while ((0 as any) < (1 as any)) {
        basic.pause(1000)
        elapsed += 1
    }
})
// 计时器输出，能多次按，想要多次按的话就多按几次，都是取的第一次开始到现在的秒数
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(elapsed)
})
// 这里是测试亮度的
input.onButtonPressed(Button.A, function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    225
    )
    basic.showNumber(reading)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
// 不是指南针还能是啥？
input.onButtonPressed(Button.AB, function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    }
})
// 这里的东西尽量不要乱动，我怕你不会
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
input.onPinPressed(TouchPin.P1, function () {
    steps = 0
})
// 字面意思，是个小白都知道吧
input.onSound(DetectedSound.Loud, function () {
    basic.clearScreen()
})
