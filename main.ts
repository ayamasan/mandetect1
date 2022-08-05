radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.forever(function () {
    radio.sendNumber(pins.digitalReadPin(DigitalPin.P0))
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.StickFigure)
    }
    basic.clearScreen()
    basic.pause(1000)
})
