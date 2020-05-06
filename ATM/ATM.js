var CountHandler=()=>{
    var ntxt = document.querySelector('.num').value;
    var layout = document.querySelector('.layout');
    if(ntxt >= 0 ){
    var nn = Math.floor(ntxt/2000);
    var tmp= nn*2000;
    var R = ntxt -tmp;
    console.log(`${nn} of Rs.2000`);
    console.log(tmp);
    console.log(R);

    var nn1 = Math.floor(R/500);
    var tmp2 = nn1*500;
    var R1 = R - tmp2;
    console.log(`${nn1} of Rs.500`);
    console.log(tmp2);
    console.log(R1);

    
    var nn2 = Math.floor(R1/200);
    var tmp3= nn2*200;
    var R2 = R1 - tmp3;
    console.log(`${nn2} of Rs.200`);
    console.log(tmp3);
    console.log(R2);

    var nn3 = Math.floor(R2/100);
    var tmp4 = nn3*100;
    var R3 = R2 - tmp4;
    console.log(`${nn3} of Rs.100`);
    console.log(tmp4);
    console.log(R3);

    var nn4 = Math.floor(R3/50);
    var tmp5 = nn4*50;
    var R4 = R3 - tmp5;
    console.log(`${nn4} of Rs.50`);
    console.log(tmp5);
    console.log(R4);

    var nn5 = Math.floor(R4/20);
    var tmp6 = nn5*20;
    var R5 = R4 - tmp6;
    console.log(`${nn5} of Rs.20`);
    console.log(tmp6);
    console.log(R5);

    var nn6 = Math.floor(R5/10);
    var tmp7 = nn6*10;
    var R6 = R5 - tmp7;
    console.log(`${nn6} of Rs.10`);
    console.log(tmp7);
    console.log(R6);

    var nn8 = Math.floor(R6/5);
    var tmp8 = nn8*5;
    var R7 = R6 - tmp8;
    console.log(`${nn8} of Rs.5`);
    console.log(tmp8);
    console.log(R7);

    var nn9 = Math.floor(R7/2);
    var tmp9 = nn9*2;
    var R8 = R7 - tmp9;
    console.log(`${nn9} of Rs.2`);
    console.log(tmp9);
    console.log(R8);
    if(R8 === 0 ){
        R8 =0;
     var  nn10 = R8;
      
        
    } else{
    nn10 = Math.floor(1/R8);
    var tmp10 = nn10*1;
    var R9 = R8 - tmp10;
    console.log(`${nn10} of Rs.1`);
    console.log(tmp10);
    console.log(R9);
    }

}
    var total = nn+nn1+nn2+nn3+nn4+nn5+nn6+nn8+nn9+nn10;
    console.log(`${total} Denominations of Amount`);
    var str ='<div class="look A"><ul><li><b style="color:#25282A"> %nn% </b> Notes of Rs.2000</li><li> <b style="color:#25282A">%nn1% </b> Notes of Rs.500</li><li> <b style="color:#25282A"> %nn2% </b> Notes of Rs.200</li><li><b style="color:#25282A"> %nn3% </b> Notes of Rs.100</li><li><b style="color:#25282A"> %nn4% </b> Notes of Rs.50</li></ul></div><div class="look B"><ul><li><b style="color:#25282A"> %nn5% </b> Notes of Rs.20</li><li><b style="color:#25282A"> %nn6% </b> Notes of Rs.10</li><li><b style="color:#25282A"> %nn8% </b> Coins of Rs.5</li><li> <b style="color:#25282A"> %nn9% </b>Coins of Rs.2</li><li> <b style="color:#25282A"> %nn10% </b> Coins of Rs.1</li></ul></div><h1 class=" look i">Total<b style="color:red"> %total% </b>Denominations of your amount</h1>';
    var newhtml;
    newhtml = str.replace('%nn%', nn);
    newhtml = newhtml.replace('%nn1%',nn1);
    newhtml = newhtml.replace('%nn2%',nn2);
    newhtml = newhtml.replace('%nn3%',nn3);
    newhtml = newhtml.replace('%nn4%',nn4);
    newhtml = newhtml.replace('%nn5%',nn5);
    newhtml = newhtml.replace('%nn6%',nn6);
    newhtml = newhtml.replace('%nn8%',nn8);
    newhtml = newhtml.replace('%nn9%',nn9);
    newhtml = newhtml.replace('%nn10%',nn10);
    newhtml = newhtml.replace('%total%',total);

    layout.innerHTML= newhtml;
   
    
}

CountHandler();
document.querySelector('.sbmt').addEventListener('click',CountHandler);