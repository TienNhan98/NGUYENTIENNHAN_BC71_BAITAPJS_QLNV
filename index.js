var DSNV = [];
var data = localStorage.getItem("JSON_DSNV");
var fixJSON = JSON.parse(data);
for (index = 0; index < fixJSON.length; index++) {
  var nvJS = fixJSON[index];
  var nv = new nhanVien(
    nvJS.taiKhoan,
    nvJS.hoTen,
    nvJS.email,
    nvJS.matKhau,
    nvJS.ngayLam,
    nvJS.luongCB,
    nvJS.chucVu,
    nvJS.gioLam
  );
  DSNV.push(nv);
}
render();

function themNV() {
  //   alert(123);
  var nv = info();
  var value = [
    nv.taiKhoan,
    nv.hoTen,
    nv.email,
    nv.matKhau,
    nv.ngayLam,
    nv.luongCB,
    nv.chucVu,
    nv.gioLam,
  ];
  var idErr = [
    "tbTKNV",
    "tbTen",
    "tbEmail",
    "tbMatKhau",
    "tbNgay",
    "tbLuongCB",
    "tbChucVu",
    "tbGiolam",
  ];
  var isValid = kiemTraRong(value, idErr) & kiemTraTrung(nv.taiKhoan, DSNV);
  if (!isValid) return;
  DSNV.push(nv);
  var JSON_DSNV = JSON.stringify(DSNV);
  localStorage.setItem("JSON_DSNV", JSON_DSNV);
  render();
}

function render() {
  var danhSachHTML = "";
  for (index = 0; index < DSNV.length; index++) {
    var nv = DSNV[index];
    var trString = `<tr>
                        <td>${nv.taiKhoan}</td>
                        <td>${nv.hoTen}</td>
                        <td>${nv.email}</td>
                        <td>${nv.ngayLam}</td>
                        <td>${nv.chucVu}</td>
                        <td>${nv.tinhTongLuong()}</td>
                        <td>${nv.xepLoai()}</td>
                        <td>
                            <button type="button" class="btn btn-primary mb-2" style="color:#FF0000" onclick="xoaNV('${
                              nv.taiKhoan
                            }')">Xóa</button>
                            <button type="button" class="btn btn-primary"
                            style="color: #FFB90F" onclick="suaNV('${
                              nv.taiKhoan
                            }')" data-toggle="modal" data-target="#myModal">Sửa</button>
                        </td>
                        
                    </tr>`;
    danhSachHTML += trString;
  }
  document.getElementById("tableDanhSach").innerHTML = danhSachHTML;
}

function xoaNV(taiKhoan) {
  var viTri = DSNV.findIndex(function (itemNV) {
    return itemNV.taiKhoan == taiKhoan;
  });
  if (viTri != -1) {
    DSNV.splice(viTri, 1);
    var JSON_DSNV = JSON.stringify(DSNV);
    localStorage.setItem("JSON_DSNV", JSON_DSNV);
    render();
  }
}

function suaNV(taiKhoan) {
  var viTri = DSNV.findIndex(function (itemNV) {
    return itemNV.taiKhoan == taiKhoan;
  });
  if (viTri != -1) {
    var nvSua = DSNV[viTri];
    document.getElementById("tknv").value = nvSua.taiKhoan;
    document.getElementById("tknv").setAttribute("readonly", true);
    document.getElementById("name").value = nvSua.hoTen;
    document.getElementById("email").value = nvSua.email;
    document.getElementById("password").value = nvSua.matKhau;
    document.getElementById("datepicker").value = nvSua.ngayLam;
    document.getElementById("luongCB").value = nvSua.luongCB;
    document.getElementById("chucvu").value = nvSua.chucVu;
    document.getElementById("gioLam").value = nvSua.gioLam;
  }
}

function capNhatNV() {
  var nvCapNhat = info();
  var viTri = DSNV.findIndex(function (itemNV) {
    return itemNV.taiKhoan == nvCapNhat.taiKhoan;
  });
  if (viTri != -1) {
    DSNV[viTri] = nvCapNhat;
    var JSON_DSNV = JSON.stringify(DSNV);
    localStorage.setItem("JSON_DSNV", JSON_DSNV);
    render();
    document.getElementById("btnCapNhat").setAttribute("data-dismiss", "modal");
  }
}

function timNV() {
  var loaiNV = document.getElementById("searchName").value.trim();
  if (loaiNV === "") {
    render();
    return;
  }

  var dsLoaiNv = DSNV.filter(function (itemNV) {
    return itemNV.xepLoai().trim() == loaiNV;
  });

  var danhSachHTML = "";
  for (var index = 0; index < dsLoaiNv.length; index++) {
    var nv = dsLoaiNv[index];
    var trString = `<tr>
                        <td>${nv.taiKhoan}</td>
                        <td>${nv.hoTen}</td>
                        <td>${nv.email}</td>
                        <td>${nv.ngayLam}</td>
                        <td>${nv.chucVu}</td>
                        <td>${nv.tinhTongLuong()}</td>
                        <td>${nv.xepLoai()}</td>
                        <td>
                            <button type="button" class="btn btn-primary mb-2" style="color:#FF0000" onclick="xoaNV('${
                              nv.taiKhoan
                            }')">Xóa</button>
                            <button type="button" class="btn btn-primary"
                            style="color: #FFB90F" onclick="suaNV('${
                              nv.taiKhoan
                            }')" data-toggle="modal" data-target="#myModal">Sửa</button>
                        </td>
                    </tr>`;
    danhSachHTML += trString;
  }

  document.getElementById("tableDanhSach").innerHTML = danhSachHTML;
}
