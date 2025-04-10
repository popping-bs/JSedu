<%@ page   contentType="text/xml; charset=utf-8"     %>
<%
    request.setCharacterEncoding("utf-8"); 
    response.setContentType("text/xml;charset=utf-8");

    String id = request.getParameter("userid"); 
    String passwd = request.getParameter("userpwd");

    String outString = "";
    int result = 0 ;

    if(id.equals("admin")&&passwd.equals("1234")){
        result = 1;  //로그인 성공
    }else if(id.equals("admin")){
        result = 0;  //패스워드 불일치 
    }else{
  	result = 2; //아이디 존재하지 않음
    }

    if(result==1){
       outString="<response><result>"+ result + "</result><id>"+ id 
				+"</id></response>";
   }else if(result==0){
       outString="<response><result>"+ result + "</result><id>"+ id 
		+"</id></response>";
   }else{
       outString="<response><result>"+ result + "</result><id>"+ id 
		+"</id></response>";
   }  
   out.println(outString);
%>