const express = require("express");
const app = express();
const port = 8088;
const mongoose = require('mongoose');
const config = require('./config/key');
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
//스키마 연결
const { User } = require('./models/User');
//react build path 연결
app.use(express.static(path.join(__dirname, 'build')));
//CORS 허용
app.use(cors());

//body-parser 설정
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

//mongoDB 연결
mongoose.set("strictQuery", false);
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true
}).then(()=>{console.log('MongoDB Connected..')})
  .catch(err => console.log(err));

// 서버 실행
app.listen(port, ()=>{
    console.log("listening on 8088");
})

// 메인페이지 라우터
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})

// 회원가입페이지 라우터
app.post('/register', (req, res)=>{

    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    });

});


