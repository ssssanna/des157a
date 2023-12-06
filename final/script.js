(function(){
    'use strict'; 
    console.log('reading js'); 

    //assigning variables and getting all the elements needed for script
    //variables for hotspots
    const friendshotspot = document.querySelectorAll('#friendslego div');

    //variable for overlays
    const friendsOverlays = document.querySelectorAll('#friendsover article'); 

    // varible for the 'close' button 
    const closebut = document.querySelectorAll('.closebutton'); 

    //variables for each overlay
    const ros = document.querySelector('#rossover');
    const mon = document.querySelector('#monicaover');
    const rach = document.querySelector('#rachelover');
    const joe = document.querySelector('#joeyover');
    const chan = document.querySelector('#chandlerover');
    const phoe = document.querySelector('#phoebeover');
    const gunth = document.querySelector('#guntherover');

    //when a character is clicked, run the funtion and show the overlays 
    friendshotspot.forEach(function(eachSpot){
        eachSpot.addEventListener('click', showoverlays); 
    }); 

    //for each overlay, close the overlay when 'close' button is clicked
    closebut.forEach(function(eachBut){
        eachBut.addEventListener('click', function(){
            for (let i = 0; i<friendsOverlays.length; i++) {
                friendsOverlays[i].className = 'hide'; 
            }
        }); 
    }); 

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
            case 'Gunther': gunth.className = 'show';
        }
    }
})(); 