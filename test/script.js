// функции из интернета
function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function on_startup() { // выполняется при открытии страницы
    window.questions = 
    [
        'На полу стоит неоткрытая коробка. Что в ней?',
        'Если бы вы могли выбрать одно место, чтобы провести остаток своей жизни, где бы это было?',
        'Вы целый день гуляете по пустыне и наконец замечаете населенный пункт, куда направляетесь. Но вдруг вы замечаете прекрасный оазис, который находится немного ближе. Куда вы решите пойти в первую очередь?',
        'Что бы вы сделали, если бы вдруг потеряли все?',
        'Предположим, завтра воскресенье. Как вы проведете свой день?',
        'Если бы у вас были проблемы, к кому бы вы обратились за помощью?',
        'Если бы вы могли выбирать, в каком периоде своей жизни вы хотели бы жить вечно (детство или настоящее), что бы вы выбрали?',
        'Если бы кто-то сказал вам, что вам осталось жить всего 24 часа, как бы вы их провели?',
        'Если бы вы могли спасти из огня только одну вещь, что бы это было?'
    ]; // список вопросов

    // если куки пустые (страница не открывалась) то ввести question_id, иначе загружаем переменую из куки
    if (document.cookie === '') {
        setCookie('question_id', '0');
        window.question_id = 0;
    } else {
        window.question_id = parseInt(getCookie('question_id'));
    }

    if (window.question_id === window.questions.length-1) {
        document.getElementById('send-btn').textContent = 'Завершить'; // если последний вопрос, то меняем текст кнопки на "Завершить"
    } else if (window.question_id === window.questions.length) {
        window.location.href = '../result/index.html'; // если вопросы закончились, переводим на другую страницу
    }
    document.getElementById('question').textContent = window.questions[window.question_id]; // выводим вопрос
}

function getAnswer() {
    let answer = document.getElementById('answer').value; // записываем ответ в answer

    let answer_name = `answer${String(window.question_id)}`; // получаем имя ответа для куки
    setCookie(answer_name, answer); // записываем ответ в куки
    window.question_id++;
    setCookie('question_id', String(window.question_id)); // обновляем и записываем question_id в куки
}