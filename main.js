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
//# sourceMappingURL=main.js.map