var z=false;  
var arr =[[121,122,123,124,125,133,132,131],
          [111,112,113,114,115,116,117,118],
          [000,000,000,000,000,000,000,000],
          [000,000,000,000,000,000,000,000],
          [000,000,000,000,000,000,000,000],
          [000,000,000,000,000,000,000,000],
          [211,212,213,214,215,216,217,218],
          [221,222,223,225,224,233,232,231]];
var brr=[[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],  
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0]]
var a=6;
var b=6;
var c=9;
var d=10;
var bw=0;
//  bottom diclar
//function

function a1(a,b){

  //second click  strat
 
  if(z){

    if(brr[a][b]==1){
         arr[a][b]=arr[c][d];
         arr[c][d]=0;
        
         document.getElementById(a+""+b).textContent=document.getElementById(c+""+d).textContent;
         document.getElementById(c+""+d).textContent=""; 
         bw++;}
        // forloop
         for(let i=0;i<=7;i++){
          for(let j=0;j<8;j++){
            if(brr[i][j]==1){
             document.getElementById(i+""+j).style.backgroundColor=null;
             brr[i][j]=0
            }
          }
         }

         console.log(arr);
        //  console.log(brr);
        // console.log(document.getElementById("big").innerText);
        z=false;
       document.getElementById(c+""+d).style.backgroundColor=null; 
  }


  //second end
  //first click strat
  else if((bw%2==0&&arr[a][b]<200)||(bw%2!=0&&arr[a][b]>200)){

  console.log("hello");
    brr=[[0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0],  
         [0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0]]
  c=a;
  d=b;

  document.getElementById(a+""+b).style.backgroundColor="red";
  
  // chipai start
  if((200<arr[a][b]&&arr[a][b]<220)||(120>arr[a][b])){
  //white
    if(a==0||a==7){
      document.getElementById("small").className="hide";
    }
 else if(120>arr[a][b]){
    if(arr[a+1][b]==0){
      brr[a+1][b]=1;
      if(a==1&&arr[a+2][b]==0){
      brr[a+2][b]=1;
    }}
    if(b<7&&arr[a+1][b+1]>200){
      brr[a+1][b+1]=1;
   }
    if(b>0&&arr[a+1][b-1]>200){
      brr[a+1][b-1]=1;
    }
   }
//black
  if(200<arr[a][b]&&arr[a][b]<220){
    if(arr[a-1][b]==0){
      brr[a-1][b]=1;
      if(a==6&&arr[a-2][b]==0){
      brr[a-2][b]=1;}
    }
    if(b<7&&arr[a-1][b+1]<200&&arr[a-1][b+1]!=0){
      brr[a-1][b+1]=1;
    }
    if(b>0&&arr[a-1][b-1]<200&&arr[a-1][b-1]!=0){
      brr[a-1][b-1]=1;
    }
   }
  }
//chipai end 


// ele start
else if(arr[a][b]==121||arr[a][b]==131||arr[a][b]==221||arr[a][b]==231){
  ele(a,b);
}
//ele end

// mantheri strat
else if(arr[a][b]==123||arr[a][b]==133||arr[a][b]==223||arr[a][b]==233){
 manthi(a,b);
}
// mantheri end

// queen strat
else if(arr[a][b]==124||arr[a][b]==224){
  ele(a,b);
  manthi(a,b);
 }
//  queen end

// king strat
else if(arr[a][b]==125||arr[a][b]==225){
 king(a,b);
 }
// king end

// hours start
else if(arr[a][b]==122||arr[a][b]==132||arr[a][b]==222||arr[a][b]==232){
hours(a,b);
}
// hours end

// else(arr[a][b])
// console.log(arr);
console.log(brr);
z=true;
for(let i=0;i<=7;i++){
          for(let j=0;j<8;j++){
            if(brr[i][j]==1){
             document.getElementById(i+""+j).style.backgroundColor="lightgreen";
            }
          }
         }
}

}


// king function

