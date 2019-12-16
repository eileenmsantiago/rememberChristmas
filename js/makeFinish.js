function makeFinish(frame, playerWinner) {
    asset("cheering.mp3").play();
    var finish = new Container(frame.width, frame.height).addTo();
    
    const bg = frame.asset(FINISH_BG).sca(1.05).addTo(finish);
    // new Sprite({
    //         image: asset(FINISH_BG),
    //         cols: 3
    //     })
    //     .centerReg()
    //     .addTo(finish)
    //     .run({
    //         loop: true,
    //         time: 1300
    //     })

    new Label({
        text: `Congratulations! Player ${playerWinner} has won the game! \n Try other levels`,
        size: 60,
        font: "Klavika",
        color: "#fff",
        backgroundColor: PRIMARY_COLOR,
        paddingHorizontal: 70,
        paddingVertical: 30,
        corner: 10
    })
    .centerReg()
    .pos(null, 300)
    .ske(10)
    .alp(0.4)
    .animate({
        props: {
            alpha: 0.9
        },
        wait: 200
    })
    .addTo(finish);

    const buttons = LEVELS.map(level => {
        return new Button({
            label: level.title,
            width: 400,
            height: 100,
            backgroundColor: PRIMARY_COLOR,
            borderWidth: 0,
            rollBackgroundColor: PRIMARY_COLOR_ROLL,
            corner: 20
        })
    })

    const levels = new Tile({
        obj: series(
            ...buttons
        ),
        cols: 3,
        rows: 1,
        spacingH: GUTTER,
        spacingV: GUTTER
    }).center();

    levels.loop((level, index) => {
        level.on("click", () => {
            bg.removeFrom();
            levels.removeFrom();
            finish.removeFrom();
            makeLevel(index);
        })
    })

}