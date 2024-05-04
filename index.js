var score1 = 0;
var score2 = 0;
function checkAnswer1(answer1) {
    const result1 = document.getElementById('result1');
    if (answer1 === 'a') {
        result1.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result1.style.color = 'green';
        score1 = 1;
    } else {
        result1.textContent = "Incorrect! Try again.";
        result1.style.color = 'red';
    }
    
 }
 function checkAnswer2(answer2) {
    const result2 = document.getElementById('result2');
    if (answer2 === 'a') {
        result2.textContent = "ถูกต้อง RMUTP หมายถึง มทร.พระนคร";
        result2.style.color = 'green';
        score2 = 1;
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
    }
}

function showScore() {
    const score = document.getElementById('score');
    var total = score1 + score2;
    if (total == 2) {
        score.textContent = "คุณได้รับ 2 คะแนน";
        score.style.color = 'pink';
    } else if (total == 1) {
        score.textContent = "คุณได้รับ 1 คะแนน";
        score.style.color = 'pink';
    } else {
        score.textContent = "คุณได้รับ 0 คะแนน";
        score.style.color = 'pink';
    }
    total = 0;
    score1 = 0;
    score2 = 0;
}

