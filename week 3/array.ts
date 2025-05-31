class Person {
    books: string[]

    constructor(books: string[]) {
        this.books = books;
    }

    forEachElement(){
        this.books.forEach(book => console.log(book))
    }

    forFilter(letter: string){
        this.books.filter(n => {
            let filteredName = n.startsWith(letter);
            console.log(filteredName);
        })
    }

    findName(name: string){
        console.log(this.books.includes(name));
    }

    addName(name: string){
        this.books.push(name);
    }

    removeName(){
        this.books.pop();
    }

    findIndexes(name: string){
        this.books.findIndex((n) => {
            console.log(n === name);
        })
    }

    join(){
        let newArray = this.books.join(" and ");
        console.log(newArray);
    }

    arrayLength(){
        let arrayLength = this.books.length;
        console.log(arrayLength);
    }

    fillArray(name: string, start: number, end: number){
        let filledArray = this.books.fill(name, start, end);
        console.log(filledArray);
    }

    mapArray(){
        this.books.map(name => {
            if (name.length > 4) {
                console.log(name);
            }
        })
    }
}

const book1 = ["lola", "back", "right", "left", "eniola"];
const book2 = new Person(book1);
// console.log(book2);
// book2.forEachElement();
// book2.forFilter("l");
// book2.findName("lola")
// book2.addName("eniola");
// book2.findIndexes("back");
// book2.join();
// book2.arrayLength();
// book2.fillArray("james", 1, 3);
book2.mapArray()
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