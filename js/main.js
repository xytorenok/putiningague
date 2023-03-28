const code = document.getElementById('code')
const outputTest = document.getElementById('code-output')
const outputTestBefore = document.getElementById('code-output-before')
const outputTestAfter = document.getElementById('code-output-after')
const face = document.querySelector('.face')
const putin = document.querySelector('.putin')
const editor = document.getElementById('editor')
const submit = document.getElementById('next')
const audioWelcomeToHaager = document.getElementById('audio-welcome-to-haager')
const detailsMissionInfo = document.getElementById('mission-info')
const detailsTaskInfo = document.getElementById('task-info')
const detailsExampleInfo = document.getElementById('example-info')

const solution = 'justify-content:end'

textMission()

closeTab()

function textMission() {
  detailsMissionInfo.addEventListener('toggle', function () {
    if (detailsMissionInfo.open) {
      detailsMissionInfo.querySelector('audio').volume = 0.4
      detailsMissionInfo.querySelector('audio').play();
      detailsTaskInfo.open = false
      detailsExampleInfo.open = false
    } else {
      detailsMissionInfo.querySelector('audio').pause();
      detailsMissionInfo.querySelector('audio').currentTime = 0;
    }
  });
  detailsTaskInfo.addEventListener('toggle', function () {
    if (detailsTaskInfo.open) {
      detailsMissionInfo.open = false
      detailsExampleInfo.open = false
    }
  });
  detailsExampleInfo.addEventListener('toggle', function () {
    if (detailsTaskInfo.open) {
      detailsMissionInfo.open = false
      detailsTaskInfo.open = false
    }
  })

}

function closeTab() {

}

code.focus();

code.addEventListener('input', () => {
  const [prop, value] = code.value.split(':')
  const cleanValue = value.replace(';', '');
  face.style[prop] = cleanValue;
  if(cleanValue !== 'end'){
    face.style[prop] = 'flex-start'
  }
  if(cleanValue == 'center'){
    face.style[prop] = 'center'
  }
  checkSolution()
});


function checkSolution() {
  editor.classList.toggle('solved', code.value.replace(/(:) *|([^;]);?$/g, '$1$2') == solution)
  if (editor.classList.contains('solved')) {
    audioWelcomeToHaager.volume = 0.4
    audioWelcomeToHaager.play();
    putin.style.opacity = 0.8
  }
}

function missionComplete() {

}


code.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (editor.matches('.solved')) {
      showNext()
    } else {
      shake()
    }
  }
});

function shake() {
  editor.classList.add('shake')


  editor.onanimationend = () => {
    editor.classList.remove('shake')
  }
}

function showNext() {
  // audioWelcomeToHaager.play()
}

// -------------------------------------------

var currentPage = 1; // текущая страница
var totalPages = 10; // общее количество страниц
var pagesToShow = 5; // количество страниц, отображаемых на странице пагинации

var pagination = document.getElementById('pagination');
var pageLinks = document.getElementById('page-links');

// функция для генерации ссылок пагинации
function createPaginationLinks(page) {
  var links = '';
  var startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  var endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  for (var i = startPage; i <= endPage; i++) {
    if (i === page) {
      links += '<a href="#" class="active">' + i + '</a>';
    } else {
      links += '<a href="#">' + i + '</a>';
    }
  }

  pageLinks.innerHTML = links;
}

// отображаем первую страницу
createPaginationLinks(currentPage);

// обработчик клика на ссылке пагинации
pageLinks.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.tagName === 'A') {
    currentPage = parseInt(event.target.innerText);
    createPaginationLinks(currentPage);
  }
});

// обработчик клика на ссылке "Назад"
document.getElementById('prev-page').addEventListener('click', function (event) {
  event.preventDefault();

  if (currentPage > 1) {
    currentPage--;
    createPaginationLinks(currentPage);
  }
});

// обработчик клика на ссылке "Вперед"
document.getElementById('next-page').addEventListener('click', function (event) {
  event.preventDefault();

  if (currentPage < totalPages) {
    currentPage++;
    createPaginationLinks(currentPage);
  }
});