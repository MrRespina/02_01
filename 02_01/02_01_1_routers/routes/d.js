const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('d에 접근!');
});

router.get('/1',(req,res)=>{
    res.send('d-1에 접근!');
});

router.get('/2',(req,res)=>{
    res.send('d-2에 접근!');
});

router.get('/3',(req,res)=>{
    res.send('d-3에 접근!');
});

module.exports = router;
