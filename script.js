const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const js_code = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

//For live reflection listen event-

function run(){
    //for not loosing code-
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('html_code', css_code.value);
    localStorage.setItem('html_code', js_code.value);

    //live reflection-
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}



html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();


//On refresh code remains-
html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
js_code.value = localStorage.js_code;
