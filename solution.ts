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




type userType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: userType[]): userType[] => {
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




type arrayType = (string | number)[];
const getUniqueValues = (array1: arrayType, array2: arrayType): arrayType => {
  const uniqueArray: arrayType = [];
  const findUnique = (array: arrayType): void => {
    for (let i = 0; i < array.length; i++) {
      let isUnique: boolean = true;

      for (let j = 0; j < uniqueArray.length; j++) {
        if (array[i] === uniqueArray[j]) {
          isUnique = false;
          break;
        }
      }

      if (isUnique) uniqueArray[uniqueArray.length] = array[i];
    }
  };

  findUnique(array1);
  findUnique(array2);

  return uniqueArray;
};




type productType = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: productType[]): number => {
  if (products.length === 0) return 0;
  const totalPrice = products.reduce((acc, product) => {
    const productPrice = product.quantity * product.price;
    if (product.discount === undefined) return acc + productPrice;

    if (product.discount < 0 || product.discount > 100)
      throw new Error("Discount must be between 0 and 100");

    const discountedProductPrice =
      productPrice - productPrice * (product.discount / 100);
    return acc + discountedProductPrice;
  }, 0);

  return totalPrice;
};