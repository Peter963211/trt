input.onButtonPressed(Button.A, function () {
    radio.sendValue("C", input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("abc", 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("L", input.lightLevel())
})
radio.onReceivedValue(function (name, value) {
    if (name == "abc") {
        basic.showIcon(IconNames.Heart)
    }
})
basic.showNumber(0)
radio.setGroup(130)
radio.setTransmitPower(7)
