function kiemTraRong(value, idErr) {
  var isValid = true;
  for (var i = 0; i < value.length; i++) {
    if (value[i].length === 0) {
      document.getElementById(idErr[i]).style.display = "block";
      document.getElementById(idErr[i]).innerText =
        "Thông tin đang trống, vui lòng nhập đầy đủ thông tin";
      isValid = false;
    }
  }
  return isValid;
}

function kiemTraTrung(value, arrNV) {
  var viTri = arrNV.findIndex(function (itemNV) {
    return itemNV.taiKhoan == value;
  });
  if (viTri != -1) {
    document.getElementById("tbTKNV").style.display = "block";
    document.getElementById("tbTKNV").innerText =
      "Tài Khoản bị trùng, vui lòng kiểm tra lại";
    return false;
  }
  return true;
}
