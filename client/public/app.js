var buttons = document.getElementsByClassName('StripeCheckout');
const targetBtn = document.getElementById('message-successful-text');
const downloadLink = document.createElement('a');
const downloadLinkText = document.createTextNode('Download Here');
const att = document.createAttribute('download');

for(var i = 0; i < buttons.length; i++){
  buttons[i].innerHTML = 'Buy';
  buttons[i].addEventListener('click', function(event){
    document.getElementById('message-successful-payment').style.display = "none";
    console.log(event.target.parentNode.parentNode.childNodes[1].childNodes[0]);

    downloadLink.appendChild(downloadLinkText);
    downloadLink.title = 'Download Link';
    downloadLink.href=event.target.parentNode.parentNode.childNodes[1].childNodes[0].src;
    targetBtn.appendChild(downloadLink);
    targetBtn.setAttributeNode(att);
  });
}
