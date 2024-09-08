// ❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰ 🞑🞑🞑🞑🞑🞑 ❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱  →→→→→→→→ . ←←←←←←←←←
var N= "", cont=0, COLOR=0, BOX0="", BOX1="", BOX2="", BOX3="", BOX4="", BOX5="", BOX6="", BOX7="", BOX8="";

//GENERAR TIEMPO 1:
Date.prototype.addMillisecs = function(d) { this.setTime(this.getTime() + (d)); return this; }
var mydate0=new Date(); 
var dia0 = new String(mydate0.getDate()); 
var m0 = Number(mydate0.getMonth()+1);; 
var mes0 = new String(m0);
if (dia0.length<2) {dia0="0"+dia0;}else{dia0=dia0;} if (mes0.length<2) {mes0="0"+mes0;}else{mes0=mes0;}
var anio0 = Number( mydate0.getYear())+1900;//CORRECCION AL SISTEMA: +1900 
Copyright.innerText= anio0;

function genera_tabla() {
  cont= cont+1; /*var n= cont;*/ document.getElementById("tex1").value=cont;
  // Crea un elemento <table> y un elemento <tbody> + thead
  var table1 = document.createElement("table"); table1.setAttribute("id", "table"+cont);table1.setAttribute("class", "cTable1");
  //table1.setAttribute("onclick","xxx("+cont+")"); 
  var thead1 = document.createElement("thead"); thead1.setAttribute("id", "thead1");//Encabezado de la tabla
  var tbody1 = document.createElement("tbody"); tbody1.setAttribute("id", "tbody"+cont);tbody1.setAttribute("class", "cTody1");
  var tbodyF = document.createElement("tbody"); tbodyF.setAttribute("id", "tbodyF"+cont);
  //*************************************************(1) 
  // Crea las celdas para thead1
  var hileraHead = document.createElement("tr"); 
  var celdaHead = document.createElement("td");
  celdaHead.setAttribute("id", "celdaHead1");celdaHead.setAttribute("colspan", "7");celdaHead.setAttribute("rowspan", "1");
  // Crea 3 div para thead1:
  var tdiv1 = document.createElement("div"); tdiv1.setAttribute("id", "tdiv1");//nowrap
  var tdiv2 = document.createElement("div"); tdiv2.setAttribute("id", "tdiv2"); 
  //var tdiv3 = document.createElement("div"); tdiv3.setAttribute("id", "tdiv3");
  var pHead1= document.createElement("p"); pHead1.setAttribute("id", "pHead");   
  // Crea texto para tdiv1
  var textoHead0 = document.createTextNode(" TABLA "+cont+" ");////var textoHead00 = document.createTextNode("T");onmouseover="" onmouseout=""
  pHead1.appendChild(textoHead0);
  tdiv1.appendChild(pHead1); 
  // Crea input para tdiv3:   para tdiv2
  var btnC = document.createElement("div");
  btnC.setAttribute("id", "bC"+cont);btnC.setAttribute("class", "btnArrowUp");
  btnC.setAttribute("onclick","collapseTr("+cont+")"); 
  var btnV = document.createElement("div");
  btnV.setAttribute("id", "bV"+cont);btnV.setAttribute("class", "btnArrowDown"); 
  btnV.setAttribute("onclick","visibleTr("+cont+")");  
  var btnS = document.createElement("div");
  btnS.setAttribute("class", "cBtnS"); 
  var btnB = document.createElement("div");
  btnB.setAttribute("id", "bB"+cont);btnB.setAttribute("class", "btnClose");
  btnB.setAttribute("onclick","borrarT("+cont+")"); 
  const SVG_NS = 'http://www.w3.org/2000/svg';
  let svg1 = document.createElementNS(SVG_NS, 'svg'); let path1 = document.createElementNS(SVG_NS, 'path');
  svg1.setAttributeNS(null, "width", "21"); svg1.setAttributeNS(null, "height", "16");svg1.setAttributeNS(null, "viewBox", "-11 -10 86 41");
  path1.setAttributeNS(null, "d", "M32,37.21a2,2,0,0,1-1.28-.46l-28-23.21a2,2,0,1,1,2.55-3.08L32,32.62,58.72,10.46a2,2,0,1,1,2.55,3.08l-28,23.21A2,2,0,0,1,32,37.21Z");
  path1.setAttributeNS(null, "class", "cpath");svg1.setAttributeNS(null, "class", "csvg");
  svg1.appendChild(path1); btnC.appendChild(svg1);
  let svg2 = document.createElementNS(SVG_NS, 'svg'); let path2 = document.createElementNS(SVG_NS, 'path');
  svg2.setAttributeNS(null, "width", "21"); svg2.setAttributeNS(null, "height", "16");svg2.setAttributeNS(null, "viewBox", "-11 -4 86 41");
  path2.setAttributeNS(null, "d", "M60,37.21a2,2,0,0,1-1.28-.46L32,14.6,5.28,36.75a2,2,0,0,1-2.55-3.08l28-23.21a2,2,0,0,1,2.55,0l28,23.21A2,2,0,0,1,60,37.21Z");
  path2.setAttributeNS(null, "class", "cpath");svg2.setAttributeNS(null, "class", "csvg");
  svg2.appendChild(path2);btnV.appendChild(svg2);
  let svg3s = document.createElementNS(SVG_NS, 'svg'); let path3s = document.createElementNS(SVG_NS, 'path');
  svg3s.setAttributeNS(null, "width", "21"); svg3s.setAttributeNS(null, "height", "16");svg3s.setAttributeNS(null, "viewBox", "-11 6 86 51");
  path3s.setAttributeNS(null, "d", "");
  path3s.setAttributeNS(null, "class", "cpath");svg3s.setAttributeNS(null, "class", "csvg");
  svg3s.appendChild(path3s);btnS.appendChild(svg3s);
  let svg3 = document.createElementNS(SVG_NS, 'svg'); let path3 = document.createElementNS(SVG_NS, 'path');
  svg3.setAttributeNS(null, "width", "21"); svg3.setAttributeNS(null, "height", "16");svg3.setAttributeNS(null, "viewBox", "-30 -36 100 100");
  path3.setAttributeNS(null, "d", "M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369C61.42,57.647,61.42,54.687,59.595,52.861z");
  path3.setAttributeNS(null, "class", "cpathB");svg3.setAttributeNS(null, "class", "csvgB");
  svg3.appendChild(path3);btnB.appendChild(svg3);
  tdiv2.appendChild(btnC);tdiv2.appendChild(btnV);tdiv2.appendChild(btnS);tdiv2.appendChild(btnB);
  
  // Crea un div para tdiv1 tdiv2 tdiv3:
  var tdiv0 = document.createElement("div");
  tdiv0.setAttribute("id", "tdiv0");
  // Agrega las tdiv1 tdiv2 tdiv3 a tdiv0:
  tdiv0.appendChild(tdiv1);tdiv0.appendChild(tdiv2);//tdiv0.appendChild(tdiv3);
  // Agrega las tdiv0 a celdaHead:
  celdaHead.appendChild(tdiv0); hileraHead.appendChild(celdaHead);
  thead1.appendChild(hileraHead);
  //*************************************************(1)
  
  //*************************************************************************(2)
  
  BOX0= cuotaI.value; BOX1=cuota.value; BOX2=document.getElementById("N").value; BOX3=tea1.value; BOX4=tea1.value; BOX5=tea1.value; BOX6=tea1.value; BOX7=tea1.value; BOX8=tea1.value;
  if (document.getElementById("N").value < 0) {document.getElementById("N").value = 0 }
  N= Math.trunc(Number(cleanBoxes(document.getElementById("N").value.replace(/[-,]/g,"")))); //Math.trunc(N); // TOMAR SOLO PARTE ENTERA DE N
  var SC= ["(máximo=6,000)","(máximo=6,000)", "(máximo=6,000)","(máximo=4,000)","(máximo=2,000)","(máximo=1,333)","(máximo=1,000)"]
  if (rb0.selected==true) { if (N> 500*(360/30 ) ) {document.getElementById("N").value="6,000"; N= 6000 } span1.innerHTML=SC[0]}
  if (rb1.selected==true) { if (N> 500*(360/30 ) ) {document.getElementById("N").value="6,000"; N= 6000 } span1.innerHTML=SC[1]}
  if (rb2.selected==true) { if (N> 1000*(360/60) ) {document.getElementById("N").value="6,000"; N= 6000 } span1.innerHTML=SC[2]}
  if (rb3.selected==true) { if (N> 1000*(360/90) ) {document.getElementById("N").value="4,000"; N= 4000 } span1.innerHTML=SC[3]}
  if (rb4.selected==true) { if (N> 1000*(360/180)) {document.getElementById("N").value="2,000"; N= 2000 } span1.innerHTML=SC[4]}
  if (rb5.selected==true) { if (N> 1000*(360/270)) {document.getElementById("N").value="1,333"; N= 1333 } span1.innerHTML=SC[5]}
  if (rb6.selected==true) { if (N> 1000*(360/360)) {document.getElementById("N").value="1,000"; N= 1000 } span1.innerHTML=SC[6]}
  var N0= new String (formato(N)).split(".")[0]; // SEPARA LA PARTE ENTERA DE 1,000.00 , N0= 1,000
  document.getElementById("N").value= N0;
  var i30= Number(cleanBoxes(tea1.value.replace(/[-,]/g,"")));  tea1.value=formato1(i30);
  var boxTED0= Number(cleanBoxes(boxTED.value.replace(/[-,]/g,"")));  boxTED.value=formato1(boxTED0);
  var taza1=tea1.value.replace(/[-,]/g,""); //console.log("Taza1: ",taza1);
  var dias1=Selector2.value;
  var Ted="";//TAZA EFECTIVA DIARIA
  switch (dias1) {//SELECCIONAR PERIODO DE AHORRO
   case "1"  : Ted = TED(taza1, dias1);break; //TED 1 DIA
   case "30" : Ted = TED(taza1, dias1);break; //TED 30 DIAS                  
   case "60" : Ted = TED(taza1, dias1);break; //TED 60 DIAS              
   case "90" : Ted = TED(taza1, dias1);break; //TED 90 DIAS  
   case "180": Ted = TED(taza1, dias1);break; //TED 180 DIAS                
   case "270": Ted = TED(taza1, dias1);break; //TED 270 DIAS                
   case "360": Ted = taza1;break; //TED 360 DIAS                
  } 
  
  var moneda=document.getElementById("Selector1").value; ///"Soles";
  var RCI= Number(cleanBoxes(cuotaI.value.replace(/[-,]/g,""))); cuotaI.value=formato(RCI);
  var C= Number(cleanBoxes(cuota.value.replace(/[-,]/g,""))); cuota.value=formato(C);
  var CI= Number(RCI);
  var MA2= Number(RCI);
  var M2= Number(RCI);
  var CIF30= Number(RCI);
  var ci=""; var MA1= "";  var cis=Number(RCI); var M1="";  

  var p ="";
  for (var r0 = 0; r0 <= 6; r0++) {
    if(document.getElementById("rb"+r0).selected==true){if (r0==0) p=1; if (r0>=1 && r0<4) p=r0*30; if (r0>=4) p=(r0-2)*90;}// p= 30, 60, 90, 180, 270, 360
   }
  var mydate01 = mydate0.addMillisecs((Number(N)*p)*24*60*60*1000);
  //console.log(mydate01);
  var anioF1 = (Number( mydate01.getYear())+1900);//CORRECCION AL SISTEMA: +1900
  //datos para las celda celda1:
  var tx0=""; if (N0==1) tx0="Período";else tx0="Períodos";
  var cadena00=[""], cadena01=[""], cadena02=[""], cadena03=[""], cadena04=[""], n0="", n="", tx="";
  for (var r1 = 0; r1 <= 6; r1++) {
   if (r1==0) {n0=1; tx="día";} if (r1>=1 && r1<4) {n0=r1*30; tx="días";} if (r1>=4) {n0=(r1-2)*90; tx="días";}// n0= 30, 60, 90, 180, 270, 360
   if(ck1.checked==true && ck2.checked==false){n=2; if(document.getElementById("rb"+r1).selected==true){
    //cadena00 =["Períodos = ", "Período de"            ];// ← BLOQUE PARA DIFERENTES FONTS EN DIFERENTES 'p'
    //cadena01 =[N0+", "      , n0                      ];
    //cadena02 =["("         , tx+", con aportes, TEA:" ];
    //cadena03 =[anio0       , tea1.value               ];
    //cadena04 =[" - "+anioF1+")" , "%"                 ]
    cadena04 =[N0+" "+tx0+", del "+anio0+" al "+anioF1 , "Período de "+n0+" "+tx+", con aportes, TEA: "+tea1.value+" %"]}}
    if(ck1.checked==false && ck2.checked==true){n=2; if(document.getElementById("rb"+r1).selected==true){
    //cadena00 =["Períodos = " , "Período de"           ];// ← BLOQUE PARA DIFERENTES FONTS EN DIFERENTES 'p'
    //cadena01 =[N0+", "       , n0                     ];
    //cadena02 =["("          , tx+", sin aportes, TEA:"];
    //cadena03 =[anio0        ,tea1.value               ];
    //cadena04 =[" - "+anioF1+")"  ,"%"                 ];
    cadena04 =[N0+" "+tx0+", del "+anio0+" al "+anioF1 , "Período de "+n0+" "+tx+", sin aportes, TEA: "+tea1.value+" %"]}}
   if(ck1.checked==true && ck2.checked==true) {n=3; if(document.getElementById("rb"+r1).selected==true){
     //cadena00 =["Períodos = "    , "Período de"             , "Período de"             ];// ← BLOQUE PARA DIFERENTES FONTS EN DIFERENTES 'p'
     //cadena01 =[N0+", "          , n0                       , n0                       ];
     //cadena02 =["("             , tx+", con aportes, TEA:" , tx+", sin aportes, TEA:"  ];
     //cadena03 =[anio0           , tea1.value               ,tea1.value                 ];
     //cadena04 =[" -"+anioF1+")"  , "%"                      ,"%"                       ]
     cadena04 =[N0+" "+tx0+", del "+anio0+" al "+anioF1 , "Período de "+n0+" "+tx+", con aportes, TEA: "+tea1.value+" %" , "Período de "+n0+" "+tx+", sin aportes, TEA: "+tea1.value+" %"]}}
  }
  // Crea las celdas de la 1ra. hilera de thead1     
  for (var c1 = 0; c1 < 1; c1++) {
   var hilera1 = document.createElement("tr");
   for (var h1 = 0; h1 < n; h1++) {
    // Crea celdas
    var celda1 = document.createElement("td"); celda1.setAttribute("id", "celda_c"+(h1+1));
    var d00 = document.createElement("div"); d00.setAttribute("id", "div_p_hilera1_"+(h1+1));// p00: DIV P' PARRAFOS
    var pn00 = document.createElement("p"); pn00.setAttribute("id", "pTex_hilera1_"+(h1+1));// PARRAFO NUMEROS
    var pn01 = document.createElement("p"); pn01.setAttribute("id", "pNum_hilera1_"+(h1+1));// PARRAFO LETRAS
    var pn02 = document.createElement("p"); pn02.setAttribute("id", "pTex_hilera1_"+(h1+1));
    var pn03 = document.createElement("p"); pn03.setAttribute("id", "pNum_hilera1_"+(h1+1));
    var pn04 = document.createElement("p"); pn04.setAttribute("id", "pNum_hilera1_"+(h1+1));
    var textoCelda00 = document.createTextNode(""+cadena00[h1]);var textoCelda01 = document.createTextNode(""+cadena01[h1]);var textoCelda02 = document.createTextNode(""+cadena02[h1]);var textoCelda03 = document.createTextNode(""+cadena03[h1]);var textoCelda04 = document.createTextNode(""+cadena04[h1]);
    pn00.appendChild(textoCelda00); pn01.appendChild(textoCelda01); pn02.appendChild(textoCelda02); pn03.appendChild(textoCelda03); pn04.appendChild(textoCelda04); 
    //d00.appendChild(pn00); 
    //d00.appendChild(pn01); 
    //d00.appendChild(pn02); 
    //d00.appendChild(pn03); 
    d00.appendChild(pn04); 

    celda1.appendChild(d00); 
    hilera1.appendChild(celda1);
   }
   // agrega la hilera al final de la tabla (al final del elemento tbody1)
   thead1.appendChild(hilera1); 
  } 
  //*************************************************(2)

  //*************************************************(2a)
  // Crea las celdas de la 2da. hilera de thead1  
  var cadena05 =[ " Aporte inicial "                , ""                    , ""                    ];  
  var cadena06 =[ " ("+dia0+"/"+ mes0+"/"+anio0+")" , formato(CI)+" "+moneda, formato(CI)+" "+moneda];   
  for (var c1 = 0; c1 < 1; c1++) {
   var hilera1a = document.createElement("tr");
   for (var h1 = 0; h1 < n; h1++) {
    var celda1a = document.createElement("td"); celda1a.setAttribute("id", "idCelda1_"+(h1+1));
    var d01 = document.createElement("div");d01.setAttribute("id","div_p_hilera1a_"+(h1+1));// p00: DIV P' PARRAFOS
    var pn05 =document.createElement("p"); pn05.setAttribute("id", "pTex_hilera1a_"+(h1+1));// PARRAFO NUMEROS
    var pn06 =document.createElement("p"); pn06.setAttribute("id", "pNum_hilera1a_"+(h1+1));// PARRAFO LETRAS
    var textoCelda05 = document.createTextNode(""+cadena05[h1]);var textoCelda06 = document.createTextNode(""+cadena06[h1]);
    pn05.appendChild(textoCelda05); pn06.appendChild(textoCelda06);
    d01.appendChild(pn05); d01.appendChild(pn06); 
    celda1a.appendChild(d01);
    hilera1a.appendChild(celda1a);
   }
   thead1.appendChild(hilera1a); // agrega la hilera al final de la tabla (al final del elemento tbody1)
   table1.appendChild(thead1);//Agrega thead1 a table1
  } 
  //*************************************************(2a)

  //*************************************************(3)
  // Crea las celdas para tbody1 
  var monto0="";var interes0="";var total0="";
  for (var i= 1; i<=N-1; i++) {//for (var i= 1; i<=N-1+(nN); i++) 
    
   //CALCULOS INTERES COMPUESTO CON APORTES: I=(1+i)ᵗ -1       // ()³⁶⁰  ¹⁸⁰/³⁶⁰
   MA1 = MA2; //MONTO PERÍODO ANTERIOR 
   ci = ( (Math.pow((1+Ted/100 ),(1))-1)*MA2 ); //INTERES PERÍODO ANTERIOR 
   MA2 = (( (Math.pow((1+Ted/100 ),(1))-1)*MA2 + MA2 ) +C); // MONTO PERÍODO ACTUAL
   var F=2; 
   //var MAF = "( "+formato(MA1)+" + "+formato(ci)+" + "+formato(C)+" ) = "+formato(MA2)+" "+moneda; 
   var MAF01 ="("+formato(MA1.toFixed(F))+" + "+formato(( MA2.toFixed(F) - MA1.toFixed(F) - C.toFixed(F) ).toFixed(F))+" + "+formato(C)+") = ";// ← PARA SUMAS EXACTA, SOLUCION: APLICAR '.toFixed(F)'
   var MAF02 = formato(MA2.toFixed(F))+" "+moneda;// ← PARA SUMAS EXACTA, SOLUCION: APLICAR '.toFixed(F)'
   //var MAF = MAF01 + MAF01; console.log("MAF "+ MAF);
   //console.log( "( i="+i+" "+formato(MA1.toFixed(F))+" + "+formato(( MA2.toFixed(F) - MA1.toFixed(F) - C.toFixed(F) ).toFixed(F))+" + "+formato(C)+" ) = "+formato(MA2.toFixed(F))+" "+moneda );
   
   //CALCULOS INTERES COMPUESTO SIN APORTES 
   M1 = M2; //MONTO PERÍODO ANTERIOR  
   cis = (((Math.pow((1+Ted/100 ),(i))-1)*CI+CI) - M1); //INTERES PERÍODO ANTERIOR (SIN USO)
   M2 = ((Math.pow((1+Ted/100 ),(i))-1)*CI+CI);  // MONTO PERÍODO ACTUAL (METODO 1) 
   //M2 = ((Math.pow((1+Ted/100 ),(1))-1)*M2+M2);// MONTO PERÍODO ACTUAL (METODO 2) 
   var MF01 ="("+formato(M1.toFixed(F))+" + "+formato((M2.toFixed(F) - M1.toFixed(F)).toFixed(F))+") = ";
   var MF02 = formato(M2.toFixed(F))+" "+moneda;
   //var MF = MF01 + MF01;
   //console.log("( i="+i+" "+formato(M1.toFixed(F))+" + "+formato((M2.toFixed(F) - M1.toFixed(F)).toFixed(F))+" ) = "+M2.toFixed(F)+" "+moneda );
   //           (  10        355339.98    +                     112313.73                ) = 467653.72 USD ← SUMA INEXACTA, SOLUCION: APLICAR '.toFixed(F)'
   /*PARA: Aporte inicial=10000, Aportes periódicos=1000, interes=10% :
   // i=1    0.1*10000+10000     1000+10000    M2 = 11000
   // i=2    0.1*11000+11000     1100+11000    M2 = 12100
   // i=3    0.1*12100+12100     1210+12100    M2 = 13310 ...
   */
   //Crea las hileras de tbody1
   var hilera2 = document.createElement("tr"); hilera2.setAttribute("id", "tr_"+cont+"_"+i);
   for (var j = 0; j < n; j++) {
     // Crea celdas
     var celda2 = document.createElement("td"); celda2.setAttribute("id", "idCelda2_"+(j+1));
     //GENERAR TIEMPO 2:
     var mydate=new Date(); var mydate1 = mydate.addMillisecs((i*p)*24*60*60*1000);var diaF = new String(mydate1.getDate()); var mF = Number(mydate1.getMonth()+1);; mesF = new String(mF);
     if (diaF.length<2) {diaF="0"+diaF;}else{diaF=diaF;} if (mesF.length<2) {mesF="0"+mesF;}else{mesF=mesF;}
     var anioF2 = (Number( mydate1.getYear())+1900);//CORRECCION AL SISTEMA: +1900
   
     //datos para la celda2:
     var Ni= new String (formato(i)).split(".")[0]; // SEPARA LA PARTE ENTERA DE 1,000.00 , Ni= 1,000
     var cadena07 =[""], cadena08 =[""], cadena08_ =[""];
     for (var r2 = 0; r2 <= 6; r2++) {
       if(ck1.checked==true &&ck2.checked==false) {if(document.getElementById("rb"+r2).selected==true){
        cadena07 =["Fin período "                   ,""      ];
        cadena08 =[Ni                                , MAF01 ];
        cadena08_=[" ("+diaF+"/"+ mesF+"/"+anioF2+")", MAF02 ];}}
       if(ck1.checked==false&& ck2.checked==true) {if(document.getElementById("rb"+r2).selected==true){
        cadena07 =["Fin período "                   , ""   ];
        cadena08 =[Ni                                , MF01];
        cadena08_=[" ("+diaF+"/"+ mesF+"/"+anioF2+")", MF02];}}
       if(ck1.checked==true && ck2.checked==true) {if(document.getElementById("rb"+r2).selected==true){
        cadena07 =["Fin período "                    , ""   , ""  ];
        cadena08 =[Ni                                , MAF01, MF01];
        cadena08_=[" ("+diaF+"/"+ mesF+"/"+anioF2+")", MAF02, MF02];}}
      }
      var d02 = document.createElement("div");d02.setAttribute("id", "div_p"+(j+1));// p00: DIV P' PARRAFOS
      var pn07 = document.createElement("p"); pn07.setAttribute("id", "pTex"+(j+1));// PARRAFO LETRAS
      var pn08 = document.createElement("p"); pn08.setAttribute("id", "pNum"+(j+1));// PARRAFO NUMEROS
      var pn08_ = document.createElement("p");pn08_.setAttribute("id", "pNum_"+(j+1));// PARRAFO NUMEROS
      var textoCelda07 = document.createTextNode(""+cadena07[j]);var textoCelda08 = document.createTextNode(""+cadena08[j]);var textoCelda08_ = document.createTextNode(""+cadena08_[j]);
      pn07.appendChild(textoCelda07); pn08.appendChild(textoCelda08); pn08_.appendChild(textoCelda08_);
      d02.appendChild(pn07); d02.appendChild(pn08); d02.appendChild(pn08_);  
      celda2.appendChild(d02);
      hilera2.appendChild(celda2);
    }
   tbody1.appendChild(hilera2);// agrega la hilera2 a tbody1  
  } // FIN DE for (var i= 1; i<=N-1; i++) 
  //******************************************************************************(3)
  //******************************************************************************(3a)
  //DATOS PARA PERIODO FINAL:tbodyF
  for (var f= 1; f<=N; f++) {
    //CALCULOS INTERES COMPUESTO CON APORTES 
    CIF30 = ( (Math.pow((1+Ted/100 ),(1))-1)*CIF30+CIF30 )  +C; var RCA = formato(CIF30-C) +" "+moneda;
    //CALCULOS INTERES COMPUESTO SIN APORTES  
    var M2 = ((Math.pow((1+Ted/100 ),(f))-1)*CI+CI); var RSA = formato(M2) +" "+moneda;
  } // FIN DE for (var f= 1; f<=N; f++)
  //Crea las hileras de tbodyF
  for (var hF = 0; hF < 1; hF++) {
    var hileraF = document.createElement("tr");  
    for (var cF = 0; cF < n; cF++) {
     // Crea las celdas para tbodyF
     var celdaF = document.createElement("td");
     celdaF.setAttribute("id", "celdaF_"+(cF+1));
     //GENERAR TIEMPO 3:
     var mydate=new Date(); 
     var mydate1 = mydate.addMillisecs(((f-1)*p)*24*60*60*1000);
     var diaF = new String(mydate1.getDate()); 
     var mF = Number(mydate1.getMonth()+1);; 
     mesF = new String(mF);
     if (diaF.length<2) {diaF="0"+diaF;}else{diaF=diaF;} if (mesF.length<2) {mesF="0"+mesF;}else{mesF=mesF;}
     var anioF3 = (Number( mydate1.getYear())+1900);//CORRECCION AL SISTEMA: +1900
     //datos para la celdaF:
     var R0F = " Fin período "+N0+" ("+diaF+"/"+ mesF+"/"+anioF3+")" ;       
     var cadenaF =[""];
     for (var rF = 0; rF <= 6; rF++) {
     if(ck1.checked==true &&ck2.checked==false) {if(document.getElementById("rb"+rF).selected==true){
      cadena09 =["Fin período "                      , RCA];
      cadena10 =[N0+" ("+diaF+"/"+ mesF+"/"+anioF3+")", "" ];}}     
      if(ck1.checked==false&& ck2.checked==true) {if(document.getElementById("rb"+rF).selected==true){
      cadena09 =["Fin período "                      , ""];
      cadena10 =[N0+" ("+diaF+"/"+ mesF+"/"+anioF3+")", RSA];}}
     if(ck1.checked==true && ck2.checked==true) {if(document.getElementById("rb"+rF).selected==true){
      cadena09 =["Fin período "                      , "" , ""];
      cadena10 =[N0+" ("+diaF+"/"+ mesF+"/"+anioF3+")", RCA, RSA];}}// R0F, RCA, RSA          .
     }
     var d03 = document.createElement("div"); d03.setAttribute("id","div_p_hileraF_"+(cF+1));// p00: DIV P' PARRAFOS
     var pn09 = document.createElement("p"); pn09.setAttribute("id", "pTex_hileraF_"+(cF+1));// PARRAFO NUMEROS
     var pn10 = document.createElement("p"); pn10.setAttribute("id", "pNum_hileraF_"+(cF+1));// PARRAFO LETRAS
     var textoCelda09 = document.createTextNode(""+cadena09[cF]);
     var textoCelda10 = document.createTextNode(""+cadena10[cF]);
     pn09.appendChild(textoCelda09); 
     pn10.appendChild(textoCelda10);
     d03.appendChild(pn09); 
     d03.appendChild(pn10); 

     celdaF.appendChild(d03); 
     hileraF.appendChild(celdaF);
    }
    tbodyF.appendChild(hileraF);// agrega la hileraF a tbody1
   } // FIN DE for (var hF = 0; hF < 1; hF++)
  //******************************************************************************(3a)
  //if (N==0) {}
  if (N==1) {table1.appendChild(tbodyF);}
  if (N>1) {table1.appendChild(tbody1);table1.appendChild(tbodyF);};// agrega la tbody1 y tbodyF a table1

  //******************************************************************************(4)
  // Crea un elemento <tfoot> (pie de la tabla):
  var tfoot1 = document.createElement("tfoot");
  thead1.setAttribute("id", "tfoot1");
  // Crea las celdas para tfoot1
  var hilerafoot = document.createElement("tr");
  var celdafoot = document.createElement("td"); celdafoot.setAttribute("id", "celdaF"); celdafoot.setAttribute("colspan", "4");celdafoot.setAttribute("rowspan", "1");
  var textoTfoot = document.createTextNode(" ");
  celdafoot.appendChild(textoTfoot);hilerafoot.appendChild(celdafoot);tfoot1.appendChild(hilerafoot);
  table1.appendChild(tfoot1);//Agrega tfoot1 a table1
  //******************************************************************************(4)

  h3.appendChild(table1);// Agrega table1 a div h3
  document.getElementById("bC"+cont).style.display ="none";document.getElementById("bV"+cont).style.display ="none";
  if (N>1) {document.getElementById("bC"+cont).style.display ="inline-block";document.getElementById("bV"+cont).style.display ="inline-block";}
  document.getElementById("bC"+cont).click();//COLLAPSE tbodyF 
} // FIN DE function genera_tabla()
 

