function doLoto () {
    i = 1
    while (count >= i) {
        basic.showArrow(ArrowNames.East)
        basic.clearScreen()
        basic.pause(500)
        basic.showString("" + (randint(1, max)))
        basic.clearScreen()
        i += 1
    }
    doReset()
}
function doInit () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
function doReset () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    basic.showString("7")
    max = 37
    count = 7
    basic.clearScreen()
    doLoto()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("m")
    max = 31
    count = 4
    basic.clearScreen()
    doLoto()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("6")
    max = 43
    count = 6
    basic.clearScreen()
    doLoto()
})
let max = 0
let count = 0
let i = 0
doInit()
