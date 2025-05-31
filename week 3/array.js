var Person = /** @class */ (function () {
    function Person(books) {
        this.books = books;
    }
    Person.prototype.forEachElement = function () {
        this.books.forEach(function (book) { return console.log(book); });
    };
    Person.prototype.forFilter = function (letter) {
        this.books.filter(function (n) {
            var filteredName = n.startsWith(letter);
            console.log(filteredName);
        });
    };
    Person.prototype.findName = function (name) {
        console.log(this.books.includes(name));
    };
    Person.prototype.addName = function (name) {
        this.books.push(name);
    };
    Person.prototype.removeName = function () {
        this.books.pop();
    };
    Person.prototype.findIndexes = function (name) {
        this.books.findIndex(function (n) {
            console.log(n === name);
        });
    };
    Person.prototype.join = function () {
        var newArray = this.books.join(" and ");
        console.log(newArray);
    };
    Person.prototype.arrayLength = function () {
        var arrayLength = this.books.length;
        console.log(arrayLength);
    };
    Person.prototype.fillArray = function (name, start, end) {
        var filledArray = this.books.fill(name, start, end);
        console.log(filledArray);
    };
    Person.prototype.mapArray = function () {
        this.books.map(function (name) {
            if (name.length > 4) {
                console.log(name);
            }
        });
    };
    return Person;
}());
var book1 = ["lola", "back", "right", "left", "eniola"];
var book2 = new Person(book1);
// console.log(book2);
// book2.forEachElement();
// book2.forFilter("l");
// book2.findName("lola")
// book2.addName("eniola");
// book2.findIndexes("back");
// book2.join();
// book2.arrayLength();
// book2.fillArray("james", 1, 3);
book2.mapArray();
// console.log(book2);
/* class Person {
    private names: string[];

    constructor(initialNames: string[] = []) {
        this.names = initialNames;
    }

    addName(name: string): void {
        this.names.push(name);
    }

    // 2. Remove the last name
    removeLastName(): string | undefined {
        return this.names.pop(); // pop
    }

    // 3. Add a name to the beginning
    addNameToStart(name: string): void {
        this.names.unshift(name); // unshift
    }

    // 4. Remove the first name
    removeFirstName(): string | undefined {
        return this.names.shift(); // shift
    }

    // 5. Find a name
    findName(name: string): string | undefined {
        return this.names.find(n => n === name); // find
    }

    // 6. Filter names starting with a letter
    filterByLetter(letter: string): string[] {
        return this.names.filter(n => n.startsWith(letter)); // filter
    }

    // 7. Convert all names to uppercase
    toUpperCaseNames(): string[] {
        return this.names.map(n => n.toUpperCase()); // map
    }

    // 8. Check if any name is longer than a certain length
    hasLongName(length: number): boolean {
        return this.names.some(n => n.length > length); // some
    }

    // 9. Check if all names have more than 1 letter
    areAllValidNames(): boolean {
        return this.names.every(n => n.length > 1); // every
    }

    // 10. Sort names alphabetically
    sortNames(): void {
        this.names.sort(); // sort
    }

    // Utility: display the current names
    displayNames(): void {
        console.log("Current Names:", this.names);
    }
}

// Example usage
const group = new Person(["Ali", "Zara", "Bilal"]);

group.addName("Layla");
group.addNameToStart("Omar");
group.removeLastName();
group.toUpperCaseNames();
group.sortNames();
group.displayNames();
 */ 
