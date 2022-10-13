function headerOnScroll() {
    const header = document.querySelector('header')
    let scrollValue = window.scrollY
    if (scrollValue < 30) {
        header.classList.remove('header-on-scroll')
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.style.color = '#fff'
        })
    } else {
        header.classList.add('header-on-scroll')
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.style.color = '#414f6b'
        })
    }
}

window.addEventListener('scroll', headerOnScroll)