//******************************************************************************(4a)   
document.addEventListener("DOMContentLoaded", function(event) {///....cuando se vaya a trabajar con elementos del DOM poner todo dentro de un bloque que escuche la carga del DOM
const DIVS = document.querySelectorAll(".hB");
const cuandoSeHaceClick = function (evento) {
var SC= ["(máximo=6,000)", "(máximo=6,000)","(máximo=4,000)","(máximo=2,000)","(máximo=1,333)","(máximo=1,000)"]
var n= (this.innerText).charAt(0);
var n= ((this.id).charAt(1))-3;  ///// document.getElementById("texto2").value= n;
document.getElementById("rb"+n).selected="selected"; document.getElementById("span1").innerHTML=SC[n-1]; 
//document.getElementById("tea"+n).focus() ;
}
// DIVS es un arreglo así que lo recorremos
DIVS.forEach(f);
function f (CLIC) {
CLIC.addEventListener("click", cuandoSeHaceClick);
}
});/// ..........................................................cuando se vaya a trabajar con elementos del DOM poner todo dentro de un bloque que escuche la carga del DOM
//*************************************************************************************************(4a)
   
// ANIMACION (SIN USO)*************************************************************************************** 5
var anim2= "";
function error1(){ // FUNCION SIN USO
  var x00 = "";var z= "";
  var elementos = document.getElementsByName("box");
  for (var x=0;x<elementos.length;x++){
    if (/[a-zA-Z]/.test(elementos[x].value)==true) { //SI ENCUENTRA LETRAS EN LA CADENA
         elementos[x].style.border="1px solid rgb(255, 0, 0)";elementos[x].style.color="rgb(255, 0, 0)"; x00+=x+','; // console.log(x00): 3,5, SI LOS ERRORES ESTAN EN LAS CASILLAS box[0] Y box[1]
     }else{
       if (COLOR==3 || COLOR==4) {
         elementos[x].style.border="1px solid rgb(0, 0, 10)";elementos[x].style.color="rgb(0, 0, 10)"; 
       } else {
         elementos[x].style.border="1px solid rgb(150, 150, 150)";elementos[x].style.color="rgb(229, 218, 218)"; 
       } 
                 //rootStyles.setProperty("--border-color", "#ffff00");
                 //rootStyles.setProperty("--text-color", "rgb(150, 150, 0)");
     clearInterval(anim2);}
   }
   z= x00.split(','); z.pop(); //......... console.log(z): [ "3", "5" ]  ,SI LOS ERRORES ESTAN EN LAS CASILLAS box[0] Y box[1]
   var m=0; var m2=1; var tMax = ""; var nMax0 ;var str= "";
   var boxs= [BOX0, BOX1, BOX2, BOX3, BOX4,BOX5, BOX6, BOX7, BOX8]; // CAPTURA DE TEXTOS ANTES DE SER PROCESADOS
   for(var p=0;p<z.length;p++){elementos[z[p]].value="";}//elementos[z[0]].value="";elementos[z[1]].value="";elementos[z[2]].value="";... 

      var anim= setInterval(function() { //Animar texto
            for(var q=0;q<z.length;q++){ // CUANTAS CASILLAS ESTAN CON ERRORES: z.length
               /* //METODO LARGO PARA ENCONTRAR tMax:
                if (z.length==1) { tMax = Math.max(boxs[z[0]].length)}; 
                if (z.length==2) { tMax = Math.max(boxs[z[0]].length, boxs[z[1]].length)}; // tMax= Math.max(3,1) ,SI LAS CASILLAS ERRADAS box[0] Y box[1] TIENEN 3 Y 1 CARACTERES RESPECTIVAMENTE ,ENTONCES tMax SERA IGUAL A: 3          
                if (z.length==3) { tMax = Math.max(boxs[z[0]].length, boxs[z[1]].length, boxs[z[2]].length) };
                if (z.length==4) { tMax = Math.max(boxs[z[0]].length, boxs[z[1]].length, boxs[z[2]].length, boxs[z[3]].length)};
                if (z.length==5) { tMax = Math.max(boxs[z[0]].length, boxs[z[1]].length, boxs[z[2]].length, boxs[z[3]].length, boxs[z[4]].length)};
                if (z.length==6) { tMax = Math.max(boxs[z[0]].length, boxs[z[1]].length, boxs[z[2]].length, boxs[z[3]].length, boxs[z[4]].length, boxs[z[5]].length)};
                if (z.length==7) { tMax = Math.max(boxs[z[0]].length, boxs[z[1]].length, boxs[z[2]].length, boxs[z[3]].length, boxs[z[4]].length, boxs[z[5]].length, boxs[z[6]].length)};
                if (z.length==8) { tMax = Math.max(boxs[z[0]].length, boxs[z[1]].length, boxs[z[2]].length, boxs[z[3]].length, boxs[z[4]].length, boxs[z[5]].length, boxs[z[6]].length, boxs[z[7]].length)};
                if (z.length==9) { tMax = Math.max(boxs[z[0]].length, boxs[z[1]].length, boxs[z[2]].length, boxs[z[3]].length, boxs[z[4]].length, boxs[z[5]].length, boxs[z[6]].length, boxs[z[7]].length, boxs[z[8]].length)};
             */  
                //METODO CORTO PARA ENCONTRAR tMax:  
                str+= "boxs[z["+q+"]].length,";//console.log(str); 
                var tMax0 = "tMax = Math.max("+str+")";//console.log(eval(tMax)); // tMax= Math.max(3,1) ,SI LAS CASILLAS ERRADAS box[0] Y box[1] TIENEN 3 Y 1 CARACTERES RESPECTIVAMENTE ,ENTONCES tMax SERA IGUAL A: 3
                eval(tMax0);//EVALUA EL STRING tMax0

                var myArray = boxs[z[q]].split(""); // SE CREA UN ARRAY myArray DEL TEXTO CAPTURADO
                var myArray2 = []; // SE CREA UN NUEVO ARRAY myArray2 PARA COMPLETAR LONGITUD DE CASILLA CON MAYOR NUMERO DE CARACTERES
                for (var a = 0; a < tMax-boxs[z[q]].length; a++) {
                myArray2.push(""); // push AGREGA ELEMENTOS AL FINAL DEL ARRAY
                } //////console.log(myArray2);
                // PARA CASILLAS ERRADAS box[0] Y box[1]:
                // SI [10T] Y [G] : ["1","0","T"] Y ["G"]
                //SE CREARA ARRAY [] PARA ["1","0","T"] Y ["",""] PARA ["G"]
                //LA ANIMACION SE HARA PARA ["1","0","T"] Y ["G","",""]
                myArray.push.apply(myArray, myArray2); // SE AGREGA myArray2 A myArray
                elementos[z[q]].value+= myArray[m]; // SE IMPRIME TEXTO EN LAS CASILLAS ERRADAS.
            } m++; if (m== tMax) {clearInterval(anim);}}, 100); // SE DETIENE TIMER EN tMax= 3 ,PARA LAS CASILLAS ERRADAS box[0] Y box[1] 

      anim2= setInterval(function() { //Animar bordes
            if (m2%2 == 0) {// Operador binario %. Devuelve el RESTO entero de dividir los dos operandos.
                for(var q2=0; q2<z.length; q2++) { elementos[z[q2]].style.border="1px solid rgb(150, 150, 150)";}} 
            else {for(var q3=0; q3<z.length; q3++){elementos[z[q3]].style.border="2px solid rgb(255, 0, 0)";}}
            m2++;}, 600);      
} //FIN DE function error1() 

