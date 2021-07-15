function addWaterMarker(value={}, parentNode) {
  // 水印文字，父元素，字体，文字颜色
  const {font} = value 
  const getFont =font || '16px Microsoft JhengHei'
  const {textColor} = value

  var can = document.createElement('canvas')
  parentNode.appendChild(can)
  can.width = 200
  can.height = 150
  can.style.display = 'none'
  var cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180)
  cans.font = getFont
  cans.fillStyle =textColor || 'rgba(180, 180, 180, 1)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  
  cans.fillText(getFont, can.width / 10, can.height / 2)
  parentNode.style.backgroundImage = 'url(' + can.toDataURL() + ')'
}

const waterMarker = {
  bind: function (el, binding) {
    addWaterMarker(binding.value, el)
  },
}

export default waterMarker