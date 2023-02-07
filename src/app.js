async function getData() {
  try {
    const response = await fetch(" https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getData();
