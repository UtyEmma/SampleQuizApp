document.addEventListener('DOMContentLoaded', quizApp);

function quizApp(){

    // Create an array of all the questions with their answers indicating false for wrong answers and true for correct answers
    let fields = 
    [
        // An Object contaning a single question
        {
            id: 1,         // Question Id
            question: "Which of the following is the Capital of Nigeria ?", //Question
            answer: //Creating an array of the answers
            [
                { //creating an object containing the answers and a validity checker
                   answer: "Abuja",
                   validity: true     
                },

                {
                   answer: "Akwa Ibom",
                   validity: false     
                },

                {
                   answer: "Kano",
                   validity: false     
                },

                {
                   answer: "Lagos",
                   validity: false     
                }
            ]
        },

        {
            id: 2,
            question: "Who was the first President of the United States ?",
            answer: 
            [
                {
                   answer: "Olusegun Obasanjo",
                   validity: false     
                },

                {
                   answer: "George Washington Bush",
                   validity: false    
                },

                {
                   answer: "George Washington",
                   validity: true     
                },

                {
                   answer: "Benjamin Franklin",
                   validity: false     
                }
            ]
        },


        {
            id: 3,
            question: "Who is the currrent President of Nigeria ?",
            answer: 
            [
                {
                   answer: "Umaru Musa Yar'Adua",
                   validity: false     
                },

                {
                   answer: "Asiwaju Bola Tinibu",
                   validity: false     
                },

                {
                   answer: "Prof Yemi Osinbanjo",
                   validity: false     
                },

                {
                   answer: "Muhammed Buhari",
                   validity: true     
                }
            ]   
        },


        {
            id: 4,
            question: "Who is the richest man in the World ?",
            answer: 
            [
                {
                   answer: "Aliko Dangote",
                   validity: false     
                },

                {
                   answer: "Jeff Bezos",
                   validity: true   
                },

                {
                   answer: "Bill Gates",
                   validity: false     
                },

                {
                   answer: "Mark Zukerberg",
                   validity: false     
                }
            ]
        },


        {
            id: 5,
            question: "Which country has the largest population in the world ?",
            answer:
            [
                {
                   answer: "United States of America",
                   validity: false
                },

                {
                   answer: "United Kingdom",
                   validity: false 
                },

                {
                   answer: "Nigeria",
                   validity: false     
                },

                {
                   answer: "People's Republic of China",
                   validity: true     
                }
            ]
        }
    ]


    window.onload = function(){ //Check wethrer the window is loaded before running the function
       
        let x = 1; //set x to default value 1 to be used for checking the current question id
        let score = 0;  //set score to default value 0 for incrementing thwe scores when a question is correctly answered

        //Get all the elements from the HTML DOM
        let question = document.getElementById("question");
        let answers = document.getElementsByClassName("answer");
        let next = document.getElementById("next");

        //loop through the field's array to get each element
        for(let i = 0; i < fields.length; i++){

            id = fields[i].id; // get the value of the id of the question
            if(id == x){ //if the value of the question id is set to the value of x which is one, then the program runs
                question.innerHTML = fields[i].question; //pick the particular question in the current id and input it in the question h1
                

                singleAnswer = fields[i].answer; //get the answer in the field 
                for(i=0; i < singleAnswer.length; ){ //to loop through to return an answer
                    answer = singleAnswer[i].answer; //return the value of the loopin a variable
                    for(i=0; i < answers.length; i++){ //loop into the array of values returned by document.getElementsByClassName("answer") ie the li holding the answers) (note that this array is an HTML Collection and not exactly an array)
                        
                        answers_array = Array.from(answers); //Hence, make the HTML collection an array and catch it in a variable
                        answers_array.forEach(function(answer){ //Loop into the array returned from the HTML Collection using forEach loop
                        
                        answer.onclick = function(){ //initialize the function on a click event on each of the lis from the loop 
                            answer_text = answer.innerText; //get the innerText content of each of the lis
                            for(let i = 0; i < fields.length; i++){ //loop again into the fields array to get each field for passing into the lis
                                let answer = fields[i].answer; //catch the returned values in a variable
                                
                                for(let i = 0; i < answer.length; i++){ // loop into the returned variable
                                    if(answer[i].answer == answer_text){ //check if the value of the current looped is equal to the value of the li's content
                                  
                                        if(answer[i].validity == true){ //check if the value of the returned loop has true attributed to its validity
                                                
                                             returnTrueParent(answer[i].answer, document.getElementsByClassName("answer")); //if the above is true, return this function defined in number 348
                                        
                                        // TRYING TO INCREMENT THE SCORES
                                            score =  score+2; // set the score to increment by 2 on every iteration
                                                document.getElementById("score-board").innerText = score+" points"; //update the text of the score on the HTML
                                                document.getElementById("score_points").innerText = score+" points"; //update the text of the score on the HTML. To be shown in the final part           

                                               setTimeout(next_question, 1000) //set a timeout of one second after which it runs the next question function to being up the next question     
                                            
                                        }else{

                                            returnFalseParent(answer[i].answer, document.getElementsByClassName("answer")); //if the validity is not equal to true, then it is false

                                            for(let i = 0; i < fields.length; i++){ //loop through the fields array to get the values
                                                let answer = fields[i].answer;
                                                    for(let i = 0; i < answer.length; i++){ //loop again
                                                        let answers = answer[i]; //get the innerText content of each of the lis
                                                        if(answers.answer == answer_text){  //check if the values on the HTML is the same as that of the array
                                                            answer_parent = returnParent(answer_text, document.getElementsByClassName("answer")); //returns the parent of the class answer, basically runs function in line 334
                                                            answer_parent = answer_parent.parentElement //get the parent element of the particular answer
                                                            all_answers = answer_parent.getElementsByClassName("answer")
                                                            all_answers = Array.from(all_answers);

                                                            for(let i = 0; i < fields.length; i++){
                                                                let answer = fields[i].answer;
                                                                for(let i = 0; i < answer.length; i++){
                                                                    if(answer[i].answer == answer_text){
                                                                        answer_parent = returnParent(answer_text, document.getElementsByClassName("answer"));
                                                                        answer_parent = answer_parent.parentElement

                                                                        newanswers = answer_parent.getElementsByClassName('answer');
                                                                        // new_answers = newanswers.innerText;
                                                                        for(i=0; i < newanswers.length; i++){
                                                                            new_answers = newanswers[i].innerHTML;
                                                                        
                                                                        
                                                                            for(let i = 0; i < fields.length; i++){
                                                                                let answer = fields[i].answer;
                                                                                for(let i = 0; i < answer.length; i++){
                                                                                    let answers = answer[i];
                                                                                    // console.log(answer[i].validity)
                                                                                    if(answers.validity == true){
                                                                                        if(answers.answer === new_answers){
                                                                                            returnTrueParent(answers.answer, document.getElementsByClassName("answer"));
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }                                                                        
                                                                        }

                                                                    }
                                                                }
                                                            }

                                                        }                                                      
                                                        
                                                    }
                                                }

                                                // next_question;
                                            
                                                setTimeout(next_question, 1000)   
                                            }   
                                        }
                                    }
                                
                                }
                            }
                        })
                    }

                
                i++

            

                x = x+1;

                function next_question(){
                    f = x++;

                    
                    answer = document.getElementsByClassName("answer");
                    for(i=0; i < answer.length; i++){
                        answer[i].style.background = "white";
                        answer[i].style.color = "teal";
                    }

                    for(let i = 0; i < fields.length; i++){
                    if(fields[i].id == f){
                        question.innerHTML = fields[i].question; 
                        
                        singleAnswer = fields[i].answer;
                        for(i=0; i < singleAnswer.length; i++){
                            answer = singleAnswer[i].answer;
                            for(i=0; i < answers.length; i++){
                                answers[i].innerHTML = singleAnswer[i].answer;
                            }
                        }
                    }

                    if(f > fields.length){
                        document.getElementById("quiz-completed").style.visibility="visible";
                    }
                }   
                    
                }
                
                next.onclick = function(score){
                    f = x++;

                    
                    answer = document.getElementsByClassName("answer");
                    for(i=0; i < answer.length; i++){
                        answer[i].style.background = "white";
                        answer[i].style.color = "teal";
                    }

                    for(let i = 0; i < fields.length; i++){
                    if(fields[i].id == f){
                        question.innerHTML = fields[i].question; 
                        
                        singleAnswer = fields[i].answer;
                        for(i=0; i < singleAnswer.length; i++){
                            answer = singleAnswer[i].answer;
                            for(i=0; i < answers.length; i++){
                                answers[i].innerHTML = singleAnswer[i].answer;
                            }
                        }
                    }

                    if(f==6){
                        document.getElementById("quiz-completed").style.visibility="visible";
                    }
                };

        
        }

        

        
    }
}
}
}

//A function that returns the parent element of a particular text where the validity is true
function returnParent(text, parent){

    newParent = Array.from(parent);

    for(i=0; i < newParent.length;  i++){
        if(newParent[i].innerHTML == text){
            return(newParent[i])
        }
    }
    
}

function returnTrueParent(text, parent){

    newParent = Array.from(parent);

    for(i=0; i < newParent.length;  i++){
        if(newParent[i].innerHTML == text){
            // console.log(newParent[i])
            newParent[i].style.background = "green";
            newParent[i].style.color = "white"
        }
    }
    
}

function returnFalseParent(text, parent){

    newParent = Array.from(parent);

    for(i=0; i < newParent.length;  i++){
        if(newParent[i].innerHTML == text){
            // console.log(newParent[i])
            newParent[i].style.background = "red";
            newParent[i].style.color = "white"
        }
    }
    
}

// returnParent("Abuja", document.getElementsByClassName("answer"));

}