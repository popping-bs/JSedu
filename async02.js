const fs = require('fs').promises;
// 콜백 기반 비동기 함수가 Promise 객체를 반환해서 Promise의 API를 사용할 수 있도록 해주는 서브 모듈


fs.readFile('file1.txt', 'utf8')
    .then(data1 =>{
        return fs.writeFile('result.txt', data1).then(()=> data1);
    })
    .then(() => fs.readFile('file2.txt', "utf-8"))
    .then(data2 => {
        return fs.appendFile('result.txt', '\n' + data2).then(()=> data2);
    })
    .then(()=> fs.readFile('file3.txt', 'utf8'))
    .then(data3 =>{
        return fs.appendFile('result.txt', '\n' + data3).then(() => data3);

    })
    .then(()=>{
        console.log("All files have been successfully merged into result.txt");
    })
    .catch(err =>{
        console.error("Error:", err);
    })