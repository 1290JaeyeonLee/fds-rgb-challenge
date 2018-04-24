//랜덤으로 문자열 만드는 코드
//랜덤으로 만든 문자열을 color-code에 넣기

function randomNumber(){
  return Math.floor(256 * Math.random());
}

function randomColorCode(){
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

let correctAnswer;
let score = 0;
//전역변수

document.querySelector('.score').textContent = score;

//함수로 묶는 작업 : 코드를 재사용하기 위해
function newStage(){
  const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()];

  boxes.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index];
  });
  
  //세개 중에 하나 골라서 정답으로 정하고, 텍스트 표시
  correctAnswer = Math.floor(Math.random() * 3);
  colorCodeEl.textContent = colorCodes[correctAnswer];
}

const colorCodeEl = document.querySelector('.color-code');
// colorCodeEl.textContent = randomColorCode();
const boxes = document.querySelectorAll('.box');
//유사배열객체 - 생성자:NodeList

//클릭 했을때 맞으면 alert 틀리면 alert
boxes.forEach((el, index) => {
  el.addEventListener('click', () => {
    el.classList.add('large');
    if(correctAnswer === index){
      document.querySelector('.modal.right').classList.add('show');
      score++;
    } else {
      document.querySelector('.last-score').textContent = score;
      document.querySelector('.modal.wrong').classList.add('show');
      score = 0;
    }
    document.querySelector('.score').textContent = score;
  })
})

document.querySelector('.modal.right .close').addEventListener('click', () => {
  newStage();
  boxes.forEach(el => {
    el.classList.remove('large');
  })
  document.querySelector('.modal.right').classList.remove('show');
})

document.querySelector('.modal.wrong .close').addEventListener('click', () => {
  newStage();
  boxes.forEach(el => {
    el.classList.remove('large');
  })
  document.querySelector('.modal.wrong').classList.remove('show');
})

newStage();

