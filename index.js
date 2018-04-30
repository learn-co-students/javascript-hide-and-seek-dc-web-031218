// import { debug } from "util";

// function getFirstSelector(selector) {
//   return document.querySelector(selector);
// }

let getFirstSelector = selector => document.querySelector(selector);

// function nestedTarget() {
//   return document.querySelector('#nested .target')
// }

let nestedTarget = () => document.querySelector('#nested .target');

// function deepestChild() {
//   debugger
//   return document.querySelector('#grand-node div div div div')
// }
let deepestChild = () => document.querySelector('#grand-node div div div div');

// function deepestChild() {
//   let node = document.getElementById('grand-node')
//   let nextNode = node.children[0]
  

//   while (nextNode) {
//     node = nextNode
//     nextNode = node.children[0]
//   }
//   return node
// }



function increaseRankBy(n) {

  let lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for(let i = 0; i< lis.length; i++ ) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}
