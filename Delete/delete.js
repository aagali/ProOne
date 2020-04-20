
var inputText = document.getElementById('input-text'),
    btnAdd = document.getElementById('add'),
    content = document.getElementById('content'),
    list = [
    {id : 1 , name : 'product 1'}
    ,{id : 2 , name : 'product 2'}
     ,{ id : 3 , name : 'product 3'}
    ];
function NewItem(item){
    content.innerHTML = '';
    item.forEach(function(el){
        content.innerHTML += `<div onclick='Delete(${el.id})'> ${el.name} </div>`
    })
}
window.onload = function(){
    this.NewItem(list)
}

btnAdd.addEventListener('click' , function(){
    if(inputText.value == ''){
     alert('You shoude Enter Name')
    }
    else{ 
       var lastId = list.length ? list[list.length-1].id : 0;

       list.push({id : ++lastId,name : inputText.value})
       var addList = list[list.length-1];
       content.innerHTML += `<div onclick='Delete(${addList.id})'> ${addList.name} </div>`;
    }
    inputText.value = '';
 });

 function Delete(id){
     var ind = list.map(function(i){
        return i.id;
     }).indexOf(id);
     if(id !== -1){
         list.splice(ind , 1);
         NewItem(list)
     } 
 }