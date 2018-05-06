
// writes the current year in the document
function setYear(){
  year = new Date().getFullYear();
  document.write(year);
}


// easy function for tab interfaces
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
