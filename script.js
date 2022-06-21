document.getElementById('currentchat').addEventListener('keydown', (event)=>{
  
  if (event.key==='Enter') {

  let msg=event.target.value;
    // console.log(msg);
  let messagelist = document.getElementById('messagelist');
  let userdiv = document.createElement('div');
  userdiv.style.width='100%';
  userdiv.style.height='10%';
  userdiv.style.wordWrap='break-word';
  userdiv.style.color='blue';
  userdiv.style.textAlign='right';
  userdiv.style.marginBottom='5%';
  // userdiv.style.marginBottom='5%';
  
  userdiv.appendChild(document.createTextNode(msg));
  messagelist.appendChild(userdiv);
  document.getElementById('currentchat').value='';


  let botdiv = document.createElement('div');
  botdiv.style.width='100%';
  botdiv.style.minHeight='10%';
  botdiv.style.wordWrap='break-word';
  botdiv.style.color='red';
  botdiv.style.textAlign='left';
  botdiv.style.marginBottom='5%';
  botdiv.style.whiteSpace='pre-wrap';
  
  xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
 
    if (this.readyState==4 && this.status==200) {
      var response = JSON.parse(this.responseText);
      
      botdiv.appendChild(document.createTextNode(response.answer));
      messagelist.appendChild(botdiv);
      messagelist.scrollTo(0,messagelist.scrollHeight);
    }
  };
  xhttp.open('POST', '/predict', true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify({message: msg}))
  }
})
