const Input = document.getElementById("input");
const output = document.getElementById("output")
const warn = document.getElementById("warning")


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
    savelist()
})

function AddActivity() {
    if (Input.value.trim().length !== 0) {
        let list = "<div class='list' style='display: flex;'><p id='content'  onclick='chech(this)'>" + Input.value + "</p><span onclick='removeitem(this)'>[x]</span></div>" 
        output.insertAdjacentHTML("afterend", list)
        warn.innerHTML = "Tidak ada warn"
        } else {
            warn.innerHTML = "warn"
        }
    savelist()
}

function removeitem(e) {
    e.parentElement.remove()
    savelist()
}

function chech(x) {
    x.style.textDecoration =  "line-through";
    savelist()
}

function savelist() {
    localStorage.setItem("list", output.innerHTML)
}
function loadlist() {
    output.innerHTML = localStorage.getItem("list")
}
loadlist()
