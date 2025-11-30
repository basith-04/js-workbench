import {propertyForSaleArr} from './propertyForSaleArr.js'
const placeholderPropertyObj = [{
    propertyLocation: '1 Joe Bloggs street',
    priceGBP: 100000,
    roomsM2: [16, 12, 6, 11, 5],
    comment: 'This is the description',
    image: 'placeholder.jpg'
}]

function getPropertyHtml(arr=placeholderPropertyObj) {
    
    let arrs=arr.map((prop)=>{
        
        const {propertyLocation,priceGBP,roomsM2,comment,image}=prop
    
        return `<section class="card">
                      <img src="/images/${image}">
                     <div class="card-right">
                     <h2>${propertyLocation}</h2>
                      <h3>${priceGBP}</h3>
                          <p>${comment}</p>
                <h3>${roomsM2.reduce((total,current)=>{return total+current},0)} m&sup2;</h3>
                </div>
                </section> `
    }).join("")
    return arrs

}

document.getElementById('container').innerHTML = getPropertyHtml()