// HEADER TO APPEAR ON SCROLL

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

// CAROUSEL 

const slider1 = document.querySelector('#slider1')
const slider2 = document.querySelector('#slider2')
const slider3 = document.querySelector('#slider3')
const sliders = [slider1, slider2, slider3]
const imgSection = document.querySelector('.img-section')

slider1.addEventListener('click', () => {
    imgSection.style.alignItems = 'flex-start'
    sliders.forEach(slider => {
        slider.style.backgroundColor = '#636d81'
    })
    slider1.style.backgroundColor = '#fff'
})

slider2.addEventListener('click', () => {
    imgSection.style.alignItems = 'center'
    sliders.forEach(slider => {
        slider.style.backgroundColor = '#636d81'
    })
    slider2.style.backgroundColor = '#fff'
})

slider3.addEventListener('click', () => {
    imgSection.style.alignItems = 'flex-end'
    sliders.forEach(slider => {
        slider.style.backgroundColor = '#636d81'
    })
    slider3.style.backgroundColor = '#fff'
})

// ADD TRANSITION