import { Event } from "./event.js";
import { FavoriteColorsAndFontText } from "./favorie.js";


class EventsPlace {
    name;
    constructor(name) {
        this.name = name;
        this.allEvents = [];
    }
    
    changeFontAndBackground(userChoose) {
        document.body.style.backgroundColor = userChoose.favoriteBackgroundColor;
        document.body.style.fontFamily = `'${userChoose.favoriteFontText}'`;
        let information = JSON.stringify(userChoose);
        localStorage.setItem('favoriteUser', information);
        this.renderToHTML();
    }

    renderToHTML() {
        this.#privateRenderToHTML();
        
    }

    #privateRenderToHTML(){
        let pulledInformation = JSON.parse(localStorage.getItem('favoriteUser'));
        if (pulledInformation) {
            document.body.style.backgroundColor = pulledInformation.favoriteBackgroundColor;
            document.body.style.fontFamily = `${pulledInformation.favoriteFontText}`;
        }
    }

    addToEventsArray(theEvent) {
        this.allEvents.push(theEvent);
        let information = JSON.stringify(this.allEvents);
        localStorage.setItem('savedEvents', information);
        this.addToHTML();
    }

    addToHTML() {
        let eventsS = JSON.parse(localStorage.getItem('savedEvents'));
        allTheEvents.innerHTML = '';

        if (eventsS) {
            eventsS.forEach((eventy, index) => {
                let newDiv = document.createElement('div');
                newDiv.setAttribute('class', 'newDivDecoration');
                newDiv.setAttribute(`id`, `event${index + 1}`);
                let a = eventy.TheDateOfTheEvent.split("-");
                let b = parseInt(a[1]);
                newDiv.style.backgroundColor = colors[b];


                let newPara1 = document.createElement('p');
                newPara1.innerHTML = `<b>The name of the event: </b><br />${eventy.TheNameOfTheEvent}`;

                let newPara2 = document.createElement('p');
                newPara2.innerHTML = `<b>The number of the guests: </b><br />${eventy.TheNumberOfTheGuests}`;

                let newPara3 = document.createElement('p');
                newPara3.innerHTML = `<b>Event's date: </b><br />${eventy.TheDateOfTheEvent}`;

                let newPara4 = document.createElement('p');
                newPara4.innerHTML = `<b>Design: </b><br />${eventy.TheEventDesign}`;

                let newPara5 = document.createElement('p');
                newPara5.innerHTML = `<b>Credit card number: </b><br />${eventy.TheNumberOfCreditCard}`;

                let newPara6 = document.createElement('p');
                newPara6.innerHTML = `<b>CVV: </b><br />${eventy.TheNumberOfCVV}`;


                let newBtn = document.createElement('button');
                newBtn.setAttribute('class', 'newBtnDecoration');
                newBtn.setAttribute('id', `delete${index + 1}`);
                newBtn.innerHTML = 'Delete this event';
                newBtn.addEventListener('click', (e) => {
                    let theIndex = e.target.id;
                    theIndex = theIndex.slice(6);
                    theIndex = Number(theIndex) - 1;
                    this.allEvents.splice(index, 1);
                    let information = JSON.stringify(this.allEvents);
                    localStorage.setItem('savedEvents', information);
                    this.addToHTML();
                });

                let newChangeBtn = document.createElement('button');
                newChangeBtn.setAttribute('class', 'newBtnDecoration');
                newChangeBtn.setAttribute('id', `change${index + 1}`);
                newChangeBtn.innerHTML = 'Change Event Details';
                newChangeBtn.addEventListener('click', ()=> {
                    document.getElementById('changeBox').innerHTML = "";

                    let newChangeBox = document.createElement('div');
                    newChangeBox.setAttribute('class', 'newChangeBox');

                    let newChange1 = document.createElement('p');
                    newChange1.innerHTML = 'Change the name event to: ';
                    let newInpute1 = document.createElement('input');
                    newInpute1.setAttribute('id', `newInpute1`);
                    newInpute1.setAttribute("type", "text");

                    let newChange2 = document.createElement('p');
                    newChange2.innerHTML = 'Change the number guests to: ';
                    let newInpute2 = document.createElement('input');
                    newInpute2.setAttribute('id', `newInpute2`);
                    newInpute2.setAttribute("type", "number");

                    let newChange3 = document.createElement('p');
                    newChange3.innerHTML = 'Change the date event to: ';
                    let newInpute3 = document.createElement('input');
                    newInpute3.setAttribute('id', `newInpute3`);
                    newInpute3.setAttribute("type", "date");

                    let newChange4 = document.createElement('p');
                    newChange4.innerHTML = 'Change the design event to: ';
                    let newInpute4 = document.createElement('select');
                    newInpute4.setAttribute('id', `newInpute4`);
                    newInpute4.innerHTML ="<option value='without'>Without</option><option value='basic'>Basic</option><option value='luxurious'>Luxurious</option>"

                    let newChange5 = document.createElement('p');
                    newChange5.innerHTML = 'Change the Credit Card to: ';
                    let newInpute5 = document.createElement('input');
                    newInpute5.setAttribute('id', `newInpute5`);
                    newInpute5.setAttribute("type", "number");

                    let newChange6 = document.createElement('p');
                    newChange6.innerHTML = 'Change the CVV to: ';
                    let newInpute6 = document.createElement('input');
                    newInpute6.setAttribute('id', `newInpute6`);
                    newInpute6.setAttribute("type", "number");

                    let approveChange = document.createElement('button');
                    approveChange.setAttribute('id', `change${index + 1}`);
                    approveChange.setAttribute('class', 'approveBtn');
                    approveChange.innerHTML = 'Approve';

                    let cancelChange = document.createElement('button');
                    cancelChange.setAttribute('class', 'cancelBtn');
                    cancelChange.innerHTML = 'Cancel';                   

                    approveChange.addEventListener('click', (e)=> {
                        let changeUser1 = document.getElementById('newInpute1').value;

                        let changeUser2 = document.getElementById('newInpute2').value;
        
                        let changeUser3 = document.getElementById('newInpute3').value;

                        let changeUser4 = document.getElementById('newInpute4').value;

                        let changeUser5 = document.getElementById('newInpute5').value;

                        let changeUser6 = document.getElementById('newInpute6').value;

                        let tempEvent = new Event(changeUser1, changeUser2, changeUser3, changeUser4, changeUser5, changeUser6);

                        let theIndex = e.target.id;
                        theIndex = theIndex.slice(6);
                        theIndex = Number(theIndex) - 1;
                        this.allEvents.splice(index, 1, tempEvent);
                        let information = JSON.stringify(this.allEvents);
                        localStorage.setItem('savedEvents', information);
                        this.addToHTML();
                    });

                    cancelChange.addEventListener('click', ()=> {
                        newChangeBox.remove();
                    });


                    newChangeBox.appendChild(newChange1);
                    newChangeBox.appendChild(newInpute1);
                    newChangeBox.appendChild(newChange2);
                    newChangeBox.appendChild(newInpute2);
                    newChangeBox.appendChild(newChange3);
                    newChangeBox.appendChild(newInpute3);
                    newChangeBox.appendChild(newChange4);
                    newChangeBox.appendChild(newInpute4);
                    newChangeBox.appendChild(newChange5);
                    newChangeBox.appendChild(newInpute5);
                    newChangeBox.appendChild(newChange6);
                    newChangeBox.appendChild(newInpute6);
                    newChangeBox.appendChild(approveChange);
                    newChangeBox.appendChild(cancelChange);
                    changeBox.appendChild(newChangeBox);
                });


                newDiv.appendChild(newPara1);
                newDiv.appendChild(newPara2);
                newDiv.appendChild(newPara3);
                newDiv.appendChild(newPara4);
                newDiv.appendChild(newPara5);
                newDiv.appendChild(newPara6);
                newDiv.appendChild(newBtn);
                newDiv.appendChild(newChangeBtn);


                allTheEvents.appendChild(newDiv);
            });
        }
    }
}


