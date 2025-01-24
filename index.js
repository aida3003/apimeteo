//cle d'activation
const key = "761d86a56a432684546e222e0e76634b"
//  recuperation des donnes par leur id
const region = document.getElementById("region")
const afficher= document.getElementById("afficher");
const localisation= document.getElementById("localisation");
const temperature= document.getElementById("temperature");
const description= document.getElementById("description");

//
async function lameteo() {
    const region1 = region.value.trim()
    //url api meteo
    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${region1}&units=metric&lang=fr&appid=${key}`
    try {
        const response = await fetch(url);
        const data =  await response.json();
        //
        localisation.textContent=`${data.name},${data.sys.country} `
         temperature.textContent=`${data.main.temp} `
          description.textContent=` voici la meteo de la region ${data.name} `

        
    } catch (error) {
        console.error(error);
        
        
    }
}


afficher.addEventListener("click",lameteo);