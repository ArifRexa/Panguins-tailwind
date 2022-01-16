document.getElementById("womenJacketId").addEventListener("click", function () {
    console.log("Woment Jacket Clicked");
    
})

// document.getElementById("header-button").addEventListener("click", function () {
//     const penguinsHeader = document.getElementById("penguins-header");
//     penguinsHeader.innerText = "I am penguins" 
// })

function toggleColor() {
    var finalText = document.getElementById("penguins-header");

    if (finalText.innerText == "I AM PENGUIN") {
        finalText.innerText = "BE THE PENGUINS"; 
    } 
    else {
        finalText.innerText = "I AM PENGUIN";  
    }
}

// document.getElementById("header-button").addEventListener("click", function () {
//     toggleColor()
// }) 