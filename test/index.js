const axios = require("axios");

async function init() {
    const response = await axios.get("https://localhost:5005/api/auth/tetas").catch(e => console.log(e));
    console.log(response);
}
init();