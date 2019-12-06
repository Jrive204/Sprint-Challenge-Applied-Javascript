// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    let head = document.createElement(`div`)
        head.classList.add(`header`)

    let spanone = document.createElement(`span`)
        spanone.classList.add(`date`)
        spanone.textContent = `SMARCH 28, 2019`

    let h1ele = document.createElement(`h1`)
        h1ele.textContent = `Lambda Times`

    let spantwo = document.createElement(`span`)
        spantwo.classList.add(`temp`)
        spantwo.textContent =  `98°`

        head.append(spanone,h1ele,spantwo)
    return head;

}

let headentry = document.querySelector(`.header-container`)

headentry.appendChild(Header());
