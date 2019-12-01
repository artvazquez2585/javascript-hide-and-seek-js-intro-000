function getFirstSelector(selector){
//accepts a selector and returns first element that matches
return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  const rankedLists = document.getElementbyClassName('ranked-list')
  if(rankedLists){
  for(let i=0,i<rankedLists.length,i++){
    if(rankedLists[i].children){
      for(let j=0,j<rankedLists[i].children.length,j++){
        rankedLists[i].children[j].innerHTML = parseInt(rankedLists[i].children[j].innerHTML)+n;
      }
    }
  }
}
}