function error2(){ // FUNCION SIN USO
     var x00 = "";var z= "";
     var elementos = document.getElementsByName("box");
     for (var x=0;x<elementos.length;x++){
       if (/[a-zA-Z]/.test((cleanBoxes(elementos[x].value.replace(/,/g,"")))*1)==true) { //SI ENCUENTRA LETRAS EN LA CADENA
            x00+=x+','; document.getElementById("tex3").value= (cleanBoxes(elementos[x].value.replace(/,/g,"")))*1; // console.log(x00): 3,5, SI LOS ERRORES ESTAN EN LAS CASILLAS box[0] Y box[1]
        }else{clearInterval(anim2);}
      }
      z= x00.split(','); z.pop(); //......... console.log(z): [ "3", "5" ]  ,SI LOS ERRORES ESTAN EN LAS CASILLAS box[0] Y box[1]
      var m=0; var m2=2; var tMax = ""; var nMax0 ;var str= "";
      for(var q0=0; q0<z.length; q0++){elementos[z[q0]].style.border="2px solid rgb(255, 0, 0)";elementos[z[q0]].style.color="rgb(255, 0, 0)";}
      anim2= setInterval(function() { //Animar bordes
            if (m2%2 == 0) {// Operador binario %. Devuelve el RESTO entero de dividir los dos operandos.
                for(var q2=0; q2<z.length; q2++) { 
                    if (COLOR==3 || COLOR==4) {
                      elementos[z[q2]].style.border="1px solid rgb(0, 0, 10)";elementos[z[q2]].style.color="rgb(0, 0, 10)"; 
                    } else {
                      elementos[z[q2]].style.border="1px solid rgb(150, 150, 150)";elementos[z[q2]].style.color="rgb(229, 218, 218)"; 
                    } 
                }
                } 
            else {for(var q3=0; q3<z.length; q3++){elementos[z[q3]].style.border="2px solid rgb(255, 0, 0)";elementos[z[q3]].style.color="rgb(255, 0, 0)";}}
            m2++;}, 600);      
} //FIN DE function error2() 
           
