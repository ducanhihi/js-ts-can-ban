/* 
Yêu cầu:
Tạo các biến sau với const hoặc let(chọn phù hợp):
fullName: tên đầy đủ(string)
birthYear: năm sinh(number)
isStudent: có phải học sinh không(boolean)

tính tuổi hiện tại dựa trên birthYear
*/

const fullName = "Nguyen Van A"
let birthYear = 2018
isStudent = true
console.log(fullName)

const today = new Date
const age = today.getFullYear() - birthYear;
console.log(age)
if (age - birthYear < 18 && age > 5) {
    isStudent = true
}
else {
    isStudent = false
}
console.log(isStudent)
