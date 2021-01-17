// Người chăn cừu
// mỗi tháng lượng lông mỗi con tăng 20%
// khi lông cừu >= 50 => cắt còn 10
// Lượng lông cắt được đc cho vào kho
// lượng tiền thu đc sau khi bán lông cừu trong kho sau 2 năm
// 1 lông = 100k
//cừu lớn
// xem có cần thu hoạch không
    // nếu có, cho vào kho
    // ko, thôi
// xem trong kho có bao nhiêu => tính tiền
const sheeps = [2,4,6,8,10,12,14,16,18,20];
var storage = 0;
var sheep = null;
var remain = null;
for(var c = 0; c < 24; c++){
    for(var i = 0; i < 10; i++){
        sheep = sheeps[i] * 1.2;
        if(sheep >= 50){
            remain = sheep - 10;
            storage += remain;
            sheeps[i] = 10;
        } 
        else{
            sheeps[i] = sheep;
        }
    }
}
var answer = storage * 100000;
console.log(answer);