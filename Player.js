export class Player {
    constructor(name, cards) {
        this.name = name,
        this.cards = cards
    }

    getDetails = () => {
        return {
            name: this.name,
            cards: this.cards
        }
    }
}