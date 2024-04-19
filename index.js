let input =  document.getElementById('input-box');
let list =  document.getElementById('list-container');

function add_task()
{
    if(input.value === '')
    {
         document.querySelector(".empty").textContent= "your list is empty, add something";
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
}
document.getElementById('add').addEventListener("click",add_task);

list.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData()
{
    localStorage.setItem("data",list.innerHTML);
}
function showList()
{
    list.innerHTML = localStorage.getItem("data");
}
showList();