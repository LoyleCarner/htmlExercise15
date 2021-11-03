const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
  elements: [
    {
        'href': 'dog.jpg',
        'type': 'image',
        'title': 'Image 1',
        'description': 'Example',
    },{
        'href': 'dog.jpg',
        'type': 'image',
        'title': 'Image 2',
        'description': 'Example',
    },{
        'href': 'dog.jpg',
        'type': 'image',
        'title': 'Image 3',
        'description': 'Example',
    }
  ]
});


// bauen wir einen Array - mittels Array.from direkt Aufruf auf dem Prototype - wird generiert aus einer HTML Collection
// !!!!! Wichtig, DOM Tree muss vorhanden sein - sonst ist der Array leer !!!!!
const triggerCollection = Array.from(document.getElementsByClassName('glightbox3'));

// weil wir so cool sind - benutzen wir die Iterierungsfunktion forEach auf unserem Array - erwartet ne Funktion die wir schreiben - spuckt uns dort bei jedem Durchlauf das jeweilige Element des Array rein + den Index dieses Elements
triggerCollection.forEach((item, index) => {
  
  // dann kommt ne super leckere Pfeilchenfunktion mit nur einem Parameter namens event (wird uns vom EventListener da rein gesteckt) - und weils nur ein Parameter ist, verzichten wir auf die runden Klammern - sieht cooler aus
  item.addEventListener('click', event => {
    // auf dem übergebenen Event Objekt führen wir ein preventDefault Aufruf aus - weil sonst springen wir wegen dem Link weg von der Seite
    event.preventDefault();
    
    // UND dann wird die Lightbox geöffnet
    lightbox.openAt(index);
  });
  
});





class Car {
  
  start () {
    console.log('start engine');
    this.makeNoise();
    console.log(this);
  }
  
  makeNoise () {
    console.log('stotter stotter');
    
    setTimeout(() => {
      console.log('wrum wrum');
      console.log(this);
      this.turnOnLight();
    }, 1000);
  }
  
  turnOnLight () {
    console.log('lights on');
  }
  
}

const myCar = new Car();
myCar.start();



function myTada(tada){
  alert(tada);  
}

const yourTada = function(tada) {
  alert(tada);
}

const ourTada = (tada, hulu) => {
  alert(tada);
}

const theirTada = tada => alert(tada);

//console.log(this);

//yourTada('test');