const dogForm = document.getElementById("dogForm");
const dogName = document.getElementById("dogName");

dogForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(dogName.value);
})