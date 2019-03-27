let vatLy = prompt("Nhap diem cho mon vat ly");
let hoaHoc = prompt("Nhap diem cho mon hoa hoc");
let sinhHoc = prompt("Nhap diem cho mon sinh hoc");

//Tinh va hien thi tong diem
let tong = parseInt(vatLy) + parseInt(hoaHoc) + parseInt(sinhHoc);
document.writeln("Tong diem 3 mon la: " + tong);

document.write("<br/>");

//hien thi diem trung binh 3 mon

document.writeln("Diem trung binh cho 3 mon: " + tong/3);
