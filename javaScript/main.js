
donation = document.querySelector("#donation").value
valueD = isNaN(donation)

console.log(valueD)


document.querySelector("#btnDonate").addEventListener("click", ()=>{
    
        document.querySelector(".text-msg").style = "display:block"
        document.querySelector(".donation").style = "display:none";
        document.querySelector(".thanksMsg").style = "display: block";
})    

    
