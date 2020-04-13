// Feel free to message me if you want hints or are stuck. 

/////////// Part 1 (Selecting and ManipulatingDOM Elements) ///////////

/* 1.1) Set the first <li> item from the html and print the text from it. 
    Tip: Use console.log() to print result  
*/
console.log(document.querySelector('li'));


/* 1.2) Add a full-stop at the end of each item in all the bucket lists.
    Hint 1: Select All <li> elements.
    Hint 2: Use for loop.
    Hint 3: You will need to use .innerText
*/ 
let all_li_elements = document.querySelectorAll('li');
for (i = 0; i < all_li_elements.length; i++) {
        all_li_elements[i].innerText += ".";
};



/* 1.3) Print the first list item from Gandalf's bucket list. 
    Hint 1: First select the div associated with Gandalf's bucket list.
*/
console.log(document.querySelector("#gandalf-list ul").firstElementChild);


/* 1.4) Change the color of first list item from Gandalf's bucket list to Red.
    Hint 1: You have already selected this list element from previous part.
*/
document.querySelector("#gandalf-list ul").firstElementChild.style.color = "red";


/* 1.5) Add a new item in Frodo's bucket list. 
        The item should 'Sail off With the Elves.'
    Hint 1: Use .createElement() method
    Hint 2: Use .append() 
*/
let newFrodoListItem = document.createElement("li");
newFrodoListItem.innerText = "Sail Off With the Elves.";
document.querySelector("#frodo-list ul").appendChild(newFrodoListItem);

/* 1.5) Remove the first item from Frodo's bucket list.
    Hint 1: First select the item
    Hint 2: Use .remove() 
*/
let firstFrodoListItem = document.querySelector("#frodo-list ul").children[0];
firstFrodoListItem.remove();


////////////// Part 2 (DOM Traversal) /////////////////////

/* 2.1) Print all children of the div with id="gandalf-list"
    Hint 1: select the div first
    Hint 2: use  .children 
*/

let gandalfListChildren = document.querySelector("#gandalf-list").children;
console.log(gandalfListChildren);

/* 2.2) Print the first child of the div with id="frodo-list" */
console.log(document.querySelector("#frodo-list").children[0]);

/* 2.3) Print the last child of the div with id="gandalf-list" */ 
console.log(document.querySelector("#gandalf-list").lastElementChild);

/* 2.4) Print the 2nd last child of the div with id="gandalf-list" 
    Hint 1: First select the last child as you did in Part 2.3
    Hint 2: Then use  .previousElementSibling to get the 2nd last child
*/ 
console.log(document.querySelector("#gandalf-list").lastElementChild.previousElementSibling);

/* 2.4) Find the parent element of the div with id="frodo-list" */
console.log(document.querySelector("#frodo-list").parentElement);




////////////// BONUS /////////////////////
/*  Find out the person who has 'Become White Wizard.' in their bucket list 
    
    Hint 1: You will need to select all <li> elements
    Hint 2: Use .textContent   and === 
    Hint 3: Use .parentElement (You are looking to find the grandparent actually)
*/

let listItemToFind = "Become White Wizard.";
let allLiElements = document.querySelectorAll("li");

for (let i=0; i < allLiElements.length; i++) {
    if (allLiElements[i].textContent === listItemToFind) {
        let grandparent = allLiElements[i].parentElement.parentElement;
        console.log(grandparent.firstElementChild);
    };
};

