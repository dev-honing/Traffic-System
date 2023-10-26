const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// GET 요청 핸들러
app.get('/', (req, res) => {
  console.log('GET 요청을 받았습니다.'); // GET 요청을 받았음을 콘솔에 출력
  res.send('GET 요청 처리');
});

// POST 요청 핸들러
app.post('/', (req, res) => {
  console.log('POST 요청을 받았습니다.'); // POST 요청을 받았음을 콘솔에 출력
  res.send('POST 요청 처리');
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
