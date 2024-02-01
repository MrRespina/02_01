const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

// 템플릿(Template) 이란?
// 모든 웹 사이트의 포괄적인 레이아웃 및 표시 기능에 대한
// 구조를 보여주는 미리 디자인된 리소스
// 화면 이동 시 기본 틀은 한번만 만들어놓고 계속해서 사용하는 것이 가능.
// Node.js의 대표적인 템플릿 엔진은 pug,nunjucks가 있음.
// 성능적인 면에서는 pug가 렌더링 속도가 nunjucks보다 빠름.
// pug는 따로 html 태그를 pug용 문법으로 변환해야 하지만,
// nunjucks는 html 문법을 그대로 사용하는 것이 가능하기 때문에
//  호환성이 매우 좋다.

// 기본 주소값으로 GET 방식 요청 했을 때 => 문자열
// /test GET 방식 요청 했을 때 => index.html + router 사용해서

app.set('view engine','html');

nunjucks.configure('02_01_2_nunjucks/views',{    // views 폴더가 nunjucks 파일의 위치가 됨.
    express:app,    // express 속성에 app 객체 연결
    watch:true,     // true로 지정하면 HTML 파일이 변경될 때 템플릿 엔진을 reload 함.

});

const tRouter = require('../02_01_2_nunjucks/router/test.js');
app.use('/test',tRouter);

app.get('/',(req,res)=>{

    res.send('최상위 디렉토리입니다!');
    console.log('최상위 디렉토리 요청');

});

app.get('/include',(req,res)=>{
    res.render('main');
});

app.get('/extends',(req,res)=>{
    res.render('body');
});

app.listen(3000,()=>{
    console.log('3000 번 포트를 사용한 서버 실행중');
});