input.onButtonPressed(Button.A, function () {
    basic.showString("" + (program[code]))
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    basic.clearScreen()
    if (code < program.length - 1) {
        code += 1
    } else {
        game.gameOver()
    }
})
let code = 0
let program: string[] = []
program = [
"cow",
"bird",
"pig",
"dog",
"chicken"
]
code = 0
basic.showLeds(`
    . # # # .
    . . . # .
    . . # # .
    . . # . .
    . . # . .
    `)
basic.pause(1000)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
basic.showNumber(0)
basic.pause(100)
basic.showString("" + (program[code]))
basic.forever(function () {
	
})
