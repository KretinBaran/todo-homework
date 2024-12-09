const inputEl = (document.getElementsByClassName('app__controls-input'))[0]
const btnEl = (document.getElementsByClassName('app__controls-button'))[0]
const listEl = (document.getElementsByClassName('app__list'))[0]


let counter = 1

const data = [
    
]

data.forEach((item) => {
    if(item.id > counter) {
        counter = item.id + 1
    }
})

function createTask(objectData) {
    const root = document.createElement('div')
    root.classList.add('app__list-item')
    
    if (objectData.isDone === true) {
        root.classList.add('app__list-item_done')
    }

    const input = document.createElement('input')
    input.classList.add('app__list-checkbox')
    if(objectData.isDone === true) {
        input.checked = true
    }

   

    input.type = 'checkbox'

    const txt = document.createElement('p')
    txt.classList.add('app__list-item-text')
    txt.innerText = objectData.text

    const btn = document.createElement('button')
    btn.classList.add('app__list-btn')

    const img = document.createElement('img')
    img.src='/images/trash.png'
    img.alt = 'trash'

    btn.appendChild(img)

    root.appendChild(input)
    root.appendChild(txt)
    root.appendChild(btn)

    input.addEventListener('change', () => {
        objectData.isDone = input.checked;
        if (input.checked) {
            root.classList.add('app__list-item-done');
        } else {
            root.classList.remove('app__list-item-done');
        }
    });

    btn.addEventListener('click', () => {
        const index = data.findIndex(item => item.id === objectData.id);
        if (index !== -1) {
            data.splice(index, 1);
            render();
        }
    });

    return root
}

btnEl.addEventListener('click', ()=>{
    const textValue = inputEl.value
    data.push({
        id: counter++,
        text: textValue,
        isDone: false
    })
    render()
    inputEl.value = ''
})

function render() {
    listEl.innerHTML = ''
    for (let item of data) {
        const tmpElement = createTask(item)
        listEl.appendChild(tmpElement)
    }
}



render()






