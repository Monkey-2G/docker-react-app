const express = require('express');

const PORT = 8080;

// APP
const app = express();
app.get('/', (req,res) => {
    res.send("Git fetch Test를 위한 문구 수정123");
});

app.listen(PORT);
console.log("Server is Runnig");
