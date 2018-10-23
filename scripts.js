//dummy array
var faqArray = [
    {
    faqQuestion: "Can I eat it, poop it, then return my poop?",
    faqAnswer: "While you can't currently return your poop for cash you can trade it in for 5% off of your next purchase!"
} ,

{
    faqQuestion: "Am I guarenteed to be thinner than all the other bridesmaids at my younger cousins wedding next week?",
    faqAnswer: "Yes! The sum of all bridesmaids"
},
{
    faqQuestion: "Can I become a millionaire with your product and no actual work?",
    faqAnswer: "Sure...."
}
]



//maps through faq array of objects
//generates HTMl for each iteration
//assigns Question/Answer Variables for each iteration
//Called in createFaqContainer
function createHTMLElements(faqArray) {
   faqArray.map(function(faqObject, index) {
       var faqQuestion = faqObject.faqQuestion;
       var faqAnswer = faqObject.faqAnswer;
       var questionNumber = index + 1
            console.log(questionNumber)
            console.log("faqQuestion")
            console.log(faqQuestion)
            console.log("faqAnswer")
            console.log(faqAnswer)


    //generates faq cards
    var accordionItem = document.createElement("DIV");
    document.querySelector(".accordion").appendChild(accordionItem);
    accordionItem.classList.add("accordion-item");
   
    var accordionQuestion = document.createElement("A");
    accordionItem.appendChild(accordionQuestion);
    accordionQuestion.innerHTML = faqQuestion;

    var content = document.createElement("DIV");
    accordionItem.appendChild(content);
    content.classList.add("content");

    var accordionAnswer = document.createElement("P");
    content.appendChild(accordionAnswer);
    accordionAnswer.innerHTML = faqAnswer

   });
}


//creates faq container div, title, and accordion container
//calls createHTMLElements to generate faq cards 
function createFaqContainer(faqArray){
   var containerDiv = document.createElement("DIV");
   document.body.appendChild(containerDiv);
   containerDiv.classList.add("container");

   var title = document.createElement("H2");
   document.querySelector('.container').appendChild(title);
   title.innerHTML = "Frequently Asked Questions";

   var accordionContainerDiv = document.createElement("DIV");
   document.querySelector(".container").appendChild(accordionContainerDiv);
   accordionContainerDiv.classList.add("accordion");

   createHTMLElements(faqArray)

// Toggle configuration
const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

}

//CREATES FAQ CONTAINER
createFaqContainer(faqArray)



// ADDS MORE QUESTIONS TO THE SAME CONTAINER
createHTMLElements([{faqQuestion:"Q",faqAnswer:"A"}]);

createHTMLElements(faqArray)

createHTMLElements([{faqQuestion: "Fuck You", faqAnswer:"Biyyyyttccchhh"}]);



// --------------------- STARTING CODE OF INPUT FUNTION -------------------- //

// function inputs(){


//     var inputContainer = document.createElement("DIV");
//     document.body.appendChild(inputContainer);
//     inputContainer.classList.add("input-container")

//     var inputQuestion = document.createElement("INPUT");
//     document.querySelector(".input-container").appendChild(inputQuestion);

//     var inputAnswer = document.createElement("INPUT");
//     document.querySelector(".input-container").appendChild(inputAnswer);

//     var submitButton = document.createElement("BUTTON");
//     document.querySelector(".input-container").appendChild(submitButton);
   

// }

// inputs()




