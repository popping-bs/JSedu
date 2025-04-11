function firstTask(callback) {
    setTimeout(() => {
    console.log("First task done");
    callback();
    }, 1000);
    }

function secondTask(callback) {
    setTimeout(() => {
    console.log("Second task done");
    callback();
    }, 1000);
    }

function thirdTask(callback) {
 setTimeout(() => {
 console.log("Third task done");
 callback();
 }, 1000);
 }


 function thirdTask(callback) {
    setTimeout(() => {
    console.log("Third task done");
    callback();
    }, 1000);
    }
    // 콜백헬형태의코드
   firstTask(() => {
    secondTask(() => {
    thirdTask(() => {
    console.log("All tasks are done");
    });
    });
    });