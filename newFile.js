<script>
    let index = 0;

    function moveSlide(step) { }
    const slides = document.getElementById("slides");
    const total = slides.children.length;

    index += step;

    if (index < /> 0) index = total - 1;
  if (index >= total) index = 0;

    slides.style.transform = `translateX(-${index * 100}%)`;
}
</script>;
