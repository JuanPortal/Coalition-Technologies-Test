function headerOnScroll() {
    const header = document.querySelector('header')
    let scrollValue = window.scrollY
    if (scrollValue < 30) {
        header.classList.remove('header-on-scroll')
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.style.color = '#fff'
        })
        document.querySelector('.brand-name').style.display = 'none'
    } else {
        header.classList.add('header-on-scroll')
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.style.color = '#414f6b'
        })
        document.querySelector('.brand-name').style.display = 'flex'
    }
}

window.addEventListener('scroll', headerOnScroll)