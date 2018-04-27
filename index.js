const getFirstSelector = function (selector) {
  return document.querySelector(selector);
};

const nestedTarget = function () {
  return document.getElementById('nested').querySelector('div.target');
};

const increaseRankBy = function (n) {
  const tags = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < tags.length; i++) {
    let number = parseInt(tags[i].innerHTML);
    tags[i].innerHTML = (number+n).toString();
  };
};

const deepestChild = function () {
  let divs = document.querySelector('div#grand-node');
  while (divs.children.length === 1) {
    divs = divs.children[0];
  }
  return divs;
};
