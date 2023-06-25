console.log("shawwty");
//DOM = Document Object Model
const h1ForTitle = document.querySelector("#main-title");
//calling the argument on the object and receives a string
//console.log("does it work?", h1ForTitle);
h1ForTitle.textContent = "June 22, 2023";

const h1ForLessonObject = document.querySelector("#lesson-object");
h1ForLessonObject.textContent = "Js Events";
//onsole.log("dork?", h1ForLessonObject);

//htmlElementToListenTo.addEventListener("", ()={})
// h1ForLessonObject.addEventListener("click", function(){})

//when we click, change this h1 to red
h1ForLessonObject.addEventListener("click", (event) => {
  //console.log("event object", event) //interact w keys in the event type
  //console.log("targeted event object", event.target)

  event.target.style.color = "red";
});

//we target and CLICK the h1 -> to change the img
h1ForTitle.addEventListener("click", (event) => {
  const imageOnTheDOM = document.querySelector("img");
  //console.log(imageOnTheDOM)
  imageOnTheDOM.src = "https://media.tenor.com/hgTXh2K1BdoAAAAM/batman-tas.gif";
});

//click the h2 -> increment the number in the span

const spanWithLikes = document.querySelector("span"); //get the # of the DOM
let numOfLikes = spanWithLikes.innerText;
//console.log("span details", numOfLikes)
//parseInt() - make a string a number
//let numOfLikes = 0;

const h2ForLikes = document.querySelector("h2");
//console.log("h2", h2ForLikes)
//change event of span

h2ForLikes.addEventListener("click", (event) => {
  spanWithLikes.innerText = numOfLikes++;
});

//add eventlistenenr to box

const h3ForBoxText = document.querySelector("#blank-box-value");
// h3ForBoxText.textContent = "X"

const ticTacBox = document.querySelector("#blank-box");
ticTacBox.addEventListener("click", () => {
  if (h3ForBoxText.textContent === "") {
    h3ForBoxText.textContent = "x";
  }

  if (h3ForBoxText.textContent === "x") {
    h3ForBoxText.textContent = "O";
  }
});
console.log("---L---E---T---S----P--R--A--C--T--I--C--E---");

const practice = document.getElementById("blank-box");
console.log("id", practice);

const listItem = document.getElementsByClassName("list-item");
//console.log("class" , listItem) //returns arrray of child

const tagItems = document.getElementsByTagName("h1");
//console.log("tag", tagItems) //similar to above

//styling in-line

const aTitle = document.querySelector("#main-title");

aTitle.style.color = "red";
//console.log("title style", aTitle) //only works on a single item

const listItems = document.querySelectorAll(".list-items");

//styling via loop
for (i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "5rem";
}
//console.log("multi-style", listItems)

//create elements

const newUl = document.querySelector("ul");
const newLi = document.createElement("li");

//adding elements
newUl.append(newLi);

//modify text

const firstListItem = document.querySelector(".list-items");

console.log("first li", firstListItem.innerText); //shows text @ left side
console.log("take2 li", firstListItem.textContent); //shows text in-line
//DANGER - SECURITY RISK - user can accesss and manipulate html
console.log("take3 li", firstListItem.innerHTML); //shows in container from html

newLi.innerText = "D&G";

//modify attribute and classes

newLi.setAttribute("class", "main-title");
newLi.removeAttribute("class");

const newTitle = document.querySelector("#main-title");
//console.log(newTitle.getAttribute('id'))

newLi.classList.add("main-title");
//newLi.classList.remove('main-title')
//console.log(newLi.classList.contains('main-title'))
newLi.style = "font-size: 50px";

//parent-node traversal

let ul = document.querySelector("ul");
// console.log(ul.parentNode.parentNode)
//nodes can be text, document, comments, line breaks
// console.log(ul.parentElement) //elements are a type of node
console.log("ul child nodes", ul.childNodes);
console.log("ul first c-node", ul.firstChild); // here it is a text node not an element
console.log("ul last c-node", ul.lastChild);
console.log("ul textContent", ul.textContent);

ul.childNodes[5].style.backgroundColor = "gray"; //set bg of child nodes

console.log("chilren", ul.children);
console.log("child element count", ul.childElementCount);
// console.log("first child lmnt", ul.firstElementChild)
// console.log("first child lmnt attributes", ul.firstElementChild.attributes)
// console.log("last child lmnt", ul.lastElementChild)

//sibling node traversal

const div = document.querySelector("div");
console.log("how many kids div", div.children.length);

//console.log("prev sibling",ul.previousSibling)
console.log("prev sibling element", ul.previousElementSibling);
//console.log("next siblin",ul.nextSibling)
console.log("nextsibling elemnt", ul.nextElementSibling);

/** 
EVENT LISTENERS - most frequently used js structures in web design that add interactive functionality by "listening" to diff events taking place on page
like press a key,elements load, press a key

types: load events, touch , key down, mouse over, click
*/

/**
 *       ways to add:
 * directly into the html on the button tag using "onclick='alert('')'
 *
 * element.addEventListener("click", function)
 */
//click event
const button2 = document.querySelector(".btn-2");
function alertBTN() {
  alert("get to the bag");
}

button2.addEventListener("click", alertBTN);

//mouseover event

const colorbox3 = document.querySelector(".box-3");

function changeBt3Color() {
  colorbox3.style.backgroundColor = "orange";
}

colorbox3.addEventListener("mouseover", changeBt3Color);

//NOTE adding event listener to html can only do 1 bc a new one overrides the old
//best practice do it in a js bc the functions are limitless

//reveal event
const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");
function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);

/**
 * event propogation & delegation
 * 
 * propogation: how an event travels through DOM (electricity through a wire)
 * event passing through every node until forcefully stopped
 * 
 * capture phase- startsfrom root to target
 * 
 * target - 
 * 
 * bubbling - goes back to beginning once comlpete, from end back up to parent
 */


window.addEventListener("click", function(){
    //console.log("first phase",'Window')
}, false);

document.addEventListener("click", function() {
    //console.log('Document')
}, false);

document.querySelector('.div2').addEventListener("click", function(e){
    //e.stopPropagation()//once it reaches here, stop propogating
    //console.log('DIV 2')
},{once: true}); //only fire once


document.querySelector('.div1').addEventListener("click", function(){
    //console.log('DIV 1')
}, false);

document.querySelector('.button').addEventListener("click", function(e){
    e.preventDefault()
   // console.log("target",e.target.innerText="CLick")
}, false);

//bubbling - change all true to false ; goes from target upwards
//default behavior of an anchor tag is t redirect you -so if a flash reload is seen, it's doing its thing

/**
 * event delegation : allows user to add SINGLE EVENT LISTENENR TO PARENT & PASSS ON TO CHILDREN
 */

document.querySelector("#sports").addEventListener("click", function(e) {
 console.log(e.target.getAttribute('id') + ' is clicked')

   const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = "magenta"
    }
})

const sports = document.querySelector('#sports')
const newSport = document.createElement('li')

newSport.innerText="Rugby"
newSport.setAttribute('id', 'rugby')

sports.appendChild(newSport)







// console.log(HTMLAllCollection)
// console.log(HTMLCollection)
// console.log(HTMLOListElement)

// const html = document.documentElement
// console.log(html.parentNode)
// console.log(html.parentElement)
