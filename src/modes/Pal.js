export default class Pal {
    constructor(tmpID, tmpImage, tmpName, tmpSkill, tmpHP, tmpMP, tmpATK) {
        this.id = tmpID;
        this.image = tmpImage;
        this.name = tmpName;
        this.skill = tmpSkill;
        this.level = 1;
        this.HP = tmpHP;
        this.MP = tmpMP;
        this.ATK = tmpATK;
    }

    levelUp() {
        this.level += 1;
        this.HP += 20;
        this.ATK += 2;
    }
}