o2.slider =
{
    offset:0,
    slideIndex: 1,
    wrapper: document.querySelector('.g-slider__wrapper'),
    width () {
        width = window.getComputedStyle(this.wrapper).width;
        return width;
    },
    previousSlide (slide) {
        this.width();

        const slidesField = slide.parentElement.querySelector(".g-slider__field");
        const arrowLeft = this.wrapper.querySelector('.g-slider-prev');
        const arrowRight = this.wrapper.querySelector('.g-slider-next');
        let dots = this.wrapper.querySelectorAll('.g-slider__btns-item');

        if (this.offset !== 0) {
            this.offset -= +width.replace(/\D/g, '');
            this.slideIndex--;
        }

        slidesField.style.transform = `translateX(-${this.offset}px)`
        if (this.offset !== 0)
        {
            arrowLeft.classList.add('active');
            arrowRight.classList.add('active');
        } 
        else
        {
            arrowLeft.classList.remove('active');
            arrowRight.classList.add('active');
        }

        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[this.slideIndex - 1].classList.add('active');
    },
    nextSlide (slide) {
        this.width();
        const slidesField = slide.parentElement.querySelector(".g-slider__field");
        const slides = slidesField.querySelectorAll('.slide');
        const arrowLeft = this.wrapper.querySelector('.g-slider-prev');
        const arrowRight = this.wrapper.querySelector('.g-slider-next');
        let dots = this.wrapper.querySelectorAll('.g-slider__btns-item');
        if (this.offset !== +width.replace(/\D/g, '') * (slides.length - 1)) {
            this.offset += +width.replace(/\D/g, '');
            this.slideIndex++;
        }
        slidesField.style.transform = `translateX(-${this.offset}px)`
        if (this.offset !== +width.replace(/\D/g, '') * (slides.length - 1)) {
            arrowRight.classList.add('active');
            arrowLeft.classList.add('active');
        } else {
            arrowRight.classList.remove('active');
            arrowLeft.classList.add('active');
        }
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[this.slideIndex - 1].classList.add('active');
    },
    dotsBtns: function (item) {
        this.width();
        const slidesField = item.parentElement.parentElement.querySelector(".g-slider__field");
        const btns = this.wrapper.querySelectorAll('.g-slider__btns-item');
        const arrowLeft = this.wrapper.querySelector('.g-slider-prev');
        const arrowRight = this.wrapper.querySelector('.g-slider-next');
        const slides = slidesField.querySelectorAll('.slide');
        let index = Array.from(btns).indexOf(item);
        this.offset = +width.replace(/\D/g, '') * index;
        btns.forEach(item => {
            item.classList.remove('active');
        })
        btns[index].classList.add('active');
        slidesField.style.transform = `translateX(-${this.offset}px)`;
        if (this.offset == 0) {
            arrowLeft.classList.remove('active');
            arrowRight.classList.add('active');
        } else {
            arrowLeft.classList.add('active');
            arrowRight.classList.add('active');
        }
        if (this.offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
            arrowRight.classList.remove('active');
            arrowLeft.classList.add('active');
        } else {
            arrowRight.classList.add('active');
            arrowLeft.classList.add('active');
        }
    }
}