const images = document.querySelectorAll("img");

const options = {
    // root沒設置的話就是視窗
    rootMargin: "-100px 0px 0px 0px",
 } 

function check(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("load");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(check, options);
images.forEach((image) => observer.observe(image));
