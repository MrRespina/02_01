// 라우터(Router)
// express에서 라우팅이라는 개념은 클라이언트로부터 요청받은 URL과 View를 매칭시키는 것
// 쉽게 말하면, 어떤 요청 경로로 들어왔을 때 어떻게 응답할건지 지정해주는 것이 라우팅
// express 이전에 라우터를 만들때는 if문으로 각 영역을 분리했기 때문에 가독성이 좋지 않고, 기능확장도 어려웠음.
// express를 사용하는 이유 중 하나가 이 라우팅을 깔끔하게 관리할 수 있다는 것

// app.get() 방식으로 routing을 할 경우,
// 하나의 js 파일 내에서 모든 routing을 처리해줌.
// 하지만 express.Router() 클래스는 미들웨어임
//  => 경로 별로 js 파일을 만들어서 router들을 관리할 수 있다.
// 코드의 가독성 향상/유지보수 용이
// 결론 : Router를 사용해서 프로그래밍하는게 좋다.
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('a에 접근!');
});

router.get('/1',(req,res)=>{
    res.send('a-1에 접근!');
});

router.get('/2',(req,res)=>{
    res.send('a-2에 접근!');
});

router.get('/3',(req,res)=>{
    res.send('a-3에 접근!');
});

// 경로가 '/'로 되어있는 데, 이유는 index.js의 app.use('/a',aRouter) 에서 /a로 들어오면
//  aRouter가 실행되도록 설정해놨음
// 즉 /a 가 첫 경로인 셈

module.exports = router;
