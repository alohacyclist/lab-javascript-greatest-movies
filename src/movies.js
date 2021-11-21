// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr) {
  const allDirectors = moviesArr.map(movie => movie.director)
  return allDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getUniqueDirectors (directorArr) {
  return directorArr.filter((director, index, directorArr) => directorArr.indexOf(director) === index)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const stevenSpielbergDramas = moviesArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return stevenSpielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
if(!moviesArr.length) return 0;
return parseFloat(((moviesArr.reduce((allRatings, movieRating) => allRatings + movieRating.score, 0)) / moviesArr.length).toFixed(2)) 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const lotsOfDrama = moviesArr.filter(movie => movie.genre.includes('Drama'))
  return scoresAverage(lotsOfDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  const moviesArrCopy = JSON.parse(JSON.stringify(moviesArr))
  const ascendingYearOrder = moviesArrCopy.sort((a, b) => a.year - b.year) 
  const alphabetically = ascendingYearOrder.sort((a, b) => { if (a.year === b.year) {
          if (a.title > b.title) return 1
          if (a.title < b.title) return -1
          if (a.title === b.title) return 0
      }
  })
  return alphabetically
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const moviesArrCopy = JSON.parse(JSON.stringify(moviesArr))
  const alphabeticalOrder = moviesArrCopy.sort(( a, b) => {
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
    if (a.title === b.title) return 0
  })
  const abcOrder = alphabeticalOrder.map(movie => movie.title)
  while (abcOrder.length > 20) {abcOrder.pop()}
  return abcOrder
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  const moviesArrCopy = JSON.parse(JSON.stringify(moviesArr))
  const converter = moviesArrCopy.map( movie => {
    const hoursToMinutes = (parseFloat(movie.duration)*60);
    const minutesOnly = parseFloat(movie.duration.substring(3,5))
    
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: hoursToMinutes + minutesOnly,
      genre: movie.genre,
      score: movie.score, 
    }
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArr) {
  const moviesArrCopy = JSON.parse(JSON.stringify(moviesArr))
  if(!moviesArrCopy.length) return null
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
