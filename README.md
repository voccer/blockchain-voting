I. setup
Yêu cầu cần có trước lúc cài đặt:

nodejs
npm
metamask extension phiên bản chrome
ganache -> tạo blockchain
truffle -> framework cho ethereum

II. deploy hợp đồng
complie contract
$  trufffle compile

khởi chạy ganache

migration
$ truffle migration

==> quan sát bên ganache thấy số block tăng và số transactions cũng tăng

III. Giao diện web
$ cd app
$ npm install

$ npm run build
$ npm run dev

Mở trình duyệt chrome lên, vào localhost:8080

add account của ganache vào meta mask
chọn account và tiến hành vote

Lưu ý mỗi lần chọn lại phải refresh lại trang