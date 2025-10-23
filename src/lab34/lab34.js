console.log("lab 34")

function tinhTrungBinh(toan, van, anh) {
    return (toan + van + anh) / 3
}

function xepLoai(diemTB) {
    if (diemTB >= 9) {
        return "Xuất sắc"
    }
    else if (diemTB >= 8 && diemTB < 9) {
        return "Giỏi"
    }
    else if (diemTB >= 6.5 && diemTB < 8) {
        return "Khá"
    }
    else {
        return "Trung bình"
    }
}
const diemToan = 4
const diemVan = 7
const diemAnh = 9
console.log(tinhTrungBinh(diemToan, diemVan, diemAnh))
console.log(xepLoai(tinhTrungBinh(diemToan, diemVan, diemAnh)))


const arr = [a]