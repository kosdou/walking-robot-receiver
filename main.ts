radio.onReceivedNumber(function (receivedNumber) {
    v = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
})
let v = 0
radio.setGroup(1)
let i = 0
let j = 100
basic.showString("Hello!")
basic.forever(function () {
    basic.clearScreen()
    if (v == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (v == 2) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (v == 3) {
        for (let index = 0; index < 100; index++) {
            wuKong.setMotorSpeed(wuKong.MotorList.M1, i + 1)
            basic.showNumber(i)
        }
    } else if (v == 4) {
        for (let index = 0; index < 100; index++) {
            wuKong.setMotorSpeed(wuKong.MotorList.M1, j - 1)
            basic.showNumber(j)
        }
    } else {
        wuKong.stopMotor(wuKong.MotorList.M1)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
