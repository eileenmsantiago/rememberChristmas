const GAME_OVER = false;

const frame = new zim.Frame('fit', WIDTH, HEIGHT, BG_COLOR, OUTER_COLOR, ASSETS_LIST, ASSETS_PATH);

frame.on("ready", function() {

    var stage = frame.stage;

    Ticker.add(function() {
    
        if(GAME_OVER) {
            makeFinish(frame, currentTurn === 1 ? 2 : 1);
            GAME_OVER = false;
        }

    });

    makeIntro(stage, frame);
    // makeLevel(0);

    stage.update();
});
