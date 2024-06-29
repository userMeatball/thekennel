nav = document.getElementsByTagName("nav");
navBtn = document.querySelector("#navBtn");
navDisplay = document.querySelector("#navDisplay");
navState = false; /* false = hidden true = show */

navBtn.onclick = function() {
    if (navState == false) {
        navDisplay.style.display = "block";
        document.body.style.overflow = "hidden"; // stop scrolling
        navState = true;
    } else if (navState == true) {
        navDisplay.style.display = "none";
        document.body.style.overflow = "visible"; // enable scrolling
        navState = false;
    }
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