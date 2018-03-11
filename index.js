function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let li = document.getElementById('grand-node')
  let li2 = li.children[0]

  while (li2) {
    li = li2
    li2 = li.children[0]
  }

  return li
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
  }


}
