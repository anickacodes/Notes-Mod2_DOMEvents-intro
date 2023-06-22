console.log("shawwty");
//DOM = Document Object Model
const h1ForTitle = document.querySelector("#main-title");
//calling the argument on the object and receives a string

console.log("does it work?", h1ForTitle);

h1ForTitle.textContent = "June 22, 2023";

const h1ForLessonObject = document.querySelector("#lesson-object");
h1ForLessonObject.textContent = "Js Events";
console.log("dork?", h1ForLessonObject);

//htmlElementToListenTo.addEventListener("", ()={})
// h1ForLessonObject.addEventListener("click", function(){})

//when we click, change this h1 to red
h1ForLessonObject.addEventListener("click", (event) => {
  console.log("event object", event) //interact w keys in the event type
  console.log("targeted event object", event.target)

  event.target.style.color = "red";
});

//we target and CLICK the h1 -> to change the img
h1ForTitle.addEventListener("click", (event)=> {
    const imageOnTheDOM = document.querySelector("img")
    console.log(imageOnTheDOM)
    imageOnTheDOM.src= "https://media.tenor.com/hgTXh2K1BdoAAAAM/batman-tas.gif"
})

//click the h2 -> increment the number in the span

const spanWithLikes = document.querySelector("span") //get the # of the DOM
let numOfLikes = spanWithLikes.innerText; 
console.log("span details", numOfLikes)
//parseInt() - make a string a number
//let numOfLikes = 0;

const h2ForLikes = document.querySelector("h2")
    console.log("h2", h2ForLikes)
    //change event of span 

    h2ForLikes.addEventListener("click", (event) => {
        spanWithLikes.innerText = numOfLikes++
    })