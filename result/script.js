readyAnswers = 
[
    '<p>Если вы вообразили, что в коробке лежит что-то, что не имеет для вас никакой ценности, значит, вы считаете, что счастье и хорошие вещи не даются легко, и уже тем более не предназначены для вас.</p><p>Если вы представили себе что-то ценное, значит, вы рассчитываете однажды разбогатеть.</p><p>Если вы предполагали, что коробка пуста, значит, вы не верите в удачу и слишком практичны и реалистичны.</p>',
    '<p>Если вы определились с тем местом, где хотели бы провести остаток своей жизни, это значит, вам комфортно и спокойно там, где вы находитесь. Если вы выбрали какое-то очень далекое от вас место, то вы мечтатель и стремитесь к романтическим вещам.</p><p>Если вы не смогли представить себя что-то конкретное и вам было сложно представить себе такое место, значит, у вас нет сильной привязанности к людям и местам.</p>',
    '<p>Если вы выбрали оазис и пошли к нему, вам нравится быть первым на работе и уходить последним. Вам не нравятся правила и всякие там регламенты, и вы время от времени импульсивны. Вам нравится многозадачность, но иногда вы откладываете на потом какие-то дела и проекты.</p><p>Если вы пошли прямо в населенный пункт, в который и направлялись, вы тот человек, который умеет брать на себя ответственность. Вы тщательно планируете свой день и умеете использовать свое время. Вы соблюдаете сроки и предпочитаете завершать проекты, а не начинать новые.</p>',
    '<p>Те, кто решил начать с нуля – это люди, готовые брать на себя ответственность за свои действия, а не просто спокойно принимать изменения в жизни.</p><p>Если вы попытаетесь восстановить то, что уже было, вы боитесь ответственности за свою жизнь и за те события, которые с вами происходят.</p>',
    '<p>Если вы ответили, что можете все и вся, то вы тратите деньги по своему усмотрению и никто не может на вас повлиять. Вам очень сложно откладывать и экономить. У вас практически отсутствуют сбережения.</p><p>Если вы решили остаться дома, это означает, что вы обычно тратите все, что у вас есть, на покупки и продуты.</p><p>Если вы выбираете спортивные занятия, у вас есть привычка откладывать деньги на черный день.</p><p>Если вы решили прогуляться, вы тот, кто тратит деньги бережно и рационально.</p>',
    '<p>Те, кто пытается все исправить самостоятельно, обладают сильным характером и достаточно уверены в себе.</p><p>Если вы обратились к друзьям и близким, вы чувствуете себя немного неуверенно и не готовы взять на себя всю ответственность в сложных ситуациях.</p><p>Реалисты – это те, кто ищет практических советов у юристов, психологов, наставников или других специалистов.</p>',
    '<p>Те, кто хочет вернуться в детство, – это люди, которые не хотят ответственности.</p><p>Если вы выбрали настоящий период, вы зрелый и успешный человек.</p>',
    '<p>Если вы решили быть с людьми, которых любите, вы сентиментальны и очень эмоциональны.</p><p>Если вы предпочитаете побыть в одиночестве, вы часто можете быть недовольны и в плохом настроении.</p><p>Если вы решили развлечься, значит, вы спокойно подходите к жизни.</p><p>Если вы хотите провести день как обычно, вы смелы и гибки.</p>',
    '<p>Если вы выбираете, скажем, фотоальбом или что-то подобное, значит, вы сентиментальны.</p><p>Если вы достали какие-то ценные вещи, вы осторожны.</p><p>Если вы выбираете что-то дорогое, вы материалист.</p><p>Люди, выбирающие документы или ноутбук, практичны.</p>'
]; // здесь хранится пояснение к ответам

// эти функции взял с интернета
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
}

// функция, запускаемая при открытии страницы
function onLoad() {
    let answersList = document.getElementById('answers-list'); // элемент списка с ответами пользователя
    let readyAnswersList = document.getElementById('ready-answers-list'); // элемент списка с пояснениями
    let lenth_answers = parseInt(getCookie('question_id')); // кол-во ответов, получаем из куки
    // ниже перебираем ответы и заносим их в список
    for (let i = 0; i < lenth_answers; i++) {
        let ans_li_element = document.createElement('li');
        ans_li_element.textContent = getCookie(`answer${i}`); // получаем данные из куки
        answersList.appendChild(ans_li_element);

        let info_li_element = document.createElement('li');
        info_li_element.innerHTML = readyAnswers[i];
        readyAnswersList.appendChild(info_li_element);
    }
}