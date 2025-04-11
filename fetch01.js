window.onload = function(){
    const getImage =document.getElementById("loadImage");
    getImage.onclick = async function(){
        const container = document.getElementById("image_container");


        try{
            const response = await fetch("http://127.0.0.1:8080/imageProc.jsp")
            //fetch()함수가 반환하는 객체는 Response 객체
            if (!response.ok) throw new Error(`"HTTP error! status:" ${response.status}`);
            const imageList= await response.json();// 응답 body를 json 으로 파싱하는 메서드. Promise 객체로 반환.
            const imageArray = imageList.images;
            imageArray.forEach(image => {
                const img = document.createElement("img");
                img.src = image;
                container.appendChild(img);
            })
        }catch(error) {
            container.textContent = error.message;
        }
    }
}