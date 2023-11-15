import { UnoDeck } from "./UnoDeck.js";

export class Uno {
    constructor(players) {
        this.deck = new UnoDeck();
        this.players = players.map(player => {
            return {
                name: player,
                cards: this.deck.getDeck().splice(0,7)
            }
        });
    }

    start = () => {
        console.log("deck:", this.deck.cards, this.deck.cards.length);
        console.log("players:", this.players);
    }
}