const express = require('express');
const app = express();

app.get('/',(req,res)=>{

    res.send('최상위 디렉토리입니다!');
    console.log('최상위 디렉토리 요청');

});

// app.get('/a/1',(req,res)=>{
//     res.send('path : /a/1');
// });
// app.get('/a/2',(req,res)=>{
//     res.send('path : /a/2');
// });
// app.get('/a/3',(req,res)=>{
//     res.send('path : /a/3');
// });

// app.get('/b/1',(req,res)=>{
//     res.send('path : /b/1');
// });
// app.get('/b/2',(req,res)=>{
//     res.send('path : /b/2');
// });
// app.get('/b/3',(req,res)=>{
//     res.send('path : /b/3');
// });

// app.get('/c/1',(req,res)=>{
//     res.send('path : /c/1');
// });
// app.get('/c/2',(req,res)=>{
//     res.send('path : /c/2');
// });
// app.get('/c/3',(req,res)=>{
//     res.send('path : /c/3');
// });

// app.get('/d/1',(req,res)=>{
//     res.send('path : /d/1');
// });
// app.get('/d/2',(req,res)=>{
//     res.send('path : /d/2');
// });
// app.get('/d/3',(req,res)=>{
//     res.send('path : /d/3');
// });

// app.get('/e/1',(req,res)=>{
//     res.send('path : /e/1');
// });
// app.get('/e/2',(req,res)=>{
//     res.send('path : /e/2');
// });
// app.get('/e/3',(req,res)=>{
//     res.send('path : /e/3');
// });



// 만약에 처리해야 할 요청이 무수히 많아진다면,
// 이 요청들을 한 파일에 관리하는 것은 쉽지 않을 것
// 그렇다면 이 요청들을 어떻게 분리할 수 있을까?

// 라우터 파일을 인식할 수 있게 require 함수로 라우터 파일 경로 등록
const aRouter = require('./02_01_1_routers/routes/a.js');
const bRouter = require('./02_01_1_routers/routes/b.js');
const cRouter = require('./02_01_1_routers/routes/c.js');
const dRouter = require('./02_01_1_routers/routes/d.js');
const eRouter = require('./02_01_1_routers/routes/e.js');

app.use('/a',aRouter);
app.use('/b',bRouter);
app.use('/c',cRouter);
app.use('/d',dRouter);
app.use('/e',eRouter);

// 가정) 'http://localhost:3000/c/2' 로 요청이 들어옴 ~
//  1) index.js의 app.use('/c',cRouter)에서 요청을 가로챔
//  2) './routes/c.js'로 요청 이동
//  3) routes/c.js의 router.get('/2',function(...))으로 요청 이동
//  4) 웹 페이지에 send() 출력

// req, res 관련 자주 쓰이는 기능 정리
//  - req.app : req 객체를 통해서 app 객체에 접근할 수 있음
//  - req.body : body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체
//  - req.cookies : cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
//  - req.ip : 요청의 ip 주소가 담겨있음

//  - res.cookie(키, 값, 옵션) : 쿠키를 설정하는 메소드
//  - res.end() : 데이터 없이 응답을 보냄
//  - res.json(데이터) : JSON 형식의 응답을 보냄
//  - res.redirect(주소) : redirect할 주소와 함께 응답을 보냄
//  - res.render(뷰,데이터) : 다음 코드에서 다룰 템플릿 엔진을 렌더링해서 응답할 때 사용
//  - res.send(데이터) : 데이터와 함께 응답을 보냄
//  - res.sendFile(경로) : 경로에 위치한 파일을 응답
//  - res.status(코드) : 응답시의 HTTP 상태 코드를 지정

// 에러처리
// 라우터에 설정되어 있지 않은 주소로 접속하려 할 때
app.all('*',(req,res) =>{
    res.status(404).send('404 Not Found!');
});

app.listen(3000,()=>{
    console.log('3000번 포트입니다.');
});