function clearscreen(){
    document.getElementById("text").value = "";
}
function display(value){
    document.getElementById("text").value += value;
}
function cal() {
    var a = document.getElementById("text").value;
    var b = eval(a);
    document.getElementById("text").value = b;
}