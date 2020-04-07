let input;
function check() {
     input = parseInt(document.getElementById("number").value);
    if (input < 0 || input > 100) {
        alert("Nhập Lại Giá Số Từ 1-100");
    } else {
        let ranDom = Math.floor(Math.random() * 10) + 1;
        for (let count=3;count > 0; count--) {
            if (input === ranDom) {
                alert("Nổ Hũ .... Khà Khà..");
                document.getElementById("time").innerHTML = "You Win...!";
                break;
            }else
            if (input > ranDom) {
                count--;
                document.getElementById("time").innerHTML = "Bạn Còn " + count + "Lượt";
                input = parseInt(prompt("Số Bạn Chọn Lớn Hơn Số Trương Trình"));
               document.getElementById("number").value=input;
            }else {
                count--;
                document.getElementById("time").innerHTML = "Bạn Còn " + count + "Lượt";
                input = parseInt(prompt("Số Bạn Chọn Nhỏ Hơn Số Trương Trình"));
                document.getElementById("number").value=input;
            }
        }
        document.getElementById("resule").innerHTML=ranDom;
    }
}function reset() {
document.getElementById("time").innerHTML="Bạn Còn 3 Lượt";
document.getElementById("resule").innerText="Chúc Bạn May Mắn";
input=parseInt(document.getElementById("number").value="");

}