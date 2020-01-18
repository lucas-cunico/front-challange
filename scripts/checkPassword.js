let checkPassword = function() {
  if (document.getElementById('password').value ==
    document.getElementById('repeatPassword').value) {
    document.getElementById('pass-match').style.color = 'green'
    document.getElementById('pass-match').innerHTML = `<i class="fas fa-check"></i> Password is matching`
  } else {
    document.getElementById('pass-match').style.color = 'red'
    document.getElementById('pass-match').innerHTML = `<i class="fas fa-times"></i> Password is not matching`
  }
}