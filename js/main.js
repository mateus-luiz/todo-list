const text = document.querySelector('input#text-ipt');
const addBtn = document.querySelector('button#add-btn');
const todoArea = document.querySelector('div#todo-area');
let i = 0;
let items = [];

addBtn.addEventListener('click', () => {
    items[i] = `
        <div id="item-${i}">
            <input class="text-item" id="value-${i}" type="text" value="${text.value}" disabled>
            <button class="remove-btn" type="button" onclick="removeItem(${i})">R</button>
        </div>`;
    const value = text.value;
    todoArea.innerHTML += items[i];
    text.value = '';
    i++;
});

function removeItem(i){
    var item = document.querySelector(`div#item-${i}`);
    item.remove();
}