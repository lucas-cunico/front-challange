function phoneMask(phone){ 
  const text = phone.value
  const isCellphone = text.length === 11
  let newText
  if (text != "") {
      if (isCellphone) {
        const ddd = text.slice(0,2)
        const beforeHyphen = text.slice(2,7)
        const afterHyphen = text.slice(7,12)
        newText = `(${ddd}) ${beforeHyphen}-${afterHyphen}`
      } else {
        const ddd = text.slice(0,2)
        const beforeHyphen = text.slice(2,6)
        const afterHyphen = text.slice(6,10)
        newText = `(${ddd}) ${beforeHyphen}-${afterHyphen}`
      } 
      phone.value = newText
    }
}

function validationNumber(e) {
  let charCode = e.charCode ? e.charCode : e.keyCode;
  if (charCode != 8 && charCode != 9) {
      if (charCode < 48 || charCode > 57) {
          return false;
      }
  }
}