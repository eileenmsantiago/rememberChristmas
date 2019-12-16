
    function makeLevel(levelNumber) {

        const level = LEVELS[levelNumber];

        const background = frame.asset(level.bg).center().ord(-1);

        var flowImages = frame.asset(level.flows).center().ord(-1).pos(null, 350);

        var scroller = new Scroller(flowImages);

        const playerLabel = new Label({
            text: "Player 1's turn",
            size: 48,
            color: white,
            fontOptions: "bold"
        }).addTo();

        const statusLabel = new Label({
            text: "Setting...",
            size: 48,
            color: white,
            fontOptions: "bold"
        }).pos({y: 100}).addTo();

        const tiles = new Tile({
            obj: series(...level.tiles),
            cols: level.cols,
            rows: level.rows,
            spacingH: GUTTER,
            spacingV: GUTTER
        }).center()
    
        let currentTurn = 1;
        const moves = [];
        let setting = true;
        let trackIndex = 0;

        function switchTurn() {
            if(currentTurn === 1) {
                currentTurn = 2;
            } else {
                currentTurn = 1;
            }
            playerLabel.text = `Player ${currentTurn} turn`;
        }
    
        
        tiles.loop(tile => {
    
            tile.on("click", () => {
                    
                //player sets a new move
                if(setting) {

                    moves.push(tile.id);
                    setting = false;
                    switchTurn();

                //player tries to match a move
                } else {
                    asset("click.wav").play();

                    //playe successfully matches a move
                    if(tile.id === moves[trackIndex]) {
    
                        let nextIndex = trackIndex + 1;
    
                        if(nextIndex === moves.length) {
                            trackIndex = 0;
                            setting = true;
                        }else {
                            trackIndex++;   
                        }
                    } else {
                        background.removeFrom();
                        playerLabel.removeFrom();
                        statusLabel.removeFrom();
                        tiles.removeFrom();
                        makeFinish(frame, currentTurn === 1 ? 2 : 1);
                    }
                }
    
                if(setting) {
                    statusLabel.text = "Setting..."
                } else {
                    statusLabel.text = "Matching..."
                }
                
                tile.alp(0).animate({
                    wait:200,
                    props:{alpha:1},
                    time:500
                });
            })
    
        });
    }


    