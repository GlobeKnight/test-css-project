let currentTestimonial = 0;
    const testimonials = document.querySelectorAll(".testimonial-slide");

    function showTestimonial(index) {
      testimonials.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }

    function changeTestimonial(n) {
      currentTestimonial += n;
      if (currentTestimonial >= testimonials.length) currentTestimonial = 0;
      if (currentTestimonial < 0) currentTestimonial = testimonials.length - 1;
      showTestimonial(currentTestimonial);
      resetAutoSlide();
    }

    function autoSlide() {
      changeTestimonial(1);
    }

    let slideInterval = setInterval(autoSlide, 2000);

    function resetAutoSlide() {
      clearInterval(slideInterval);
      slideInterval = setInterval(autoSlide, 2000);
    }

    showTestimonial(currentTestimonial);
