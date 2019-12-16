function makeIntro(stage, frame) {
    var intro = new Container(WIDTH, HEIGHT).addTo();

    const bg = frame.asset(INTRO_BG).sca(1.05).addTo(intro);
    const title = frame.asset("title.png").sca(1.05).addTo(intro).pos({x: 750, y: 100});

    title.wiggle("x", title.x, 10, 30, 300, 1500);

    new Label({
        text: GAME_TITLE,
        size: 32,
        font: "Klavika",
        color: "#fff",
        backgroundColor: PRIMARY_COLOR,
        paddingHorizontal: 70,
        paddingVertical: 30,
        corner: 10
    })
    .pos(50, 50,)
    .alp(0)
    .animate({
        props: {
            alpha: 1
        },
        wait: 200
    })
    .addTo(intro);

    new Label({
        text: INTRO_INSTRUCTIONS,
        lineHeight: 70,
        align: "center",
        size: 32,
        color: white,
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: 40,
        paddingVertical: 20,
        corner: 20,
        fontOptions: "bold"
    }).centerReg(intro).pos(null, 400, CENTER);

    var label = new Label({
        text: "START",
        size: 48,
        color: white,
        fontOptions: "bold"
    });

    var button = new Button({
        label: label,
        width: 400,
        height: 100,
        backgroundColor: PRIMARY_COLOR,
        borderWidth: 0,
        rollBackgroundColor: PRIMARY_COLOR_ROLL,
        corner: 20
    })
    .centerReg(intro)
    .pos(null, 850, CENTER)
    .tap(function() {
        asset("click.wav").play();
        intro
            .cache()
            .animate({
                props: {
                    y: -HEIGHT
                },
                time: 800,
                call: makeLevel(0)
            });
        // asset("backgroundMusic.mp3").play();
        bg.removeFrom();
        button.removeFrom();
        intro.removeFrom();
        stage.update()
    });
}