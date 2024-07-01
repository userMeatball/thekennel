nav = document.getElementsByTagName("nav");
navBtn = document.querySelector("#navBtn");
navDisplay = document.querySelector("#navDisplay");

navBtn.onclick = function() {
    document.body.classList.toggle('active'); // bring this first or else can scroll for .2s
    navBtn.classList.toggle('active');
    navDisplay.classList.toggle('active');
}

// enquiry form
// dogForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let dogForm = document.querySelector("#dogForm");
//     let dogName = document.querySelector("#dogName");
//     let dogGender = document.querySelector("#dogGender");
//     let dogAge = document.querySelector("#dogAge");
//     let dogHealth = document.querySelector("#dogHealth");
//     let dogFriendly = document.querySelector("#dogFriendly");
//     let dogExtra = document.querySelector("#dogExtra");
// })


// /***** DOGDETAILS *****/
//
// #dogDetails {
//     text-align: center;
// }

// #dogForm {
//     display: inline-block;
// }

// #dogForm label {
//     display: block;
//     font-family: 'Helvetica', sans-serif;
//     font-weight: 600;
//     margin-bottom: 5px;
// }

// #dogForm input, textarea {
//     width: 80%;
//     border: 2px solid;
//     border-radius: 3px;
//     margin-bottom: 15px;
// }

// #dogForm textarea {
//     height: 80px;
// }

// #dogSubmit {
//     width: 75%;
//     height: 60px;
//     border: 2px solid;
//     border-radius: 3px;
//     font-size: 40px;
// }