function ab6(){
    document.getElementById("phone").style.display = 'none';
    document.getElementById("sales").style.display = 'none';
    document.getElementById("things").style.display = 'none';
    document.getElementById("home").style.display = 'none';
    document.getElementById("settings").style.display = 'none';
    document.getElementById("email").style.display = 'inline';
}
function ab5(){
    document.getElementById("phone").style.display = 'none';
    document.getElementById("sales").style.display = 'none';
    document.getElementById("things").style.display = 'none';
    document.getElementById("home").style.display = 'none';
    document.getElementById("settings").style.display = 'inline';
    document.getElementById("email").style.display = 'none';
}
function ab4(){
    document.getElementById("settings").style.display = 'none';
    document.getElementById("sales").style.display = 'none';
    document.getElementById("things").style.display = 'none';
    document.getElementById("home").style.display = 'none';
    document.getElementById("phone").style.display = 'inline';
    document.getElementById("email").style.display = 'none';
}
function ab3(){
    document.getElementById("phone").style.display = 'none';
    document.getElementById("settings").style.display = 'none';
    document.getElementById("things").style.display = 'none';
    document.getElementById("home").style.display = 'none';
    document.getElementById("sales").style.display = 'inline';
    document.getElementById("email").style.display = 'none';
}
function ab2(){
    document.getElementById("phone").style.display = 'none';
    document.getElementById("sales").style.display = 'none';
    document.getElementById("settings").style.display = 'none';
    document.getElementById("home").style.display = 'none';
    document.getElementById("things").style.display = 'inline';
    document.getElementById("email").style.display = 'none';
}
function ab1(){
    document.getElementById("phone").style.display = 'none';
    document.getElementById("sales").style.display = 'none';
    document.getElementById("things").style.display = 'none';
    document.getElementById("settings").style.display = 'none';
    document.getElementById("home").style.display = 'inline';
    document.getElementById("email").style.display = 'none';
}
function set1() {
    
    var x = 'rgb(15, 15, 15)';
    var y = document.getElementById("set1");
    const ps = document.getElementsByTagName("p")
    const names = document.getElementsByClassName('name')
    names[0].style.color = 'red';
    if (y.checked == true) {
        document.getElementById('body').style.backgroundColor = x;
        document.getElementById('p').style.color = 'white';
        for (p of ps) {
        p.style.color = "white"
        }
    }else{
        document.getElementById('body').style.backgroundColor = 'white';
        document.getElementById('p').style.color = 'black';
        for (p of ps) {
            p.style.color = "black";
        }
        for (let i = 0; i < names.length; i++) {
            names[i].style.color = "white";
          }
    }
}


