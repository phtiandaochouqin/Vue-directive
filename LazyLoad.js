const LazyLoad= {
  bind:function(el,binding){
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
          let imageDom = entries[0].target;
          if(entries[0].intersectionRatio > 0) {
            imageDom.src = binding.value;
              lazyImageObserver.unobserve(imageDom);
          }

  })
  lazyImageObserver.observe(el);
  }
}
export default LazyLoad