function iniciar() {
  /*
  //METODO1:
  var sumTC=""; var elem = document.getElementsByName("box");
  for (var x=0;x<elem.length;x++){sumTC+= (cleanBoxes(elem[x].value.replace(/,/g,"")))*1;}/// document.getElementById("texto2").value= sumTC;
    if (/[a-zA-Z]/.test(sumTC)==true) alert("Datos incorrectos"); //SI ENCUENTRA LETRAS EN LA CADENA 
    else genera_tabla();
  //METODO2:
  if (/[a-zA-Z]/.test((cleanBoxes(elem[0].value.replace(/,/g,"")))*1)==true) alert("Datos incorrectos: "+cuotaI.value);
  else if (/[a-zA-Z]/.test((cleanBoxes(elem[1].value.replace(/,/g,"")))*1)==true) alert("Datos incorrectos: "+cuota.value); 
  else if (/[a-zA-Z]/.test((cleanBoxes(elem[2].value.replace(/,/g,"")))*1)==true) alert("Datos incorrectos: "+boxTED.value); 
  else if (/[a-zA-Z]/.test((cleanBoxes(elem[3].value.replace(/,/g,"")))*1)==true) alert("Datos incorrectos: "+tea1.value); 
  else if (/[a-zA-Z]/.test((cleanBoxes(elem[4].value.replace(/,/g,"")))*1)==true) alert("Datos incorrectos: "+N.value); 
  else  genera_tabla();
  */
  //METODO3:
  var i="", n=1, b=document.getElementsByName("box");
  for(i=0;i<b.length;i++){
    if (/[a-zA-Z]/.test((cleanBoxes(b[i].value.replace(/,/g,"")))*1)==true) {n=0; break;}
  } 
  if (n===0) alert("Datos incorrectos: "+b[i].value);
  else genera_tabla();
}

