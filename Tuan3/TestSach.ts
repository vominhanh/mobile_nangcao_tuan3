import { SachGiaoKhoa } from "./SachGiaoKhoa";
import { SachThamKhao } from './SachThamKhao';

const date = new Date();
const sach1 = new SachGiaoKhoa('1',date,20,7,'MinhAnh', true);
const sach2 = new SachGiaoKhoa('2',date,20,5,'MinhAnh', false);
const sach3 = new SachThamKhao('3',date,20,3,'MinhAnh', 12);
console.log(sach1);
console.log(sach1.totalPrice());

console.log(sach2);
console.log(sach2.totalPrice());

console.log(sach3);
console.log(sach3.totalPrice());


