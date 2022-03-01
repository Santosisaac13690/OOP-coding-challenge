class Pokemon {
    constructor(name, type, attack){
        this.name = name,
        this.type = type,
        this.attack = attack
    };

    attackMove = () => {
        console.log(`${this.name}, used ${this.attack}`)
    }
}

const pikachu = new Pokemon ('Pikachu', 'Lightning', 'Thunderbolt');
const abra = new Pokemon ('Abra', 'Psychic', 'Magic Coat')

pikachu.attackMove();
abra.attackMove();