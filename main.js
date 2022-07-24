"use strict";
(() => {
    let batman = {
        name: 'Bruce Wayne',
        powers: ['Super Traje']
    };
    console.log(batman);
    let thor = {
        name: 'Thor Odinson',
        age: 35,
        powers: ['Super Fuerza', 'Rayos', 'Milholdir'],
        getName() {
            return this.name;
        }
    };
    console.log(thor);
})();
//# sourceMappingURL=main.js.map