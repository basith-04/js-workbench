import { menuArray } from './data.js'
let order=[]
const menuDiv=document.getElementById("menu-div")
document.addEventListener("click",function(e){
    if(e.target.dataset.id)
    {
        order.push(menuArray.filter((i)=>{
            
            return (i.id===e.target.dataset.id)
        })[0])
        console.log(order)
    }

})
function render() {
    const menu =menuArray.map((item)=>{
        const {name,ingredients,id,price,emoji}=item
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
                            <h3>${price}</h3>
                        </li>
                    </ul>                                                       
                </div>
                <button id="add-btn" data-id="${id}">+</button>
            </li>
            <hr>
        `
    }).join('')
    menuDiv.innerHTML=menu
 
    
}
render()

/*    




*/