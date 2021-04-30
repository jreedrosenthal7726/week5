// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

// Get a reerence to the "Click me" button
let clickMeButton = document.querySelector(`.click-me`)

// // Event listener for the "click me"nuttom
// clickMeButton.addEventListener(`click`, async function(event) {
// // show an alert
//    let pageTitleElement = document.querySelector(`.page-title`)

//    pageTitleElement.innerHTML = `Movies to Watch!`

//    let addMovieLink = document.querySelector(`.add-movie`)

//    addMovieLink.addEventListener(`click`, asyn function(event) {
//     event.preventDefault()

   

// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

//    })

   
// })

let zoomImageButton = document.querySelector(`.zoom-image`)

zoomImageButton.addEventListener(`click`, async function(event) {

// // Get a reference to the image
let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

image.classList.toggle(`w-96`)
image.classList.toggle(`w-Full`)

})

//

let changeImageButton = document.querySelector(`.change-image`)

//

changeImageButton.addEventListener(`click`, async function(event){
  let image = document.querySelector(`img`)

  image.setAttribute(`src`, `../images/grogu2.jpg`)

})