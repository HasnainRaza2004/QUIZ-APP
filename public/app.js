// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import {getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALuuAm6TETlLRSpXX1dJ00xKFQ1cPL5tI",
  authDomain: "quizapp-1fbb6.firebaseapp.com",
  databaseURL: "https://quizapp-1fbb6-default-rtdb.firebaseio.com",
  projectId: "quizapp-1fbb6",
  storageBucket: "quizapp-1fbb6.appspot.com",
  messagingSenderId: "760430754629",
  appId: "1:760430754629:web:3360473ac65e5a8f625c2c",
  measurementId: "G-Z648P0T6JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);








var displayQuestion = document.getElementById("displayQuestion");
var answerParent = document.getElementById("answerParent");
var currentQuestionnumber = document.getElementById("currentQuestionnumber");
var totalQuestionnumber = document.getElementById("totalQuestionnumber");
var questionDispaly = document.getElementById("questionDispaly");
var resultDisplay = document.getElementById("resultDisplay");
var percentage = document.getElementById("percentage");
var indexValue = 0;
var marks = 0;

var obj = {
      questionno1:"HTML stands for _________.",
      Option : ["HYPERTEXT MARKUP LANGUAGE","HTML","HTML","HTML"],
      correctAns : "HYPERTEXT MARKUP LANGUAGE",
      questionno2:"CSS stands for _________.",
      Option : ["CASCADING STYLE SHEET","HTML","HTML","HTML"],
      correctAns : "CASCADING STYLE SHEET",
      questionno3:"USB stands for _________.",
      Option :  ["Universal Serial Bus","HTML","HTML","HTML"],
      correctAns : "Universal Serial Bus",
      questionno4:"JS stands for _________.",
      Option : ["JAVA SCRIPT","HTML","HTML","HTML"],
      correctAns : "JAVA SCRIPT",
      questionno5:"RAM stands for _________.",
      Option : ["random access memory","HTML","HTML","HTML"],
      correctAns : "random access memory",
      questionno6:"DOM stands for _________.",
      Option : ["Document Object Model","HTML","HTML","HTML"],
            correctAns : "Document Object Model",
};

const QUESTIONS = ref(db, "Questions/" + no);


//[
//       {
//             question :"HTML stands for _________.",
//             Option : ["HYPERTEXT MARKUP LANGUAGE","HTML","HTML","HTML"],
//             correctAns : "HYPERTEXT MARKUP LANGUAGE",
//       },
//       {
//             question :"CSS stands for _________.",
//             Option : ["CASCADING STYLE SHEET","HTML","HTML","HTML"],
//             correctAns : "CASCADING STYLE SHEET",
//       },
//       {
//             question :"USB stands for _________.",
//             Option : ["Universal Serial Bus","HTML","HTML","HTML"],
//             correctAns : "Universal Serial Bus",
//       },
//       {
//             question :"JS stands for _________.",
//             Option : ["JAVA SCRIPT","HTML","HTML","HTML"],
//             correctAns : "JAVA SCRIPT",
//       },
//       {
//             question :"RAM stands for _________.",
//             Option : ["random access memory","HTML","HTML","HTML"],
//             correctAns : "random access memory",
//       },
//       {
//             question :"DOM stands for _________.",
//             Option : ["Document Object Model","HTML","HTML","HTML"],
//             correctAns : "Document Object Model",
//       },
// ];



addBtn.onclick = function(){
      let obj  = {
          todo:todoInp.value,
      }
  
      const newTodoKey = push(child(ref(db), 'posts')).key
  
  
      obj.key = newTodoKey
  
  
      set(ref(db, 'todos/' + newTodoKey), obj);
  
  }






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