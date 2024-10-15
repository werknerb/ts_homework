import { Book } from "./book";

export class Libary{
    books: Book[];

    constructor(books: Book[]){
        this.books = books;
         
    }

     addBook(book: Book): void{
       this.books.push(book)
    }

     removeBook(id: string): void {
        this.books = this.books.filter(book => book.id !== id);
    }

    findBookById(id: string){
         return this.books.find(book => book.id === id)
    }

     listAllBooks(): void{
         this.books;
     }
}

