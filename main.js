
const dataND=[0,0,0,0,0,0,0,0,0,0]
const dataDA=[0,0,0,0,0,0,0,0,0,0]
const dataAS=[0,0,0,0,0,0,0,0,0,0]

setInterval( function myTimer() {
    var nhietDo=Math.floor(Math.random()*45);
    var doAm=Math.floor(Math.random()*101);
    var anhSang=Math.floor(Math.random()*101);
    // var khiGas=Math.floor(Math.random()*100);
   
    // beautifuksoup, request, selenium va selenium wire
    document.getElementById("ND2").innerHTML=nhietDo +"℃";
    document.getElementById("DA2").innerHTML=doAm +"%";
    document.getElementById("AS2").innerHTML=anhSang +"lux";
    // document.getElementById("KG2").innerHTML=khiGas;
    // for(var i=9;i>=1;i--){
    //     dataAS[i]=dataAS[i-1];
    //     dataDA[i]=dataDA[i-1];
    //     dataND[i]=dataND[i-1];
    // }
    // dataAS[0]=nhietDo;
    // dataDA[0]=doAm;
    // dataND[0]=anhSang;
    function bieuDo(){
        dataAS.push(anhSang); dataAS.shift();
        dataDA.push(doAm); dataDA.shift();
        dataND.push(nhietDo); dataND.shift();
    }
    bieuDo();
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
 
    Highcharts.chart('container', {

        title: {
            text: 'Biểu đồ IoT trong 30s theo thời gian thực'
        },
        
        // subtitle: {
        //     text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
        // },
        
        yAxis: {
            title: {
                text: 'Giá trị'
            }
        },
        
        xAxis: {
            accessibility: {
                rangeDescription: 'Thời gian'
            }
        },
        
        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'middle'
        // },
        
        // plotOptions: {
        //     series: {
        //         label: {
        //             connectorAllowed: false
        //         },
        //         pointStart: 0
        //     }
        // },
        
        series: [{
            name: 'Nhiệt độ',
            data: dataND
        }, {
            name: 'Độ ẩm',
            data: dataDA
        }, {
            name: 'Ánh sáng',
            data: dataAS
        // }, {
        //     name: 'Operations & Maintenance',
        //     data: [null, null, null, null, null, null, null,
        //         null, 11164, 11218, 10077]
        // }, {
        //     name: 'Other',
        //     data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
        //         17300, 13053, 11906, 10073]
        }],
        
        // responsive: {
        //     rules: [{
        //         condition: {
        //             maxWidth: 500
        //         },
        //         chartOptions: {
        //             legend: {
        //                 layout: 'horizontal',
        //                 align: 'center',
        //                 verticalAlign: 'bottom'
        //             }
        //         }
        //     }]
        // }
        
        });
 
KTnhietdo(nhietDo);
KTdoam(doAm);
KTanhsang(anhSang);
// KTkhigas(khiGas);
},2000)
function btn1on(){
    if(confirm("Bạn có chắc chắn bật đèn")==true){
    document.getElementById("nutnhan1").src ="leb_on.png"
    document.getElementById("led_on1").style.background="green"
    document.getElementById("led_off1").style.background="gray"

    }
}

function btn1off(){
    if(confirm("Bạn có chắc chắn tắt đèn")==true){
    document.getElementById("nutnhan1").src = "leb_off.png"
    document.getElementById("led_on1").style.background="gray"
    document.getElementById("led_off1").style.background="red"
    }
}

function btn2on(){
    if(confirm("Bạn có chắc chắn bật đèn")==true){
    document.getElementById("nutnhan2").src ="leb_on.png"
    document.getElementById("led_on2").style.background="green"
    document.getElementById("led_off2").style.background="gray"
    }
}

function btn2off(){
   if(confirm("Bạn có chắc chắn tắt đèn")==true){
    document.getElementById("nutnhan2").src = "leb_off.png"
    document.getElementById("led_on2").style.background="gray"
    document.getElementById("led_off2").style.background="red"
    }
}


