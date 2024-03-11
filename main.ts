input.onButtonPressed(Button.A, function () {
    basic.showString("7")
    max = 37
    count = 7
    basic.clearScreen()
    i = 1
    while (count >= i) {
        basic.showString("" + (randint(1, max)))
        i += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("m")
    max = 31
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("6")
    max = 43
})
let i = 0
let count = 0
let max = 0
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
basic.showIcon(IconNames.Chessboard)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.clearScreen()
basic.forever(function () {
	
})
