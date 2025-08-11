let scrollContainer = document.querySelector(".card-container");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
let crossBtn = document.getElementById("crossBtn");
let signupBtn = document.getElementById("signupBtn");
let signupBtn2 = document.getElementById("signupBtn2");
let signupForm = document.getElementById("signupForm");

let cardBtn = document.querySelectorAll("cardBtn");
let spanOfCard = document.querySelectorAll("spanofcard");


scrollContainer.addEventListener("Wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
nextbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 380;
  setTimeout(() => {
    scrollContainer.scrollLeft = 0;
  }, 10000);
});
backbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 380;
});

signupBtn.addEventListener("click", ()=>{
  signupForm.style.display = "block";
});

crossBtn.addEventListener("click",()=>{
  signupForm.style.display = "none";
});

signupBtn2.addEventListener("click", ()=>{
  signupForm.style.display = "block";
});


//    side Menu Nav
let sidemenu = document.getElementById("sidemenu");
let burger = document.getElementById("burger");
burger.addEventListener("click", ()=>{
  if (sidemenu.style.display !=="none") {
    sidemenu.style.display = "none";
  }
  else{
    sidemenu.style.display = "block";
  }
  setTimeout(() => {
    sidemenu.style.display = "none";
  }, 6000);
});

//  Sing Up Form User Data
      let ticketData = document
        .getElementById("user-data")
        .addEventListener("submit", (event) => {
          event.preventDefault;

          let name = document.getElementById("name").value;
          let email = document.getElementById("email").value;
          let password = document.getElementById("password").value;

          const userData = {
            name: name,
            email: email,
           password:password
          };
          localStorage.setItem(name, JSON.stringify(userData));
      
            userData.preventDefault;
        });
























cardBtn.addEventListener("click", ()=>{
    
  //  if (spanOfCard.style.display !== "none") {
  //       spanOfCard.style.display = "none";
  //   }
  //   else{
  //       spanOfCard.style.display = "block";
  //   }
});

