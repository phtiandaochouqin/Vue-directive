const copy = {
    bind(el, { value }) {
      el.$value = value
      el.handler = () => {
        if (!el.$value) {
          return
        }
        const textarea = document.createElement('textarea')
        textarea.readOnly = 'readonly'
        textarea.style.position = 'absolute'
        textarea.style.left = '-9999px'
        textarea.value = el.$value
        document.body.appendChild(textarea)
        textarea.select()
        const result = document.execCommand('Copy')
        document.body.removeChild(textarea)
      }
      el.addEventListener('click', el.handler)
    },
    unbind(el) {
      el.removeEventListener('click', el.handler)
    },
  }
  
  export default copy