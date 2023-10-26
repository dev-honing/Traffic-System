const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// GET 요청 핸들러
app.get('/', (req, res) => {
  res.send('GET 요청 처리'); // 클라이언트에 응답을 보냅니다.
});

// POST 요청 핸들러
app.post('/', (req, res) => {
  res.send('POST 요청 처리'); // 클라이언트에 응답을 보냅니다.
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