function king(a,b){
if(a!=0&&(arr[a-1][b]==0||(arr[a-1][b]==225&&arr[a-1][b]<200)||(arr[a-1][b]==125&&arr[a-1][b]>200))){
  brr[a-1][b]=1;
 }
 if(b!=0&&(arr[a][b-1]==0||(arr[a][b-1]==225&&arr[a][b-1]<200)||(arr[a][b-1]==125&&arr[a][b-1]>200))){
  brr[a][b-1]=1;
 }
 if(b!=7&&(arr[a][b+1]==0||(arr[a][b+1]==225&&arr[a][b+1]<200)||(arr[a][b+1]==125&&arr[a][b+1]>200))){
  brr[a][b+1]=1;
 }
 if(a!=7&&(arr[a+1][b]==0||(arr[a+1][b]==225&&arr[a+1][b]<200)||(arr[a+1][b]==125&&arr[a+1][b]>200))){
  brr[a+1][b]=1;
 }
 if(a!=0&&b!=0&&(arr[a-1][b-1]==0||(arr[a-1][b-1]==225&&arr[a-1][b-1]<200)||(arr[a-1][b-1]==125&&arr[a-1][b-1]>200))){
  brr[a-1][b-1]=1
 }
 if(a!=0&&b!=7&&(arr[a-1][b+1]==0||(arr[a-1][b+1]==225&&arr[a-1][b+1]<200)||(arr[a-1][b+1]==125&&arr[a-1][b+1]>200))){
  brr[a-1][b+1]=1
 }
 if(a!=7&&b!=7&&(arr[a+1][b+1]==0||(arr[a+1][b+1]==225&&arr[a+1][b+1]<200)||(arr[a+1][+-1]==125&&arr[a+1][b+1]>200))){
  brr[a+1][b+1]=1
 }
 if(a!=7&&b!=0&&(arr[a+1][b-1]==0||(arr[a+1][b-1]==225&&arr[a+1][b-1]<200)||(arr[a+1][b-1]==125&&arr[a+1][b-1]>200))){
  brr[a+1][b-1]=1
 }
}


// hours
function hours(a,b){
if(a>1&&b>0&&((arr[a-2][b-1]<200&&arr[a][b]>200)||((arr[a-2][b-1]>200||arr[a-2][b-1]==0)&&arr[a][b]<200))){
  brr[a-2][b-1]=1;
}
if(a<6&&b<7&&((arr[a+2][b+1]<200&&arr[a][b]>200)||((arr[a+2][b+1]>200||arr[a+2][b+1]==0)&&arr[a][b]<200))){
  brr[a+2][b+1]=1;
}
if(a>1&&b<7&&((arr[a-2][b+1]<200&&arr[a][b]>200)||((arr[a-2][b+1]>200||arr[a-2][b+1]==0)&&arr[a][b]<200))){
  brr[a-2][b+1]=1;
}
if(a<6&&b>0&&((arr[a+2][b-1]<200&&arr[a][b]>200)||((arr[a+2][b-1]>200||arr[a+2][b-1]==0)&&arr[a][b]<200))){
  brr[a+2][b-1]=1;
}

if(a>0&&b>1&&((arr[a-1][b-2]<200&&arr[a][b]>200)||((arr[a-1][b-2]>200||arr[a-1][b-2]==0)&&arr[a][b]<200))){
  brr[a-1][b-2]=1;
}
if(a<7&&b<6&&((arr[a+1][b+2]<200&&arr[a][b]>200)||((arr[a+1][b+2]>200||arr[a+1][b+2]==0)&&arr[a][b]<200))){
  brr[a+1][b+2]=1;
}
if(a>0&&b<6&&((arr[a-1][b+2]<200&&arr[a][b]>200)||((arr[a-1][b+2]>200||arr[a-1][b+2]==0)&&arr[a][b]<200))){
  brr[a-1][b+2]=1;
}
if(a<7&&b>1&&((arr[a+1][b-2]<200&&arr[a][b]>200)||((arr[a+1][b-2]>200||arr[a+1][b-2]==0)&&arr[a][b]<200))){
  brr[a+1][b-2]=1;
}
}


