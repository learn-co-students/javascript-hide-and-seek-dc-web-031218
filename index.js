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
    //each iteration we are replacing what we have in test
    //on the last iteration, we have the deepest child 
    test=lis[i].querySelector("div");
  }
return test;
}

function increaseRankBy(n){
  //getting all of the li elements
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  //iterating through them and incrementing them by n
  for(let i=0;i<lis.length;i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}
