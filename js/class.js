// var liNode = document.getElementById('one');
// var liNode = document.querySelector('#one');
// liNode.className = "cool";
// liNode.textContent = "cool"
// var liNodesArray = document.getElementsByClassName('hot');
// var liNodesArray = document.querySelectorAll('.hot');
// console.log(liNodesArray)
// if (liNodesArray.length > 2){
//     liNodesArray[2].className = "cool";
// }
// for (var index = 0; index < liNodesArray.length; index++){
//     console.log(index)
//     liNodesArray[index].className = "cool";
// }
var ul = document.createElement('ul');
var body = document.querySelector('body');
body.append(ul);
var li1 = document.createElement('li');
li1.textContent = 'hello';
ul.append(li1);
var li2 = document.createElement('li');
li2.textContent = 'hello 2';
ul.append(li2);
function createHTMLElement(tagName, parentNode, innerText) {
  var tag = document.createElement(tagName);
  // var tag = document.createElement('ul')
  if (innerText.length > 0) {
    tag.textContent = innerText;
  }
  parentNode.append(tag);
  return tag;
}
var body = document.querySelector('body');
var ul = createHTMLElement('ul', body, '');
for (var numTags = 1; numTags <= 1000; numTags++) {
  createHTMLElement('li', ul, `${numTags} Hello`);
}
