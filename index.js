let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")



function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function decrement() {
    count -= 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    
    let saves = count + " - " 
    saveEl.textContent = saveEl.textContent + saves
    countEl.textContent = 0 
    count = 0
}
