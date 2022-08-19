// helping function 
let read = (id)=>{
    return document.getElementById(id).value;
}

let forAppend  = (id)=>{
    return document.getElementById(id)
}

let id;

async function show(){
    try{

const input = read("text");

const input_lang = read("inp_lang");

const output_lang = read("out_lang");

const res = await fetch("https://libretranslate.de/translate",{

method:"POST",

body: JSON.stringify({

    q: input,
    source: input_lang,
    target: output_lang,   
    format:"text",
}),

headers:{
    "Content-Type":"application/json",
},

});

const data = await res.json();
console.log('data:', data)



if(input === ""){
    return false
}
else{
    
    return data
}


}catch(err){
    console.log("err:",err);
}

}
let Append = (el)=>{

    let a = forAppend("p")
   



a.textContent =el.translatedText

forAppend("lower").append(p)
}


async function main(){


let data = await show()

if(data == undefined){
return false
}
Append(data)

}



function debounce(func,delay){
if(id){
    clearTimeout(id);
}
id = setTimeout(function(){
    func()
},delay);

}