function prices(){
    let m1 = document.getElementById('m1').value;
    var m11 = document.getElementById('m11').value;
    var m12 = document.getElementById('m12').value;
    var m13 = document.getElementById('m13').value;
    var m14 = document.getElementById('m14').value;
    var m15 = document.getElementById('m15').value;
    var m16 = document.getElementById('m16').value;
    var m17 = document.getElementById('m17').value;
    var m18 = document.getElementById('m18').value;
    var m19 = document.getElementById('m19').value;
    var m10 = document.getElementById('m10').value;
    var m11a = document.getElementById('m11a').value;
    var m12a = document.getElementById('m12a').value;
    var m13a = document.getElementById('m13a').value;
    var m14a = document.getElementById('m14a').value;
    var m15a = document.getElementById('m15a').value;
    var m16a = document.getElementById('m16a').value;
    var m17a = document.getElementById('m17a').value;
    var m18a = document.getElementById('m18a').value;
    var m19a = document.getElementById('m19a').value;
    var m10a = document.getElementById('m10a').value;
    var m11b = document.getElementById('m11b').value;
    var m12b = document.getElementById('m12b').value;
    var m13b = document.getElementById('m13b').value;
    var m14b = document.getElementById('m14b').value;
    var m15b = document.getElementById('m15b').value;
    var m16b = document.getElementById('m16b').value;
    var m17b = document.getElementById('m17b').value;
    var m18b = document.getElementById('m18b').value;
    var m19b = document.getElementById('m19b').value;
    var m10b = document.getElementById('m10b').value;
    var m11c = document.getElementById('m11c').value;
    var m12c = document.getElementById('m12c').value;
    var m13c = document.getElementById('m13c').value;
    var m14c = document.getElementById('m14c').value;
    var m15c = document.getElementById('m15c').value;
    var m16c = document.getElementById('m16c').value;
    var m17c = document.getElementById('m17c').value;
    var m18c = document.getElementById('m18c').value;
    var m19c = document.getElementById('m19c').value;
    var m10c = document.getElementById('m10c').value;
    var m11d = document.getElementById('m11d').value;
    var m12d = document.getElementById('m12d').value;
    var m13d = document.getElementById('m13d').value;
    var m14d = document.getElementById('m14d').value;
    var m15d = document.getElementById('m15d').value;
    var m16d = document.getElementById('m16d').value;
    var m17d = document.getElementById('m17d').value;
    var m18d = document.getElementById('m18d').value;
    var m19d = document.getElementById('m19d').value;
    var m10d = document.getElementById('m10d').value;
    var m11e = document.getElementById('m11e').value;
    var m12e = document.getElementById('m12e').value;
    var m13e = document.getElementById('m13e').value;
    var m14e = document.getElementById('m14e').value;
    var m15e = document.getElementById('m15e').value;
    var m16e = document.getElementById('m16e').value;
    var m17e = document.getElementById('m17e').value;
    var m18e = document.getElementById('m18e').value;
    var m19e = document.getElementById('m19e').value;
    var m10f = document.getElementById('m10e').value;
    var m11f = document.getElementById('m11f').value;
    var m12f = document.getElementById('m12f').value;
    var m13f = document.getElementById('m13f').value;
    var m14f = document.getElementById('m14f').value;
    var m15f = document.getElementById('m15f').value;
    var m16f = document.getElementById('m16f').value;
    var m17f = document.getElementById('m17f').value;
    var m18f = document.getElementById('m18f').value;
    var m19f = document.getElementById('m19f').value;
    var m1g = document.getElementById('m1g').value;
    var m11g = document.getElementById('m11g').value;
    var m12g = document.getElementById('m12g').value;
    var m13g = document.getElementById('m13g').value;
    var m14g = document.getElementById('m14g').value;
    var m15g = document.getElementById('m15g').value;
    var m16g = document.getElementById('m16g').value;
    var m17g = document.getElementById('m17g').value;
    var m18g = document.getElementById('m18g').value;
    
    document.getElementById('price').innerHTML = (m1*1 + m11*1 + m12*10 + m13*10 + m14*10 + m15*10 + m16*10 + m17*10 + m18*10 + m19*10 + m10*10 + m11a*10 + m12a*10 + m13a*10 + m14a*10 + m15a*10 + m16a*10 + m17a*10 + m18a*10 + m19a*10 + m10a*10 + m11b*10 + m12b*10 + m13b*10 + m14b*10 + m15b*10 + m16b*10 + m17b*10 + m18b*10 + m19b*10 + m10b*10 + m11c*10 + m12c*10 + m13c*10 + m14c*10 + m15c*10 + m16c*10 + m17c*10 + m18c*10 + m19c*10 + m10c*10 + m11d*10 + m12d*10 + m13d*10 + m14d*10 + m15d*10 + m16d*10 + m17d*10 + m18d*10 + m19d*10 + m10d*10 + m11e*10 + m12e*10 + m13e*10 + m14e*10 + m15e*10 + m16e*10 + m17e*10 + m18e*10 + m19e*10 + m10f*10 + m11f*10 + m12f*10 + m13f*10 + m14f*10 + m15f*10 + m16f*10 + m17f*10 + m18f*10 + m19f*10 + m10f*10 + m1g*10 + m11g*10 + m12g*10 + m13g*10 + m14g*10 + m15g*10 + m16g*10 + m17g*10 + m18g*10)+'€';  
}
function z1(){
    document.getElementById('firstName').style.backgroundColor = "hsl(207, 70%, 90%)"
}
function z2(){
    document.getElementById('lastName').style.backgroundColor = "hsl(207, 70%, 90%)"
}
function z3(){
    document.getElementById('emailInfo').style.backgroundColor = "hsl(207, 70%, 90%)"
}
function z4(){
    document.getElementById('em').style.backgroundColor = "hsl(207, 70%, 90%)"
}

//things:


