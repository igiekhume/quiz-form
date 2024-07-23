document.getElementById("submit-btn").addEventListener("click", function(){
   let score = 0;
   const answers = {
    q1: "a",
    q2: "c",
    q3: "c",
    q4: "a"
   } 
   for(let question in answers){
    let seletedOption = document.querySelector(`input[name="${question}"]:checked`);
    if(seletedOption && seletedOption.value === answers[question]){
    score++
   } 
}
    alert(`Your score is ${score} out of ${Object.keys(answers).length}`);
});