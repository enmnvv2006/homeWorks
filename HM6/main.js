const moviesAndSeries = [
  {
    title: "Breaking Bad",
    year: 2008,
    genre: "Crime",
    rating: 9.5,
    seasons: 5,
    duration: 47, // средняя длительность серии в минутах
    finished: true,
    actors: ["Bryan Cranston", "Aaron Paul"],
    country: "USA",
  },
  {
    title: "Game of Thrones",
    year: 2011,
    genre: "Fantasy",
    rating: 9.2,
    seasons: 8,
    duration: 57, // средняя длительность серии в минутах
    finished: true,
    actors: ["Emilia Clarke", "Kit Harington"],
    country: "USA",
  },
  {
    title: "Stranger Things",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.7,
    seasons: 4,
    duration: 51, // средняя длительность серии в минутах
    finished: false,
    actors: ["Millie Bobby Brown", "David Harbour"],
    country: "USA",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    seasons: 0,
    duration: 152, // длительность фильма в минутах
    finished: true,
    actors: ["Christian Bale", "Heath Ledger"],
    country: "USA",
  },
  {
    title: "The Office",
    year: 2005,
    genre: "Comedy",
    rating: 9.0,
    seasons: 9,
    duration: 22, // средняя длительность серии в минутах
    finished: true,
    actors: ["Steve Carell", "John Krasinski"],
    country: "USA",
  },
  {
    title: "Sherlock",
    year: 2010,
    genre: "Mystery",
    rating: 9.1,
    seasons: 4,
    duration: 88, // средняя длительность серии в минутах
    finished: true,
    actors: ["Benedict Cumberbatch", "Martin Freeman"],
    country: "UK",
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    seasons: 0,
    duration: 169, // длительность фильма в минутах
    finished: true,
    actors: ["Matthew McConaughey", "Anne Hathaway"],
    country: "USA",
  },
  {
    title: "Friends",
    year: 1994,
    genre: "Comedy",
    rating: 8.9,
    seasons: 10,
    duration: 22, // средняя длительность серии в минутах
    finished: true,
    actors: ["Jennifer Aniston", "Matthew Perry"],
    country: "USA",
  },
  {
    title: "The Mandalorian",
    year: 2019,
    genre: "Adventure",
    rating: 8.7,
    seasons: 3,
    duration: 40, // средняя длительность серии в минутах
    finished: false,
    actors: ["Pedro Pascal", "Giancarlo Esposito"],
    country: "USA",
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    rating: 8.5,
    seasons: 0,
    duration: 132, // длительность фильма в минутах
    finished: true,
    actors: ["Song Kang-ho", "Choi Woo-shik"],
    country: "South Korea",
  },
];

moviesAndSeries.map((serial) => {
    return console.log(`${serial.title} - рейтинг: ${serial.rating}`);
})

console.log(moviesAndSeries.map((series) => {
    return `${series.title}(${series.year}) - ${series.seasons} сезонов`
}));

console.log(
    moviesAndSeries.filter((serial) => {
    return serial.finished === false
}));

console.log(moviesAndSeries.find((serie) => {
    return serie.seasons > 5
}));

console.log(moviesAndSeries.some((serie) =>  serie.rating > 9));

console.log(moviesAndSeries.every((serie) => serie.year > 2000));

console.log(
    moviesAndSeries.reduce((a,b) => {
    return a + b.rating
},0) / moviesAndSeries.length
);

const sorted = moviesAndSeries.map((serial) => serial.rating)

console.log(sorted.sort((a,b) => b - a));



