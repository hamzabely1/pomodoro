
let conatainer = document.createElement("div")

let body = document.getElementById("body")

body.style.background = "black"
body.appendChild(conatainer)
body.style.justifyContent ="center"


let but5 = document.createElement("button")
but5.style.width="50%"
but5.style.height = "50px"
but5.style.background = "red"


conatainer.style.height ="300px"
conatainer.style.display="flex"
conatainer.style.justifyContent ="center"
conatainer.style.alignItems="center"
conatainer.style.width ="500px"
conatainer.style.background =""
conatainer.style.color = "white"
conatainer.style.border = "solid red 5px "
conatainer.style.borderRadius ="30px"

let buttonstart = document.createElement("button")
let buttonreset = document.createElement("button")
let buttonpause = document.createElement("button")

buttonstart.style.height="30px"
buttonstart.style.width ="80px"
buttonstart.style.background ="red"
buttonstart.style.borderRadius ="10px"
buttonstart.style.marginTop ="5px"
buttonstart.innerHTML ="start"
buttonstart.style.marginLeft = "10px"


buttonreset.style.height="30px"
buttonreset.style.width ="80px"
buttonreset.style.background ="red"
buttonreset.style.borderRadius ="10px"
buttonreset.style.marginTop ="5px"
buttonreset.innerHTML ="reset"
buttonreset.style.marginLeft = "10px"


buttonpause.style.height="30px"
buttonpause.style.width ="80px"
buttonpause.style.background ="red"
buttonpause.style.borderRadius ="10px"
buttonpause.style.marginTop ="5px"
buttonpause.innerHTML ="pause"
buttonpause.style.marginLeft = "10px"

body.appendChild(buttonstart)
body.appendChild(buttonpause)
body.appendChild(buttonreset)

let m = 25
let s = 59


let ora = document.createElement("p")

conatainer.appendChild(ora)

ora.innerHTML =m +":"+s
ora.style.fontSize ="80px"
let img = document.createElement("img")
body.appendChild(img)
img.src = "f.png"
img.style.height ="250px"
img.style.width ="300px"

buttonstart.addEventListener("click",fun)
  

function fun() {
    img.src = "m.gif"

  let setin = setInterval(start,100)
  function start() {
    if (s == 0) {
    
       m -=1
       conatainer.style.color = "red"

      ora.innerHTML = m+":"+s
      s =60
    }else{
      conatainer.style.color ="white"
      s -=1
      ora.innerHTML = m+":"+s
    }
  
  
  if (s == 0 && m == 0) {
    s = 60
    m =25
    clearInterval(setin)
    body.style.background ="green"
    if (body.style.background == "green") {
      body.style.background ="red"
      if (body.style.background =="red") {
        body.style.background ="green"
  
      }
    }
  }
    }
  
buttonpause.addEventListener("click",stop)

function stop() {
  clearInterval(setin)
  img.src = "f.png"
}

}

buttonreset.addEventListener("click",reset)
function reset() {
  s = 60
  m = 25
  ora.innerHTML = m+":"+s

}



let i = 0;
    function change() {
    let color = ["red", "blue", "orange", "green"];
    body.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
    }
    setInterval(change, 1000);

    img.onmousedown = function(event) {
      img.style.position = 'absolute';
      img.style.zIndex = 1000;
    
      document.body.append(img);
    
      function moveAt(pageX, pageY) {
        img.style.left = pageX - img.offsetWidth / 2 + 'px';
        img.style.top = pageY - img.offsetHeight / 2 + 'px';
      }
    
      moveAt(event.pageX, event.pageY);
    
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
    
      document.addEventListener('mousemove', onMouseMove);
    
      img.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        img.onmouseup = null;
      };
    
    };
    img.ondragstart = function() {
      return false;
    };