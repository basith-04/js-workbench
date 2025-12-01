import { menuArray } from './data.js'
let order = []
const menuDiv = document.getElementById("menu-div")
const orderUl = document.getElementById("items-orderd")
document.addEventListener("click", function (e) {
    if (e.target.dataset.id) {
        order.push(menuArray.filter((i) => {

            return (i.id === e.target.dataset.id)
        })[0])
        
        
    }
    else if(e.target.dataset.rid){
        cancelOrder(e.target.dataset.rid)
    }
    renderOrders()

})
function cancelOrder(id){
    order=order.filter((j)=>{
        return j.id != id
    })
}
function renderOrders() {
    

    orderUl.innerHTML = order.map((j) => {
        
        return `<li class="order-item">
                        <h3>${j.name}</h3>
                        <h4 data-rid="${j.id}">remove</h4>
                        <h3>$${j.price}</h3>
                </li>`
    }).join("")
}
function render() {
    const menu = menuArray.map((item) => {
        const { name, ingredients, id, price, emoji } = item
        return ` 
        
        <li class="item" id="${id}">
                <div class="item-img">
                    ${emoji}
                </div>
                <div class="item-description">
                    <ul>
                        <li>
                            <h2>${name}</h2>
                        </li>
                        <li>
                            <h4>${[...ingredients]}
                            </h4>
                        </li>
                        <li>
                            <h3>$${price}</h3>
                        </li>
                    </ul>                                                       
                </div>
                <button id="add-btn" data-id="${id}">+</button>
            </li>
            <hr>
        `
    }).join('')
    menuDiv.innerHTML = menu


}
render()

/*    




*/