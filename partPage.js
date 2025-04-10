let xhr;
window.onload = function(){
    xhr = new XMLHttpRequest() ; 
    let loginBtn = document.getElementById("login")
    loginBtn.onclick = function(){
        let uid = document.getElementById("userid").value;
        let upwd = document.getElementById('userpwd').value;
        let url = "http://127.0.0.1:8080/loginProc.jsp?userid=" + uid +"&userpwd=" + upwd;
        xhr.onreadystatechange = resultProcess ;
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(null); // 서버로 요청 전송.
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