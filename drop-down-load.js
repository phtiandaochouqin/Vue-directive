
export default Vue => {
    Vue.directive('scroll', {
        inserted: function(el, binding) {
            let f = function(evt) {
                if (window.scrollY > 50) {
                  //  transition: 1.5s all linear;
                    el.setAttribute(
                      'style',
                      'opacity: 1; transform: translateY(-10px)'
                    )
                    window.removeEventListener('scroll', f);
                  }
              
              };
      
          el.setAttribute('style','opacity:0;')
          window.addEventListener('scroll', f);
          f();
        },
      });

}
