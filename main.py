reading = 0
X = 0
y = 0

def on_button_pressed_a():
    global reading
    reading = input.light_level()
    led.plot_bar_graph(reading, 225)
    basic.show_number(reading)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global X, y
    X = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if abs(X) > 32:
        basic.show_icon(IconNames.SAD)
    elif abs(y) > 32:
        basic.show_icon(IconNames.ANGRY)
    else:
        basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.B, on_button_pressed_b)
