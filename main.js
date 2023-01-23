"use script"

//EX1 -
//A
const getData = () => {
       return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, World'); 
    }, 2000)
}); 
}

// getData.then((value) => {
//     console.log(value);
//   })

const processData = async () => {
   const data = await getData();
   console.log(data);  
};

processData();

// B
const myFunction = (data) => {
    return new Promise((resolve, reject) => {
        if(data % 2 === 0 ) {
        setTimeout(() => {resolve('even');}, 2000) 
        } else{
        setTimeout(() => {resolve('odd'); }, 1000)    
        }
    })
};

const myFunction1 = (data) => {
    return new Promise((resolve, reject) => {
        if(typeof data === 'number') {
            if(data % 2 === 0) {
               setTimeout(() => {resolve('even') }, 2000) 
            }else {
                setTimeout(() => {resolve('odd') }, 1000) 
            }
        } else {
          reject(('error'))
        }
    })
};

const showData = async () => {
    try {
        const data = await myFunction(15);
        console.log(data);  
    }    
        catch(Error) {
            console.error(Error)
        }
};

showData();


//EX2
fetch('https://restcountries.com/v2/all')
    .then((response) => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error(response.statusText);
        }
    })
    .then((data) => {

        data.map((obj, index) => { 
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            let detailsCard = document.createElement("div");
            detailsCard.setAttribute("class", "detailsCard");
            // card.classList()
            const img = document.getElementById("allCards")
            .appendChild(document.createElement("img"));
            const country = document.getElementById("allCards")
            .appendChild(document.createElement("strong"));
            let populationWithout = obj.population;
            let popWithCommas = populationWithout.toLocaleString();
            const population = document.getElementById("allCards")
            .appendChild(document.createElement("p"));
            const region = document.getElementById("allCards")
            .appendChild(document.createElement("p"));
            const capital = document.getElementById("allCards")
            .appendChild(document.createElement("p"));
            img.src = obj.flag;
            country.textContent = obj.name;
            population.textContent = "population: " + popWithCommas;
            region.textContent = "Region: " + obj.region;
            capital.textContent = "Capital: " + obj.capital;
            card.appendChild(img);
            
            card.appendChild(country);
            detailsCard.append(population, region, capital);
            card.appendChild(detailsCard);
            allCards.appendChild(card);


        });
        document.getElementById("allCards").classList.add("success");
        })
        .catch((error) => {
        document.getElementById("allCards").innerHTML = error.message;
        document.getElementById("allCards").classList.add("error");
        });

  

