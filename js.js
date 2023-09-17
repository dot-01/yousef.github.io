let taskdiv = document.querySelector(".tasks");

document.forms[0].onsubmit = function (sub) {
    sub.preventDefault();

    let div = document.createElement("div");
    let h3 = document.createElement("span");
    let btnd = document.createElement("button");
    let txt = document.getElementsByClassName("txt")[0].value;

    if (txt !== "") {
        let txt1 = document.createTextNode(txt);
        let del = document.createTextNode("Delete");
        btnd.className = "btndelete";
        h3.className = "h"
        div.className = "secdiv"
        btnd.id = txt;
        btnd.appendChild(del);
        h3.appendChild(txt1);
        div.appendChild(h3);
        div.appendChild(btnd);
        taskdiv.appendChild(div);
        document.getElementsByClassName("txt")[0].value = "";
        window.localStorage.setItem(btnd.id , div.innerHTML)
    }
   
}
document.addEventListener("click",function (e){
    if(e.target.className === "btndelete")
    {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your task has been deleted.',
                'success'
              )
              e.target.parentElement.remove();
              window.localStorage.removeItem(e.target.id);
            }
          })
    }
   
});

window.onload = function(){
    if(localStorage.length !== 0){
        for (let index = localStorage.length-1 ; index >= 0; index--) {
           let key = window.localStorage.key(index);
           let item = window.localStorage.getItem(key);
           let div = document.createElement("div");
           div.className = "secdiv"
          div.innerHTML = item;
           taskdiv.appendChild(div);
        }
    }
}


