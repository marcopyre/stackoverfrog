document.getElementsByClassName('wmx12 mx-auto d-flex ai-center h100')[0].innerHTML += '<img id="frog" src="darkfrog.png" width="5%" height="100%">'
back = ['content', 'top-bar', 'p-wrapper-home', 'py32', 'wmx12', 'mtn128', 'pt96', 'p48']
text = ['content', 'top-bar', 'nav-links', 'p-wrapper-home', 'py32', 'wmx12', 'mtn128', 'pt96']

document.getElementById('frog').addEventListener('click',buttonclick, false)

var darked = false
var row = 0
var homepage = false 
var style = document.createElement('style');

var darkfrog = chrome.runtime.getURL("images/darkfrog.png");
var whitefrog = chrome.runtime.getURL("images/whitefrog.jpg");

function setCookie(cName, cValue) {
    document.cookie = cName + "=" + cValue + ";" +'Path=/;'
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

if(getCookie('stackoverfrog') == null){
    setCookie('stackoverfrog',true);
}

function buttonclick(){
    console.log('clicked')
    console.log(getCookie('stackoverfrog'))
    if (getCookie('stackoverfrog') == 'false'){
        setCookie('stackoverfrog',true)
    }
    else{
        setCookie('stackoverfrog',false)
    }
    changecolor()
}

function changecolor(){
    if (window.location.href == 'https://stackoverflow.com/'){
        back = ['top-bar', 'p-wrapper-home']
        text = ['top-bar', 'p-wrapper-home']
        homepage = true  
    }
    else{
        back = ['content', 'top-bar', 'p-wrapper-home']
        text = ['content', 'top-bar', 'nav-links', 'p-wrapper-home','truncate','-link--channel-name']
        homepage = false
    }
    if (getCookie('stackoverfrog') == 'true'){
        if (homepage == true)
        {
            style.innerHTML = ".bg-black-025{background: black !important;}"
            document.head.appendChild(style);
        }
        document.body.style.backgroundImage = "url(" + darkfrog + ")";
        document.getElementById("frog").src = whitefrog;
        for(var elem of back){
            if (document.getElementById(elem) != null){
                document.getElementById(elem).style.backgroundColor = 'black'; 
            }
            else if (document.getElementsByClassName(elem) != null) {
                row = 0
                while (row < document.getElementsByClassName(elem).length) {
                    document.getElementsByClassName(elem)[row].style.backgroundColor = 'black';
                    row++
                }
            }
        }
    
        for(var elem of text){
            if (document.getElementById(elem) != null){
                document.getElementById(elem).style.color = 'white';
            }
            else if (document.getElementsByClassName(elem) != null){
                row = 0
                while (row < document.getElementsByClassName(elem).length) {
                    document.getElementsByClassName(elem)[row].style.color = 'white';
                    row++
                }
            }
        }
    }
    else{
        document.getElementById("frog").src = darkfrog;
        document.body.style.backgroundImage = 'none'
        document.body.style.backgroundcolor = 'white'
        for(var elem of back){
            if (document.getElementById(elem) != null){
                document.getElementById(elem).style.backgroundColor = 'white'; 
            }
            else if (document.getElementsByClassName(elem) != null){
                row = 0
                while (row < document.getElementsByClassName(elem).length) {
                    document.getElementsByClassName(elem)[row].style.backgroundColor = 'white';
                    row++
                }
            }
        }
    
        for(var elem of text){
            if (document.getElementById(elem) != null){
                document.getElementById(elem).style.color = 'black';
            }
            else if (document.getElementsByClassName(elem) != null){
                row = 0
                while (row < document.getElementsByClassName(elem).length) {
                    document.getElementsByClassName(elem)[row].style.color = 'black';
                    row++
                }
            }
        }
    }
    document.getElementById('frog').addEventListener('click',buttonclick, false)
    
}
changecolor()