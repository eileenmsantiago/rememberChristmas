// frame settings
const WIDTH = 1920;
const HEIGHT = 1080;
const BG_COLOR = "#FFFFFFD";
const OUTER_COLOR = dark;
const ASSETS_PATH = "assets/";
const ASSETS_LIST = [
    "background-0.png",
    "background-1.png",
    "background-2.png",
    "background-3.png",
    "background-4.png",
    "gingerbread.png",
    "snowman.png",
    "title.png",
    "backgroundMusic.mp3",
    "yay.wav",
    "click.wav",
    "cheering.mp3",
    {
        font: "Klavika",
        src: "KlavikaBold.otf"
    }
];

// Game Settings
const GAME_TITLE = "Remember Christmas";
const PRIMARY_COLOR = "#FEB85B";
const PRIMARY_COLOR_ROLL = "#FF5E00";
const SECONDARY_COLOR = "#546E7E";

//Finish Settings
const FINISH_BG = "background-0.png";

//Intro Settings
const INTRO_BG = "background-0.png";
const INTRO_INSTRUCTIONS = "The art of memorization and battle. \n A showdown twist to the Simon Says classic. \n Movements, interaction, visuals are all key factors to winning and outlasting your opponent."


// Tile Settings
const GUTTER = 20;
const TILESIZE = 80;
const LEVELS = [
    {
        index: 0,
        title: 'Simple Starter',
        cols: 2,
        rows: 2,
        bg: "background-1.png",
        flows: "background-4.png",
        tiles:[
            new Rectangle(TILESIZE, TILESIZE, "#FF5E00", dark),
            new Rectangle(TILESIZE, TILESIZE, "#FEB85B", dark),
            new Rectangle(TILESIZE, TILESIZE, "#7fa097", dark),
            new Rectangle(TILESIZE, TILESIZE, "#B97D4D", dark)
        ]
    },
    {
        index: 1,
        title: 'Third lucks a Charm',
        cols: 3,
        rows: 3,
        bg: "background-2.png",
        flows: "background-4.png",
        tiles: [
            new Rectangle(TILESIZE, TILESIZE, "#FF5E00", dark),
            new Rectangle(TILESIZE, TILESIZE, "#FEB85B", dark),
            new Rectangle(TILESIZE, TILESIZE, "#7fa097", dark),
            new Rectangle(TILESIZE, TILESIZE, "#B97D4D", dark),
            new Rectangle(TILESIZE, TILESIZE, "#EC3D3D", dark),
            new Rectangle(TILESIZE, TILESIZE, "#6C281A", dark),
            new Rectangle(TILESIZE, TILESIZE, "#FB9F00", dark),
            new Rectangle(TILESIZE, TILESIZE, "#375726", dark),
            new Rectangle(TILESIZE, TILESIZE, "#8367B9", dark)
        ]
    },
    {
        index: 2,
        title: 'Four the experts',
        cols: 4,
        rows: 4,
        bg: "background-3.png",
        flows: "background-4.png",
        tiles: [
            new Rectangle(TILESIZE, TILESIZE, "#FF5E00", dark),
            new Rectangle(TILESIZE, TILESIZE, "#FEB85B", dark),
            new Rectangle(TILESIZE, TILESIZE, "#7fa097", dark),
            new Rectangle(TILESIZE, TILESIZE, "#B97D4D", dark),
            new Rectangle(TILESIZE, TILESIZE, "#FF5E00", dark),
            new Rectangle(TILESIZE, TILESIZE, "#FEB85B", dark),
            new Rectangle(TILESIZE, TILESIZE, "#7fa097", dark),
            new Rectangle(TILESIZE, TILESIZE, "#B97D4D", dark),
            new Rectangle(TILESIZE, TILESIZE, "#EC3D3D", dark),
            new Rectangle(TILESIZE, TILESIZE, "#6C281A", dark),
            new Rectangle(TILESIZE, TILESIZE, "#FB9F00", dark),
            new Rectangle(TILESIZE, TILESIZE, "#375726", dark),
            new Rectangle(TILESIZE, TILESIZE, "#8367B9", dark)
        ]
    }
]

const PLAYERS = {
    1: {
        avatar: "gingerbread.png",
    },
    2: {
        avatar: "snowman.png"
    }
}