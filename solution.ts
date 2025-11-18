const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  if (typeof value === "boolean") return !value;
  return value;
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const filterByRating = (
  books: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  return books.filter((book) => book.rating >= 4);
};

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] => {
  return users.filter((user) => {
    if (typeof user.isActive !== "boolean") {
      throw new Error("isActive must be a boolean");
    }
    return user.isActive;
  });
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const mixedArray: (string | number)[] = [...arr1, ...arr2];
  const uniqueArray: (string | number)[] = [];

  for (let i = 0; i < mixedArray.length; i++) {
    let isUnique: boolean = true;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (mixedArray[i] === uniqueArray[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) uniqueArray[uniqueArray.length] = mixedArray[i];
  }

  return uniqueArray;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
