
var textt=document.getElementById('word_');
var button=document.getElementById('search_');
var maincontent=document.getElementById('main_content');
var maincontentanswer=document.getElementById('main_content_answer');
var word=document.getElementById('word_name');
var backSearch=document.getElementById('back_search');
var meaning=document.getElementById('meaning_');
var partOfSpeech=document.getElementById('partofspeech');


var textValue;
button.addEventListener("click",getValue);

async function getValue(){
    textValue=textt.value;
    
    console.log(maincontent)
    if(textValue == ""){
        return;
    }
    maincontent.style.display="none"
    maincontentanswer.style.display="block"
    word.innerHTML=textValue;
    // word.style.textTransform="capitalize";
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${textValue}`
   
    try {
        const response = await fetch(url);
        const result = await response.json();
    
        console.log(result[0].meanings[0].definitions[0].definition);
        meaning.innerText=result[0].meanings[0].definitions[0].definition;
        partOfSpeech.innerText=result[0].meanings[0].partOfSpeech
    } catch (error) {
        console.error(error);
    }
}

backSearch.addEventListener('click',()=>{
    maincontent.style.display="block";
    maincontentanswer.style.display="none";
    textt.value="";
    meaning.innerText="";
    partOfSpeech.innerText="";
})
// console.log(textValue)