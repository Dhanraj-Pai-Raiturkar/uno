import { Uno } from "./Uno.js";

window.addEventListener('load', init);
function init(e) {
    const playerCount_btn = document.getElementById("playerCount_btn");
    const player1 = document.getElementById("p1");
    const player2 = document.getElementById("p2");
    const gamemenu = document.getElementById("gamemenu");
    const gameplay = document.getElementById("gameplay");

    player1.addEventListener('keyup', validateGo)
    player2.addEventListener('keyup', validateGo)
    playerCount_btn.addEventListener('click', (event) => startGame([player1.value, player2.value]));
    
    const disableButton = (btn_id, value) => document.getElementById(btn_id).disabled = value;

    validateGo();
    gameplay.style.display = "none"
    document.getElementById("start_form").addEventListener('submit', (event) => event.preventDefault());

    function validateGo(event) {
        if(!player1.value || !player2.value) disableButton("playerCount_btn", true)
        else disableButton("playerCount_btn", false);
    }

    function startGame(players) {
        gameplay.style.display = "flex"
        gamemenu.style.display = 'none'
        console.log("players",players)
        const game = new Uno(players);
        game.start();
    }
}