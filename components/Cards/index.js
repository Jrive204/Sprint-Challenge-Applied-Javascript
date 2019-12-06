// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cards(data) {

    let card = document.createElement(`div`)
        card.classList.add(`card`)
        card.appendChild(headline)
        card.appendChild(author)
        

    let headline = document.createElement(`div`)
    headline.classList.add(`headline`)
    headline.textContent = data
    headline.appendChild(author)
    

    let author = document.createElement(`div`)
        author.classList.add(`author`)
        author.appendChild(img)

    let imgcont = document.createElement(`div`) 
        imgcont.classList.add(`img-container`)

    let img = document.createElement(`img`)
        img.src = data.authorPhoto
        
    let span = document.createElement(`span`)
        span,textContent = data.authorName
}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {    
    console.log(response)
    response.data.topics.forEach(element => {
        
    });

   
})

.catch(err => {
    console.log(`Error`,err)
})