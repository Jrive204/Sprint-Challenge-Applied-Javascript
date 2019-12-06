/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function Carousel () {
let carouseldiv = document.createElement(`div`)
  carouseldiv.classList.add(`carousel`)

let lftbtn = document.createElement(`div`)
    lftbtn.classList.add(`left-button`)
    // lftbtn.textContent = `Hello`

let imgone = document.createElement(`img`)
    imgone.src = "./assets/carousel/mountains.jpeg"
    // imgone.style = `display:block`
let imgtwo = document.createElement(`img`)
    imgtwo.src = `./assets/carousel/computer.jpeg`
let imgthree = document.createElement(`img`)
    imgthree.src = `./assets/carousel/trees.jpeg`
let imgfour = document.createElement(`img`)
    imgfour.src = `./assets/carousel/turntable.jpeg`

let rghtbtn = document.createElement(`div`)
    rghtbtn.classList.add(`right-button`)


let imgarr = [imgone,imgtwo,imgthree,imgfour]

imgindex = 0;

moveCarousel = (num) =>{

 for(const imgs of imgarr){
    imgs.style = `display:none`;
 }
 
  imgindex += num;

  if (imgindex > imgarr.length - 1){
    imgindex = 0
  }
  if(imgindex < 0 ){
    imgindex = imgarr.length -1;
  }
  else{
    imgarr[imgindex].style = `display:block`
  }

}

lftbtn.addEventListener("click", () => {
  moveCarousel(-1);
});

rghtbtn.addEventListener(`click`, () =>{
  moveCarousel(1);
})

    

carouseldiv.appendChild(lftbtn)
carouseldiv.appendChild(imgone)
carouseldiv.appendChild(imgtwo)
carouseldiv.appendChild(imgthree)
carouseldiv.appendChild(imgfour)
carouseldiv.appendChild(rghtbtn)




    
return carouseldiv

}
// let showimg = document.querySelectorAll(`.carousel img`)
// // console.log(`Hello`)
// console.log(showimg)
// // console.log(Carousel())

let carouselentry = document.querySelector(`.carousel-container`)
    carouselentry.appendChild(Carousel())