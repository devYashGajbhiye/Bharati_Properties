const properties = {
    "nyati-emerald": {
        title: "2 BHK Premium Apartment",
        location: "Baner, Pune",
        price: "₹ 75 Lac",
        bhk: "2 BHK",
        area: "1100 sq.ft.",
        type: "Apartment",
        description: "Premium 2 BHK apartment with world-class amenities.",
        images: [
            "nyati_emerald.jpg",
            "living_room_emerald.jpg",
            "dining_room_emerald.jpg"
        ]
    },

    "supreme-pallacio": {
    title: "3 BHK Luxury Apartment",
    location: "Hinjewadi, Pune",
    price: "₹ 92 Lac",
    bhk: "3 BHK",
    area: "1350 sq.ft.",
    type: "Apartment",
    description: "Spacious 3 BHK apartment near IT parks.",
    images: [
      "supreme_1.jpg",
      "supreme_2.jpg",
      "supreme_3.jpg"
    ]
  },

  "rohan-seher": {
    title: "Luxury Villa",
    location: "Kothrud, Pune",
    price: "₹ 1.5 Cr",
    bhk: "4 BHK",
    area: "2800 sq.ft.",
    type: "Villa",
    description: "Independent luxury villa with garden and parking.",
    images: [
      "rohan_1.jpg",
      "rohan_2.jpg",
      "rohan_3.jpg"
    ]
  }

};

const params = new URLSearchParams(window.location.search);
const propertyId = params.get("id");

const property = properties[propertyId];

if (!property) {
  document.body.innerHTML = "<h2>Property not found</h2>";
}

document.querySelector("h1").innerText = property.title;
document.querySelector(".location").innerText = "📍 " + property.location;

document.querySelector(".highlights div:nth-child(1) strong").innerText = property.price;
document.querySelector(".highlights div:nth-child(2) strong").innerText = property.bhk;
document.querySelector(".highlights div:nth-child(3) strong").innerText = property.area;
document.querySelector(".highlights div:nth-child(4) strong").innerText = property.type;

document.querySelector("p").innerText = property.description;




const openGallery = document.getElementById("openGallery");
const modal = document.getElementById("galleryModal");
const closeBtn = document.querySelector(".ligthbox .close");


openGallery.addEventListener("click", () => {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal){
        modal.classList.remove("active");
    }
})