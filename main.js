
setInterval( function myTimer() {
    var nhietDo=Math.floor(Math.random()*45);
    var doAm=Math.floor(Math.random()*101);
    var anhSang=Math.floor(Math.random()*101);
    // var khiGas=Math.floor(Math.random()*100);
   
    // beautifuksoup, request, selenium va selenium wire
    document.getElementById("ND2").innerHTML=nhietDo;
    document.getElementById("DA2").innerHTML=doAm;
    document.getElementById("AS2").innerHTML=anhSang;
    // document.getElementById("KG2").innerHTML=khiGas;


function KTnhietdo(nhietDo){
if(nhietDo < 22) {
    document.getElementById("ND").style.background="#F8D1AF"
    // alert("Nhiệt độ khá lạnh.")
    }else if(nhietDo>=22 && nhietDo<=32){
        document.getElementById("ND").style.background="#F7AD6E"
        // alert("Nhiệt độ thoáng mát.")
    }else if(nhietDo>32 ){
        document.getElementById("ND").style.background="#F37D1A"
        // alert("Nhiệt độ khá nóng.")
    }
}
function KTdoam(doAm){
    if(doAm < 36) {
        document.getElementById("DA").style.background="#D5F9F7"
        // alert("Độ ẩm ở mức thấp.")
        }else if(doAm>=36 && doAm<=72){
            document.getElementById("DA").style.background="#93F6EE"
            // alert("Độ ẩm ở mức thích hợp.")
        }else if(doAm>72 ){
            document.getElementById("DA").style.background="#0FF2E0"            
            // alert("Độ ẩm ở mức cao.")
        } 
}
function KTanhsang(anhSang){
    if(anhSang < 36) {
        document.getElementById("AS").style.background="#DCC6F6"
        // alert("Thiếu ánh sáng.")
        }else if(anhSang>=36 && anhSang<=72){
            document.getElementById("AS").style.background="#B67CF8"
            // alert("Ánh sáng ở mức vừa phải.")
        }else if(anhSang>72 ){
            document.getElementById("AS").style.background="#8A2AF7"           
            // alert("Ánh sáng quá cao")
        } 
}
// function KTkhigas(khiGas){
//     if(khiGas < 22) {
//         document.getElementById("KG").style.background="#ccffff"
//         // alert("Khí gas BT.")
//         }else if(khiGas>=22 && khiGas<=32){
//             document.getElementById("KG").style.background="#80ff80"
//             // alert("Phát hiẹn khí Gas")
//         }else if(khiGas>32 ){
//             document.getElementById("KG").style.background="#ffaa00"
//             // alert("kHí gas bị rò rỉ nhiều.")
//         }
    // }


KTnhietdo(nhietDo);
KTdoam(doAm);
KTanhsang(anhSang);
// KTkhigas(khiGas);
},1000)
function btn1on(){
    if(confirm("Bạn có chắc chắn bật đèn")==true){
    document.getElementById("nutnhan1").src ="leb_on.png"
    }
}

function btn1off(){
    if(confirm("Bạn có chắc chắn tắt đèn")==true){
    document.getElementById("nutnhan1").src = "leb_off.png"
    }
}

function btn2on(){
    if(confirm("Bạn có chắc chắn bật đèn")==true){
    document.getElementById("nutnhan2").src ="leb_on.png"
    }
}

function btn2off(){
   if(confirm("Bạn có chắc chắn tắt đèn")==true){
    document.getElementById("nutnhan2").src = "leb_off.png"
    }
}


