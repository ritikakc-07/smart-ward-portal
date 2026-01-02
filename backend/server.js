const app = require("./app");  // get app

const PORT = 5000;  // port is like a door

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
