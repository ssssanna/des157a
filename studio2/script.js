(function(){
    'use strict'; 
    console.log('reading js'); 

    //assigning variables and getting all the elements needed for script
    // variables for image and divs 
    const theImg = document.querySelector('img'); 
    const hotspot = document.querySelectorAll('#legoimage div');

    //variable for all overlays
    const overlays = document.querySelectorAll('section article'); 

    // varible for the 'close' button 
    const close = document.querySelectorAll('button'); 

    //variables for each overlay
    const ros = document.querySelector('#rossover');
    const mon = document.querySelector('#monicaover');
    const rach = document.querySelector('#rachelover');
    const joe = document.querySelector('#joeyover');
    const chan = document.querySelector('#chandlerover');
    const phoe = document.querySelector('#phoeberover');
    const gunth = document.querySelector('#guntherrover');

    //when a character is clicked, run the funtions to zoom in and show the overlays 
    hotspot.forEach(function(eachSpot){
        eachSpot.addEventListener('click', zoomIn); 
        eachSpot.addEventListener('click', showoverlays); 
    }); 

    //for each overlay, close the overlay when 'close' button is clicked
    close.forEach(function(eachBut){
        eachBut.addEventListener('click', function(){
            for (let i = 0; i<overlays.length; i++) {
                overlays[i].className = 'hide'; 
                theImg.className = 'start'
            }
        }); 
    }); 

    //function to zoom in and show the details of each character
    function zoomIn(event) {
        const spot = event.target.id;
        switch (spot) {
            case 'Ross': theImg.className = 'ross'; break;
            case 'Monica': theImg.className = 'monica'; break;
            case 'Rachel': theImg.className = 'rachel'; break;
            case 'Joey': theImg.className = 'joey'; break;
            case 'Chandler': theImg.className = 'chandler'; break;
            case 'Phoebe': theImg.className = 'phoebe'; break;
            case 'Gunther': theImg.className = 'gunther'; break;
        }
    }; 

    //function to show the overlays for each charatcer on click
    function showoverlays (event) {
        const eachOverlay = event.target.id;
        switch (eachOverlay) {
            case 'Ross': ros.className = 'show'; break; 
            case 'Monica': mon.className = 'show'; break; 
            case 'Rachel': rach.className = 'show'; break; 
            case 'Joey': joe.className = 'show'; break; 
            case 'Chandler': chan.className = 'show'; break; 
            case 'Phoebe': phoe.className = 'show'; break; 
            case 'Gunther': gunth.className = 'show'; break; 
        }
    }
})(); 