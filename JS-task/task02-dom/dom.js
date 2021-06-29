const bookList = [
    { title: 'Don Quixote', isRead: true, author: 'Miguel de Cervantes' },
    { title: 'Lord of the Rings', isRead: false, author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerers Stone', isRead: true, author: ' J.K. Rowling' },
    { title: 'And Then There Were None', isRead: true, author: 'Agatha Christie' },
    { title: 'Alices Adventures in Wonderland', isRead: false, author: 'Lewis Carroll' },
    { title: 'The Lion, the Witch, and the Wardrobe', isRead: true, author: 'C.S. Lewis' },
    { title: 'Love in the Time of Cholera', isRead: true, author: 'Gabriel García Márquez' },
]

function listMyBooks(bookList) {
    
  
   
  for (let i = 0; i < this.bookList.length; i++) {
    if (bookList[i].isRead = true) {
      let ul = document.createElement(`ul#container`);  
      let newContent = bookList[i].createTextNode = `<strong>Ezt a könyvet már olvastad: </strong> `+ `${aElementList[i].innerHTML}`;
      ul.appendChild(newContent);
      let currentUl = document.getElementById("ul#container"); 
      document.body.insertBefore(ul, currentUl); 
    }
    else {
      let ul = document.createElement(`ul#container`);  
      let newContent = bookList[i].createTextNode = `${aElementList[i].innerHTML}`;
      ul.appendChild(newContent);
      let currentUl = document.getElementById("ul#container"); 
      document.body.insertBefore(ul, currentUl); 
    }
  }        
}




function configStyle() {
    const s =  document.getElementsByTagName("section");
    s.style.border='3px solid red';

    const d =  document.getElementsByTagName("div");
    d.style.display='flex';
    d.style.justifyContent='center';

    const p =  document.getElementsByTagName("p");
    p.style.textAlign='center';
    p.style.color='red';
}

listMyBooks();
configStyle();
export { listMyBooks, configStyle };