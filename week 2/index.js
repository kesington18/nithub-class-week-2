// class GLE {
//     engine: Engine;
//     doors: Door[];
//     seats: Seat[]
// }
// const gle = new GLE();
// gle.engine.model
// class Engine {
//     model: string
// }
// class Door {
// }
// class Seat {
// }
/* class Lib {
  books: string[];
  availableBooks: string[];

  constructor(books: string[]) {
    this.books = books;
    this.availableBooks = [...books];
  }

  borrow(name: string): string {
    if (this.availableBooks.includes(name)) {
      const idx = this.availableBooks.indexOf(name);
      this.availableBooks.splice(idx, 1);
      return name;
    }

    // console.log("SOrry not avaialable");
    return "";
  }
}

const bookz = ["A", "B", "C"];
const library = new Lib(bookz);

library.borrow("A");
library.borrow("A"); */
// console.log(library);
// console.log(bookz);
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.borrow = function () {
        console.log("borrrows books and returns.");
    };
    return User;
}());
var Book = /** @class */ (function () {
    function Book(name, noInStock) {
        this.name = name;
        this.noInStock = noInStock;
    }
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(name) {
        this.borrowedBooks = [];
        this.name = name;
    }
    Member.prototype.borrowBook = function (book) {
        if (!this.borrowedBooks.includes(book)) {
            if (book.noInStock > 0) {
                this.borrowedBooks.push(book);
                book.noInStock--;
            }
            console.log("".concat(book.name, " borrowed by ").concat(this.name));
        }
    };
    Member.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index != -1) {
            this.borrowedBooks.splice(index, 1);
            book.noInStock++;
        }
        console.log(book.noInStock);
    };
    return Member;
}());
var Libz = /** @class */ (function () {
    function Libz() {
        this.books = [];
    }
    Libz.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Libz.prototype.showAvailableBooks = function () {
        // this.books.forEach((book) => {
        //   if (book.isAvailable) {
        //     console.log(book);
        //   }
        // });
    };
    return Libz;
}());
var book1 = new Book("To Kill a Mockingbird", 5);
var book2 = new Book("1984", 9);
var book3 = new Book("The Great Gatsby", 6);
var book4 = new Book("Moby Dick", 10);
var lib2 = new Libz();
lib2.addBook(book1);
lib2.addBook(book2);
// lib2.showAvailableBooks()
var dayo = new Member("Dayo");
dayo.borrowBook(book1);
dayo.borrowBook(book1);
var jane = new Member("Jane");
jane.borrowBook(book1);
jane.returnBook(book1);
dayo.returnBook(book1);
dayo.returnBook(book1);
// console.log(dayo.borrowedBooks);
var Heart = /** @class */ (function () {
    function Heart() {
    }
    Heart.prototype.beat = function () {
        console.log("heart is beating");
    };
    return Heart;
}());
var human = /** @class */ (function () {
    function human() {
        this.heart = new Heart();
    }
    human.prototype.live = function () {
        console.log("i am alive");
        this.heart.beat();
    };
    return human;
}());
var person = new human();
person.live();
