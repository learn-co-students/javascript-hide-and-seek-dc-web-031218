function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  // debugger;
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    let element = rankedLists[i];
    for (let j = 0; j < element.children.length; j++) {
      element.children[j].innerHTML = parseInt(element.children[j].innerHTML) + n;
    }
  }
}


function deepestChild() {
  var element = document.querySelectorAll('#grand-node')
  debugger;
  while (element[0].children[0] !== undefined) {
    element[0] = element[0].children[0];
  }
  return element[0];
}
