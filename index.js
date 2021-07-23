const careerHover = document.getElementById("car");
const careersDetails = document.getElementById("careers");
const blackScreen = document.getElementById("blackdrop");
const modal = document.getElementById("modal");
const closeModalX = document.getElementById("closemodal");

careerHover.addEventListener("mouseover", () => {
    careersDetails.style.display = "block";
})

careerHover.addEventListener("mouseout", () => {
    careersDetails.style.display = "none";
})

careersDetails.addEventListener("mouseover", () => {
    careersDetails.style.display = "block"
})

careersDetails.addEventListener("mouseout", () => {
    careersDetails.style.display = "none"
})

blackScreen.addEventListener("click", () => {
    modal.style.display = "none";
    blackScreen.style.display = "none"
})

closeModalX.addEventListener("click", () => {
    modal.style.display = "none";
    blackScreen.style.display = "none"
})