let liorsPlace = new EventsPlace("Lior`s Place");


let changeBox = document.getElementById('changeBox');


let allTheEvents = document.getElementById('allTheEvents');


let colors = ['',
    'rgb(255, 204, 204)',
    'rgb(255, 204, 153)',
    'rgb(204, 255, 153)',
    'rgb(153, 255, 153)',
    'rgb(255, 255, 153)',
    'rgb(153, 255, 204)',
    'rgb(153, 255, 255)',
    'rgb(204, 229, 255)',
    'rgb(204, 204, 255)',
    'rgb(204, 153, 255)',
    'rgb(255, 153, 255)',
    'rgb(224, 224, 224)'
];


let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();  // מבטל את הרצון של הטופס להישלח לאיפשהו
    let eventName = document.getElementById('eventName').value;
    let numberOfGuests = document.getElementById('numberOfGuests').value;
    let dateEvent = document.getElementById('dateEvent').value;
    let creditCard = document.getElementById('creditCard').value;
    let CVVNumber = document.getElementById('CVV').value;

    let checkedRadio1 = document.getElementById('without');
    let checkedRadio2 = document.getElementById('basic');
    let checkedRadio3 = document.getElementById('luxurious');

    let TheEventDesign;
    if (checkedRadio1.checked) {
        TheEventDesign = 'Without';
    } else if (checkedRadio2.checked) {
        TheEventDesign = 'Basic';
    } else if (checkedRadio3.checked) {
        TheEventDesign = 'Luxurious';
    }

    let newEvent = new Event(eventName, numberOfGuests, dateEvent, TheEventDesign, creditCard, CVVNumber);
    liorsPlace.addToEventsArray(newEvent);
});


let btnFontColor = document.getElementById('userFavoriteButton');
btnFontColor.addEventListener('click', () => {
    let chosenColor = document.getElementById('favcolor').value;
    let chosenFont = document.getElementById('userTextChosen').value;
    let userFavorites = new FavoriteColorsAndFontText(chosenColor, chosenFont);
    liorsPlace.changeFontAndBackground(userFavorites);
});


let clearLocalStorage = document.getElementById('clearLocalStorage');
clearLocalStorage.addEventListener('click', () => {
    localStorage.clear();
});


liorsPlace.allEvents = JSON.parse(localStorage.getItem("savedEvents")) || [];
liorsPlace.addToHTML();
liorsPlace.renderToHTML();



// Clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('divClock').innerHTML ='Time: ' + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
startTime();