const express = require("express");
const app = express();
const path = require("path");
var cors = require("cors");

const port = 8088;
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(express.json());


// 서버 구축
app.listen(port, ()=>{
    console.log("listening on 8088");
})

// 메인페이지 연결


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})


