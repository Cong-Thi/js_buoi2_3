/** Bài 1
 * Mô hình 3 khối: Tính lương nhân viên
 * Đầu vào:
 * - Tạo biến soNgayCong cho người dùng nhập
 * - Tạo biến luongNgay cho người dùng nhập
 * Xử lý:
 * - Tạo biến tinhLuong= soNgayCong x luongNgay
 * Đầu ra:
 * - In ra thông báo tiền lương
 */

 function tinhTienLuong(){
    var soNgayCong = +document.getElementById("soNgayCong").value;
    var luongNgay = +document.getElementById("luongNgay").value;
    var tinhLuong = soNgayCong * luongNgay;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById("alert1").innerHTML = "Tiền lương nhân viên: " + currentFormat.format(tinhLuong) +" VNĐ";
}

/** Bài số 2
 * Mô hình 3 khối: Tính giá trị trung bình của 5 số
 * Đầu vào:
 * - Tạo biến giaTri1 cho người dùng nhập
 * - Tạo biến giaTri2 cho người dùng nhập
 * - Tạo biến giaTri3 cho người dùng nhập
 * - Tạo biến giaTri4 cho người dùng nhập
 * - Tạo biến giaTri5 cho người dùng nhập
 * Xử lý:
 * - Tạo biến giaTriTB = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5)/5
 * Đầu ra:
 * - Đưa ra thông báo giá trị trung bình của 5 số:
 */

 function tinhTB(){
    var giaTri1 = +document.getElementById("giaTri1").value;
    var giaTri2 = +document.getElementById("giaTri2").value;
    var giaTri3 = +document.getElementById("giaTri3").value;
    var giaTri4 = +document.getElementById("giaTri4").value;
    var giaTri5 = +document.getElementById("giaTri5").value;
    var giaTriTB = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5)/5;
    document.getElementById("alert2").innerHTML= "Giá trị trung bình là: " + giaTriTB;
}

/** Bài số 3
 * Mô hình 3 khối: Đổi tiền USD --> VND
 * Đầu vào:
 * - Tạo biến giaUSD gán giá trị 23500
 * - Tạo biến soTienUSD cho người dùng nhập
 * Xử lý:
 * - Tạo biến chuyenDoi = giaUSD * soTienUSD
 * Đầu ra:
 * - Đưa ra thông báo số tiền sau khi quy đổi
 */


 function chuyenDoiTien(){
    var giaUSD = 23500;
    var soTienUSD = +document.getElementById("soTienUSD").value;
    var chuyenDoi = giaUSD * soTienUSD;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById("alert3").innerText= "Số tiền quy đổi là: " + currentFormat.format(chuyenDoi) + " VNĐ"
}


/** Bài số 4
 * Mô hình 3 khối: Tính diện tích, chu vi hình chữ nhật
 * Đầu vào:
 * - Tạo biến chieuDai cho người dùng nhập
 * - Tạo biến chieuRong cho người dùng nhập
 * Xử lý:
 * - Tạo biến dienTich = chieuDai * chieuRong
 * - Tạo biến chuVi = (chieuDai + chieuRong) * 2
 * Đầu ra:
 * - Đưa ra thông báo diện tích, chu vi hình chữ nhật
 */

 function tinh() {
    var chieuDai = +document.getElementById("chieuDai").value;
    var chieuRong = +document.getElementById("chieuRong").value;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById("alert4").innerHTML= "<p>" + 'Diện tích hình chữ nhật là: ' + dienTich + "</p>" + "<p>" + 'Chu vi hình chữ nhật là: ' + chuVi + "</p>"
}

/** Bài số 5
 * Mô hình 3 khối: Tổng 2 ký số
 * Đầu vào:
 * - Tạo biến n cho người dùng nhập
 * Xử lý:
 * - Tạo biến hangChuc = Math.floor(n / 10)
 * - Tạo biến hangDV = n % 10
 * - Tạo biến tong = hangChuc + hangDV
 * Đầu ra:
 * - Đưa ra thông báo tổng giá trị của 2 ký số
 */

 function tongKySo(){
    var n = +document.getElementById("soTuNhien").value;
    var hangChuc = Math.floor(n / 10);
    var hangDV = n % 10;
    var tong = hangChuc + hangDV;
    document.getElementById("alert5").innerHTML="Tổng 2 ký số của " + n + " là: " + tong
}