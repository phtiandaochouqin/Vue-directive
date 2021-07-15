function checkArray(key) {
    let arr = ['1', '2', '3', '4']
    return arr.includes(key)
  }
  
  const permission = {
    inserted: function (el, binding) {
      let permission = binding.value 
      if (permission) {
        let hasPermission = checkArray(permission)
        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      }
    },
  }
  
  export default permission