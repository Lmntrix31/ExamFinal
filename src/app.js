import { users } from "./data.js";
import { User } from "./Module/User.js";
/* async function getData() {
  try {
    const response = await fetch(" https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData(); */

const userContainer = document.querySelector(".user-container");
users.results.forEach((user) => {
  const userCard = new User(user);
  userContainer.append(userCard.render());
});
