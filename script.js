
// adding button and click event
let btn = document.querySelector(".btn");
btn.addEventListener("click",fetch_data);


// adding a keyboard event for enter key
window.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        fetch_data();
    }
})



async function fetch_data(){
    // declaring the dom for search input text and taking the value
    let input_value = document.querySelector(".value").value;

          
      let response = await  fetch(`https://api-thirukkural.vercel.app/api?num=${input_value}`);
      let fetched_data = await response.json();
      console.log(fetched_data);
      let display = document.querySelector(".display");
    display.innerHTML = `"${fetched_data.eng_exp}"` ; 
      


}


// calling the function
fetch_data();
