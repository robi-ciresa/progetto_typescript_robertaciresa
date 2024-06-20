// Definizione dell'interfaccia IMezzo
interface IMezzo {
    tipo: 'bici' | 'scooter' | 'monopattino';
    id: string;
    stato: 'disponibile' | 'in uso';
    assegnaUtente(utente: IUtente): void;
}

// Definizione dell'interfaccia IUtente
interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: 'carta' | 'bancomat' | 'app';
    prenotaMezzo(mezzo: IMezzo): void;
}

// Definizione dell'interfaccia ICitta
interface ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
}

// Implementazione della classe Mezzo che segue l'interfaccia IMezzo
class Mezzo implements IMezzo {
    tipo: 'bici' | 'scooter' | 'monopattino';
    id: string;
    stato: 'disponibile' | 'in uso';

    constructor(tipo: 'bici' | 'scooter' | 'monopattino', id: string) {
        this.tipo = tipo;
        this.id = id;
        this.stato = 'disponibile';
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log(`${this.tipo} con ID ${this.id} è stato assegnato a ${utente.nome} ${utente.cognome}`);
        } else {
            console.log(`${this.tipo} con ID ${this.id} non è disponibile.`);
        }
    }
}

// Implementazione della classe Utente che segue l'interfaccia IUtente
class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: 'carta' | 'bancomat' | 'app';

    constructor(nome: string, cognome: string, email: string, metodoPagamento: 'carta' | 'bancomat' | 'app') {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }

    prenotaMezzo(mezzo: IMezzo): void {
        mezzo.assegnaUtente(this);
    }
}

// Implementazione della classe Citta che segue l'interfaccia ICitta
class Citta implements ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    constructor(nome: string) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
        console.log(`Mezzo ${mezzo.tipo} con ID ${mezzo.id} aggiunto alla città ${this.nome}`);
    }
}

// Istanze e test
const utente1 = new Utente('Mario', 'Rossi', 'mario.rossi@example.com', 'app');
const utente2 = new Utente('Giulia', 'Bianchi', 'giulia.bianchi@example.com', 'carta');
const utente3 = new Utente('Luca', 'Verdi', 'luca.verdi@example.com', 'bancomat');
const utente4 = new Utente('Lara', 'Gialli', 'lara.gialli@example.com', 'app');
const utente5 = new Utente('Paolo', 'Neri', 'paolo.neri@example.com', 'app');

const mezzo1 = new Mezzo('bici', 'B1');
const mezzo2 = new Mezzo('bici', 'B2');
const mezzo3 = new Mezzo('bici', 'B3');
const mezzo4 = new Mezzo('scooter', 'S1');
const mezzo5 = new Mezzo('scooter', 'S2');
const mezzo6 = new Mezzo('monopattino', 'M1');
const mezzo7 = new Mezzo('monopattino', 'M2');
const mezzo8 = new Mezzo('monopattino', 'M3');
const mezzo9 = new Mezzo('monopattino', 'M4');

const citta1 = new Citta('Roma');
const citta2 = new Citta('Milano');

citta1.aggiungiMezzo(mezzo1);
citta1.aggiungiMezzo(mezzo2);
citta1.aggiungiMezzo(mezzo3);
citta1.aggiungiMezzo(mezzo6);
citta2.aggiungiMezzo(mezzo4);
citta2.aggiungiMezzo(mezzo5);
citta2.aggiungiMezzo(mezzo7);
citta2.aggiungiMezzo(mezzo8);
citta2.aggiungiMezzo(mezzo9);

utente1.prenotaMezzo(mezzo1);
utente2.prenotaMezzo(mezzo2);
utente3.prenotaMezzo(mezzo7);
utente4.prenotaMezzo(mezzo9);

console.log(citta1.mezziDisponibili);
console.log(citta2.mezziDisponibili);
