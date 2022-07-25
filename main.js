"use strict";
(() => {
    let batman = {
        name: 'Bruce Wayne',
        powers: ['Super Traje']
    };
    let thor = {
        name: 'Thor Odinson',
        age: 35,
        powers: ['Super Fuerza', 'Rayos', 'Milholdir'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return `Name Hero: ${this.name} | Name: ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            cp: 13278,
            colony: 'Villa Centroamericana',
            city: 'Ciudad de México'
        },
        getFullAddress() {
            return this.address.cp;
        }
    };
    console.log(client);
    const client2 = {
        name: 'Monstserrat',
        age: 28,
        getFullAddress() {
            return this.address.cp;
        }
    };
    console.log(client2);
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map