// const button=document.querySelector(".btn")

// button.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "green";

// })

// button.addEventListener("dblclick", () =>{
//     document.body.style.backgroundColor = "white";
// })

// // const input = document.querySelector("#InputType");

// // input.addEventListener("keyup", (event) => {
// //     if (event.key === "b") {
// //         document.body.style.backgroundColor = "green";
// //         input.style.backgroundColor="blue"
// //     }
// // });

// // input.addEventListener("mouseleave", () =>{
// //     input.style.backgroundColor="white"
// // })


// // input.addEventListener("mouseover", () =>{
// //     input.style.backgroundColor="blue"
// // })


// const box1 = document.querySelector("#boxparent > #box1");
// box1.style.border = "yellow solid 4px";
// box1.style.width="300px"
// box1.style.height="400px"
// box1.style.borderRadius = "20px"

// const box2 = document.querySelector("#boxparent > #box2");
// box2.style.border = "red solid 4px";
// box2.style.width="300px"
// box2.style.height="400px"
// box2.style.borderRadius = "20px"



// const box3 = document.querySelector("#boxparent > #box3");
// box3.style.border = "blue solid 4px";
// box3.style.width="300px"
// box3.style.height="400px"
// box3.style.borderRadius = "20px"




// const boxParent = document.querySelector("#boxparent");
// boxParent.style.display="flex"

// boxParent.style.gap="20px"
// boxParent.style.justifyContent = "center";
// boxParent.style.marginTop="90px"




let box=document.querySelector("#box")

let button1=document.querySelector("#btnOn")
let button2=document.querySelector("#btnOff")


button1.addEventListener("click", () =>{
      box.style.boxShadow = "30px 0px 100px 100px rgba(255, 255, 0, 0.8)"
      box.style.border="10px solid yellow"
      box.style.background="yellow"
})



button2.addEventListener("click", () =>{
    box.style.boxShadow="none"
      box.style.border="black 5px solid"
       box.style.background="none"
})




