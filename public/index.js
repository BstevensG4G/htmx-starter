window.addEventListener('DOMContentLoaded', () => {
const grid = document.getElementById('transport-cards');
    if (grid != null) {
        transportCardsData.forEach(card => {
            grid.innerHTML += renderTransportCard(card);
        });
    }
});
window.addEventListener('DOMContentLoaded', () => {
const grid = document.getElementById('accommodation-cards');
    if (grid != null) {
        transportCardsData.forEach(card => {
            grid.innerHTML += renderAccommodationCard(card);
        });
    }
});
window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('activity-cards');
    if (grid != null) {
        transportCardsData.forEach(card => {
            grid.innerHTML += renderActivityCard(card);
        });
    }
});
const activityCardsData = [
    {
      title: "Volcano Tour",
      description: "Spectacular views of our active volcano",
      image: "assets/volcano.jpg",
      attrib: "by National Parks Service",
      detailsId: "volcano-details",
      detailsFile: "details/volcano.html"
    },
    {
      title: "Jungle Zip-line",
      description: "Glide accross the valley overlooking the jungle terrain",
      image: "assets/zipline.jpg",
      attrib: "by Jeremy Bishop on Unsplash",
      detailsId: "zipline-details",
      detailsFile: "details/zipline.html"
    },
    {
      title: "Boat Charters",
      description: "Full and half-day fishing, diving, and sunset boat charters",
      image: "assets/boat.jpg",
      detailsId: "boat-details",
      attrib: "MusikAnimal on Wikimedia",
      detailsFile: "details/boat.html"
    },
    {
      title: "Movie Theatre",
      description: "Check out island premiere's and popular movie titles",
      image: "assets/movie.jpg",
      detailsId: "movie-details",
      attrib: "on Wikimedia",
      detailsFile: "details/movie.html"
    },
    {
        title: "Beach Gear Rentals",
        description: "Checkout our large selection of snorkling, beach chairs, and other needs.",
        image: "assets/beach.jpg",
        attrib: "Wikimedia",
        detailsId: "beach",
        detailsFile: "details/beach.html"
      }
  ];
  function renderActivityCard({ title, description, image, detailsId, detailsFile }) {
    return `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold">${title}</h3>
          <p class="text-sm text-gray-600">${description}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <button 
              class="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-sm"
              hx-get="${detailsFile}"
              hx-target="#${detailsId}"
              hx-swap="outerHTML">
              Details
            </button>
            <a href="booking.html" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
              Book Now!
            </a>
          </div>

          <div id="${detailsId}" class="mt-4 text-sm text-gray-700 hidden"></div>
        </div>
      </div>
    `;
  }
const accommodationCardsData = [
    {
      title: "Hotel",
      description: "Convienent Shoreline location",
      image: "assets/hotel.jpg",
      detailsId: "hotel-details",
      attrib: "on Wikimedia",
      detailsFile: "details/hotel.html"
    },
    {
      title: "Private Condominium",
      description: "Explore Taniti on your own schedule with car rental options at the airport and downtown.",
      image: "assets/condo.jpg",
      detailsId: "condo-details",
      attrib: "on Wikimedia",
      detailsFile: "details/condo.html"
    },
    {
      title: "Rental Home",
      description: "Eco-friendly and perfect for exploring the island’s trails and beachfronts.",
      image: "assets/house.jpg",
      detailsId: "home-details",
      attrib: "Jonathan Borba on Pexels",
      detailsFile: "details/home.html"
    },
    {
      title: "Bed & Breakfast",
      description: "Zip through island roads with affordable and fun scooter rentals.",
      image: "assets/bnb.jpg",
      detailsId: "bnb-details",
      attrib: "on Wikimedia",
      detailsFile: "details/bnb.html"
    }
  ];
  function renderAccommodationCard({ title, description, image, detailsId, detailsFile }) {
    return `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold">${title}</h3>
          <p class="text-sm text-gray-600">${description}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <button 
              class="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-sm"
              hx-get="${detailsFile}"
              hx-target="#${detailsId}"
              hx-swap="outerHTML">
              Details
            </button>
            <a href="booking.html" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
              Book Now!
            </a>
          </div>

          <div id="${detailsId}" class="mt-4 text-sm text-gray-700 hidden"></div>
        </div>
      </div>
    `;
  }
const transportCardsData = [
    {
        title: "Taxi Services",
        description: "Available 24/7 throughout the island for quick and convenient travel.",
        image: "assets/taxi.jpg",
        detailsId: "taxi-details",
        attrib: "on Wikimedia",
        detailsFile: "/components/details/taxi.html"
    },
    {
        title: "Rental Cars",
        description: "Explore Taniti on your own schedule with car rental options at the airport and downtown.",
        image: "assets/rental.jpg",
        detailsId: "rental-details",
        attrib: "on Wikimedia",
        detailsFile: "details/rental.html"
    },
    {
        title: "Cruise Ship",
        description: "Scenic and reliable ferry service between the main island and nearby islets.",
        image: "assets/cruise.jpg",
        detailsId: "cruise-details",
        attrib: "on Wikimedia",
        detailsFile: "details/cruise.html"
    },
    {
        title: "Public Bus",
        description: "Affordable public transport with regular schedules around major locations.",
        image: "assets/bus.jpg",
        detailsId: "bus-details",
        attrib: "on Wikimedia",
        detailsFile: "details/bus.html"
    }
];

  function renderTransportCard({ title, description, image, detailsId, detailsFile }) {
    return `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold">${title}</h3>
          <p class="text-sm text-gray-600">${description}</p>
          <div id="${detailsId}" class="mt-4 text-sm text-gray-700 border p-2 hidden"></div>
          <div class="mt-4 flex flex-wrap gap-2">
          <button 
            class="details-btn bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-sm"
            data-target="${detailsId}"
            data-url="${detailsFile}">
            Details
          </button>
            <a href="booking.html" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
              Book Now!
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function bookingForm() {
    return {
      category: '',
      options: {
        Transportation: ["Taxi", "Rental Car", "Scooter", "Ferry", "Bus", "Bicycle"],
        Accommodation: ["Resort", "Hotel", "Hostel", "Vacation Rental", "Eco Lodge"],
        Activity: ["Hiking", "Snorkeling", "Cultural Tour", "Surfing", "Boat Cruise"]
      }
    };
  }

  document.querySelectorAll('.group').forEach((group) => {
    let timeout;
    const dropdown = group.querySelector('div');

    group.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdown.classList.remove('hidden');
    });

    group.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.classList.add('hidden');
      }, 200); // delay to prevent quick hide
    });

dropdown.addEventListener('mouseenter', () => clearTimeout(timeout));

dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
    dropdown.classList.add('hidden');
    }, 200);
});
});

if (document.getElementById('hamburger') != null) {
    document.getElementById('hamburger').addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });
}


if (document.querySelector(".glide") !== null) {
    new Glide(".glide", {
        hoverpause: true,
        autoplay: 2000,
        perView: 3,
    }).mount();
}

document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const url = this.getAttribute('data-url');
    const target = document.getElementById(targetId);

    if (target) {
      target.classList.remove('hidden');
      target.setAttribute('hx-get', url);
      target.setAttribute('hx-trigger', 'load');
      target.setAttribute('hx-swap', 'innerHTML');
      htmx.process(target); // tell HTMX to observe it
      target.dispatchEvent(new Event('load')); // manually trigger the load
    }
  });
});