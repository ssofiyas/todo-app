let lists = JSON.parse(localStorage.getItem('todoLists')) || [
    { id: 1, name: 'Koulu', tasks: [{ id: 101, text: 'Lue kappale 3', done: false }] },
    { id: 2, name: 'Koti', tasks: [{ id: 201, text: 'Siivoa keittiö', done: false }] }
];
let currentListId = lists[0]?.id || null;

// DOM-elementit
const listsContainer = document.querySelector('#listsContainer');
const newListInput = document.querySelector('#newListInput');
const createListBtn = document.querySelector('#createListBtn');
const deleteListBtn = document.querySelector('#deleteListBtn');
const currentListTitle = document.querySelector('#currentListTitle');
const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const errorMessage = document.querySelector('#errorMessage');
const progressFill = document.querySelector('#progressFill');
const diaryText = document.querySelector('#diaryText');

const totalListsSpan = document.querySelector('#totalLists');
const totalTasksSpan = document.querySelector('#totalTasks');
const doneTasksSpan = document.querySelector('#doneTasks');

// Motivaatiolainaukset
const quotes = [
    { text: 'Asioilla, joista olet kiitollinen, on tapana lisääntyä.', author: 'Tony Robbins' },
    { text: 'Mitä mieli voi kuvitella, sen se voi saavuttaa.', author: 'Napoleon Hill' },
    { text: 'Aloita, vaikka et olisi mahtava.', author: 'Zig Ziglar' },
    { text: 'Tämä hetki on tärkein.', author: 'Eckhart Tolle' },
    { text: 'Usko itseesi.', author: 'Brené Brown' }
];

// Näytä motivaatioikkuna
function showMotivation() {
    const modal = document.querySelector('#motivationModal');
    const quoteText = document.querySelector('#quoteText');
    const quoteAuthor = document.querySelector('#quoteAuthor');
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = '"' + random.text + '"';
    quoteAuthor.textContent = '- ' + random.author;
    modal.style.display = 'block';
}

// Sulje ikkuna
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(showMotivation, 100);
    
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.querySelector('#motivationModal').style.display = 'none';
    });
    
    document.querySelector('#closeModalBtn').addEventListener('click', () => {
        document.querySelector('#motivationModal').style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === document.querySelector('#motivationModal')) {
            document.querySelector('#motivationModal').style.display = 'none';
        }
    });
});

// Päiväkirja
diaryText.value = localStorage.getItem('weeklyDiary') || '';
diaryText.addEventListener('input', () => {
    localStorage.setItem('weeklyDiary', diaryText.value);
});

// Tallenna
function save() {
    localStorage.setItem('todoLists', JSON.stringify(lists));
}

// Näytä listat
function renderLists() {
    listsContainer.innerHTML = '';
    
    lists.forEach(list => {
        const li = document.createElement('li');
        li.textContent = list.name;
        li.dataset.id = list.id;
        
        if (list.id === currentListId) {
            li.classList.add('active');
        }
        
        li.addEventListener('click', () => {
            currentListId = list.id;
            renderLists();
            renderTasks();
        });
        
        listsContainer.appendChild(li);
    });
    
    updateStats();
}

// Näytä tehtävät
function renderTasks() {
    if (!currentListId) {
        taskList.innerHTML = '<li style="color:#999; text-align:center;">Valitse lista</li>';
        progressFill.style.width = '0%';
        currentListTitle.textContent = 'Valitse lista';
        return;
    }
    
    const list = lists.find(l => l.id === currentListId);
    if (!list) return;
    
    currentListTitle.textContent = list.name;
    taskList.innerHTML = '';
    
    if (list.tasks.length === 0) {
        taskList.innerHTML = '<li style="color:#999; text-align:center;">Ei tehtäviä</li>';
        progressFill.style.width = '0%';
        return;
    }
    
    list.tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        const left = document.createElement('div');
        left.className = 'task-left';
        
        const circle = document.createElement('div');
        circle.className = 'circle' + (task.done ? ' done' : '');
        circle.addEventListener('click', () => {
            task.done = !task.done;
            save();
            renderTasks();
        });
        
        const span = document.createElement('span');
        span.className = 'task-text' + (task.done ? ' done' : '');
        span.textContent = task.text;
        
        left.appendChild(circle);
        left.appendChild(span);
        
        const del = document.createElement('button');
        del.className = 'delete-task';
        del.textContent = '✕';
        del.addEventListener('click', () => {
            list.tasks = list.tasks.filter(t => t.id !== task.id);
            save();
            renderTasks();
        });
        
        li.appendChild(left);
        li.appendChild(del);
        taskList.appendChild(li);
    });
    
    const done = list.tasks.filter(t => t.done).length;
    const pct = list.tasks.length ? (done / list.tasks.length) * 100 : 0;
    progressFill.style.width = pct + '%';
    
    updateStats();
}

// Päivitä tilastot
function updateStats() {
    totalListsSpan.textContent = lists.length;
    
    let total = 0;
    let done = 0;
    
    lists.forEach(list => {
        total += list.tasks.length;
        done += list.tasks.filter(t => t.done).length;
    });
    
    totalTasksSpan.textContent = total;
    doneTasksSpan.textContent = done;
}

// Luo uusi lista
createListBtn.addEventListener('click', () => {
    const name = newListInput.value.trim();
    
    if (name.length < 2) {
        alert('Liian lyhyt nimi');
        newListInput.style.border = '2px solid red';
        return;
    }
    
    newListInput.style.border = '';
    
    lists.push({ 
        id: Date.now(), 
        name: name, 
        tasks: [] 
    });
    
    newListInput.value = '';
    save();
    renderLists();
});

// Poista lista
deleteListBtn.addEventListener('click', () => {
    if (!currentListId) {
        alert('Valitse lista');
        return;
    }
    
    if (confirm('Poista lista?')) {
        lists = lists.filter(l => l.id !== currentListId);
        currentListId = lists[0]?.id || null;
        save();
        renderLists();
        renderTasks();
    }
});

// Lisää tehtävä
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!currentListId) {
        errorMessage.textContent = 'Valitse lista ensin';
        return;
    }
    
    const text = taskInput.value.trim();
    
    if (text.length < 2) {
        errorMessage.textContent = 'Tehtävä liian lyhyt';
        taskInput.classList.add('error-border');
        return;
    }
    
    errorMessage.textContent = '';
    taskInput.classList.remove('error-border');
    
    const list = lists.find(l => l.id === currentListId);
    
    list.tasks.push({ 
        id: Date.now(), 
        text: text, 
        done: false 
    });
    
    taskInput.value = '';
    save();
    renderTasks();
});

// Käynnistä
renderLists();
renderTasks();