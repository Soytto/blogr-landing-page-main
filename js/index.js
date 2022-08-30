const product = document.querySelector("#Product")
const menuProduct = document.querySelector("#menuProduct")
const company = document.querySelector("#Company")
const  menuCompany = document.querySelector("#menuCompany")
const connect = document.querySelector("#Connect")
const menuConnect = document.querySelector("#menuConnect")

// product.addEventListener("click", () =>
// menuProduct.style.visibility ="visible")
product.addEventListener("click", () => {
    toggle3()
})

company.addEventListener("click", () => {
    toggle2()
})

connect.addEventListener("click", () => {
    toggle()
})

function toggle() {
    document.querySelector("#menuConnect").classList.toggle("active")
}
function toggle2() {
    document.querySelector("#menuCompany").classList.toggle("active")
}
function toggle3() {
    document.querySelector("#menuProduct").classList.toggle("active")
}

