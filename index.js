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
function deepestChild()
{
  let deepCriteria = 'div#grand-node' //make this variable a parameter to generalize function
  const divGrandNodes = document.querySelectorAll(deepCriteria)
  let traverseTest = divGrandNodes
  while (traverseTest.children){
    traverseTest = traverseTest.children;
  }
}
