function add(){
    let x = document.forms["forms"]["fname"]["lname"].value;
    if(x==null){
        alert("Name must be filled out!!!");
    }
    else{
        return true;
    }
}
