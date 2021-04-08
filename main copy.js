const options = {
    // root沒設置的話就是視窗
    threshold: 0.8
 } 

const loadImage = (img) => {
    // img.previousElementSibling.classList.add('loading')
    
    img.setAttribute('src', img.dataset.src)
    img.classList.add('load')
    img.removeAttribute('data-src')
    // img.addEventListener('load', removeMockup)
}

const onEnterView = (entries, observer) => {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            loadImage(entry.target)
            observer.unobserve(entry.target)
        }
    }
}

const watcher = new IntersectionObserver(onEnterView, options)
const lazyImages = document.querySelectorAll('.img')
for (let image of lazyImages) {
    watcher.observe(image)
}