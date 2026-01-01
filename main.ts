bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(data)
})
let data = ""
bluetooth.startUartService()
basic.forever(function () {
    if (data == "w") {
        cuteBot.motors(50, 50)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (data == "s") {
        cuteBot.motors(-50, -50)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (data == "a") {
        cuteBot.motors(38, 50)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (data == "d") {
        cuteBot.motors(50, 38)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        cuteBot.stopcar()
    }
})
