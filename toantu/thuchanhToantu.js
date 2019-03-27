let inputWidth;
let inputHeight;


//nhap du lieu vao o prompt se co du lieu kieu string
inputWidth = prompt("nhap chieu dai")
inputHeight = prompt("nhap chieu cao")


// Chuyen du lieu tu string sang kieu du lieu so
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

//tinh dien tich hinh chu nhat va hien thi ra man hinh

let area = width * height;
document.write("dien tich hinh chu nhat la: " + area);

