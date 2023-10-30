(function(){
    'use strict';
    console.log('reading js'); 

    const myForm = document.getElementById('block');
    const warning = document.querySelector('h2'); 
    const mainform = document.getElementById('mainform'); 
    const subform = document.getElementById('subform'); 
    const header1 = document.querySelector('h1'); 

    myForm.addEventListener('submit', function(event){
        event.preventDefault(); 

        const show = document.querySelector('#name').value;
        const year = document.querySelector('#year').value;
        const character = document.querySelector('#character').value;
        const location = document.querySelector('#location').value;
        const adj = document.querySelector('#adj').value;

        let content = ''; 

        if (show == '') {
            content = "*Please pick a name for your show/film"; 
            document.querySelector('#name').focus(); 
        }
        else if (year == '') {
            content = "*Please enter a number"; 
            document.querySelector('#year').focus(); 
        }
        else if (character == '') {
            content = "*Please pick a name for the main character"; 
            document.querySelector('#character').focus();
        }
        else if (location == '') {
            content = "*Please enter a location"; 
            document.querySelector('#location').focus();
        }
        else if (adj == '') {
            content = "*Please pick an adjective"; 
            document.querySelector('#adj').focus();
        }
        else {
            mainform.style.display = 'none';
            subform.style.display = 'none'; 
            header1.style.display = 'none'; 

            myForm.style.height = "412px"; 
            myForm.style.width = "1260px";

            warning.style.color = "white"; 
            warning.style.width = "330px"; 
            warning.style.height = "600px"; 
            warning.style.top = "28px";
            warning.style.left = "-550px";  

            myForm.style.backgroundImage = "url(./images/poster_2.jpg)"; 

            content = `In the year of <span>${year}</span>, the entirety of humanity has fallen under the control of a type of <span>${adj}</span> neural technology, encroaching on every individual’s consciousness except <span>${character}</span>. As the only one in <span>${location}</span> who still retains their artificial consciousness, ${character} traverses the desolate void of space hoping to find solutions to save humanity. Abyss, betrayals, survival. How will the future of humanity be redefined?`; 
        }

        warning.innerHTML = content; 
    }); 
})(); 