function nhanVien(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCB,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCB = luongCB;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.tinhTongLuong = function () {
    var tongLuong = 0;
    if (this.chucVu === "Sếp") {
      tongLuong = this.luongCB * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      tongLuong = this.luongCB * 2;
    } else {
      tongLuong = this.luongCB;
    }
    return tongLuong;
  };
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "Nhân Viên Xuất Sắc";
    } else if (this.gioLam >= 176) {
      return "Nhân Viên Giỏi";
    } else if (this.gioLam >= 160) {
      return "Nhân Viên Khá";
    } else {
      return "Nhân Viên Trung Bình";
    }
  };
}
