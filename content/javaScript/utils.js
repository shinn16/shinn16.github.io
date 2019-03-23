
// writes the current year in the document
function setYear(){
  year = new Date().getFullYear();
  document.write(year);
}


// easy function for tab interfaces
function openTab(tabName, label) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
        x[i].style.background = "#258be4";
    }
    document.getElementById(tabName).style.display = "block";
    label.style.background = "#0D599A";
}

// basic js search function for a table
function search(tableName) {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("search"); // search field must be called search
    filter = input.value.toUpperCase();
    table = document.getElementById(tableName);
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || i === 0){
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function flip(element){
    var carrot = element.getElementsByTagName('i');
    if( $(carrot).hasClass('fa-caret-down')){
       $(carrot).removeClass('fa-caret-down');
       $(carrot).addClass('fa-caret-up');
    }else{
        $(carrot).removeClass('fa-caret-up');
        $(carrot).addClass('fa-caret-down');
    }
}
