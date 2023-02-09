var siteNameInput = document.querySelector(".sitename");
var urlLinkInput = document.querySelector(".url");
var buttonAdd = document.querySelector(".sbbutton");
var buttonEdit = document.querySelector(".sbedit");
var buttonCancel = document.querySelector(".sbcancel");

var lcontainer = [];

if(localStorage.getItem("links") != null)
{
    lcontainer = JSON.parse(localStorage.getItem("links"));
    displayproducts(lcontainer);

}

function addlinks()
{
   if(validatesitename() == true )
   {
    var webSite = 
    {
        name : siteNameInput.value,
        url : urlLinkInput.value,


    }
   
    lcontainer.push(webSite);
    localStorage.setItem("links", JSON.stringify(lcontainer));
    displayproducts(lcontainer);
    clear();
   
   } 

   else alert("write correct")
   


}



function displayproducts(arr)
{
    var temp =``;
    for(var i=0; i<arr.length; i++)
    {
         temp += `  <tr>
         <td>${arr[i].name}</td>
         <td><a href="${arr[i].url}"><button class=" sbvisit py-2 px-3 rounded ">visit</button></a></td>
         <td><button class="btnupdate rounded py-2 px-3" onclick="update(${i}); updateindex(${i})">update</button></td>
         <td><button class=" bg-danger rounded py-2 px-3" onclick="Delete(${i})">Delete</button></td>
     </tr>`

    }
  document.querySelector(".tablecontent").innerHTML = temp;

}

function clear()
{
    siteNameInput.value = "";
    urlLinkInput.value = "";
}

function validatesitename()
{
    var regex = /^[A-Z]?[a-z]{3,15}$/
   return regex.test(siteNameInput.value);
}

function update(index)
{

    siteNameInput.value = lcontainer[index].name;
    urlLinkInput.value = lcontainer[index].url;
    buttonAdd.classList.add("d-none");
    buttonCancel.classList.remove("d-none")
    buttonEdit.classList.remove("d-none");



    
   
}

function Delete(deleteindex){

   lcontainer.splice(deleteindex,1);

   localStorage.setItem("links", JSON.stringify(lcontainer));

    displayproducts(lcontainer);
}


var ind =0;
function updateindex(index){
   ind=index
    
}

function addupdate(){



lcontainer[ind].name = siteNameInput.value;
lcontainer[ind].url = urlLinkInput.value;

buttonAdd.classList.remove("d-none");
buttonEdit.classList.add("d-none");

localStorage.setItem("links", JSON.stringify(lcontainer))
displayproducts(lcontainer);
clear();


}

function cancel()
{    
    buttonAdd.classList.remove("d-none");
    buttonEdit.classList.add("d-none");
    buttonCancel.classList.add("d-none");

}

console.log(ind);
function change(int){
   int = 9;
}

var y =ind;