// Definizione dei type per IMezzo
type tipo = 'bici' | 'scooter' | 'monopattino'; 
type stato = 'disponibile' | 'in uso';

// Definizione dell'interfaccia IMezzo
interface IMezzo {
    tipo: tipo;
    id: string;
    stato: stato;
    assegnaUtente(utente: IUtente): void;
}

// Definizione dei type per IUtente
type metodoPagamento = 'carta' | 'bancomat' | 'app';

// Definizione dell'interfaccia IUtente
interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: metodoPagamento;
    prenotaMezzo(mezzo: IMezzo): void;
}

// Definizione dell'interfaccia ICitta
interface ICitta {
    nome: string;
    mezziPresenti: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
}

// Implementazione della classe Mezzo che segue l'interfaccia IMezzo
class Mezzo implements IMezzo {
    tipo: tipo;
    id: string;
    stato: stato;

    constructor(tipo: tipo, id: string) {
        this.tipo = tipo;
        this.id = id;
        this.stato = 'disponibile';
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log(`${this.tipo} con ID ${this.id} è stato assegnato a ${utente.nome} ${utente.cognome}`);
        } else {
            console.log(`Errore, impossibile assegnare ${this.id}. Questo mezzo è già in uso.`);
        }
    }
}

// Implementazione della classe Utente che segue l'interfaccia IUtente
class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: metodoPagamento;

    constructor(nome: string, cognome: string, email: string, metodoPagamento: metodoPagamento) {
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
    mezziPresenti: IMezzo[];

    constructor(nome: string) {
        this.nome = nome;
        this.mezziPresenti = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziPresenti.push(mezzo);
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

// Test assegnazione di un mezzo ad una citta
citta1.aggiungiMezzo(mezzo1);
citta1.aggiungiMezzo(mezzo2);
citta1.aggiungiMezzo(mezzo3);
citta1.aggiungiMezzo(mezzo6);
citta2.aggiungiMezzo(mezzo4);
citta2.aggiungiMezzo(mezzo5);
citta2.aggiungiMezzo(mezzo7);
citta2.aggiungiMezzo(mezzo8);
citta2.aggiungiMezzo(mezzo9);

// Test prenotazione di un mezzo da parte di un utente
utente1.prenotaMezzo(mezzo1);
utente2.prenotaMezzo(mezzo2);
utente3.prenotaMezzo(mezzo7);
utente4.prenotaMezzo(mezzo9);
// Test errore 'mezzo non disponibile'
utente5.prenotaMezzo(mezzo2);

// Test mezzi presenti per citta
console.log(citta1.mezziPresenti);
console.log(citta2.mezziPresenti);
