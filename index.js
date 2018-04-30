function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
}

function nestedTarget(){
  // return document.querySelector('#nested');
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild(){
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
}

function increaseRankBy(n){
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<lis.length;i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}
