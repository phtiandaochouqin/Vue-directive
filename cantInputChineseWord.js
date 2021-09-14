 
  const emoji = {
    bind: function (el, binding, vnode) {
      var regRule = /[\u4e00-\u9fa5]/g
      el.handle = function () {
        let val = el.value
        el.value = val.replace(regRule, '')
      }
      el.addEventListener('keyup', el.handle)
    },
    unbind: function (el) {
      el.removeEventListener('keyup', el.handle)
    },
  }
  
  export default emoji
