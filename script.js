const Input = document.getElementById("input");
const output = document.getElementById("output")
const warn = document.getElementById("warning")

// SaveList
function savelist() {
    localStorage.setItem("list", output.innerHTML)
}
setInterval(savelist(), 1000);

// === FUNCTION ADD ACTIVITY ===
addEventListener("keypress", function valueinput(keyPress) {
    if (keyPress.key === "Enter" && Input.value.trim().length !== 0) {
        let list = "<div class='list' style='display: flex;'><p id='content'  onclick='chech(this)'>" + Input.value + "</p><span onclick='removeitem(this)'>[x]</span></div>" // list
        output.insertAdjacentHTML("beforeend", list)
        warn.innerHTML = "Tidak ada warn"
        Input.value = ""
    } else {
        warn.innerHTML = "warn"
    }
    
})

function AddActivity() {
    if (Input.value.trim().length !== 0) {
        let list = "<div class='list' style='display: flex;'><p id='content'  onclick='chech(this)'>" + Input.value + "</p><span onclick='removeitem(this)'>[x]</span></div>" // list
        output.insertAdjacentHTML("beforeend", list)
        warn.innerHTML = "Tidak ada warn"
        Input.value = ""
    } else {
        warn.innerHTML = "warn"
    }
    
}

function removeitem(e) {
    e.parentElement.remove()
    
}

function chech(x) {
    x.style.textDecoration =  "line-through";
    
}


function loadlist() {
    output.innerHTML = localStorage.getItem("list")
}
loadlist()
