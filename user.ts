import { Libary } from "./Libary";

export class User{
   userId: string;
   name: string;
   email: string;
   
   constructor(userId: string,name: string, email: string){
    this.userId = userId;
    this.name = name;
    this.email = email;
   }

   borrowBook(libarty: Libary, bookId: string){
    const book = libarty.findBookById(bookId);
    if(book){
        libarty.removeBook(bookId)
    }
    return book;
   }
}