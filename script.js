const btn1=document.getElementById('calculate');
const resetBtn=document.getElementById('reset');
//const radiobtn2=document.getElementById('radiowrapper1.2');
//mortype1=document.getElementById('radiowrapper1.1');
function garo(){
    const amt=parseFloat(document.getElementById('amount').value);
    const termAnsw=document.getElementById('term-answer');
    const monthAnsw=document.getElementById('monthly-answer');
    const interest=parseFloat(document.getElementById('interest').value);
    const term=parseFloat(document.getElementById('term').value);
    array1=[];
    const x=document.getElementById('pound');
    const n=term*12;
    document.getElementById('pound').style.backgroundColor="";
    document.getElementById('perc').style.backgroundColor="";
    document.getElementById('yearspan').style.backgroundColor="";
    const i=(interest/100)/12;

     const selected = document.querySelector('input[name="option"]:checked');
     if (isNaN(amt)){
        //document.getElementById('pound').style.backgroundColor="red";
        array1.push("pound");
     }
     if(isNaN(interest)){
        //document.getElementById('perc').style.backgroundColor="red";
        array1.push("perc");
     }
     if(isNaN(term)){
        //document.getElementById('yearspan').style.backgroundColor="red";
        array1.push("yearspan");
     }
        if(array1.length>0){
        array1.forEach(id => {
        document.getElementById(id).style.backgroundColor="red"})
        return;
        }else{
     
     if (!selected){
        alert("Please select a mortgage type");
        return;
     }
         if(selected.value=="1"){
            const factor=(1+i)**n;
            const PMT=amt*i*(factor/(factor-1));
            monthlyResult=Math.round(PMT*100)/100;
            termResult=PMT*n;
            //  let pound = x.textContent || x.innerText;
            //let pound = "\u00A3"
            let pound = String.fromCharCode(163);
            monthAnsw.innerHTML= pound + monthlyResult;
            termAnsw.innerHTML=pound + Math.round(termResult*100)/100;
            document.getElementById('wrapper22').style.display='none';
            document.getElementById('results').style.display="flex";
        }
     if (selected.value=="2"){
        monthlyResult=Math.round((i*amt)*100)/100;
        let pound = "\u00A3";
        monthAnsw.innerHTML=pound + monthlyResult;
        result=(monthlyResult*n)+amt;
        termAnsw.innerHTML=pound + result;
        document.getElementById('wrapper22').style.display='none';
        document.getElementById('results').style.display="flex";
        }
     }};
function hey(radio){
        // Get all radio buttons with the same name
    const radios = document.getElementsByName(radio.name);
    
    // Reset all backgrounds to default first
    radios.forEach(r => {
        document.getElementById(`${r.id}`).style.background = '';
    });
    
    // If this radio is checked, set its background
    if(radio.id=="radiowrapper1.1"){
      alert("we did it");
    }
    if (radio.checked) {
        document.getElementById(`'${radio.id}'`).style.background = 'hsl(61, 60%, 72%)';
}
};


function reset(){
    document.getElementById('radiowrapper1').style.background='';
    document.getElementById('pound').style.backgroundColor="";
    document.getElementById('perc').style.backgroundColor="";
    document.getElementById('yearspan').style.backgroundColor="";
}

btn1.addEventListener("click",garo);
resetBtn.addEventListener("click",reset);




