//size 10
const n = 10;
let arr = []; //array for store

init()

function init() {
  for (let i = 0; i < n; i++) {
    arr[i] = Math.random();
  }
  showBars();

}

function showBars(move) {
  container.innerHTML="";
  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] * 100 + "%";
    bar.classList.add("bar");
    if(move && move.indices.includes(i)){
        bar.style.backgroundColor= move.type == "swap"?"red" :"Blue" ;
    }
    
    container.appendChild(bar);
  }
}

//Bubble Sort Algorithm

function BubbleSort(arr) {
    const moves=[];
  do {
    var swapped = false;

    for (let i = 1; i < n; i++) {
        moves.push({indices : [i-1 , i],type :"comaprison"}) ;
      if (arr[i - 1] > arr[i]) {
        swapped = true;
        moves.push({indices : [i-1 , i],type :"swap"}) ;
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  } while (swapped);
  return moves ;
}

function animate(moves)
{
    if(moves.length == 0 ){
        showBars();
        return ;
    }
    const move=moves.shift() ;
    const [i,j]=move.indices;
    if(move.type =="swap"){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    showBars(move);
    setTimeout(function(){
        animate(moves);
    },200);


}
function Sort(){
    const copyArr = [...arr];
    const moves = BubbleSort(copyArr);
    animate(moves) ;
}

