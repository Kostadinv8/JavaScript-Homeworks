let book = {
    title: 'tha robots of dawn, mockingjay',
    author: 'isaac asimov, suzanne collins',
    readinStatus: false, 

    readState () {
       const statusText = this.readingStatus ? 'Alrady read' : 'You still need to read';
       return `${statusText}   ${this.title} by  ${this.author}`; 

    }

    
};

book.title = prompt("set the book title");
book.author = prompt("set the book author");
book.readingStatus = prompt("set reading status") === 'true';    
    
console.log(book.readState());