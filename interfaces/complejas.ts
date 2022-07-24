
(() => {
    interface User {
        name    : string;
        age     : number;
        address?: Address;
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
        }
    }

    console.log( client );

    const client2: User = {
        name: 'Monstserrat',
        age: 28
    }

    console.log( client2 )
})();