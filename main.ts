basic.forever(function () {
    if (input.temperature() > 35) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
