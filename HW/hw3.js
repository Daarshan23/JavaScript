var data ={

    countrie:[
        {
            name:"India",
            states:[
                {
                    name:"Gujarat",
                    cities:[
                        {
                            name:"Surat",
                            population:1000000
                        },
                        {
                            name:"ahmedabad",
                            population:1300000
                        }
                    ]
                },
                {
                    name:"Maharashtra",
                    cities:[
                        {
                            name:"Mumbai",
                            population:2000000
                        },
                        {
                            name:"Pune",
                            population:1500000
                        }
                    ]
                }
            ]
        },
        {
            name:"USA",
            states:[
                {
                    name:"Washington",
                    cities:[
                        {
                            name:"Seattle",
                            population:200000
                        },
                        {
                            name:"Spokane",
                            population:40000
                        }
                    ]
                },
                {
                    name:"California",
                    cities:[
                        {
                            name:"San Francisco",
                            population:78659
                        },
                        {
                            name:"Los Angeles",
                            population:76543
                        }
                    ]
                }
            ]
        }
    ]

}
// find a country which has highest population
// find a state which has highest population
// find a city which has highest population
// find a country which has lowest population
// find a state which has lowest population
// find a city which has lowest population
// find a country which has highest population


// var pop = data1.filter((p)=>{
//     return p.countrie[0].states[0].cities[0].population > p.countrie[1].states[0].cities[0].population
// })
// console.log(pop)

//   let lowestPopulationCity = null;
// let lowestPopulation = Infinity;

// data.countrie
//   .map(country => country.states.map(state => state.cities))
//   .flat(2)
//   .forEach(city => {
//     if (city.population < lowestPopulation) {
//       lowestPopulation = city.population;
//       lowestPopulationCity = city;
//     }
//   });

// console.log(`The city with the lowest population is ${lowestPopulationCity.name} with a population of ${lowestPopulationCity.population}.`);


// let lowestPopulationCity = null;
// let lowestPopulation = Infinity;

// data.countrie.forEach(country => {
//   country.states.forEach(state => {
//     state.cities.forEach(city => {
//       if (city.population < lowestPopulation) {
//         lowestPopulation = city.population;
//         lowestPopulationCity = city;
//       }
//     });
//   });
// });

// console.log(`The city with the lowest population is ${lowestPopulationCity.name} with a population of ${lowestPopulationCity.population}.`);


/*data.countrie.forEach(country => {
    country.states.forEach(state => {
            state.cities.forEach(city => {
                if(city.population<city.population){
                    console.log(city.name)
                }
            })
    })
})*/

// var pop=0
// var maxpop=0
// var country1=null
// data.countrie.forEach(country => {
//     //console.log( country.states)
//     pop=0
//     country.states.forEach(state=>{
//         state.cities.forEach(city=>{
//             pop+=city.population
//         })
//     })
//     if(pop>maxpop){
    
//         maxpop=pop
//         country1=country.name
//     }
// })
// console.log(country1)



// let cities = data.countrie.filter(country=>
//     country.states.filter(state=>state.cities)=>{
//         return 
//     });



//find the country which has higest population using filter
    

