import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img111 from '../assets/111.jpg';
import img112 from '../assets/112.jpg';
import img113 from '../assets/113.jpg';
import img114 from '../assets/114.jpg';
import img115 from '../assets/115.jpg';
import img116 from '../assets/116.jpg';
import img117 from '../assets/117.jpg';
import img118 from '../assets/118.jpg';
import img101 from '../assets/101.png';
import img102 from '../assets/102.png';
import img103 from '../assets/103.png';
import dh from '../assets/dh.jpg';
import dgnl from '../assets/dgnl.png';
import hcm from '../assets/hcm.jpg';
import htt from '../assets/htt.png';
import vta from '../assets/vta.png';
import pvt from '../assets/pvt.png';
const data = {
    product_data:[
        {
            id: 1,
            anh: img1,
            tensp: "LIVE G - Tổng ôn - Toán học 2K7 - HTT",
            tengv: "Hồ Thức Thuận",
            gia: "1000000",
            soluong: 1,
            lop: 12,
            mon: "Toán học"
        },
        {
            id: 2,
            anh: img2,
            tensp: "LIVE S - Khởi động- Vật lý 2K7 - VTA",
            tengv: "Vũ Tuấn Anh",
            gia: "1000000",
            soluong: 1,
            lop: 12,
            mon: "Vât lý"
        },
        {
            id: 3,
            anh: img3,
            tensp: "LIVE T - Luyện đề - Hoá học 2K7 - PVT",
            tengv: "Phạm Văn Thuận",
            gia: "1000000",
            soluong: 1,
            lop: 12,
            mon: "Hóa học"
        },
        {
            id: 4,
            anh: img4,
            tensp: "LIVE T - Luyện đề - Ngữ Văn 2K7 - PMN",
            tengv: "Phạm Minh Nhật",
            gia: "1000000",
            soluong: 1,
            lop: 12,
            mon: "Văn học"
        },
        {
            id: 5,
            anh: img5,
            tensp: "LIVE G - Tổng ôn - Lịch sử 2K7 - NHS",
            tengv: "Nguyễn Hương Sen",
            gia: "1000000",
            soluong: 1,
            lop: 12,
            mon: "Lịch sử"
        },
        {
            id: 6,
            anh: img6,
            tensp: "LIVE G - Tổng ôn - Địa lý 2K7 - VTNP",
            tengv: "Vũ Thị Ngọc Phước",
            gia: "1000000",
            soluong: 1,
            lop: 12,
            mon: "Địa lý"
        },
        {
            id: 7,
            anh: img7,
            tensp: "COMBO CTG SINH 2K7 - NTHT",
            tengv: "Nguyễn Thị Huyền Trang",
            gia: "1000000",
            soluong: 1,
            lop: 12,
            mon: "Sinh học"
        },
        {
            id: 8,
            anh: img8,
            tensp: "COMBO 4 KHÓA SUPER 1,2,3,4 - TTPT",
            tengv: "Trương Thị Phương Thảo",
            gia: "1000000",
            soluong: 1,
            lop: 12,
            mon: "Tiếng anh"
        },
        {
            id: 9,
            anh: img111,
            tensp: "LỚP VIP TOÁN LỚP 11 HỌC KỲ 1 2K8 HỒ THỨC THUẬN",
            tengv: "Hồ Thức Thuận",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Toán học"
        },
        {
            id: 10,
            anh: img112,
            tensp: "COMBO LIVE VIP LỚP 11 - KHÓA 2K8 THẦY HỒ THỨC THUẬN",
            tengv: "Hồ Thức Thuận",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Toán học"
        },
        {
            id: 11,
            anh: img113,
            tensp: "LIVE VIP VẬT LÝ 11 HỌC KỲ 2 2K8 THẦY VŨ TUẤN ANH",
            tengv: "Vũ Tuấn Anh",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Vật lý"
        },
        {
            id: 12,
            anh: img114,
            tensp: "LIVE VIP HÓA HỌC 11 HỌC KỲ 1 2K8 THẦY PHẠM VĂN THUẬN",
            tengv: "Phạm Văn Thuận",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Hóa học"
        },
        {
            id: 13,
            anh: img115,
            tensp: "LIVE VIP TOÁN LỚP 11 HỌC KỲ 2 2K8 THẦY HỒ THỨC THUẬN",
            tengv: "Hồ Thức Thuận",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Toán học"
        },
        {
            id: 14,
            anh: img116,
            tensp: "LIVE VIP VẬT LÝ 11 HỌC KỲ 1 2K8 THẦY VŨ TUẤN ANH",
            tengv: "Vũ Tuấn Anh",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Vật lý"
        },
        {
            id: 15,
            anh: img117,
            tensp: "COMBO LIVE VIP VẬT LÝ 11 - Khoá 2K8 THẦY VŨ TUẤN ANH",
            tengv: "Vũ Tuấn Anh",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Vật lý"
        },
        {
            id: 16,
            anh: img118,
            tensp: "LIVE VIP HÓA HỌC 11 HỌC KỲ 2 2K8 THẦY PHẠM VĂN THUẬN",
            tengv: "Phạm Văn Thuận",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Hóa học"
        },
        {
            id: 17,
            anh: img101,
            tensp: "LIVE VIP VẬT LÝ 10 HỌC KỲ 1 2K9 THẦY VŨ TUẤN ANH",
            tengv: "Vũ Tuấn Anh",
            gia: "1000000",
            soluong: 1,
            lop: 10,
            mon: "Vật lý"
        },
        {
            id: 18,
            anh: img102,
            tensp: "LIVE VIP VẬT LÝ 10 HỌC KỲ 2 2K9 THẦY VŨ TUẤN ANH",
            tengv: "Vũ Tuấn Anh",
            gia: "1000000",
            soluong: 1,
            lop: 10,
            mon: "Vật lý"
        },
        {
            id: 19,
            anh: img103,
            tensp: "COMBO LIVE VIP VẬT LÝ 10 - Khoá 2K9 THẦY VŨ TUẤN ANH",
            tengv: "Vũ Tuấn Anh",
            gia: "1000000",
            soluong: 1,
            lop: 10,
            mon: "Vật lý"
        },
        {
            id: 20,
            anh: dh,
            tensp: "TOÁN CAO CẤP",
            tengv: "Đào Tuấn Anh",
            gia: "3600000",
            soluong: 1,
            lop: 13,
            mon: "Toán học"
        },
        {
            id: 21,
            anh: dgnl,
            tensp: "Đánh giá năng lực ĐHQGHN",
            tengv: "Thầy Văn Hoa + Thầy Đặng Ngọc Khương",
            gia: "3600000",
            soluong: 1,
            lop: 12,
            mon: "Tổng hợp"
        },
        {
            id: 22,
            anh: hcm,
            tensp: "COMBO MAX-GP Đánh giá năng lực ĐHQG TP Hồ Chí Minh",
            tengv: "Bùi Văn Công",
            gia: "3600000",
            soluong: 1,
            lop: 12,
            mon: "Tổng hợp"
        },
        {
            id: 23,
            anh: htt,
            tensp: "COMBO LIVE VIP TOÁN 11 - Khoá 2K7 THẦY HỒ THỨC THUẬN",
            tengv: "Hồ Thức Thuận",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Toán học"
        },
        {
            id: 24,
            anh: vta,
            tensp: "COMBO LIVE VIP VẬT LÝ 11 - Khoá 2K7 THẦY VŨ TUẤN ANH",
            tengv: "Vũ Tuấn Anh",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Vật lý"
        },
        {
            id: 25,
            anh: pvt,
            tensp: "COMBO LIVE VIP HOÁ HỌC 11 - Khoá 2K7 PVT",
            tengv: "Phạm Văn Thuận",
            gia: "1000000",
            soluong: 1,
            lop: 11,
            mon: "Hóa học"
        }

    ]
}

export default data
