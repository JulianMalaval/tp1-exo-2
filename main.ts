let posX = 0
let posY = 0
input.onButtonPressed(Button.B, function () {
    posX += 1
    led.unplot(posX, posY)
    posX = Math.min(4, posY)
})
basic.forever(function () {
    led.plot(posX, posY)
    basic.pause(1000)
    led.unplot(posX, posY)
    posY += 1
    if (posY == 4) {
        while (posY != 0) {
            led.plot(posX, posY)
            basic.pause(1000)
            led.unplot(0, posY)
            posY += -1
        }
    }
})
