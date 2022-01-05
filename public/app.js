var displayQuestion = document.getElementById("displayQuestion");
var answerParent = document.getElementById("answerParent");
var currentQuestionnumber = document.getElementById("currentQuestionnumber");
var totalQuestionnumber = document.getElementById("totalQuestionnumber");
var questionDispaly = document.getElementById("questionDispaly");
var resultDisplay = document.getElementById("resultDisplay");
var percentage = document.getElementById("percentage");
var indexValue = 0;
var marks = 0;

var questions = [
      {
            question :"HTML stands for _________.",
            Option : ["HYPERTEXT MARKUP LANGUAGE","HTML","HTML","HTML"],
            correctAns : "HYPERTEXT MARKUP LANGUAGE",
      },
      {
            question :"CSS stands for _________.",
            Option : ["CASCADING STYLE SHEET","HTML","HTML","HTML"],
            correctAns : "CASCADING STYLE SHEET",
      },
      {
            question :"USB stands for _________.",
            Option : ["Universal Serial Bus","HTML","HTML","HTML"],
            correctAns : "Universal Serial Bus",
      },
      {
            question :"JS stands for _________.",
            Option : ["JAVA SCRIPT","HTML","HTML","HTML"],
            correctAns : "JAVA SCRIPT",
      },
      {
            question :"RAM stands for _________.",
            Option : ["random access memory","HTML","HTML","HTML"],
            correctAns : "random access memory",
      },
      {
            question :"DOM stands for _________.",
            Option : ["Document Object Model","HTML","HTML","HTML"],
            correctAns : "Document Object Model",
      },
];
function renderquestion(){
      displayQuestion.innerHTML = questions[indexValue].question;
      for(var i=0; i<questions[indexValue].Option.length; i++){
            var optValue = questions[indexValue].Option[i];
            var correctValue = questions[indexValue].correctAns;
            

           answerParent.innerHTML += ` <div class="col-md-6 py-2">
           <button 
           onclick="checkQuestion( '${optValue}' , '${correctValue}' )"
           type="button"
           class=" options-hover shadow 
           btn
           p-3
           bg-
           w-100
           txt-primary
           rounded-pill
           d-block 
           fw-bold
           "
           >
           ${questions[indexValue].Option[i]}
           </button>
           </div>`;
      }
 totalQuestionnumber.innerHTML = questions.length
 currentQuestionnumber.innerHTML = indexValue + 1 ;
}
renderquestion();
 function nextQuestion(){
       answerParent.innerHTML = "";
       if(indexValue +1 == questions.length){
              alert("QUESTIONS END");
              var per = marks/6*100;
              percentage.innerHTML = per.toFixed(2) 
              resultDisplay.style.display = "block"
              questionDispaly.style.display = "none"
              
              
       }else{
            indexValue++;
            renderquestion();
       }
 }
 function checkQuestion(optValue,correctValue){
if(optValue == correctValue){
      marks++
      console.log(marks)
}
nextQuestion()
 }