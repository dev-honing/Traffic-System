const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

// GET 요청 핸들러
app.get('/', (req, res) => {
  console.log('GET 요청을 받았습니다.');
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/get-request', (req, res) => {
  console.log('GET 요청을 받았습니다.');
  res.send('GET 요청 처리');
});


// POST 요청 핸들러
app.post('/post-request', (req, res) => {
  console.log('POST 요청을 받았습니다.');
  res.send('POST 요청 처리');
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
