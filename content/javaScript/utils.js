
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
    }
    document.getElementById(tabName).style.display = "block";
    label.style.color = "#20a4f3";
}
