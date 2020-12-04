const options = {
    rootMargin: '100px'
}
const callback = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry);
        }
    });
}
const observer = new IntersectionObserver (callback, options);

observer.observe(document.querySelector('.watcher'));