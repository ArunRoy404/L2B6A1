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