function stopTimer() {clearInterval(anim2)} // FUNCION SIN USO
///FIN DE ANIMACION ************************************************************************************** 5
function cleanBoxes(box){
     var cb0= new String(box);
     var cb1 = cb0.replace(/ /g, '');//La g significa repetir la búsqueda a través de toda la cadena. // [ CI0.split(/\s/).join('')) ] //[ CI0.replaceAll(" ","") NO FUNCIONA EN EXPLORER ]          
     return cb1; // RETORNA CADENA SIN ESPACIOS VACIOS.
} 

function formato(input) { 
  var cadena= new String(input); var x = cadena.split("."); //var x = cadena.replace(/,/g,"").split(".");
  var x1 =  x[0];//PARTE ENTERA
  var x2 = "";//PARTE DECIMAL 
  var rgx0 = /[a-zA-Z]/;
  var c=""; var moneda="Soles"; // var moneda=document.getElementById("money").value;
  if (rgx0.test(cadena)==true) { //SI ENCUENTRA LETRAS EN LA CADENA: infinity NaN isNaN 5.554680159996e+333
    return cadena; //PENDIENTE DE REVISION: /\d+/.test(cadena) ? c= cadena+" "+moneda :c= cadena; return c; ////SI ENCUENTRA NUMERACION EN LA CADENA RETORNA cadena + moneda, SI ENCUENTRA SOLO LETRAS: infinity NaN isNaN RETORNA cadena
    }
    else {//SI ENCUENTRA SOLO NUMEROS EN LA CADENA
      for (var j = 0; j < cadena.length; j++) { if (cadena.charAt(j)==".") break; }
      var d = cadena.substring(j,j+2+1);//CORTAR CADENA DE DECIMALES A 2 DIGITOS INCLUIDO EL PUNTO
      if (d.length==0) {x2= d + ".00";} else if(d.length==2){x2= d + "0";} else{x2= d + "";}
      var rgx = /(\d+)(\d{3})/;
      for (i = 1; i <= Math.trunc(x1.length/3); i++) {// trunc OBTIENE LA PARTE ENTERA DE: LA LONGITUD DE x1 DIVIDIDO POR 3
          x1 = x1.replace(rgx, '$1' + ',' + '$2');  
        }       
      return x1+x2;
    } 
} 
function formato1(input) { //FORMATO SOLO PARA CASILLA id="tea1", SOLO CAMBIA UNA LINEA: var d = cadena.substring(j,j+20+1);  
  var cadena= new String(input); var x = cadena.split("."); //var x = cadena.replace(/,/g,"").split(".");
  var x1 =  x[0];//PARTE ENTERA
  var x2 = "";//PARTE DECIMAL 
  var rgx0 = /[a-zA-Z]/;
  var c=""; var moneda="Soles"; // var moneda=document.getElementById("money").value;
  if (rgx0.test(cadena)==true) { //SI ENCUENTRA LETRAS EN LA CADENA: infinity NaN isNaN 5.554680159996e+333
    return cadena; //PENDIENTE DE REVISION: /\d+/.test(cadena) ? c= cadena+" "+moneda :c= cadena; return c; ////SI ENCUENTRA NUMERACION EN LA CADENA RETORNA cadena + moneda, SI ENCUENTRA SOLO LETRAS: infinity NaN isNaN RETORNA cadena
    }
    else {//SI ENCUENTRA SOLO NUMEROS EN LA CADENA
      for (var j = 0; j < cadena.length; j++) { if (cadena.charAt(j)==".") break; }
      var d = cadena.substring(j,j+20+1);//CORTAR CADENA DE DECIMALES A 20 DIGITOS INCLUIDO EL PUNTO
      if (d.length==0) {x2= d + ".00";} else if(d.length==2){x2= d + "0";} else{x2= d + "";}
      var rgx = /(\d+)(\d{3})/;
      for (i = 1; i <= Math.trunc(x1.length/3); i++) {// trunc OBTIENE LA PARTE ENTERA DE: LA LONGITUD DE x1 DIVIDIDO POR 3
          x1 = x1.replace(rgx, '$1' + ',' + '$2');  
        }       
      return x1+x2;
    } 
} 
function operacion(taza,exponente) {//CALCULO DE tea: A 180 DIAS → ted= 4 //RESPUESTA: 1.0816000000000001 , OBJETIVO: 1.0816
  //TED a TEA: exponente = new String(1/(dias/360)); ......❰1❱
  //TEA a TED: exponente = new String(dias/360); ..........❰2❱
  var teda = (Math.pow( (1+(taza/100)),exponente )-1)*100 ;// teda:  Taza Efectiva Diaria ó Anual
  //console.log("teda: "+teda);     
  var t = new Decimal(taza);                     //console.log("t : "+t );
  var d = t.div(100).toNumber();                 //console.log("d : "+d );
  var d0 = new Decimal(d);                       //console.log("d0: "+d0);  
  var s = d0.plus(1).toNumber();                 //console.log("s : "+s );
  var s0 = new Decimal(s);                       //console.log("s0: "+s0);
  var p = s0.toPower(exponente).toNumber();      //console.log("p : "+p ,"exponente: "+exponente);
  var p0 = new Decimal(p);                       //console.log("p0: "+p0);
  var r = p0.minus(1).toNumber();                //console.log("r : "+r );
  var r0 = new Decimal(r);                       //console.log("r0: "+r0);
  var m_F = r0.mul(100).toNumber().toFixed(100); //console.log("m_toFixed(100) : "+m_F );///SOLO PARA OBSERVAR DECIMALES
  var m = r0.mul(100).toNumber();                //console.log("m : "+m ); console.log("→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→");
  return m;//return Number(m);
}
  /*
  var t = new Decimal(taza);                  console.log("t : "+t );
  var d = t.div(100).toNumber();              console.log("d : "+d );
  var d0 = new Decimal(d);                    console.log("d0: "+d0);  
  var s = d0.plus(1).toNumber();              console.log("s : "+s );
  var s0 = new Decimal(s);                    console.log("s0: "+s0);
  var p = s0.toPower(exponente).toNumber();   console.log("p : "+p , "exponente: "+exponente);
  var p0 = new Decimal(p);                    console.log("p0: "+p0);
  var r = p0.minus(1).toNumber();             console.log("r : "+r );
  var r0 = new Decimal(r);                    console.log("r0: "+r0);
  var m = r0.mul(100).toNumber();             console.log("m : "+m );
  
  // src="js/decimal.min.js" : =======================================================
  //RESTA: var a = new Decimal(3.3); a.minus(3) → 0.3  //SUMA: var a = new Decimal(3.3); a.plus(3) → 6.3 
  //DIVISION: x = new Decimal(355); y = new Decimal(113); x.dividedBy(y); x.div(5);
  //RAIZ CUADRADA:x = new Decimal(16); x.squareRoot() → 4 ; y.sqrt()
  //POTENCIA: var x = new Decimal(1.04); var y = x.toPower(2); y=1.0816
  //FIN DE:src="js/decimal.min.js" =====================================================
  */
