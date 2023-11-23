const express = require('express');
const path = require('path');
const cors = require('cors');

const connect = require('./schemas');

const app = express();

const GOOGLE_CLIENT_ID = '662325943596-h84i89h0rjb0b90nfm45dfhnciglq2ad.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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';
const GOOGLE_REDIRECT_URI = 'http://localhost:3000/login/home';

app.set('port', process.env.PORT || 3002);

connect();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send({message: 'hello'})
})

app.get('/login', (req, res) => {
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';

    url += `?client_id=${GOOGLE_CLIENT_ID}`;
    url += `&redirect_uri=${GOOGLE_REDIRECT_URI}`;
    url += '&response_type=code';
    url += '&scope=email profile';
    
    res.json({url});
});

app.get('/login/home', (req, res) => {
    const { code } = req.query;
    console.log(`code: ${code}`);
    res.send('ok');
})

// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "build/index.html"));
//   });

app.listen('3002', () => {
    console.log('3002번 포트에서 대기 중');
})



/* 
app.use(express.static(path.join(__dirname, '../front/build')));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../front/build/index.html'))
});

*/