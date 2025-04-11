let xhr;
window.onload = function(){
    xhr = new XMLHttpRequest() ; 
    let loginBtn = document.getElementById("login")
    loginBtn.onclick = async function(){
        let uid = document.getElementById("userid").value;
        let upwd = document.getElementById('userpwd').value;
        let url = `http://127.0.0.1:8080/loginProc.jsp?userid=${uid}&userpwd=${upwd}`;
        try {
        const response = await fetch(url,{
            method: 'GET',
            headers : {
                "Content-type" : "application/x-www-form-urlencoded"
            }
        }); 
  

        if (!response.ok){
            throw new Error("HTTP 오류:" + response.status);
        }
        xhr.onreadystatechange = resultProcess ; //응답처리 callback 함수
        xhr.open("GET", url, true);
        //Response 객체에는 XML 응답을 파싱하는 기능 없으므로 text로 받아서 DOMParser를 이용해서 XML로 변환해야함.
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");
        resultProcess(xmlDoc);
    }catch(error) {
        alert("로그인 요청 중 오류 발생:" + error.message);
    }
}
}

function resultProcess(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let resultCode = xhr.responseXML.getElementsByTagName("result")[0].firstChild.data;
        let name = xhr.responseXML.getElementsByTagName("id")[0].firstChild.data;
        if (resultCode == 1){
            var str = "<table><tr><td align='center'><b>" + name + "</b>님 오셨네요..</td></tr>";
            str+="<tr><td align='center'><input type='button' id='logout' value = '로그아웃'/>";
            str+="</td></tr></table>";
            document.getElementById("confirmed").innerHTML = str;
        }else if (resultCode ==0){
            alert("비밀번호가 맞지 안습니다.\n 다시 입력해 주시기 바랍니다")
            document.getElementById("userid").value=name;
            document.getElementById("userpwd").value="";
            document.getElementById("userpwd").focus();
        }else{
            alert('아이디가 맞지 않습니다.\n 다시 입력해 주시기 바랍니다')
            document.getElementById("userid").value="";
            document.getElementById("userpwd").value="";
            document.getElementById("userid").focus();
        }
    }
}