function formato2(input) {//(SIN USO)
  var cP0 = "";
  cP0 = (Number(input) % 1 == 0)? new String(input)+".0" : new String(input);//console.log("cP0→→→→→→→",cP0);//RESPUESTA: 1.0816000000000001 , OBJETIVO: 1.0816
  var cP = cP0.split(".");
  var pEntera = cP[0];//console.log("pEntera→→→→→→→",pEntera);//PARTE ENTERA: 1.12255 , [ 1 ]
  var pDecimal = cP[1];//console.log("pDecimal→→→→→→→",pDecimal);//PARTE DECIMAL: 12255 , [ 0111874208078342 ]
  var nuevapotencia = ""; var nuevonumero = ""; var nuevodecimal = ""; var factor=10; 
  var decimales = 15;

  if (pDecimal.length <= decimales) {
    nuevodecimal=pDecimal; // nuevodecimal= 12255 , [ nuevodecimal= 011187420807834 ]
  } else {
    nuevodecimal = pDecimal.substring(0,decimales); //CORTAR CADENA DE DECIMALES A 15 DIGITOS
  } 

  var L=nuevodecimal.length; //console.log("function formato2(input) {...} → input recortado a "+L+" decimales: "+nuevodecimal);

  for (let i = 1; i < L; i++) {
     factor = factor*10; // factor= 100000  , [ factor= 1000000000000000 ]
  }  //console.log("factor "+factor);
  nuevonumero = String(((nuevapotencia*factor)-(1*factor))/factor); //console.log("nuevonumero",nuevonumero); // 0.12255 , [ 0.011187420807834 ]
    
  var cP00 = "";
  cP00 = (Number(nuevonumero) % 1 == 0)? new String(nuevonumero)+".0" : new String(nuevonumero);//console.log("cP00→→→→→→→",cP00);
  //MULTIPLICAR nuevonumero:0.12255 POR 100:
  var cP0 = cP00.split(".");
  var pEntera0 = cP0[0];//PARTE ENTERA: 0 , [0]
  var pDecimal0 = cP0[1]+"0";  //console.log("pDecimal0",pDecimal0);//PARTE DECIMAL: 12255 , [011187420807834]
  var nuevodecimal0 = pDecimal0.substring(0,2);// 12 , [01]
  var nuevodecimal00 = pDecimal0.substring(2);  //console.log("nuevodecimal00",nuevodecimal00);// 255 , [1187420807834]
  var ted0 = String(pEntera0) + String(nuevodecimal0)+"."+String(nuevodecimal00);  //console.log("ted0",ted0);
  var ted = Number(ted0); // ted = 12.255 , [1.1187420807834]
  //console.log("function formato2(input) {...} → return con formato2: "+ted+ " → formato1 "+formato1(ted));
  //console.log("function formato2(input) {...} → return sin formato2: "+((input)-(1))*100); console.log("→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→ . ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←"); 
  return ted;
  } 

  function borrarT(cont){document.getElementById("table"+cont).remove();}
  function collapseTr(cont){document.getElementById("tbody"+cont).style.visibility ="collapse"; document.getElementById("bC"+cont).style.display ="none"; document.getElementById("bV"+cont).style.display ="inline-block";}  
  function visibleTr(cont){document.getElementById("tbody"+cont).style.visibility="visible"; document.getElementById("bV"+cont).style.display ="none"; document.getElementById("bC"+cont).style.display ="inline-block";}
  function resetar() {//RESETAR FORMULARIO
    document.getElementById("btnR").click();
    document.getElementById("tex1").value=cont; span1.innerText= "(máximo=1,000)"; span3.innerText= "360"; money1.innerText= "(USD)"; money2.innerText= "(USD)";
    var elem = document.getElementsByName("box");
  }
   
  function t(){ // FUNCION SIN USO
    //Obtener el ancho de una tabla:
    document.getElementById("cuota").value="WT: "+document.getElementById('table1').offsetWidth;
  } 
  function styleDisplay(){ // FUNCION SIN USO
    var resolucionX= screen.width; var resolucionY= screen.height;//TOTAL DE PANTALLA
    var rdx=screen.availWidth; var rdy=screen.availHeight;//PANTALLA MENOS BARRA DE TAREAS Y MAS
    var vx = window.innerWidth; var vy = window.innerHeight;//ancho y altura INTERIOR de la ventana del navegador (en píxeles)
    var cx = document.documentElement.clientWidth; var cy = document.documentElement.clientHeight;//VENTANA MENOS SCROLL
    //var wTable=document.getElementById('table1').offsetWidth;//Obtener el ancho de una tabla:
    // ...
  }// fin de styleDisplay()     

  function onload() {
    btnR.click(); // RESETEO
    //USANDO: Element.clientWidth OBTENEMOS LA ALTURA//USANDO: Element.clientHeight OBTENEMOS EL ANCHO
    var article=document.getElementById("article_center").clientHeight;//devuelve la altura de un elemento en píxeles, incluyendo el padding pero no las barras horizontales, el borde o el margen.
    //var article = document.getElementById('article_center').offsetHeight;//devuelve el alto de un elemento, incluyendo el padding vertical y los bordes, en píxeles, como un número entero.
    document.getElementById("article_left").style.height=article+"px";
    document.getElementById("article_right").style.height=article+"px";
    document.getElementById("card_2").style.height=(article-20)+"px";//RESTAR padding VERTICAL 10px+10px
    //console.log("article", article ,document.getElementById("article_left").clientHeight,document.getElementById("article_right").clientHeight,document.getElementById("article_left").style.height,document.getElementById("article_right").style.height)
    cuentaRegresiva();
  }

  // CONTROL DEL SELECTORES: 
  var selector1 = document.getElementById("Selector1");
  var s1= ["(USD)", "(Dolares)","(PEN)","(Soles)","(EUR)","(Euros)","(€)","($)"] 
  selector1.addEventListener("click", () => {
    selector1.addEventListener("change", () => {
     switch (selector1.value) {
      case "USD":    money1.innerHTML = s1[0]; money2.innerHTML = s1[0]; break; 
      case "Dolares":money1.innerHTML = s1[1]; money2.innerHTML = s1[1]; break; 
      case "PEN":    money1.innerHTML = s1[2]; money2.innerHTML = s1[2]; break; 
      case "Soles":  money1.innerHTML = s1[3]; money2.innerHTML = s1[3]; break; 
      case "EUR":    money1.innerHTML = s1[4]; money2.innerHTML = s1[4]; break; 
      case "Euros":  money1.innerHTML = s1[5]; money2.innerHTML = s1[5]; break; 
      case "€":      money1.innerHTML = s1[6]; money2.innerHTML = s1[6]; break; 
      case "$":      money1.innerHTML = s1[7]; money2.innerHTML = s1[7]; break; 
     }
    });
  });

  var s2= ["(máximo=6,000)", "(máximo=6,000)","(máximo=4,000)","(máximo=2,000)","(máximo=1,333)","(máximo=1,000)"];
  var s3= ["1","30", "60","90","180","270","360"]
  Selector2.addEventListener("click", () => {
    Selector2.addEventListener("change", () => {
     var iT00= Number(cleanBoxes(document.getElementById("tea1").value.replace(/[-,]/g,"")));  document.getElementById("tea1").value=formato1(iT00); 
     var iT0=document.getElementById("tea1");
     var taza=iT0.value.replace(/[-,]/g,""); var dias=Selector2.value;
     //boleano=3;
     switch (dias) {
      case "1" : span1.innerHTML=s2[0]; span3.innerHTML = s3[0]; boxTED.value= formato1(TAZA(taza, dias, 3)); break; 
      case "30": span1.innerHTML=s2[0]; span3.innerHTML = s3[1]; boxTED.value= formato1(TAZA(taza, dias, 3)); break; 
      case "60": span1.innerHTML=s2[1]; span3.innerHTML = s3[2]; boxTED.value= formato1(TAZA(taza, dias, 3)); break;
      case "90": span1.innerHTML=s2[2]; span3.innerHTML = s3[3]; boxTED.value= formato1(TAZA(taza, dias, 3)); break; 
      case "180":span1.innerHTML=s2[3]; span3.innerHTML = s3[4]; boxTED.value= formato1(TAZA(taza, dias, 3)); break; 
      case "270":span1.innerHTML=s2[4]; span3.innerHTML = s3[5]; boxTED.value= formato1(TAZA(taza, dias, 3)); break; 
      case "360":span1.innerHTML=s2[5]; span3.innerHTML = s3[6]; boxTED.value= formato1(taza); break      
     }
    });
  });

  var boleano=""; 
  function TAZA(taza, dias, boleano){//PARA INTRODUCIR TEXTO EN VIVO A CASILLAS, Y DE SELECTOR 'Selector2' A CASILLA 'boxTED'
    var exponente = "";
    if (boleano==2) exponente = Number(1/(dias/360));// Para Taza Efectiva Anual
    else exponente = Number(dias/360);// Para Taza Efectiva Diaria
    //var o = operacion(taza,exponente);
    //if (/[a-zA-Z]/.test(String(operacion(taza,exponente)))==true) { //SI ENCUENTRA LETRAS EN LA CADENA: infinity NaN isNaN 5.554680159996e+333
    //  document.getElementById("tea1").style.color="rgb(255, 0, 0)"
    //  }
    //  else {//SI ENCUENTRA SOLO NUMEROS EN LA CADENA
    //    if (colorTexto==3 || colorTexto==4) {
    //      document.getElementById("tea1").style.color="rgb(0, 0, 0)";console.log("colorTexto if "+colorTexto);
    //    } else {
    //      document.getElementById("tea1").style.color="rgb(150, 150, 152)";console.log("colorTexto else "+colorTexto);
    //    }
    //} 
    return operacion(taza,exponente);
    // SI T.E.A.=12.890625    TAZA A 180 DIAS=6.25
    // SI T.E.A.=15.068529    TAZA A 180 DIAS=7.27
    // SI T.E.A.=39.074849    TAZA A 180 DIAS=17.93  
    // SI T.E.A.=26.01185025  TAZA A 180 DIAS=12.255
  }
    
  function TED1(tazaED, dia){//TED: Taza Efectiva Diaria , PARA CASILLAS (SIN USO)
    var potencia =  new String( Math.pow((1+(tazaED/100) ),(dia/360)) );
    return formato2(potencia);//formato2 MULTIPLICAR nuevonumero POR 100:
  }
  
  function TED(tazaED, dia){//TED: Taza Efectiva Diaria , PARA GENERAR TABLAS
    var potencia =  new String(((Math.pow((1+(tazaED/100) ),(dia/360))-1))*100);
    return potencia;
  }

  // ❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰🞑❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱
  // EVITAR QUE INGRESEN LETRAS A LAS CASILLAS (SOLO ',,,,' Y '.' LA: 'E e + -' DE NOTACION CIENT. FALTA CORREGIR): 
  var boxes = document.getElementsByName("box");
  var cadena = "";  var arrayCadenaE="";  var arrayCadenaD=[""]; var arrayEnteros = [""]; var arrayDecimal=[""];  var stringBoxD = ""; var stringBoxD0 = "";var stringBoxE = ""; var stringBoxE0 = ""; var E = ""; var D = "";
  var punto= ""; var numero= ""; var entero= "";  var decimal= "";
  var arrayCadena = [""]; var sumarBoxes = ""; var sumarBoxes0 = ""; var box = "";

  for (let y = 0; y < boxes.length; y++) { // RECORRE CADA CASILLA
    boxes[y].addEventListener("mousedown", (e) => { // "click" , "mousedown" , "mouseup"
      arrayCadena = [boxes[y].value]; // OBTIENE EL VALOR DE LA CASILLA EN LA Q' SE PRESIONO EL MOUSE
    });
    boxes[y].addEventListener("input", (e) => {
      //CAPTURAR POSICION DEL CURSOR(1):
      var startCursorPosition = boxes[y].selectionStart;
      var endCursorPosition = boxes[y].selectionEnd; ///console.log("startCursorPosition= "+startCursorPosition); console.log("endCursorPosition= "+endCursorPosition);
    
      sumarBoxes = "";
      //boxes[y].value= formato(boxes[y].value);
      arrayCadena.push(boxes[y].value);//arrayCadena.push(formato(boxes[y].value)); // AGREGAR ELEMENTO AL FINAL DE LA CADENA
      // TRUCO:
        sumarBoxes0 = boxes[y].value.replace(/[eE]/g,"@"); ////console.log(sumarBoxes0+"  $");// BLOQUEAR "e" Y "E" DE FORMATO NOTACION CIENTIFICA
        sumarBoxes = (cleanBoxes(sumarBoxes0.replace(/,/g,"")))*1; //console.log("sumarBoxes  ", sumarBoxes);// MULTIPLICA EL VALOR DE LA CADENA POR 1 Y SE OBTENDRA UN NUMERO O UN "NaN"
    
        if (/[a-zA-Z]/.test(sumarBoxes)==true){ // SI ES UN "NaN":
        arrayCadena.pop();// ELIMINAR ULTIMO ELEMENTO DE LA CADENA
        box = cleanBoxes(arrayCadena[arrayCadena.length-1]); // COLOCA A LA CASILLA EL VALOR ANTERIOR AL ERROR
        boxes[y].value= box;//boxes[y].value= formato(box);

        //COLOCAR CURSOR EN POSICION CAPTURADA:
        var input= boxes[y]; var inicio= startCursorPosition; var fin= startCursorPosition;
        input.setSelectionRange(inicio-1,fin-1); //input.setSelectionRange(startCursorPosition-1,startCursorPosition-1);
        input.focus();
      }
    }); 
  } ;
  
  // * INTRODUCIR TEXTO EN VIVO A CASILLAS 
  boxes[2].addEventListener("input", (e) => {
    boleano=2;
    var tazaED= Number(cleanBoxes(document.getElementById("boxTED").value.replace(/[-,]/g,""))); 
    var dia=document.getElementById("Selector2").value;
    if (Selector2.value=="360") {
      //span2.innerHTML= "formato1(tea1)";
      document.getElementById("tea1").value= formato1(tazaED);       
      //console.log("formato1(tazaED) "+formato1(tazaED));
    } else {
      //span2.innerHTML= "formato1(TAZA(tea1, td))";
      document.getElementById("tea1").value= formato1(TAZA(tazaED, dia, boleano));       
      //console.log("formato1(TAZA(tazaED, dia, boleano)) "*formato1(TAZA(tazaED, dia, boleano)));
    }
  }); 
  boxes[3].addEventListener("input", (e) => {
    boleano=3;
    var tea1= Number(cleanBoxes(document.getElementById("tea1").value.replace(/[-,]/g,"")));
    var td=document.getElementById("Selector2").value;
    if (Selector2.value=="360") {
      boxTED.value= formato1(tea1);       
      //console.log("tea1 = 360: ", formato1(tea1));  console.log("→→→→→→→→→→→→→→→→→→→→→→→ . ←←←←←←←←←←←←←←←←←←←←←←←←");
    } else {
      boxTED.value= formato1(TAZA(tea1, td));       
      //console.log("tea1 = "+Selector2.value," [Taza "+td+" días "+formato1(TAZA(tea1, td, boleano))+"]");  console.log("→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→ .. ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←");
    }
  }); 
  //FIN DE: EVITAR QUE INGRESEN LETRAS A LAS CASILLAS:
  //❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰❰🞑❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱❱

 /* ###################################################################################### */
 /* ####################### MODO DARK - MENU TOGGLE ###################################### */
 /* ###################################################################################### */
  ///////////////////////////////////////////////////////////
  // CAMBIAR COLOR DE LA PAGINA AL HACER CLICK SOBRE EL IMPUT "color":
  var colorTexto = "";
  var el_color = "#ff0000";
  document.getElementById("color").addEventListener("input", actualizar, false);
  function actualizar(event) {
     // detecta el nuevo color 
     el_color = event.target.value; //console.log(el_color);
     //------Convertir Colores de Hexadecimal a RGB
     var hex = el_color.replace("#", "0x");
     var R= (hex >> 16);
     var G= (hex >> 8 & 255);
     var B= (hex & 255); ///console.log("rgb" + "(" +R+" " +G+" "+B+ ")");
     //------Convertir Colores de  RGB a HSL
     R /= 255, G /= 255, B /= 255;
     var max = Math.max(R, G, B), min = Math.min(R, G, B);
     var h, s, l = (max + min) / 2;
     if(max == min){
       h = s = 0; // achromatic
     }else{
       var d = max - min;
       s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
       switch(max){
         case R: h = (G - B) / d + (G < B ? 6 : 0); break;
         case G: h = (B - R) / d + 2; break;
         case B: h = (R - G) / d + 4; break;
       }
       h /= 6;
     }
     //console.log("hsl" + "(" +h*360+" " +s*100+"% "+l*100+ "%)");

     var el_color1 = "hsl" + "(" +h*360+" " +s*100+"% "+(l*100-5)+ "%)";
     var el_color2 = "hsl" + "(" +h*360+" " +s*100+"% "+l*100+ "%)";//"rgb("+R+"," +G+"," +B+")";
     var el_color3 = "hsl" + "(" +h*360+" " +s*100+"% "+(l*100-4)+ "%)";
     var el_color4 = "";
     if (s<=1 && l<=0.5) {// s<=1 && l<=0.25
      el_color4 = "hsl" + "(" +0+" " +0+"% "+70+ "%)"; ///console.log("hsl" + "(" +0+" " +0+"% "+70+ "%)");
     } else {
      el_color4 = "hsl" + "(" +0+" " +0+"% "+10+ "%)";//console.log("hsl" + "(" +0+" " +0+"% "+10+ "%)");
     }
      rootStyles.setProperty("--html-color", el_color2);
      rootStyles.setProperty("--bg-color", el_color2);
      rootStyles.setProperty("--bg-card-color", el_color1);
      rootStyles.setProperty("--bg-table-color", el_color3);      
      rootStyles.setProperty("--text-color", el_color4);
  }
  ////////////////////////////////////////////////////////////

  // CAMBIAR COLOR DE LA PAGINA AL HACER CLICK SOBRE LOS DIVS "colors__item":
  const toggleColors= document.getElementsByClassName("colors__item");
  const rootStyles= document.documentElement.style;

  for (let i = 0; i < toggleColors.length; i++) {
      toggleColors[i].addEventListener("click", (e) => {
        COLOR= i; //document.getElementById("texto3").value= COLOR;//console.log(COLOR);
        rootStyles.setProperty("--html-color", e.target.dataset.bg);
        rootStyles.setProperty("--bg-color", e.target.dataset.bg);
        rootStyles.setProperty("--bg-card-color", e.target.dataset.card);
        rootStyles.setProperty("--text-color", e.target.dataset.text);
        rootStyles.setProperty("--border-color", e.target.dataset.border);
        rootStyles.setProperty("--bg-table-color", e.target.dataset.menu);
              
        colorTexto = i; //console.log("i "+i);
      });
      ///switch (i) {
      ///  case "0":colorTexto = 0;console.log(colorTexto+"xxx"); break; 
      ///  case "1":colorTexto = 1;console.log(colorTexto+"xxx"); break; 
      ///  case "2":colorTexto = 2;console.log(colorTexto+"xxx"); break;
      ///  case "3":colorTexto = 3;console.log(colorTexto+"xxx"); break; 
      ///  case "4":colorTexto = 4;console.log(colorTexto+"xxx");break; 
      ///  case "5":colorTexto = 5;console.log(colorTexto+"xxx");break; 
      /// }
  }

  // MENU TOGGLE:
  document.getElementById("palette_svg").addEventListener("click", () => {
      document.getElementById("color").click();
    });
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
  //Para discapacidad:
    if (navMenu.classList.contains("nav-menu_visible")) {
      ///document.getElementById("navbar2").style.display="block"
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      ////document.getElementById("navbar2").style.display="none"
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });
 /*
   navToggle.addEventListener("mouseover", () => {// onmouseover  
     navMenu.classList.toggle("nav-menu_visible");
   });
 */
 //Al hacer click sobre las opciones:
  var options= document.getElementsByClassName("nav-menu-item");
  for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", (e) => {
          navMenu.classList.toggle("nav-menu_visible");
      });  
  }
  /* ###################################################################################### */
  /* ####################### FIN DE: MODO DARK - MENU TOGGLE ############################## */
