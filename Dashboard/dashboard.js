// JS to Load Navbar and Footer
async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (res.ok) {
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    } else {
      document.getElementById(id).innerHTML = "<!-- Failed to load " + file + " -->";
    }
  } catch (err) {
    document.getElementById(id).innerHTML = "<!-- Error loading " + file + " -->";
    console.error(err);
  }
}

loadComponent("navbar-placeholder", "../Dashboard/Navbar/Navbar.html");
loadComponent("footer-placeholder", "../Dashboard/Footer/Footer.html");
