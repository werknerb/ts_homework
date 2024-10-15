"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    borrowBook(libarty, bookId) {
        const book = libarty.findBookById(bookId);
        if (book) {
            libarty.removeBook(bookId);
        }
        return book;
    }
}
exports.User = User;