/* ######################################################################################## */

// /* ################################## Cuenta regresiva 1 #################################### */
// var timerID; ;
// function yearSiguiente(){/*INICIALIZAR PAGINA CON AÑO SIGUIENTE AL ACTUAL*/
// 	var fecha = new Date();
// 	var yearActual = fecha.getFullYear();//AÑO ACTUAL
// 	var yearActual2 = yearActual+1;//AÑO SIGUIENTE
// 	document.getElementById("y").value=yearActual2;
// }
// //aca iniciamos la funcion del nuevo año donde definimos los valores para la cuenta regresiva
// function newYear(){/*iniciamos  la funcion newYear*/
// var S1= document.getElementById("S1").value; var S2 = 'September';
// var D = document.getElementById("d").value;  var D2 = 26;//FALTA CORREGIR ENTRADAS DIAS INEXISTENTES: 30, 31 DE FEBRERO
// var y = document.getElementById("y").value;  var y2 = 2024;
// var hh= document.getElementById("hh").value; var hh2 = 0;
// var mm= document.getElementById("mm").value; var mm2 = 0;
// var ss= document.getElementById("ss").value; var ss2 = 0;
// var countDate = new Date(S1+' '+D+', '+y+' '+hh+':'+mm+':'+ss).getTime();//January, February, March, April, May, June, July, August, September, October, November, December
// //fecha marcada para finalizar el conteo el primero de enero a las cero horas con cero minutos del diaprimero del año 2020 definimos el tiempo limite
// var countDate2 = new Date(S2+' '+D2+', '+y2+' '+hh2+':'+mm2+':'+ss2).getTime();
// 	var now = new Date().getTime();
//   var gap = countDate - now;var gap2 = countDate2 - now;/* la fecha definida coutDate le restamos el now que seria el reloj de la cuenta*/
// 		var second = 1000;/*definimos los segundo*/
// 		var minute = second * 60;/*el valor de los segundos */
// 		var hour = minute * 60;/* el valor de los minutos*/
// 		var day = hour * 24;/* el valor de las horas */
// //definimos la variable con var y le asignamos un nombre y luego un valor
// 		var d = Math.floor(gap / (day));              var d2 = Math.floor( gap2 / (day));               
// 		var h = Math.floor((gap % (day)) / (hour));   var h2 = Math.floor((gap2 % (day)) / (hour));     /*dividimos el dia en horas se almacena en d*/
// 		var m = Math.floor((gap % (hour)) / (minute));var m2 = Math.floor((gap2 % (hour)) / (minute));  /* las horas en minutos se almacena en h*/
// 		var s = Math.floor((gap % (minute)) / second);var s2 = Math.floor((gap2 % (minute)) / second);  /* los minutos en segundos se almacena en m*/
// //Definimos las siguientes variables que almacenaran el resultado dividiendo  se almacena en s 
// 		document.getElementById('day').innerText = d;   document.getElementById('day2').innerText = d2;    /* se imprime el resultado del dia */
// 		document.getElementById('hour').innerText = h;  document.getElementById('hour2').innerText = h2;   /*se imprime el resultado de las horas*/
// 		document.getElementById('minute').innerText = m;document.getElementById('minute2').innerText = m2; /* el resultado de los minutos */
// 		document.getElementById('second').innerText = s;document.getElementById('second2').innerText = s2; /* el resultados de los segundos restantes*/
//   if(d==0 && h==0 && m==0 && s==0){stopTimer();} if(d2==0 && h2==0 && m2==0 && s2==0){stopTimer2();}//location.href=location.href;//RECARGAR UNA PAGINA WEB 
// }
// //setInterval(function(){newYear();},1000)
// function startTimer() {timerID=window.setInterval(newYear,1000);} function startTimer2() {timerID2=window.setInterval(newYear,1000);}
// function stopTimer() {clearInterval(timerID);}                    function stopTimer2() {clearInterval(timerID2);}
// function cuentaRegresiva() {yearSiguiente();startTimer();startTimer2()}
// /* ################################## FIN DE: Cuenta regresiva 1 #################################### */
 
