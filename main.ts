smartfeldSensoren.onTouchSensorTouched(TouchSensor.CH9, function () {
    Aus_2 = Streifen.range(16, 2)
    Aus_2.showColor(neopixel.colors(NeoPixelColors.White))
    Display.show(4)
})
smartfeldSensoren.onTouchSensorTouched(TouchSensor.CH10, function () {
	
})
smartfeldSensoren.onTouchSensorTouched(TouchSensor.CH1, function () {
    Streifen.setPixelColor(1, 0x00ff00)
    Streifen.setPixelColor(7, 0x00ff00)
    Streifen.setPixelColor(13, 0x00ff00)
    Streifen.setPixelColor(17, 0x00ff00)
    Streifen.setPixelColor(16, 0x00ff00)
    Streifen.setPixelColor(23, 0x00ff00)
    Streifen.setPixelColor(28, 0x00ff00)
    Streifen.show()
})
smartfeldSensoren.onTouchSensorTouched(TouchSensor.CH3, function () {
    Streifen.setPixelColor(2, 0xffffff)
    Streifen.setPixelColor(4, 0xffffff)
    Streifen.setPixelColor(6, 0xffffff)
    Streifen.setPixelColor(9, 0xffffff)
    Streifen.setPixelColor(10, 0xffffff)
    Streifen.setPixelColor(14, 0xffffff)
    Streifen.setPixelColor(20, 0xffffff)
    Streifen.setPixelColor(28, 0xffffff)
    Streifen.setPixelColor(24, 0xffffff)
    Streifen.setPixelColor(30, 0xffffff)
    Streifen.show()
})
smartfeldSensoren.onTouchSensorTouched(TouchSensor.CH0, function () {
    Streifen.setPixelColor(3, 0xff0000)
    Streifen.setPixelColor(8, 0xff0000)
    Streifen.setPixelColor(12, 0xff0000)
    Streifen.setPixelColor(19, 0xff0000)
    Streifen.setPixelColor(22, 0xff0000)
    Streifen.setPixelColor(26, 0xff0000)
    Streifen.setPixelColor(27, 0xff0000)
    Streifen.show()
})
smartfeldSensoren.onTouchSensorTouched(TouchSensor.CH2, function () {
    Streifen.setPixelColor(5, 0x0000ff)
    Streifen.setPixelColor(11, 0x0000ff)
    Streifen.setPixelColor(18, 0x0000ff)
    Streifen.setPixelColor(21, 0x0000ff)
    Streifen.setPixelColor(25, 0x0000ff)
    Streifen.setPixelColor(15, 0x0000ff)
    Streifen.setPixelColor(29, 0x0000ff)
    Streifen.show()
})
smartfeldSensoren.onAnyTouchSensorReleased(function () {
    Ende = Streifen.range(0, 30)
    Ende.showColor(neopixel.colors(NeoPixelColors.Black))
    Display.clear()
})
smartfeldSensoren.onTouchSensorTouched(TouchSensor.CH8, function () {
    Aus_1 = Streifen.range(1, 2)
    Aus_1.showColor(neopixel.colors(NeoPixelColors.White))
    Display.show(4)
})
let Poti = 0
let Aus_1: neopixel.Strip = null
let Ende: neopixel.Strip = null
let Aus_2: neopixel.Strip = null
let Display: smartfeldAktoren.FourDigitDisplay = null
let Streifen: neopixel.Strip = null
Streifen = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
Streifen.setBrightness(50)
Display = smartfeldAktoren.erstelle_Display(DigitalPin.P1, DigitalPin.P15)
Display.set(7)
basic.forever(function () {
    Poti = smartfeldSensoren.potentiometerGibProzent(AnalogPin.P2, AnalogPin.P16)
    if (Poti >= 10 && Poti <= 20) {
        Streifen.setPixelColor(3, 0x0000ff)
        Streifen.setPixelColor(15, 0x0000ff)
        Streifen.setPixelColor(6, 0x0000ff)
        Streifen.setPixelColor(8, 0x0000ff)
        Streifen.setPixelColor(29, 0x0000ff)
        Streifen.setPixelColor(23, 0x0000ff)
    } else if (Poti >= 20 && Poti <= 40) {
        Streifen.setPixelColor(13, 0x0000ff)
        Streifen.setPixelColor(21, 0x0000ff)
        Streifen.setPixelColor(18, 0x0000ff)
        Streifen.setPixelColor(4, 0x0000ff)
        Streifen.setPixelColor(20, 0x0000ff)
        Streifen.setPixelColor(26, 0x0000ff)
    } else if (Poti >= 40 && Poti <= 60) {
        Streifen.setPixelColor(1, 0x0000ff)
        Streifen.setPixelColor(17, 0x0000ff)
        Streifen.setPixelColor(10, 0x0000ff)
        Streifen.setPixelColor(24, 0x0000ff)
        Streifen.setPixelColor(11, 0x0000ff)
        Streifen.setPixelColor(7, 0x0000ff)
    } else if (Poti >= 60 && Poti <= 80) {
        Streifen.setPixelColor(2, 0x0000ff)
        Streifen.setPixelColor(28, 0x0000ff)
        Streifen.setPixelColor(16, 0x0000ff)
        Streifen.setPixelColor(19, 0x0000ff)
        Streifen.setPixelColor(5, 0x0000ff)
        Streifen.setPixelColor(25, 0x0000ff)
    } else if (Poti >= 80 && Poti <= 100) {
        Streifen.setPixelColor(9, 0x0000ff)
        Streifen.setPixelColor(12, 0x0000ff)
        Streifen.setPixelColor(22, 0x0000ff)
        Streifen.setPixelColor(27, 0x0000ff)
        Streifen.setPixelColor(30, 0x0000ff)
        Streifen.setPixelColor(0, 0x0000ff)
    }
    Streifen.show()
    Streifen.clear()
})
