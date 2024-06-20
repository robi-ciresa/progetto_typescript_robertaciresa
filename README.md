# progetto_typescript_robertaciresa

# Moove Transportation System

Questo progetto rappresenta un semplice sistema di gestione per mezzi di trasporto messi a disposizione da Moove. È sviluppato interamente in TypeScript e segue una struttura a classi che implementano interfacce per la gestione di mezzi di trasporto, utenti e città.

## Struttura del progetto

Il progetto include tre interfacce e le rispettive classi di implementazione:

### Interfacce

1. **IMezzo**: Rappresenta un mezzo di trasporto.
    - Proprietà:
        - `tipo`: Tipo di mezzo (`bici`, `scooter`, `monopattino`).
        - `id`: ID univoco del mezzo.
        - `stato`: Stato del mezzo (`disponibile`, `in uso`).
    - Metodi:
        - `assegnaUtente(utente: IUtente): void`: Assegna un mezzo a un utente specifico.

2. **IUtente**: Rappresenta un utente del servizio.
    - Proprietà:
        - `nome`: Nome dell'utente.
        - `cognome`: Cognome dell'utente.
        - `email`: Email dell'utente.
        - `metodoPagamento`: Metodo di pagamento preferito (`carta`, `bancomat`, `app`).
    - Metodi:
        - `prenotaMezzo(mezzo: IMezzo): void`: Permette all'utente di prenotare un mezzo.

3. **ICitta**: Rappresenta una città in cui Moove opera.
    - Proprietà:
        - `nome`: Nome della città.
        - `mezziDisponibili`: Elenco dei mezzi disponibili (array di `IMezzo`).
    - Metodi:
        - `aggiungiMezzo(mezzo: IMezzo): void`: Aggiunge un mezzo all'elenco dei mezzi disponibili nella città.

### Classi

1. **Mezzo**: Implementa l'interfaccia `IMezzo`.
2. **Utente**: Implementa l'interfaccia `IUtente`.
3. **Citta**: Implementa l'interfaccia `ICitta`.