/* ################################## Cuenta regresiva 2 #################################### */
function newYear(){ // 'August' , 'September' // 25 , 26 // 2024 , 2024 // 0,0 // 0,0 // 0,0  
 var cadMeses=['August','September'], cadDias=[25,26], cadYear=[2024,2024], cadHor=[0, 0], cadMin=[0, 0], cadSeg=[0, 0];
 var countDate = "", i="", cad=[], cadD=[], cadH=[], cadM=[], cadS=[]; 
 for (i = 0; i < 2; i++) {
   countDate = new Date(cadMeses[i]+' '+cadDias[i]+', '+cadYear[i]+' '+cadHor[i]+':'+cadMin[i]+':'+cadSeg[i]).getTime();
   //Mes=cadMeses[i]; Dia=cadDias[i]; Año=cadYear[i];
   //cad.push(countDate);
   var now = new Date().getTime(),
       gap = countDate - now,
       seg = 1000,       
       min = seg * 60,
       hora= min * 60,  
       dia = hora * 24, 
       d = Math.floor( gap / dia),              
       h = Math.floor((gap % dia) / hora),   
       m = Math.floor((gap % hora) / min),
       s = Math.floor((gap % min) / seg); 
   cadD.push(d); cadH.push(h); cadM.push(m); cadS.push(s);
  }
 day.value  = cadD[0]; day2.value  = cadD[1];      
 hour.value = cadH[0]; hour2.value = cadH[1];    
 minute.value=cadM[0]; minute2.value=cadM[1];
 second.value=cadS[0]; second2.value=cadS[1];
 if(cadD[0]+cadH[0]+cadM[0]+cadS[0]<=0){
  day.value  = "0";
  hour.value = "0";
  minute.value="0";
  second.value="0";
 }
 if(cadD[1]+cadH[1]+cadM[1]+cadS[1]<=0){
  day2.value  = "0";
  hour2.value = "0";
  minute2.value="0";
  second2.value="0";
 }
 //console.log("0 1 →→→→→→→→ ", cadD[0]+cadH[0]+cadM[0]+cadS[0] , cadD[1]+cadH[1]+cadM[1]+cadS[1]);
 if(cadD[0]+cadH[0]+cadM[0]+cadS[0]<0 && cadD[1]+cadH[1]+cadM[1]+cadS[1]<0){stopTimer();}
}
console.log(Number(dia0),mes0,anio0);
fd.value=dia0; fm=mes0; fa=anio0;
fd2.value=dia0; fm2=mes0; fa2=anio0;

var timerID; 
function startTimer() {timerID=window.setInterval(newYear,1000);} 
function stopTimer() {clearInterval(timerID);} 
function cuentaRegresiva() {startTimer();}
/* ################################## FIN DE: Cuenta regresiva 2 #################################### */




const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
/*
*/
//selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
//selectBtn.addEventListener("click", function() { wrapper.classList.toggle("active")});
selectBtn.addEventListener("click", function() {document.getElementById("img").classList.toggle("activeD")});//toggle Activa y desactiva "active" EN: .active{transform: rotate(360deg);}






  // NOTAS:
  /*
  Podemos eliminar el último elemento de un array.
  Verifique el código a continuación.
  
  var array = [10,11,12,13,14,15,16,17];
  array.splice(-1,1);
  console.log(array);

  Producción:
  [10, 11, 12, 13, 14, 15, 16]
 
  Ó  array.pop();
*/
