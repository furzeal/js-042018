/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
 const newDiv = document.createElement('div');
 homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
 const newDiv = createDiv();
 homeworkContainer.appendChild(newDiv);
 */

const getRandomInt = m => Math.floor(Math.random() * Math.floor(m));
const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

function createDiv() {
    let result = document.createElement('div');

    result.classList.add('draggable-div');
    result.style.position = 'absolute';
    result.style.width = getRandomInt(90) + 10 + 'px';
    result.style.height = getRandomInt(90) + 10 + 'px';
    result.style.top = getRandomInt(400) + 'px';
    result.style.left = getRandomInt(600) + 'px';
    result.style.backgroundColor = getRandomColor();

    return result;
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
 const newDiv = createDiv();
 homeworkContainer.appendChild(newDiv);
 addListeners(newDiv);
 */
function addListeners(target) {
    const onMouseDown = e => {
        let div = e.target;

        div.shiftX = e.clientX - div.getBoundingClientRect().left;
        div.shiftY = e.clientY - div.getBoundingClientRect().top;
        document.focusedElement = div;

    };
    const onMouseUp = () => {
        document.focusedElement = null;
    };
    const onMouseMove = e => {
        if (document.focusedElement) {
            let div = document.focusedElement;

            div.style.left = e.clientX - div.shiftX + 'px';
            div.style.top = e.clientY - div.shiftY + 'px';
        }
    };

    target.addEventListener('mousedown', onMouseDown);
    target.addEventListener('dragstart', e => e.preventDefault());
    target.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {

    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);

    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);

    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
