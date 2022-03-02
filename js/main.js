const text = document.querySelector('input#text-ipt');
const addBtn = document.querySelector('button#add-btn');
const todoArea = document.querySelector('div#todo-area');
let i = 0;
let items = [];

addBtn.addEventListener('click', () => {
    items[i] = `
        <div class="items" id="item-${i}">
            <input class="text-item" id="value-${i}" type="text" value="${text.value}" disabled>
            <a class="remove-btn" onclick="removeItem(${i})"><img src="images/trash.svg"></a>
        </div>`;
    todoArea.innerHTML += items[i];
    text.value = '';
    i++;
});

function removeItem(i){
    var item = document.querySelector(`div#item-${i}`);
    item.remove();
}