let inp = document.getElementById("inp");

function display(num) {
    inp.value += num;
}
function Calculate() {
    try {
        inp.value = eval(inp.value);
    }
    catch (e) {
        alert("INVALID INPUT");
    }
}
function Clear() {
    inp.value = "";
}
function Del() {
    inp.value = inp.value.slice(0, -1);
}
