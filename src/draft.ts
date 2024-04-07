function concatenation(firstWord: string, secondWord: string) {
  console.log(`${firstWord} ${secondWord}`);
}
export { concatenation };

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.
interface MenuItem {
  name: string;
  price: number;
  category: "starter" | "main dish" | "dessert";
}

type Starters = MenuItem[];
type MainDishes = MenuItem[];
type Desserts = MenuItem[];
type Menu = Starters | MainDishes | Desserts;

const starters: Starters = [];
const mainDishes: MainDishes = [];
const desserts: Desserts = [];
const menu: MenuItem[] = [
  { name: "Caesar Salad", price: 9.99, category: "starter" },
  { name: "Garlic Bread", price: 4.99, category: "starter" },
  { name: "Tomato Soup", price: 6.99, category: "starter" },
  { name: "Grilled Chicken", price: 14.99, category: "main dish" },
  { name: "Spaghetti Carbonara", price: 12.99, category: "main dish" },
  { name: "Beef Burger", price: 11.99, category: "main dish" },
  { name: "Chocolate Cake", price: 7.99, category: "dessert" },
  { name: "Cheesecake", price: 8.99, category: "dessert" },
  { name: "Fruit Salad", price: 5.99, category: "dessert" },
  { name: "Bruschetta", price: 5.49, category: "starter" },
  { name: "Margherita Pizza", price: 10.99, category: "main dish" },
  { name: "Tiramisu", price: 7.49, category: "dessert" },
  { name: "Chicken Wings", price: 9.49, category: "starter" },
  { name: "Fish and Chips", price: 13.99, category: "main dish" },
  { name: "Apple Pie", price: 6.49, category: "dessert" },
  { name: "Green Salad", price: 8.99, category: "starter" },
  { name: "Mushroom Soup", price: 7.49, category: "starter" },
  { name: "BBQ Ribs", price: 16.99, category: "main dish" },
  { name: "Lasagna", price: 11.99, category: "main dish" },
  { name: "Key Lime Pie", price: 6.99, category: "dessert" },
  { name: "Caprese Salad", price: 10.49, category: "starter" },
  { name: "Pasta Primavera", price: 12.99, category: "main dish" },
  { name: "Ice Cream Sundae", price: 5.99, category: "dessert" },
  { name: "French Onion Soup", price: 7.99, category: "starter" },
  { name: "Beef Stroganoff", price: 14.49, category: "main dish" },
  { name: "Lemon Sorbet", price: 4.99, category: "dessert" },
  { name: "Spinach Salad", price: 8.49, category: "starter" },
  { name: "Clam Chowder", price: 8.99, category: "starter" },
  { name: "Shrimp Scampi", price: 15.99, category: "main dish" },
  { name: "Penne alla Vodka", price: 13.49, category: "main dish" },
  { name: "Red Velvet Cake", price: 7.99, category: "dessert" },
  { name: "Stuffed Mushrooms", price: 9.99, category: "starter" },
  { name: "Beef Tenderloin", price: 19.99, category: "main dish" },
  { name: "Chocolate Mousse", price: 6.49, category: "dessert" },
  { name: "Greek Salad", price: 9.49, category: "starter" },
  { name: "Chicken Caesar Wrap", price: 10.99, category: "main dish" },
  { name: "Panna Cotta", price: 7.49, category: "dessert" },
];

function menuSorter(menu: Menu): void {
  menu.forEach((item) => {
    if (item.category === "starter") {
      starters.push(item);
    } else if (item.category === "main dish") {
      mainDishes.push(item);
    } else if (item.category === "dessert") {
      desserts.push(item);
    }
  });
}

menuSorter(menu);

// console.log("Starters");
// console.table(starters);
// console.log("Main Dishes");
// console.table(mainDishes);
// console.log("Desserts");
// console.table(desserts);
///////////////////////////////////////////////////////////////

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

interface User {
  name: string;
  email: string;
  birthDate: Date;
}

const john: User = {
  name: "John",
  email: "js@mail.com",
  birthDate: new Date("2006-05-07"),
};

function isAdult(user: User): boolean {
  const today: number = new Date().getFullYear();
  const birthDate: number = user.birthDate.getFullYear();
  const isAdult: boolean = today - birthDate >= 18;
  return isAdult;
}

//isAdult(john);
///////////////////////////////////////////////////////////////////////////////////
