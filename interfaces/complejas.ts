
(() => {
    interface User {
        name    : string;
        age     : number;
        address?: Address;
        getFullAddress( id: string ): void;
    }

    interface Address {
        cp    : number;
        colony: string;
        city  : string;
    }

    const client: User = {
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
    }

    console.log( client );

    const client2: User = {
        name: 'Monstserrat',
        age: 28,
        getFullAddress() {
            return this.address.cp;
        }
    }

    console.log( client2 )
})();