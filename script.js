document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");
  const dynamicMenu = document.getElementById("dynamicMenu");

  const pages = {
    home: `<h1>Home</h1>
           <p>Welcome to our single page application!</p><br/>
           <p class="textAlign">A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates its content using JavaScript. SPAs leverage frameworks like React or Angular to handle rendering and routing on the client side. Hence, enabling a smooth and responsive user experience without full page reloads. It also performs data binding.</p>
           <p class="textAlign">You’ll easily recognize some popular examples of single page applications like Gmail, Google Maps, Airbnb, Netflix, Pinterest, Paypal, and many more. Companies all over the internet are using SPAs to build a fluid, scalable experience.</p>`,

    about: `<h1>About</h1>
            <p>This is a simple SPA built with HTML, CSS, and JavaScript.</p><br/>
            <p class="textAlign">A single page application is a single page (hence the name) where a lot of information stays the same and only a few pieces need to be updated at a time.</p>
            <p class="textAlign">The SPA only sends what you need with each click, and your browser renders that information. This is different than a traditional page load where the server rerenders a full page with every click you make and sends it to your browser.</p>`,

    contact: `<h1>Contact</h1>
              <p>You can contact us at <a href="mailto:sharathchandark@gmail.com">sharathchandark@gmail.com</a>.</p><br/>
              <p class="textAlign">I'm a Professional Full Stack Developer Since 2015. I am a motivated individual with extensive knowledge of programming and a certified cyber security professional.</p>
              <p class="textAlign">My goal with this channel isn't just about learning; it's about building practical skills, applying them to real-world projects, and bringing those ideas to life that we've always dreamed of..! Whether you're new to programming or a seasoned coder, this channel will have something for everyone. We'll start with the basics and gradually progress toward more advanced techniques.</p>`,
  };

  window.addEventListener("load", function () {
    let i = 0;
    for (let key in pages) {
      let li = document.createElement("li");
      li.innerHTML = `<a href="#${key}" class="${
        i == 0 ? "active" : ""
      }">${key}</a>`;
      dynamicMenu.appendChild(li);
      i++;
    }
  });

  function loadPage(hash) {
    const page = hash.replace("#", "");
    contentDiv.innerHTML = pages[page] || pages.home;
    setActiveLink(page);
  }

  function setActiveLink(page) {
    links = document.querySelectorAll("nav ul li a");
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href").includes(page));
    });
  }

  window.addEventListener("hashchange", () => {
    loadPage(window.location.hash);
  });

  loadPage(window.location.hash);
});
