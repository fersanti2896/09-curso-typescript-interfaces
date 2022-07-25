(() => {

  interface Auto {
    encender       : boolean;
    velocidadMaxima: number;
    acelerar()     : void;
  }

  const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  };

  const batimovil: Auto = {
    encender       : false,
    velocidadMaxima: 0,
    acelerar() {
      console.log("Go!");
    }
  };

  conducirBatimovil(batimovil);
  
  interface Personalidad {
    reir  ?: boolean;
    comer ?: boolean;
    llorar?: boolean;
  }

  const guason: Personalidad = {
    reir  : true,
    comer : true,
    llorar: false
  };

  const reir = (guason: Personalidad): void => {
    if (guason.reir) {
      console.log("Jajaja");
    }
  };

  reir(guason)
  
  interface Gotica {
    (ciudadanos: string[]): number;
  }

  let ciudadGotica: Gotica;

  ciudadGotica = (ciudadanos: string[]) => {
    return ciudadanos.length;
  };

  interface Generica {
    nombre       : string;
    edad         : number;
    sexo         : boolean;
    estadoCivil  : string;
    imprimirBio(): void;
  } 

  class Persona implements Generica {
    public nombre     : string;
    public edad       : number;
    public sexo       : boolean
    public estadoCivil: string;

    imprimirBio(): void {
      console.log('Hola');
    }
  }

})();
