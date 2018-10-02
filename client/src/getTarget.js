function getTarget(event){
  console.log(event.target.parentNode.parentNode.childNodes[0]);
}
export { getTarget };
