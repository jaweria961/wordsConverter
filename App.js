let text = document.querySelector('.text');
let words = document.querySelector('.words');
let characters = document.querySelector('.characters');


text.addEventListener('input',() =>{
    debugger;
    characters.textContent = text.value.length;
     if( characters.textContent>1000)
    {
        alert("Characters should be less than 1000 ")
    }

    console.log('characters')
    let _words = text.value.trim()
    words.textContent = _words.split(/\s+/).filter
    ((item) => item).length
})
