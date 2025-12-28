let books = [];
let editId = 0;
function add() {
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value; 

    if(title&&author&&year) {
        books.push({ id, title, author, year });

    } else{
        alert('未輸入完整內容')
    }
    
    render();
    document.getElementById('editbtn').hidden = true

}

function removeById(id) {
    books = books.filter(u => u.id !== id);
    render();
}

function update() {
    const id = editId
    const index = books.findIndex(b => b.id == id);
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    if(title&&author&&year) {
        books[index] = { id, title, author, year };

    } else{
        alert('未輸入完整內容')
    }

    render();
    document.getElementById('editbtn').hidden = true
}

function editBook(id) {
    editId = id;
    document.getElementById('editbtn').hidden = false;
}

function render() {
    list.innerHTML = books.map(book => `
    <tr key="book.id">
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td><button class="delbtn" onclick="removeById(${book.id})">刪除</button></td>
        <td><button class="editbtn" onclick="editBook(${book.id})">編輯</button></td>
    </tr>
    `)
    .join('');
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('year').value = "";

}


document.addEventListener('DOMContentLoaded', () => {
  render()
})