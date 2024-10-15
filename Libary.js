"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libary = void 0;
class Libary {
    constructor(books) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
    findBookById(id) {
        return this.books.find(book => book.id === id);
    }
    listAllBooks() {
        this.books;
    }
}
exports.Libary = Libary;
