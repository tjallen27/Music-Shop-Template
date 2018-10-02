var buttons = document.getElementsByClassName('StripeCheckout');


for(var i = 0; i < buttons.length; i++){
  buttons[i].innerHTML = 'Buy';
  buttons[i].addEventListener('click', function(event){
    console.log(event.target.parentNode.parentNode.childNodes[1].childNodes[0]);
    const targetBtn = document.getElementById('message-successful-text');
    const downloadLink = document.createElement('a');
    const downloadLinkText = document.createTextNode('Download Here');
    const att = document.createAttribute('download');
    downloadLink.appendChild(downloadLinkText);
    downloadLink.title = 'Download Link';
    downloadLink.href=event.target.parentNode.parentNode.childNodes[1].childNodes[0].src;
    targetBtn.appendChild(downloadLink);
    targetBtn.setAttributeNode(att);
  });
}
