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
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("Go!");
        }
    };
    conducirBatimovil(batimovil);
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("Jajaja");
        }
    };
    reir(guason);
    let ciudadGotica;
    ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        imprimirBio() {
            console.log('Hola');
        }
    }
})();
//# sourceMappingURL=main.js.map