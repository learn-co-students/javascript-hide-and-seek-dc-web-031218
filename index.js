function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget (target) {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  let node = document.getElementById("grand-node");
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0]
  }

  return node;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list");

  rankedLists.forEach ( (listItem) => {
    // debugger;

    for (let i = 0; i < listItem.children.length; i++) {
      listItem.children[i].innerHTML = (parseInt(listItem.children[i].innerHTML) + n)
    }


  });
}
