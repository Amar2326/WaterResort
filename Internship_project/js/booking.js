// Get all inputs
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const adults = document.getElementById("adults");
const kids = document.getElementById("kids");
const seniorCitizen = document.getElementById("seniorCitizen");
const offer = document.getElementById("offer");
const foodType = document.getElementById("foodType");
const roomCategory = document.getElementById("roomCategory");
const roomType = document.getElementById("roomType");

const totalAmount = document.getElementById("totalAmount");

// Receipt fields
const receipt = document.getElementById("receipt");
const rName = document.getElementById("rName");
const rEmail = document.getElementById("rEmail");
const rContact = document.getElementById("rContact");
const rCheckIn = document.getElementById("rCheckIn");
const rCheckOut = document.getElementById("rCheckOut");
const rAdults = document.getElementById("rAdults");
const rKids = document.getElementById("rKids");
const rSeniorCitizen = document.getElementById("rSeniorCitizen");
const rRoomCategory = document.getElementById("rRoomCategory");
const rRoomType = document.getElementById("rRoomType");
const rFood = document.getElementById("rFood");
const rSubtotal = document.getElementById("rSubtotal");
const rDiscount = document.getElementById("rDiscount");
const rTax = document.getElementById("rTax");
const rTotal = document.getElementById("rTotal");

// Fixed prices
const priceAdult = 1000;
const priceKids = 500;
const priceSenior = 800;

// Room cost (add any variation here if needed)
const roomPrices = {
    ac: 1500,
    nonac: 1000,
};

const roomTypeMultiplier = {
    doubleBed: 1.5,
    singleBed: 1.0,
    familyroom: 2.0,
};

function calculateTotal() {
    let nights = 1;
    const checkInDate = new Date(checkIn.value);
    const checkOutDate = new Date(checkOut.value);

    if (!isNaN(checkInDate) && !isNaN(checkOutDate) && checkInDate < checkOutDate) {
        nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
    }

    const numAdult = parseInt(adults.value) || 0;
    const numKids = parseInt(kids.value) || 0;
    const numSenior = parseInt(seniorCitizen.value) || 0;
    const discountPercent = parseFloat(offer.value) || 0;
    const foodCost = parseInt(foodType.value) || 0;

    const totalPeople = numAdult + numKids + numSenior;

    // Guest price
    let guestCost = (numAdult * priceAdult + numKids * priceKids + numSenior * priceSenior) * nights;

    // Room cost
    const selectedRoomCat = roomCategory.value;
    const selectedRoomType = roomType.value;
    let roomCost = 0;

    if (selectedRoomCat && selectedRoomType) {
        roomCost = roomPrices[selectedRoomCat] * roomTypeMultiplier[selectedRoomType] * nights;
    }

    // Food cost
    const foodTotal = foodCost * totalPeople * nights;

    const subTotal = guestCost + roomCost + foodTotal;
    const discount = subTotal * (discountPercent / 100);
    const afterDiscount = subTotal - discount;
    const tax = afterDiscount * 0.18;
    const total = afterDiscount + tax;

    totalAmount.textContent = `₹ ${total.toLocaleString()}`;

    return {
        subTotal,
        discount,
        tax,
        total,
        nights,
        foodCost,
        roomCost,
    };
}

// Auto update total on input change
[
    checkIn,
    checkOut,
    adults,
    kids,
    seniorCitizen,
    offer,
    foodType,
    roomCategory,
    roomType
].forEach(input => {
    input.addEventListener("input", calculateTotal);
});

// On form submit
document.getElementById("booking-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const { subTotal, discount, tax, total } = calculateTotal();

    rName.textContent = document.getElementById('name').value;
    rEmail.textContent = document.getElementById('email').value;
    rContact.textContent = document.getElementById('contact').value;
    rCheckIn.textContent = checkIn.value;
    rCheckOut.textContent = checkOut.value;
    rAdults.textContent = adults.value;
    rKids.textContent = kids.value;
    rSeniorCitizen.textContent = seniorCitizen.value;
    rRoomCategory.textContent = roomCategory.options[roomCategory.selectedIndex].text;
    rRoomType.textContent = roomType.options[roomType.selectedIndex].text;
    rFood.textContent = foodType.options[foodType.selectedIndex].text;
    rSubtotal.textContent = subTotal.toFixed(2);
    rDiscount.textContent = discount.toFixed(2);
    rTax.textContent = tax.toFixed(2);
    rTotal.textContent = total.toFixed(2);

    receipt.style.display = "block";
    receipt.scrollIntoView({ behavior: "smooth" });
});

// Download PDF with logo
/*document.getElementById("downloadBtn").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const logo = new Image();
    logo.src = "images/bg2.jpg"; // ✅ Make sure this file exists and is served correctly

    logo.onload = function () {
        doc.addImage(logo, "JPG", 70, 10, 70, 25); // X, Y, width, height

        doc.setFontSize(16);
        doc.text("Water Resort - Booking Receipt", 20, 45);

        doc.setFontSize(12);
        let y = 60;
        const lineGap = 8;

        const lines = [
            `Name: ${rName.textContent}`,
            `Email: ${rEmail.textContent}`,
            `Contact: ${rContact.textContent}`,
            `Check-In: ${rCheckIn.textContent}`,
            `Check-Out: ${rCheckOut.textContent}`,
            `Adults: ${rAdults.textContent}`,
            `Kids: ${rKids.textContent}`,
            `Seniors: ${rSeniorCitizen.textContent}`,
            `Room Category: ${rRoomCategory.textContent}`,
            `Room Type: ${rRoomType.textContent}`,
            `Food Preference: ${rFood.textContent}`,
            `Subtotal: ₹ ${rSubtotal.textContent}`,
            `Discount: ₹ ${rDiscount.textContent}`,
            `Tax (18% GST): ₹ ${rTax.textContent}`,
            `Total Payable: ₹ ${rTotal.textContent}`,
        ];

        lines.forEach((line) => {
            doc.text(line, 20, y);
            y += lineGap;
        });

        doc.save("Booking_Receipt.pdf");
    };
});*/

// Initial calculation
calculateTotal();
