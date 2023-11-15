import { UnoCard } from "./UnoCard.js";

class UnoDeck {
    constructor() {
        this.cards = [];
        this.colors = ['black', 'red', 'blue', 'green', 'yellow'];
        this.topCard = null;
        this.init();
    }

    initGameCard = () => {
        let i=0;
        let topCard;
        while(['SKIP', 'REVERSE', 'WILD', '+2', '+4'].includes(this.cards[i].cardType)){
            this.topCard = this.cards.splice(i, 1);
        }
    }

    getDeck = () => this.cards;

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    shuffle = () => {
        for(let i=0; i<this.cards.length; i++){
            const randomIndex = this.getRandomNumber(0, this.cards.length);
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = this.cards[i];
        }
    }

    createDeck = () => {
        for(let h = 0; h < 2; h++){
            for(let i = 1; i < this.colors.length; i++){
                for(let j = h===0 ? 0 : 1; j < 14; j++){
                    let cardType;
                    let cardColor;
                    if(j<10){
                        cardColor = j === 13 ? this.colors[0] : this.colors[i]
                        cardType = i > 4 ? (j + 1).toString() : j.toString();
                        this.cards = [...this.cards, new UnoCard(cardColor, cardType)];
                    }
                    else{cardType
                        cardColor = j === 13 ? this.colors[0] : this.colors[i];
                        if(j === 10) cardType = 'SKIP';
                        else if(j === 11) cardType = 'REVERSE';
                        else if(j === 12) cardType = '+2';
                        else {
                            cardType = h===0 ? 'WILD' : '+4';
                        }
                        this.cards = [...this.cards, new UnoCard(cardColor, cardType)];
                    }
                }
            }
        }
        return this.cards;
    }

    init = () => {
        this.createDeck();
        this.shuffle();
        this.initGameCard();
        console.log("deal: ", this.cards, this.players, this.topCard)
    }
}

export {UnoDeck}