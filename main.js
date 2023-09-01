// Get Slider Items | Array.form [ES6 Feature]

let sliderImages = Array.from(document.querySelectorAll(".silder_container img"));

// Get Number Of Slides
let slidersCount = sliderImages.length;

// Set Current Slide
var currentSlide = 5;

// Slide Number Element

let sliderNumberElement = document.getElementById("silder_number");

// Previous and Next Buttons
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

// Handle Click on Previous and Next Buttons
prevButton.onclick = prevsilder;
nextButton.onclick = nextsilder;

// Create The Main UL Element
let paginationElement = document.createElement("ul");

// Set ID On Created Ul Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (let i = 1; i <= slidersCount; i++) {
    // Create The LI
    let paginationItem = document.createElement("li");

    // Set Custom Attribute
    paginationItem.setAttribute("data-index", i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to The Main Ul List
    paginationElement.appendChild(paginationItem);
}
// Add The Created UL Element to The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagination Items | Array.form [ES6 Feature]
let paginationsBullets = document.querySelectorAll("#pagination-ul li");

for (let i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    };
}

//   silder  next function
function nextsilder() {
    if (nextButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}
//   silder prev function
function prevsilder() {
    if (prevButton.classList.contains("disabled")) {
        // Do Nothing
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}
// Create The Checker Function
function theChecker() {
    // Set The Slide Number
    sliderNumberElement.textContent = `slider  ${currentSlide} of ${slidersCount}`;
    removeAllActive();
    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add("active");
    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    // Check if Current Slide is The First
    if (currentSlide == 1) {
        // Add Disabled Class on Previous Button
        prevButton.classList.add("disabled");
    } else {
        // Remove Disabled Class From Previous Button
        prevButton.classList.remove("disabled");
    }
    // Check if Current Slide is The Last
    if (currentSlide == slidersCount) {
        // Add Disabled Class on Previous Button
        nextButton.classList.add("disabled");
    } else {
        // Remove Disabled Class From Next Button
        nextButton.classList.remove("disabled");
    }
}

theChecker();
// Remove All Active Classes
function removeAllActive() {
    // Loop Through Images
    sliderImages.forEach((img) => {
        img.classList.remove("active");
    });
    // Loop Through Pagination Bullets
    paginationsBullets.forEach((bullet) => {
        bullet.classList.remove("active");
    });
}
