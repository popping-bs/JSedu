const fs = require('fs');

fs.readFile('file1.txt', 'utf8',(err, data1) => {
    if (err) {
        return console.error("Error reading file1:" , err);
    }
    fs.writeFile('result.txt', data1, (err)=> {
        if (err){
            return console.error("Erro writing result.txt", err)
        }
        fs.readFile('file2.txt', 'utf8', (err, data2) =>{
            if (err){
                return console.error('Error reading file2', err)
            }
            fs.appendFile('result.txt', '\n' + data2, (err) =>{
                if (err){
                    return console.error("Error appending to result.txt", err);

                }
                fs.readFile('file3.txt', 'utf8', (err,data3)=>{
                    if (err){
                        return console.error("Error reading file:", err)
                    }
                    fs.appendFile('result.txt', '\n' + data3, (err) =>{
                        if (err){
                            return console.error("Error apending to result.txt", err);
                        }
                        console.log("all files have been sucessfully merged into result.txt")
                    })
                })
            })
        })
    });
})

