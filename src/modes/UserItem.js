export default class UserItem {
    constructor(tItem, number) {
        this.item = tItem;
        this.number = number;
    }

    addNumber(num) {
        this.number += num;
    }
}