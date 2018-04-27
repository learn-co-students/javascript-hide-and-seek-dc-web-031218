function getFirstSelector(str){
	return document.querySelector(str);
};

function nestedTarget(){
	return document.querySelector('#nested .target');
};

//note: assumes one child per level
function deepestChild(){
	let grandNode = document.querySelector('div#grand-node');
	var deepest = grandNode.children[0];
	while(deepest.children.length > 0){
		deepest = deepest.children[0];
	}
	return deepest;
}

function increaseRankBy(n){
	let listItems = document.querySelectorAll('.ranked-list li');
	for(let i = 0; i < listItems.length; i++){
		let tempNum = parseInt(listItems[i].innerHTML) + 3;
		listItems[i].innerHTML = tempNum;
	}
}