def doLoto():
    global i
    i = 1
    while count >= i:
        basic.show_arrow(ArrowNames.EAST)
        basic.clear_screen()
        basic.pause(500)
        basic.show_string("" + str((randint(1, max2))))
        basic.clear_screen()
        i += 1
    doReset()
def doInit():
    music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
        music.PlaybackMode.IN_BACKGROUND)
    basic.show_icon(IconNames.SQUARE)
    basic.show_icon(IconNames.DIAMOND)
    basic.show_icon(IconNames.SMALL_SQUARE)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    basic.clear_screen()
def doReset():
    music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
        music.PlaybackMode.IN_BACKGROUND)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    basic.show_icon(IconNames.SMALL_SQUARE)
    basic.show_icon(IconNames.DIAMOND)
    basic.show_icon(IconNames.SQUARE)
    basic.clear_screen()

def on_button_pressed_a():
    global max2, count
    basic.show_string("7")
    max2 = 37
    count = 7
    basic.clear_screen()
    doLoto()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global max2, count
    basic.show_string("m")
    max2 = 31
    count = 4
    basic.clear_screen()
    doLoto()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global max2, count
    basic.show_string("6")
    max2 = 43
    count = 6
    basic.clear_screen()
    doLoto()
input.on_button_pressed(Button.B, on_button_pressed_b)

max2 = 0
count = 0
i = 0
doInit()