let scrollContainer = document.querySelector(".card-container");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
let crossBtn = document.getElementById("crossBtn");
let signupBtn = document.getElementById("signupBtn");
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