// ele
function ele(a,b){
  var row=a;
  var colum=b;
  console.log(row,colum)
  while(row!=7){
    row++;
    brr[row][colum]=1;
    if(arr[row][colum]!=0){
      if((arr[a][b]<200&&arr[row][colum]<200)||(arr[a][b]>200&&arr[row][colum]>200)){
        brr[row][colum]=0;
      }
      row=7;
    }
  }
  row=a;
  while(row!=0){
    row--;
    brr[row][colum]=1;
    if(arr[row][colum]!=0){
      if((arr[a][b]<200&&arr[row][colum]<200)||(arr[a][b]>200&&arr[row][colum]>200)){
        brr[row][colum]=0;
      }
      row=0;
    }
  }
  row=a;
  while(colum!=7){
    colum++;
    brr[row][colum]=1;
    if(arr[row][colum]!=0){
      if((arr[a][b]<200&&arr[row][colum]<200)||(arr[a][b]>200&&arr[row][colum]>200)){
        brr[row][colum]=0;
      }
      colum=7;
    }
  }
  colum=b;
  while(colum!=0){
    colum--;
    brr[row][colum]=1;
    if(arr[row][colum]!=0){
      if((arr[a][b]<200&&arr[row][colum]<200)||(arr[a][b]>200&&arr[row][colum]>200)){
        brr[row][colum]=0;
      }
      colum=0;
    }
  }
}


function manthi(a,b){
  var row=a;
  var colum=b;
  while(row!=7&&colum!=7){
    row++;
    colum++;
    brr[row][colum]=1;
    if(arr[row][colum]!=0){
      if((arr[a][b]<200&&arr[row][colum]<200)||(arr[a][b]>200&&arr[row][colum]>200)){
        brr[row][colum]=0;
      }
      row=7;
    }
  }
  row=a;
  colum=b;
  while(row!=0&&colum!=0){
    row--;
    colum--;
    brr[row][colum]=1;
    if(arr[row][colum]!=0){
      if((arr[a][b]<200&&arr[row][colum]<200)||(arr[a][b]>200&&arr[row][colum]>200)){
        brr[row][colum]=0;
      }
      row=0;
    }
  }
  row=a;
  colum=b;
  
  while(colum!=0&&row!=7){
    colum--;
    row++;
    // console.log(row,colum);
    brr[row][colum]=1;
    if(arr[row][colum]!=0){
      if((arr[a][b]<200&&arr[row][colum]<200)||(arr[a][b]>200&&arr[row][colum]>200)){
        brr[row][colum]=0;
      }
      colum=0;
    }
  }
  row=a;
  colum=b;
  while(colum!=7&&row!=0){
    colum++;
    row--;
    brr[row][colum]=1;
    if(arr[row][colum]!=0){
      if((arr[a][b]<200&&arr[row][colum]<200)||(arr[a][b]>200&&arr[row][colum]>200)){
        brr[row][colum]=0;
      }
      colum=7;
    }
  }
}  

function crear(a){
  console.log(a,c,d);
  if(a==0){
      if(arr[c][d]>200){
        arr[c][d]=231;document.getElementById(c+""+d).textContent='🦌';
      }else{
        arr[c][d]=131;document.getElementById(c+""+d).textContent='🐘';
      }}
    else if(a==1){
      if(arr[c][d]>200){
        arr[c][d]=233;document.getElementById(c+""+d).textContent='🥷🏿';
      }else{
        arr[c][d]=133;document.getElementById(c+""+d).textContent='🥷';
      } }
      else if(a==2){
      if(arr[c][d]>200){
        arr[c][d]=232;document.getElementById(c+""+d).textContent='🏇🏿';
      }else{
        arr[c][d]=132;document.getElementById(c+""+d).textContent='🏇';
      }}
    else if(a==3){
      if(arr[c][d]>200){
        arr[c][d]=234;document.getElementById(c+""+d).textContent='👸🏿';
      }else{
        arr[c][d]=134;document.getElementById(c+""+d).textContent='👸';
      }
  }
  z=false;
  document.getElementById("small").className="block";
  // document.getElementById("big").style.pointerEvents=auto;
  // console.log(document.getElementById("big").styl);
}