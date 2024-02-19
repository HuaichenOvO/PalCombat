import Item from './Item.js';
import Pal from './Pal.js';

export default class UserProfile {
    constructor() {
        this.name = "Player";
        this.coins = 100;
        this.Pals = [];
        this.items = [];
    }

    addItem(tmpID, tmpImage, tmpName, tmpNumber) {
        tmpItem = new Item(tmpID, tmpImage, tmpName, tmpNumber);
        this.items.push(tmpItem);
    }

    adoptPal(tmpImage, tmpName, tmpSkill, tmpHP, tmpMP, tmpATK) {
        tmpPal = new Pal(tmpImage, tmpName, tmpSkill, tmpHP, tmpMP, tmpATK);
        this.Pals.push(tmpPal);
    }
}

