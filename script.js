const mobileItems = document.querySelectorAll(".mobile-nav .nav-item");

mobileItems.forEach(item => {
  item.addEventListener("click", () => {
    mobileItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

const data = {
  project: [
    {
      img: "img/day2.jpeg",
      title: "Juang?",
      desc: "gunung mengajarkan bahwa keindahan tak pernah datang tanpa perjuangan."
    },
    {
      img: "img/day3.jpeg",
      title: "Makna?",
      desc: "Setiap gunung tidak berjanji memberikan keindahan, tapi setiap gunung pasti memberikan makna di setiap perjalanan🍃."
    },
    {
      img: "img/day5.jpeg",
      title: "Berani?",
      desc: "Ambil resikonya maka pasti akan merasakan hasil jerih payahnya."
    }
  ],
  design: [
    {
      img: "img/girl.jpg",
      title:"",
      desc:"",
    },
    {
      img: "img/girl3.jpg",
      title:"",
      desc:"",
    },
    {
      img: "img/girl6.jpg",
      title:"",
      desc:"",
    }
  ],
  editing: [
    {
      img: "img/net3.jpeg",
      title: "",
      desc: ""
    },
    {
      img: "img/net.jpeg",
      title: "",
      desc: ""
    },
    {
      img: "img/net2.jpeg",
      title: "",
      desc: ""
    }
  ]
};

const cardContainer = document.getElementById("cardContainer");
const subTabs = document.querySelectorAll(".sub-tab");
const mainTabs = document.querySelectorAll(".tab");

function renderCards(category) {
  cardContainer.innerHTML = "";
  data[category].forEach(item => {
    cardContainer.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;
  });
}

// sub tab logic
subTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    subTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderCards(tab.dataset.category);
  });
});

// main tab UI only (placeholder for future logic)
mainTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    mainTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// initial load
renderCards("project");

// Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Scroll Animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
