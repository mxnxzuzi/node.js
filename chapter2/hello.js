const http = require("http"); // ❶ http 객체 생성
let count = 0;

// 노드 서버 객체 생성
const server = http.createServer((req, res) => { //❷ 서버 객체 생성
  log(count); // ❸ 카운트 1 증가
  res.statusCode = 200;  // ➍결괏값 200
  res.setHeader("Content-Type", "text/plain");  //  ➎ 헤더 설정 
  res.write("hello\n"); //  ➏ 응답값 설정

  setTimeout(() => { 
    res.end("Node.js"); // ❼ 2초후 Node.js 출력
  }, 2000);
});

function log(count) {
  console.log((count += 1)); 
}
server.listen(8000, () => console.log("Hello Node.js")); // ❽ 8080번 포트로 서버 실행
