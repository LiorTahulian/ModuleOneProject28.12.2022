export class Event {
    TheNameOfTheEvent;
    TheNumberOfTheGuests;
    TheDateOfTheEvent;
    TheEventDesign;
    TheNumberOfCreditCard;
    TheNumberOfCVV;
    constructor(TheNameOfTheEvent, TheNumberOfTheGuests, TheDateOfTheEvent, TheEventDesign, TheNumberOfCreditCard, TheNumberOfCVV) {
        this.TheNameOfTheEvent = TheNameOfTheEvent;
        this.TheNumberOfTheGuests = TheNumberOfTheGuests;
        this.TheDateOfTheEvent = TheDateOfTheEvent;
        this.TheEventDesign = TheEventDesign;
        this.TheNumberOfCreditCard = TheNumberOfCreditCard;
        this.TheNumberOfCVV = TheNumberOfCVV;
    }
}