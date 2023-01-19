
function search_brand() {
  //alert('welcome');
  var a=document.getElementById('searchbar').value;
  a=a.toLowerCase();
  //alert(a)
  let x = document.getElementsByClassName('product-card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(a)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
