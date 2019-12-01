function getFirstSelector(selector){
//accepts a selector and returns first element that matches
return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
const rankListsElements = document.querySelectorAll('ranked-list,li');
for (let i=0;i<rankListsElements.length;i++){
  rankListsElements[i].innerHTML = parseInt(rankListsElements[i].innerHTML)+n;
}
}
