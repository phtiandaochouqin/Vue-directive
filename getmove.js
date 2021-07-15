const draggable = {
    inserted: function (el) {
      el.style.cursor = 'move'
      el.onmousedown = function (e) {
              //距离左边边距的x
        let disx = e.pageX - el.offsetLeft
              //距离上边边距的y
        let disy = e.pageY - el.offsetTop
        document.onmousemove = function (e) {
           //需要减去边距距离,才好求得应移动的位置
          let x = e.pageX - disx
          let y = e.pageY - disy
        

                    
          let maxX = document.body.clientWidth - parseInt(el.style.width)
          let maxY = document.body.clientHeight - parseInt(el.style.height)
          if (x < 0) {
            x = 0
          } else if (x > maxX) {
            x = maxX
          }
  
          if (y < 0) {
            y = 0
          } else if (y > maxY) {
            y = maxY
          }
  
          el.style.left = x + 'px'
          el.style.top = y + 'px'
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null
        }
      }
    },
  }
  export default draggable
  