function b1() {
    document.getElementById("a1").style.backgroundColor = "blue"
    document.getElementById("e1").style.backgroundColor = 'red'
    
}
function c1() {
    document.getElementById('a1').style.backgroundColor = 'black'
    document.getElementById("e1").style.backgroundColor = 'blue'
    var element = document.getElementById("d1");
    element.reset()
}
function b2() {
    document.getElementById("a2").style.backgroundColor = "blue"
    document.getElementById("e2").style.backgroundColor = 'red'
}
function c2() {
    document.getElementById('a2').style.backgroundColor = 'black'
    document.getElementById("e2").style.backgroundColor = 'blue'
    var element = document.getElementById("d2");
    element.reset()
}
function b3() {
    document.getElementById("a3").style.backgroundColor = "blue"
    document.getElementById("e3").style.backgroundColor = 'red'
}
function c3() {
    document.getElementById('a3').style.backgroundColor = 'black'
    document.getElementById("e3").style.backgroundColor = 'blue'
    var element = document.getElementById("d3");
    element.reset()
}
function b4() {
    document.getElementById("a4").style.backgroundColor = "blue"
    document.getElementById("e4").style.backgroundColor = 'red'
}
function c4() {
    document.getElementById('a4').style.backgroundColor = 'black'
    document.getElementById("e4").style.backgroundColor = 'blue'
    var element = document.getElementById("d4");
    element.reset()
}
function b5() {
    document.getElementById("a5").style.backgroundColor = "blue"
    document.getElementById("e5").style.backgroundColor = 'red'
}
function c5() {
    document.getElementById('a5').style.backgroundColor = 'black'
    document.getElementById("e5").style.backgroundColor = 'blue'
    var element = document.getElementById("d5");
    element.reset()
}
function b6() {
    document.getElementById("a6").style.backgroundColor = "blue"
    document.getElementById("e6").style.backgroundColor = 'red'
}
function c6() {
    document.getElementById('a6').style.backgroundColor = 'black'
    document.getElementById("e6").style.backgroundColor = 'blue'
    var element = document.getElementById("d6");
    element.reset()
}
function b7() {
    document.getElementById("a7").style.backgroundColor = "blue"
    document.getElementById("e7").style.backgroundColor = 'red'
}
function c7() {
    document.getElementById('a7').style.backgroundColor = 'black'
    document.getElementById("e7").style.backgroundColor = 'blue'
    var element = document.getElementById("d7");
    element.reset()
}
function b8() {
    document.getElementById("a8").style.backgroundColor = "blue"
    document.getElementById("e8").style.backgroundColor = 'red'
}
function c8() {
    document.getElementById('a8').style.backgroundColor = 'black'
    document.getElementById("e8").style.backgroundColor = 'blue'
    var element = document.getElementById("d8");
    element.reset()
}
function b9() {
    document.getElementById("a9").style.backgroundColor = "blue"
    document.getElementById("e9").style.backgroundColor = 'red'
}
function c9() {
    document.getElementById('a9').style.backgroundColor = 'black'
    document.getElementById("e9").style.backgroundColor = 'blue'
    var element = document.getElementById("d9");
    element.reset()
}
function b10() {
    document.getElementById("a10").style.backgroundColor = "blue"
    document.getElementById("e10").style.backgroundColor = 'red'
}
function c10() {
    document.getElementById('a10').style.backgroundColor = 'black'
    document.getElementById("e10").style.backgroundColor = 'blue'
    var element = document.getElementById("d10");
    element.reset()
}
function b11() {
    document.getElementById("a11").style.backgroundColor = "blue"
    document.getElementById("e11").style.backgroundColor = 'red'
}
function c11() {
    document.getElementById('a11').style.backgroundColor = 'black'
    document.getElementById("e11").style.backgroundColor = 'blue'
    var element = document.getElementById("d11");
    element.reset()
}
function b12() {
    document.getElementById("a12").style.backgroundColor = "blue"
    document.getElementById("e12").style.backgroundColor = 'red'
}
function c12() {
    document.getElementById('a12').style.backgroundColor = 'black'
    document.getElementById("e12").style.backgroundColor = 'blue'
    var element = document.getElementById("d12");
    element.reset()
}
function b13() {
    document.getElementById("a13").style.backgroundColor = "blue"
    document.getElementById("e13").style.backgroundColor = 'red'
}
function c13() {
    document.getElementById('a13').style.backgroundColor = 'black'
    document.getElementById("e13").style.backgroundColor = 'blue'
    var element = document.getElementById("d13");
    element.reset()
}
function b14() {
    document.getElementById("a14").style.backgroundColor = "blue"
    document.getElementById("e14").style.backgroundColor = 'red'
}
function c14() {
    document.getElementById('a14').style.backgroundColor = 'black'
    document.getElementById("e14").style.backgroundColor = 'blue'
    var element = document.getElementById("d14");
    element.reset()
}
function b15() {
    document.getElementById("a15").style.backgroundColor = "blue"
    document.getElementById("e15").style.backgroundColor = 'red'
}
function c15() {
    document.getElementById('a15').style.backgroundColor = 'black'
    document.getElementById("e15").style.backgroundColor = 'blue'
    var element = document.getElementById("d15");
    element.reset()
}
function b16() {
    document.getElementById("a16").style.backgroundColor = "blue"
    document.getElementById("e16").style.backgroundColor = 'red'
}
function c16() {
    document.getElementById('a16').style.backgroundColor = 'black'
    document.getElementById("e16").style.backgroundColor = 'blue'
    var element = document.getElementById("d16");
    element.reset()
}
function b17() {
    document.getElementById("a17").style.backgroundColor = "blue"
    document.getElementById("e17").style.backgroundColor = 'red'
}
function c17() {
    document.getElementById('a17').style.backgroundColor = 'black'
    document.getElementById("e17").style.backgroundColor = 'blue'
    var element = document.getElementById("d17");
    element.reset()
}
function b18() {
    document.getElementById("a18").style.backgroundColor = "blue"
    document.getElementById("e18").style.backgroundColor = 'red'
}
function c18() {
    document.getElementById('a18').style.backgroundColor = 'black'
    document.getElementById("e18").style.backgroundColor = 'blue'
    var element = document.getElementById("d18");
    element.reset()
}
function b19() {
    document.getElementById("a19").style.backgroundColor = "blue"
    document.getElementById("e19").style.backgroundColor = 'red'
}
function c19() {
    document.getElementById('a19').style.backgroundColor = 'black'
    document.getElementById("e19").style.backgroundColor = 'blue'
    var element = document.getElementById("d19");
    element.reset()
}
function b20() {
    document.getElementById("a20").style.backgroundColor = "blue"
    document.getElementById("e20").style.backgroundColor = 'red'
}
function c20() {
    document.getElementById('a20').style.backgroundColor = 'black'
    document.getElementById("e20").style.backgroundColor = 'blue'
    var element = document.getElementById("d20");
    element.reset()
}
function b21() {
    document.getElementById("a21").style.backgroundColor = "blue"
    document.getElementById("e21").style.backgroundColor = 'red'
}
function c21() {
    document.getElementById('a21').style.backgroundColor = 'black'
    document.getElementById("e21").style.backgroundColor = 'blue'
    var element = document.getElementById("d21");
    element.reset()
}
function b22() {
    document.getElementById("a22").style.backgroundColor = "blue"
    document.getElementById("e22").style.backgroundColor = 'red'
}
function c22() {
    document.getElementById('a22').style.backgroundColor = 'black'
    document.getElementById("e22").style.backgroundColor = 'blue'
    var element = document.getElementById("d22");
    element.reset()
}
function b23() {
    document.getElementById("a23").style.backgroundColor = "blue"
    document.getElementById("e23").style.backgroundColor = 'red'
}
function c23() {
    document.getElementById('a23').style.backgroundColor = 'black'
    document.getElementById("e23").style.backgroundColor = 'blue'
    var element = document.getElementById("d23");
    element.reset()
}
function b24() {
    document.getElementById("a24").style.backgroundColor = "blue"
    document.getElementById("e24").style.backgroundColor = 'red'
}
function c24() {
    document.getElementById('a24').style.backgroundColor = 'black'
    document.getElementById("e24").style.backgroundColor = 'blue'
    var element = document.getElementById("d24");
    element.reset()
}
function b25() {
    document.getElementById("a25").style.backgroundColor = "blue"
    document.getElementById("e25").style.backgroundColor = 'red'
}
function c25() {
    document.getElementById('a25').style.backgroundColor = 'black'
    document.getElementById("e25").style.backgroundColor = 'blue'
    var element = document.getElementById("d25");
    element.reset()
}
function b26() {
    document.getElementById("a26").style.backgroundColor = "blue"
    document.getElementById("e26").style.backgroundColor = 'red'
}
function c26() {
    document.getElementById('a26').style.backgroundColor = 'black'
    document.getElementById("e26").style.backgroundColor = 'blue'
    var element = document.getElementById("d26");
    element.reset()
}
function b27() {
    document.getElementById("a27").style.backgroundColor = "blue"
    document.getElementById("e27").style.backgroundColor = 'red'
}
function c27() {
    document.getElementById('a27').style.backgroundColor = 'black'
    document.getElementById("e27").style.backgroundColor = 'blue'
    var element = document.getElementById("d27");
    element.reset()
}
function b28() {
    document.getElementById("a28").style.backgroundColor = "blue"
    document.getElementById("e28").style.backgroundColor = 'red'
}
function c28() {
    document.getElementById('a28').style.backgroundColor = 'black'
    document.getElementById("e28").style.backgroundColor = 'blue'
    var element = document.getElementById("d28");
    element.reset()
}
function b29() {
    document.getElementById("a29").style.backgroundColor = "blue"
    document.getElementById("e29").style.backgroundColor = 'red'
}
function c29() {
    document.getElementById('a29').style.backgroundColor = 'black'
    document.getElementById("e29").style.backgroundColor = 'blue'
    var element = document.getElementById("d29");
    element.reset()
}
function b30() {
    document.getElementById("a30").style.backgroundColor = "blue"
    document.getElementById("e30").style.backgroundColor = 'red'
}
function c30() {
    document.getElementById('a30').style.backgroundColor = 'black'
    document.getElementById("e30").style.backgroundColor = 'blue'
    var element = document.getElementById("d30");
    element.reset()
}
function b31() {
    document.getElementById("a31").style.backgroundColor = "blue"
    document.getElementById("e31").style.backgroundColor = 'red'
}
function c31() {
    document.getElementById('a31').style.backgroundColor = 'black'
    document.getElementById("e31").style.backgroundColor = 'blue'
    var element = document.getElementById("d31");
    element.reset()
}
function b32() {
    document.getElementById("a32").style.backgroundColor = "blue"
    document.getElementById("e32").style.backgroundColor = 'red'
}
function c32() {
    document.getElementById('a32').style.backgroundColor = 'black'
    document.getElementById("e32").style.backgroundColor = 'blue'
    var element = document.getElementById("d32");
    element.reset()
}
function b33() {
    document.getElementById("a33").style.backgroundColor = "blue"
    document.getElementById("e33").style.backgroundColor = 'red'
}
function c33() {
    document.getElementById('a33').style.backgroundColor = 'black'
    document.getElementById("e33").style.backgroundColor = 'blue'
    var element = document.getElementById("d33");
    element.reset()
}
function b34() {
    document.getElementById("a34").style.backgroundColor = "blue"
    document.getElementById("e34").style.backgroundColor = 'red'
}
function c34() {
    document.getElementById('a34').style.backgroundColor = 'black'
    document.getElementById("e34").style.backgroundColor = 'blue'
    var element = document.getElementById("d34");
    element.reset()
}
function b35() {
    document.getElementById("a35").style.backgroundColor = "blue"
    document.getElementById("e35").style.backgroundColor = 'red'
}
function c35() {
    document.getElementById('a35').style.backgroundColor = 'black'
    document.getElementById("e35").style.backgroundColor = 'blue'
    var element = document.getElementById("d35");
    element.reset()
}
function b36() {
    document.getElementById("a36").style.backgroundColor = "blue"
    document.getElementById("e36").style.backgroundColor = 'red'
}
function c36() {
    document.getElementById('a36').style.backgroundColor = 'black'
    document.getElementById("e36").style.backgroundColor = 'blue'
    var element = document.getElementById("d36");
    element.reset()
}
function b37() {
    document.getElementById("a37").style.backgroundColor = "blue"
    document.getElementById("e37").style.backgroundColor = 'red'
}
function c37() {
    document.getElementById('a37').style.backgroundColor = 'black'
    document.getElementById("e37").style.backgroundColor = 'blue'
    var element = document.getElementById("d37");
    element.reset()
}
function b38() {
    document.getElementById("a38").style.backgroundColor = "blue"
    document.getElementById("e38").style.backgroundColor = 'red'
}
function c38() {
    document.getElementById('a38').style.backgroundColor = 'black'
    document.getElementById("e38").style.backgroundColor = 'blue'
    var element = document.getElementById("d38");
    element.reset()
}
function b39() {
    document.getElementById("a39").style.backgroundColor = "blue"
    document.getElementById("e39").style.backgroundColor = 'red'
}
function c39() {
    document.getElementById('a39').style.backgroundColor = 'black'
    document.getElementById("e39").style.backgroundColor = 'blue'
    var element = document.getElementById("d39");
    element.reset()
}
function b40() {
    document.getElementById("a40").style.backgroundColor = "blue"
    document.getElementById("e40").style.backgroundColor = 'red'
}
function c40() {
    document.getElementById('a40').style.backgroundColor = 'black'
    document.getElementById("e40").style.backgroundColor = 'blue'
    var element = document.getElementById("d40");
    element.reset()
}
function ba1() {
    document.getElementById("aa1").style.backgroundColor = "blue"
    document.getElementById("ea1").style.backgroundColor = 'red'
}
function ca1() {
    document.getElementById('aa1').style.backgroundColor = 'black'
    document.getElementById("ea1").style.backgroundColor = 'blue'
    var element = document.getElementById("da1");
    element.reset()
}
function ba2() {
    document.getElementById("aa2").style.backgroundColor = "blue"
    document.getElementById("ea2").style.backgroundColor = 'red'
}
function ca2() {
    document.getElementById('aa2').style.backgroundColor = 'black'
    document.getElementById("ea2").style.backgroundColor = 'blue'
    var element = document.getElementById("da2");
    element.reset()
}
function ba3() {
    document.getElementById("aa3").style.backgroundColor = "blue"
    document.getElementById("ea3").style.backgroundColor = 'red'
}
function ca3() {
    document.getElementById('aa3').style.backgroundColor = 'black'
    document.getElementById("ea3").style.backgroundColor = 'blue'
    var element = document.getElementById("da3");
    element.reset()
}
function ba4() {
    document.getElementById("aa4").style.backgroundColor = "blue"
    document.getElementById("ea4").style.backgroundColor = 'red'
}
function ca4() {
    document.getElementById('aa4').style.backgroundColor = 'black'
    document.getElementById("ea4").style.backgroundColor = 'blue'
    var element = document.getElementById("da4");
    element.reset()
}
function ba5() {
    document.getElementById("aa5").style.backgroundColor = "blue"
    document.getElementById("ea5").style.backgroundColor = 'red'
}
function ca5() {
    document.getElementById('aa5').style.backgroundColor = 'black'
    document.getElementById("ea5").style.backgroundColor = 'blue'
    var element = document.getElementById("da5");
    element.reset()
}
function ba6() {
    document.getElementById("aa6").style.backgroundColor = "blue"
    document.getElementById("ea6").style.backgroundColor = 'red'
}
function ca6() {
    document.getElementById('aa6').style.backgroundColor = 'black'
    document.getElementById("ea6").style.backgroundColor = 'blue'
    var element = document.getElementById("da6");
    element.reset()
}
function ba7() {
    document.getElementById("aa7").style.backgroundColor = "blue"
    document.getElementById("ea7").style.backgroundColor = 'red'
}
function ca7() {
    document.getElementById('aa7').style.backgroundColor = 'black'
    document.getElementById("ea7").style.backgroundColor = 'blue'
    var element = document.getElementById("da7");
    element.reset()
}
function ba8() {
    document.getElementById("aa8").style.backgroundColor = "blue"
    document.getElementById("ea8").style.backgroundColor = 'red'
}
function ca8() {
    document.getElementById('aa8').style.backgroundColor = 'black'
    document.getElementById("ea8").style.backgroundColor = 'blue'
    var element = document.getElementById("da8");
    element.reset()
}
function ba9() {
    document.getElementById("aa9").style.backgroundColor = "blue"
    document.getElementById("ea9").style.backgroundColor = 'red'
}
function ca9() {
    document.getElementById('aa9').style.backgroundColor = 'black'
    document.getElementById("ea9").style.backgroundColor = 'blue'
    var element = document.getElementById("da9");
    element.reset()
}
function ba10() {
    document.getElementById("aa10").style.backgroundColor = "blue"
    document.getElementById("ea10").style.backgroundColor = 'red'
}
function ca10() {
    document.getElementById('aa10').style.backgroundColor = 'black'
    document.getElementById("ea10").style.backgroundColor = 'blue'
    var element = document.getElementById("da10");
    element.reset()
}
function ba11() {
    document.getElementById("aa11").style.backgroundColor = "blue"
    document.getElementById("ea11").style.backgroundColor = 'red'
}
function ca11() {
    document.getElementById('aa11').style.backgroundColor = 'black'
    document.getElementById("ea11").style.backgroundColor = 'blue'
    var element = document.getElementById("da11");
    element.reset()
}
function ba12() {
    document.getElementById("aa12").style.backgroundColor = "blue"
    document.getElementById("ea12").style.backgroundColor = 'red'
}
function ca12() {
    document.getElementById('aa12').style.backgroundColor = 'black'
    document.getElementById("ea12").style.backgroundColor = 'blue'
    var element = document.getElementById("da12");
    element.reset()
}
function ba13() {
    document.getElementById("aa13").style.backgroundColor = "blue"
    document.getElementById("ea13").style.backgroundColor = 'red'
}
function ca13() {
    document.getElementById('aa13').style.backgroundColor = 'black'
    document.getElementById("ea13").style.backgroundColor = 'blue'
    var element = document.getElementById("da13");
    element.reset()
}
function ba14() {
    document.getElementById("aa14").style.backgroundColor = "blue"
    document.getElementById("ea14").style.backgroundColor = 'red'
}
function ca14() {
    document.getElementById('aa14').style.backgroundColor = 'black'
    document.getElementById("ea14").style.backgroundColor = 'blue'
    var element = document.getElementById("da14");
    element.reset()
}
function ba15() {
    document.getElementById("aa15").style.backgroundColor = "blue"
    document.getElementById("ea15").style.backgroundColor = 'red'
}
function ca15() {
    document.getElementById('aa15').style.backgroundColor = 'black'
    document.getElementById("ea15").style.backgroundColor = 'blue'
    var element = document.getElementById("da15");
    element.reset()
}
function ba16() {
    document.getElementById("aa16").style.backgroundColor = "blue"
    document.getElementById("ea16").style.backgroundColor = 'red'
}
function ca16() {
    document.getElementById('aa16').style.backgroundColor = 'black'
    document.getElementById("ea16").style.backgroundColor = 'blue'
    var element = document.getElementById("da16");
    element.reset()
}
function ba17() {
    document.getElementById("aa17").style.backgroundColor = "blue"
    document.getElementById("ea17").style.backgroundColor = 'red'
}
function ca17() {
    document.getElementById('aa17').style.backgroundColor = 'black'
    document.getElementById("ea17").style.backgroundColor = 'blue'
    var element = document.getElementById("da17");
    element.reset()
}
function ba18() {
    document.getElementById("aa18").style.backgroundColor = "blue"
    document.getElementById("ea18").style.backgroundColor = 'red'
}
function ca18() {
    document.getElementById('aa18').style.backgroundColor = 'black'
    document.getElementById("ea18").style.backgroundColor = 'blue'
    var element = document.getElementById("da18");
    element.reset()
}
function ba19() {
    document.getElementById("aa19").style.backgroundColor = "blue"
    document.getElementById("ea19").style.backgroundColor = 'red'
}
function ca19() {
    document.getElementById('aa19').style.backgroundColor = 'black'
    document.getElementById("ea19").style.backgroundColor = 'blue'
    var element = document.getElementById("da19");
    element.reset()
}
function ba20() {
    document.getElementById("aa20").style.backgroundColor = "blue"
    document.getElementById("ea20").style.backgroundColor = 'red'
}
function ca20() {
    document.getElementById('aa20').style.backgroundColor = 'black'
    document.getElementById("ea20").style.backgroundColor = 'blue'
    var element = document.getElementById("da20");
    element.reset()
}
function ba21() {
    document.getElementById("aa21").style.backgroundColor = "blue"
    document.getElementById("ea21").style.backgroundColor = 'red'
}
function ca21() {
    document.getElementById('aa21').style.backgroundColor = 'black'
    document.getElementById("ea21").style.backgroundColor = 'blue'
    var element = document.getElementById("da21");
    element.reset()
}
function ba22() {
    document.getElementById("aa22").style.backgroundColor = "blue"
    document.getElementById("ea22").style.backgroundColor = 'red'
}
function ca22() {
    document.getElementById('aa22').style.backgroundColor = 'black'
    document.getElementById("ea22").style.backgroundColor = 'blue'
    var element = document.getElementById("da22");
    element.reset()
}
function ba23() {
    document.getElementById("aa23").style.backgroundColor = "blue"
    document.getElementById("ea23").style.backgroundColor = 'red'
}
function ca23() {
    document.getElementById('aa23').style.backgroundColor = 'black'
    document.getElementById("ea23").style.backgroundColor = 'blue'
    var element = document.getElementById("da23");
    element.reset()
}
function ba24() {
    document.getElementById("aa24").style.backgroundColor = "blue"
    document.getElementById("ea24").style.backgroundColor = 'red'
}
function ca24() {
    document.getElementById('aa24').style.backgroundColor = 'black'
    document.getElementById("ea24").style.backgroundColor = 'blue'
    var element = document.getElementById("da24");
    element.reset()
}
function ba25() {
    document.getElementById("aa25").style.backgroundColor = "blue"
    document.getElementById("ea25").style.backgroundColor = 'red'
}
function ca25() {
    document.getElementById('aa25').style.backgroundColor = 'black'
    document.getElementById("ea25").style.backgroundColor = 'blue'
    var element = document.getElementById("da25");
    element.reset()
}
function ba26() {
    document.getElementById("aa26").style.backgroundColor = "blue"
    document.getElementById("ea26").style.backgroundColor = 'red'
}
function ca26() {
    document.getElementById('aa26').style.backgroundColor = 'black'
    document.getElementById("ea26").style.backgroundColor = 'blue'
    var element = document.getElementById("da26");
    element.reset()
}
function ba27() {
    document.getElementById("aa27").style.backgroundColor = "blue"
    document.getElementById("ea27").style.backgroundColor = 'red'
}
function ca27() {
    document.getElementById('aa27').style.backgroundColor = 'black'
    document.getElementById("ea27").style.backgroundColor = 'blue'
    var element = document.getElementById("da27");
    element.reset()
}
function ba28() {
    document.getElementById("aa28").style.backgroundColor = "blue"
    document.getElementById("ea28").style.backgroundColor = 'red'
}
function ca28() {
    document.getElementById('aa28').style.backgroundColor = 'black'
    document.getElementById("ea28").style.backgroundColor = 'blue'
    var element = document.getElementById("da28");
    element.reset()
}
function ba29() {
    document.getElementById("aa29").style.backgroundColor = "blue"
    document.getElementById("ea29").style.backgroundColor = 'red'
}
function ca29() {
    document.getElementById('aa29').style.backgroundColor = 'black'
    document.getElementById("ea29").style.backgroundColor = 'blue'
    var element = document.getElementById("da29");
    element.reset()
}
function ba30() {
    document.getElementById("aa30").style.backgroundColor = "blue"
    document.getElementById("ea30").style.backgroundColor = 'red'
}
function ca30() {
    document.getElementById('aa30').style.backgroundColor = 'black'
    document.getElementById("ea30").style.backgroundColor = 'blue'
    var element = document.getElementById("da30");
    element.reset()
}
function ba31() {
    document.getElementById("aa31").style.backgroundColor = "blue"
    document.getElementById("ea31").style.backgroundColor = 'red'
}
function ca31() {
    document.getElementById('aa31').style.backgroundColor = 'black'
    document.getElementById("ea31").style.backgroundColor = 'blue'
    var element = document.getElementById("da31");
    element.reset()
}
function ba32() {
    document.getElementById("aa32").style.backgroundColor = "blue"
    document.getElementById("ea32").style.backgroundColor = 'red'
}
function ca32() {
    document.getElementById('aa32').style.backgroundColor = 'black'
    document.getElementById("ea32").style.backgroundColor = 'blue'
    var element = document.getElementById("da32");
    element.reset()
}
function ba33() {
    document.getElementById("aa33").style.backgroundColor = "blue"
    document.getElementById("ea33").style.backgroundColor = 'red'
}
function ca33() {
    document.getElementById('aa33').style.backgroundColor = 'black'
    document.getElementById("ea33").style.backgroundColor = 'blue'
    var element = document.getElementById("da33");
    element.reset()
}
function ba34() {
    document.getElementById("aa34").style.backgroundColor = "blue"
    document.getElementById("ea34").style.backgroundColor = 'red'
}
function ca34() {
    document.getElementById('aa34').style.backgroundColor = 'black'
    document.getElementById("ea34").style.backgroundColor = 'blue'
    var element = document.getElementById("da34");
    element.reset()
}
function ba35() {
    document.getElementById("aa35").style.backgroundColor = "blue"
    document.getElementById("ea35").style.backgroundColor = 'red'
}
function ca35() {
    document.getElementById('aa35').style.backgroundColor = 'black'
    document.getElementById("ea35").style.backgroundColor = 'blue'
    var element = document.getElementById("da35");
    element.reset()
}
function ba36() {
    document.getElementById("aa36").style.backgroundColor = "blue"
    document.getElementById("ea36").style.backgroundColor = 'red'
}
function ca36() {
    document.getElementById('aa36').style.backgroundColor = 'black'
    document.getElementById("ea36").style.backgroundColor = 'blue'
    var element = document.getElementById("da36");
    element.reset()
}
function ba37() {
    document.getElementById("aa37").style.backgroundColor = "blue"
    document.getElementById("ea37").style.backgroundColor = 'red'
}
function ca37() {
    document.getElementById('aa37').style.backgroundColor = 'black'
    document.getElementById("ea37").style.backgroundColor = 'blue'
    var element = document.getElementById("da37");
    element.reset()
}
function ba38() {
    document.getElementById("aa38").style.backgroundColor = "blue"
    document.getElementById("ea38").style.backgroundColor = 'red'
}
function ca38() {
    document.getElementById('aa38').style.backgroundColor = 'black'
    document.getElementById("ea38").style.backgroundColor = 'blue'
    var element = document.getElementById("da38");
    element.reset()
}
function ba39() {
    document.getElementById("aa39").style.backgroundColor = "blue"
    document.getElementById("ea39").style.backgroundColor = 'red'
}
function ca39() {
    document.getElementById('aa39').style.backgroundColor = 'black'
    document.getElementById("ea39").style.backgroundColor = 'blue'
    var element = document.getElementById("da39");
    element.reset()
}
function ba40() {
    document.getElementById("aa40").style.backgroundColor = "blue"
    document.getElementById("ea40").style.backgroundColor = 'red'
}
function ca40() {
    document.getElementById('aa40').style.backgroundColor = 'black'
    document.getElementById("ea40").style.backgroundColor = 'blue'
    var element = document.getElementById("da40");
    element.reset()
}