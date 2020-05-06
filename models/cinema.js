const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.addFilm = function (film) {
  this.films.push(film);
  console.log("Please run")
  console.log(this.films)
}


Cinema.prototype.getTitles = function (){
  const titles = [];
  const films = this.films;

  films.forEach((film) => {
    titles.push(film.title);
  });
  return titles;
};

// Cinema.prototype.findTitle = function (searchTitle){
//   const index = this.films.title.indexOf(searchTitle);
//   return this.films[index];
// };

Cinema.prototype.findTitle = function (searchTitle){
  const films = this.films;
  let result 
  films.forEach((film) => {
    if(film.title === searchTitle){
      result = film;
    }
  });
  return result;
};

Cinema.prototype.findGenre = function (searchGenre){
  const films = this.films;
  let result = []
  films.forEach((film) => {
    if(film.genre === searchGenre){
      result.push(film);
    }
  });
  return result;
};


// Park.prototype.findBySpecies = function (species) {
//   const foundDinosaurs = [];

//   for (const dinosaur of this.dinosaurs) {
//     if (dinosaur.species === species) {
//       foundDinosaurs.push(dinosaur);
//     }
//   }

//   return foundDinosaurs;
// }

// const index = this.dinosaurs.indexOf(dinosaur);
//   this.dinosaurs.splice(index, 1);





module.exports = Cinema;