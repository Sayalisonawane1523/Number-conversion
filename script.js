const baseFrom= document.querySelector("#base-from");
const baseTo= document.querySelector("#base-to");
const input= document.querySelector("#txtNumber");
const result= document.querySelector("#result");
const swap= document.querySelector("#btnSwap");
const convert= document.querySelector("#btnConvert");
const checkBinary= /^[0-1]+$/;
const checkDecimal= /^[0-9]+$/;
const checkOctal= /^[0-7]+$/;
const checkHexadecimal= /^(?!-)(?!.*-)[A-Ea-e0-9-]+(?<!-)$/;


convert.addEventListener("click",function(){
    const baseFrom= document.querySelector("#base-from");
    const baseTo= document.querySelector("#base-to");



    const convertFrom = baseFrom.value;
    // console.log(convertFrom);
    const convertTo = baseTo.value;
    // console.log(convertTo)
    // console.log(input.value);


    if(input.value==""){
        result.value=" Please Enter Some Input";
        input.setAttribute('style','background-color:#ffcaca;');
        input.addEventListener('click',()=>{
            input.removeAttribute('style','background-color:#ffcaca;');
        })
    }
    else {

        
        if(convertFrom == "from-binary" && convertTo == "to-decimal"){
            if(checkBinary.test(input.value)){
                result.value = parseInt(input.value,2);
            }
            else{
                result.value=" Please Enter Binary Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }
        }
        else if(convertFrom == "from-binary" && convertTo == "to-hexadecimal"){
            if(checkBinary.test(input.value)){
                result.value = parseInt(input.value,2).toString(16).toUpperCase();
            }
            else{
                result.value=" Please Enter Binary Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }       
        }
        else if(convertFrom == "from-binary" && convertTo == "to-octal"){
            if(checkBinary.test(input.value)){
                result.value = parseInt(input.value,2).toString(8);
            }
            else{
                result.value=" Please Enter Binary Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }       
        }
        else if(convertFrom == "from-binary" && convertTo == "to-binary"){
            if(checkBinary.test(input.value)){
                result.value = input.value;
            }
            else{
                result.value=" Please Enter Binary Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }             
        }
        else if(convertFrom == "from-decimal" && convertTo == "to-binary"){
            if(checkDecimal.test(input.value)){
                result.value = parseInt(input.value).toString(2);
            }
            else{
                result.value=" Please Enter Decimal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }             
        }
        else if(convertFrom == "from-decimal" && convertTo == "to-hexadecimal"){
            if(checkDecimal.test(input.value)){
                result.value = parseInt(input.value).toString(16).toUpperCase();
            }
            else{
                result.value=" Please Enter Decimal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }                 
        }
        else if(convertFrom == "from-decimal" && convertTo == "to-octal"){
            if(checkDecimal.test(input.value)){
                result.value = parseInt(input.value).toString(8);
            }
            else{
                result.value=" Please Enter Decimal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }          
        }
        else if(convertFrom == "from-decimal" && convertTo == "to-decimal"){
            if(checkDecimal.test(input.value)){
                result.value = input.value;
            }
            else{
                result.value=" Please Enter Decimal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }          
        }
        else if(convertFrom == "from-octal" && convertTo == "to-decimal"){
            if(checkOctal.test(input.value)){
                result.value = parseInt(input.value,8).toString(10);
            }
            else{
                result.value=" Please Enter Octal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }               
        }
        else if(convertFrom == "from-octal" && convertTo == "to-binary"){
            if(checkOctal.test(input.value)){
                result.value = parseInt(input.value,8).toString(2);
            }
            else{
                result.value=" Please Enter Octal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }      
        }
        else if(convertFrom == "from-octal" && convertTo == "to-hexadecimal"){
            if(checkOctal.test(input.value)){
                result.value = parseInt(input.value,8).toString(16).toUpperCase();
            }
            else{
                result.value=" Please Enter Octal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }       
        }
        else if(convertFrom == "from-octal" && convertTo == "to-octal"){
            if(checkOctal.test(input.value)){
                result.value = input.value;
            }
            else{
                result.value=" Please Enter Octal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }         
        }
        else if(convertFrom == "from-hexadecimal" && convertTo == "to-decimal"){ 
            if(checkHexadecimal.test(input.value)){
                result.value = parseInt(input.value,16).toString(10);
            }
            else{
                result.value=" Please Enter Hexadecimal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }         
        }
        else if(convertFrom == "from-hexadecimal" && convertTo == "to-octal"){ 
            if(checkHexadecimal.test(input.value)){
                result.value = parseInt(input.value,16).toString(8);
            }
            else{
                result.value=" Please Enter Hexadecimal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }       
        }
        else if(convertFrom == "from-hexadecimal" && convertTo == "to-binary"){
            if(checkHexadecimal.test(input.value)){
                result.value = parseInt(input.value,16).toString(2);
            }
            else{
                result.value=" Please Enter Hexadecimal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }      
        }
        else if(convertFrom == "from-hexadecimal" && convertTo == "to-hexadecimal"){
            
            if(checkHexadecimal.test(input.value)){
                result.value = input.value.toUpperCase();
            }
            else{
                result.value=" Please Enter Hexadecimal Number";
                input.setAttribute('style','background-color:#ffcaca;');
                input.addEventListener('click',()=>{
                    input.removeAttribute('style','background-color:#ffcaca;');
                })
            }      
        }
    }

})

// swap.addEventListener("click",function(){
   
   
  
// 	const temp=baseFrom.value;
//     const temp2=baseTo.value;
//     console.log(temp+"asd");
//     console.log(temp2+"lkj");
// 	baseTo.value=temp;
// 	baseFrom.value=temp2;
//     console.log(baseFrom.options)
//     console.log(baseTo.options)



//     let input= document.querySelector("#txtNumber");
//     if (input.value !="") {
//         input.value = "";
//     }
//     let result= document.querySelector("#result");
//     if (result.value !="") {
//         result.value = "";
//     }

   
// })