const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('c에 접근!');
});

router.get('/1',(req,res)=>{
    res.send('c-1에 접근!');
});

router.get('/2',(req,res)=>{
    res.send('c-2에 접근!');
});

router.get('/3',(req,res)=>{
    res.send('c-3에 접근!');
});

module.exports = router;
