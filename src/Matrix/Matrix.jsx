import React from 'react'
import './Matrix.css'

function Matrix() {
    let sub9CurrentColor;
    let buttonCount = 0;
    let countArray = [];
    let sub1count = 0, sub2count = 0, sub3count = 0, sub4count = 0, sub5count = 0, sub6count = 0, sub7count = 0, sub8count = 0, sub9count = 0;

    function SUB1(){
        const sub1 = document.querySelector('.sub1')        
        sub1.classList.add('color')
        if(sub1count>0){
            alert("Only 1 time click is allowed");
        }else{
            buttonCount = buttonCount+1;
            sub1count = sub1count + buttonCount;
            console.log("Block 1 was click on "+sub1count)
            countArray.push(1);            
        }
    }
    function SUB2(){
        const sub2 = document.querySelector('.sub2')        
        sub2.classList.add('color')
        if(sub2count>0){
            alert("Only 1 time click is allowed");
        }else{
            buttonCount = buttonCount+1;
            sub2count = sub2count + buttonCount;
            console.log("Block 2 was click on "+sub2count)
            countArray.push(2); 
        }
    }
    function SUB3(){
        const sub3 = document.querySelector('.sub3')        
        sub3.classList.add('color')
        if(sub3count>0){
            alert("Only 1 time click is allowed");
        }else{
            buttonCount = buttonCount+1;
            sub3count = sub3count + buttonCount;
            console.log("Block 3 was click on "+sub3count)
            countArray.push(3); 
        }
    }
    function SUB4(){
        const sub4 = document.querySelector('.sub4')        
        sub4.classList.add('color')
        if(sub4count>0){
            alert("Only 1 time click is allowed");
        }else{
            buttonCount = buttonCount+1;
            sub4count = sub4count + buttonCount;
            console.log("Block 4 was click on "+sub4count)
            countArray.push(4); 
        }
    }
    function SUB5(){
        const sub5 = document.querySelector('.sub5')   
        sub5.classList.add('color')
        if(sub5count>0){
            alert("Only 1 time click is allowed");
        }else{
            buttonCount = buttonCount+1;
            sub5count = sub5count + buttonCount;
            console.log("Block 5 was click on "+sub5count)
            countArray.push(5); 
        }
    }
    function SUB6(){
        const sub6 = document.querySelector('.sub6')        
        sub6.classList.add('color')
        if(sub6count>0){
            alert("Only 1 time click is allowed");
        }else{
            buttonCount = buttonCount+1;
            sub6count = sub6count + buttonCount;
            console.log("Block 6 was click on "+sub6count)
            countArray.push(6); 
        }
    }
    function SUB7(){
        const sub7 = document.querySelector('.sub7')        
        sub7.classList.add('color')
        if(sub7count>0){
            alert("Only 1 time click is allowed");
        }else{
            buttonCount = buttonCount+1;
            sub7count = sub7count + buttonCount;
            console.log("Block 7 was click on "+sub7count)
            countArray.push(7); 
        }
    }
    function SUB8(){
        const sub8 = document.querySelector('.sub8')        
        sub8.classList.add('color')
        if(sub8count>0){
            alert("Only 1 time click is allowed");
        }else{
            buttonCount = buttonCount+1;
            sub8count = sub8count + buttonCount;
            console.log("Block 8 was click on "+sub8count)
            countArray.push(8); 
        }
    }

    function SUB9(){   
        const sub9 = document.querySelector('.sub9')
        sub9.classList.add('colorOrange')
        sub9CurrentColor = 'orange'
        console.log(countArray)
        for(let i=0; i<countArray.length; i++){
            setTimeout(() => {
                const aj = document.getElementsByClassName(`sub${countArray[i]}`)
                const ajj = aj[0]
                ajj.classList.add('colorOrange')
            }, 700*i);
        }
    }
   

  return (
    <div id="Matrix">
        <div onClick={SUB1} className="subMatrix sub1"></div>
        <div onClick={SUB2} className="subMatrix sub2"></div>
        <div onClick={SUB3} className="subMatrix sub3"></div>
        <div onClick={SUB4} className="subMatrix sub4"></div>
        <div onClick={SUB5} className="subMatrix sub5"></div>
        <div onClick={SUB6} className="subMatrix sub6"></div>
        <div onClick={SUB7} className="subMatrix sub7"></div>
        <div onClick={SUB8} className="subMatrix sub8"></div>
        <div onClick={SUB9} className="subMatrix sub9"></div>
    </div>
  )
}

export default Matrix