let count = 0
function increment() {
    count += 1
    document.getElementById("count-el").textContent = count
}
let saveEl = document.getElementById("save-el")
function save() {
    if (count === 0) {
        saveEl.textContent =  saveEl.textContent
    } else{
        let countStr = count + " - "
        saveEl.textContent += countStr
        count = 0
        document.getElementById("count-el").textContent = count
    }
}