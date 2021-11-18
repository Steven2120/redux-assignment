const productsList = [
  {
    id: "123",
    title: "Christmas Tree",
    description: "Beautiful Christmas tree",
    brand: "Pinewood Oaks",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
  },
  {
    id: "345",
    title: "MacBook Pro",
    description: "MacBook Pro 13inch",
    brand: "Apple",
    price: 140000,
    image:
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
];

let users = [
  {
    id: "111",
    email: "steve@email.com",
    name: "Steven",
    lastName: "Smith",
    password: "password",
    favoriteItems: ["345"],
  },
];

export const logInUser = (email, password) =>
  new Promise((resolve, reject) => {
    const userFound = users.find((user) => {
      if (user.email === email && user.password === password) {
        return true;
      }
      return false;
    });
    console.log("Fetching Data......");
    setTimeout(() => {
      try {
        if (userFound) {
          resolve(userFound);
        }
        throw new Error("Incorrect email or password");
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });

export const fetchProducts = () =>
  new Promise((resolve, reject) => {
    console.log("Fetching Data");
    setTimeout(() => {
      try {
        resolve(productsList);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
