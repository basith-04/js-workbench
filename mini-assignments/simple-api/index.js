const btn=document.getElementById("btn")
const content=document.getElementById("content")

btn.addEventListener("click",()=>{
  
    async function fetchData(){
      try{
        const response=await fetch("https://apis.scrimba.com/bored/api/activity")
        if(!response.ok)
        {
          throw new Error(`error brohh ${response.status}`)
        }
        const data=await response.json()
        content.textContent=data.activity
        console.log(data)
        
      }
      catch(error){
        console.error("error loading",error)
      }
    }
    fetchData()
})