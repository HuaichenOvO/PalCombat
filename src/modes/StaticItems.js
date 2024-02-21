import Item from "./Item";

export default class StaticItems {
    static Items = [
        new Item(1, '_item/LoreStoreAegisShield.webp', "Lore's Shield", "Add HP by 50"),
        new Item(2, '_item/Sword_icon.webp', "Kiri's Sword", "Add ATK by 5"),
        new Item(3, '_item/1231.jpg', "Laaarge Chicken Leg", "Recover full HP"),
        new Item(4, '_item/Rocket_icon.webp', "Sareek's Death Missile", "Add ATK by 8"),
        new Item(5, '_item/images.jpg', "Mama's Fired Egg", "Recover HP by 70"),
        new Item(6, '_item/Schematic_icon.webp', "The Future Magic Book", "Reduce MP by 1")
    ]

    static getItemByID(id) {
        return this.Items[id - 1];
    }
}