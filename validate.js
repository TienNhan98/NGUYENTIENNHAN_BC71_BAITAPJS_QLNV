function kiemTraRong(value, idErr) {
  var isValid = true;
  for (var i = 0; i < value.length; i++) {
    if (value[i].length === 0) {
      document.getElementById(idErr[i]).style.display = "block";
      document.getElementById(idErr[i]).innerText =
        "Thông tin đang trống, vui lòng nhập đầy đủ thông tin";
      isValid = false;
    } else {
      document.getElementById(idErr[i]).innerText = "";
    }
  }

  return isValid;
}

function kiemTraTrung(value, arrNV) {
  var viTri = arrNV.findIndex(function (itemNV) {
    return itemNV.taiKhoan === value;
  });
  if (viTri !== -1) {
    document.getElementById("tbTKNV2").style.display = "block";
    document.getElementById("tbTKNV2").innerText =
      "Tài Khoản bị trùng, vui lòng kiểm tra lại";
    return false;
  }
  document.getElementById("tbTKNV").innerText = "";
  return true;
}

function kiemTraTaiKhoan(value) {
  var taiKhoanRegex = /^[0-9]{4,6}$/;
  if (!taiKhoanRegex.test(value)) {
    document.getElementById("tbTKNV").style.display = "block";
    document.getElementById("tbTKNV").innerText =
      "Tài khoản phải từ 4 đến 6 ký số, vui lòng kiểm tra lại";
    return false;
  }
  document.getElementById("tbTKNV").innerText = "";
  return true;
}

function kiemTraHoTen(value) {
  var hoTenRegex = /^[\p{L}\s]+$/u;
  if (!hoTenRegex.test(value)) {
    document.getElementById("tbTen").style.display = "block";
    document.getElementById("tbTen").innerText =
      "Tên của nhân viên phải là chữ";
    return false;
  }
  document.getElementById("tbTen").innerText = "";
  return true;
}

function kiemTraEmail(value) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    document.getElementById("tbEmail").style.display = "block";
    document.getElementById("tbEmail").innerText = "Email chưa đúng định dạng";
    return false;
  }
  document.getElementById("tbEmail").innerText = "";
  return true;
}

function kiemTraMatKhau(value) {
  var passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,10}$/;
  if (!passwordRegex.test(value)) {
    document.getElementById("tbMatKhau").style.display = "block";
    document.getElementById("tbMatKhau").innerText =
      "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
    return false;
  }
  document.getElementById("tbMatKhau").innerText = "";
  return true;
}

function kiemTraNgay(value) {
  var ngayRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
  if (!ngayRegex.test(value)) {
    document.getElementById("tbNgay").style.display = "block";
    document.getElementById("tbNgay").innerText =
      "Ngày làm định dạng mm/dd/yyyy";
    return false;
  }
  document.getElementById("tbNgay").innerText = "";
  return true;
}

function kiemTraLuong(value) {
  var luongCBRegex =
    /^(?:1\d{6}|20000000|[1-9]\d{6}|1\d{7})$|^(?:1[0-9]{3}|20{3}|[1-9]\d{3})(?:,\d{3})*$/;
  if (!luongCBRegex.test(value)) {
    document.getElementById("tbLuongCB").style.display = "block";
    document.getElementById("tbLuongCB").innerText =
      "Lương cơ bản 1 000 000 - 20 000 000";
    return false;
  }
  document.getElementById("tbLuongCB").innerText = "";
  return true;
}

function kiemTraChucVu(value) {
  var mangChucVu = ["Sếp", "Trưởng phòng", "Nhân viên"];
  if (!mangChucVu.includes(value)) {
    document.getElementById("tbChucVu").style.display = "block";
    document.getElementById("tbChucVu").innerText =
      "Chức vụ phải chọn chức vụ hợp lệ (Sếp, Trưởng phòng, Nhân viên)";
    return false;
  }
  document.getElementById("tbChucVu").innerText = "";
  return true;
}

function kiemTraGioLam(value) {
  var soGioLam = value * 1;
  if (80 > soGioLam || soGioLam > 200 || isNaN(soGioLam)) {
    document.getElementById("tbGiolam").style.display = "block";
    document.getElementById("tbGiolam").innerText =
      "Số giờ làm trong tháng 80 - 200 giờ";
    return false;
  }
  document.getElementById("tbGiolam").innerText = "";
  return true;
}
