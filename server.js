const app = require("./app.js");
const sequelize = require("./src/database/database");
require("dotenv").config();

sequelize.sync({ logging: false });

const port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
});
