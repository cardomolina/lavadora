let Ciclo = 0
basic.forever(function () {
    Ciclo = 3
    if (Ciclo == 0) {
        basic.showLeds(`
            # # # # #
            # . # . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(100)
    } else {
        if (Ciclo == 1) {
            basic.showLeds(`
                . # # # .
                . . # . .
                # # # # .
                . . . # .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . # # # .
                . . # . .
                # # # # .
                . . . # .
                . . # # #
                `)
            basic.pause(100)
        } else {
            if (Ciclo == 2) {
                basic.showLeds(`
                    # # . # #
                    # # # # #
                    . # # # .
                    . # # # .
                    . # # # .
                    `)
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    # # . # #
                    # # # # #
                    . # # # .
                    . # # # .
                    `)
                basic.pause(100)
            } else {
                if (Ciclo == 3) {
                    basic.showLeds(`
                        . . . # #
                        . . . # #
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    basic.pause(100)
                    basic.showLeds(`
                        . . . # #
                        . . # # #
                        . # . . .
                        # . # . .
                        . # . . .
                        `)
                    basic.pause(100)
                } else {
                    if (Ciclo == 4) {
                        basic.showLeds(`
                            # # # # #
                            # . . . #
                            # . # . #
                            # . # . #
                            # # # . #
                            `)
                        basic.pause(100)
                        basic.showLeds(`
                            # # # # #
                            # . . . .
                            # . # # #
                            # . . . #
                            # # # # #
                            `)
                        basic.pause(100)
                        basic.showLeds(`
                            # . # # #
                            # . # . #
                            # . # . #
                            # . . . #
                            # # # # #
                            `)
                        basic.pause(100)
                        basic.showLeds(`
                            # # # # #
                            # . . . #
                            # # # . #
                            . . . . #
                            # # # # #
                            `)
                        basic.pause(100)
                    } else {
                        if (Ciclo == 5) {
                            basic.showLeds(`
                                . . # . .
                                . . # # .
                                # # # # #
                                . . # # .
                                . . # . .
                                `)
                            basic.pause(100)
                            basic.showLeds(`
                                . . . . .
                                . . . # .
                                # # # # #
                                . . . # .
                                . . . . .
                                `)
                            basic.pause(100)
                        } else {
                            basic.showLeds(`
                                # . # . #
                                . # # # .
                                # # . # #
                                . # # # .
                                # . # . #
                                `)
                            basic.pause(100)
                            basic.showLeds(`
                                . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
                                . . . . .
                                `)
                            basic.pause(100)
                        }
                    }
                }
            }
        }
    }
})
