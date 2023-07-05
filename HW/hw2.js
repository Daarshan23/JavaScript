const gaminglap = {
    category: "gaming laptop",
    brand : "asus",
    price : 80000
};
const officelap = {
    category : "office laptop",
    braand : "hp",
    price : 50000
};
function lapbook(laptop, callback) {
    console.log(`purches sussefuly  ${laptop.brand} for ${laptop.category}`);
    console.log(`price of laptop is  ${laptop.price}.`);
    callback();
}
function laptopbook() {
    console.log("Your laptop has been purchased.");
}
lapbook(gaminglap, laptopbook);
lapbook(officelap, laptopbook);
// -----------------------------------------------------------------------------------------
const headacheDoctor = {
    name: "Dr kalpesh",
    specialty: "Headache",
    fee: 2500
  };
const stomachDoctor = {
    name: "Dr. kamlesh",
    specialty: "Stomach ache",
    fee: 2000
  };
  function apoint(doctor, callback) {
  
    console.log(`Schedul  with ${doctor.name} for ${doctor.specialty}`);
    console.log(`Appointment scheduled. Fee is ${doctor.fee}.`);
  
    callback();
  }
  function appoint() {
    console.log("Your appointment has been scheduled.");
  }
  apoint(stomachDoctor, appoint);
  apoint(headacheDoctor, appoint);
// -----------------------------------------------------------------------------------------
const movie1 = {
    name: "The Shawshank Redemption",
    screen : 1,
    price : 200
};
const movie2 = {
    name : "The Godfather",
    screen : 2,
    price : 300
};
const movie3 = {
    name : "The Dark Knight",
    screen : 3,
    price : 400
};

function moviebook(movie, callback) {
    console.log(`purches sussefuly  ${movie.name} for ${movie.screen}`);
    console.log(`price of movie is  ${movie.price}.`);

    callback();
}
    function books(){
        console.log("Your movie has been book.");
    
    }
moviebook(movie1, books);
moviebook(movie2, books);
moviebook(movie3, books);
