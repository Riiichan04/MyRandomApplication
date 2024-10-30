# MyRandomApplication

Chỉ là một ứng dụng với những tính năng vô cùng ngẫu nhiên được nghĩ ra trong lúc ~~khùng~~ nghỉ hè.

## Mục lục

* [Mục lục](#mục-lục)
* [Giới thiệu](#giới-thiệu)
* [Cài đặt](#cài-đặt)
* [Tính năng:](#tính-năng)
* [Tính năng dự kiến:](#tính-năng-dự-kiến)
* [Công nghệ đã sử dụng:](#công-nghệ-đã-sử-dụng)
* [License](#license)

## Giới thiệu

Web này sử dụng React ở Frontend và Node/Express ở Backend.

Cái web này được tạo ra chủ yếu là để học cách sử dụng React cũng như tập giải quyết các issue trong thực tế ~~dù tự cảm
thấy chưa giải quyết được cái gì trong thực tế cho lắm =))~~

## Cài đặt

Đơn giản là clone về và chạy thôi. Nhưng mà cũng cần phải setup biến môi trường để chạy được:

```
client/.env

  REACT_APP_CLOUDINARY="Link_Cloudinary_Folder"
```

```
server/config/.env

  OPEN_WEATHER="OpenWeather API Key"
  SQL_USERNAME="SqlServer Username"
  SQL_PASSWD="SqlServer Passwd"
  CLOUDINARY_NAME="Cloudinary_Name"
  CLOUDINARY_KEY="Cloudinary_Key"
  CLOUDINARY_SECRET="Cloudinary_Secret"
  CLOUDINARY_LINK="Link_Cloudinary_Folder"
```

~~Xinloi vì phải bắt config đống này~~

### Host server locally:

1. Mở một cmd mới và gõ `cd server` để chuyển thư mục làm việc hiện tại vào server
2. Gõ `npm start` để chạy server. Khi này, server sẽ được chạy ở port `3110`

### Host client locally:

1. Mở một cmd mới và gõ `cd client` để chuyển thư mục làm việc hiện tại vào client
2. Gõ `npm start` để chạy host client. Khi này, client sẽ được host ở port `3000` (Port mặc định của React)

## Tính năng:

1. **Ghi chú**: Có thể thêm hoặc xóa (chưa làm phần sửa 🥲 ) ghi chú
2. **Tin tức**: Chỉ là làm cho vui =))
3. **Podcast**: Tạm thời ngừng làm vì không có data
4. **Thời khóa biểu**: Sau khi nghĩ ra thì hết hè :D
5. **To do list**: Có thể thêm, sửa, xóa To do list. Có thể đếm số lượng To do list đã hoàn thành.
6. **Review mua sắm**: Làm cho vui sau khi bị đồ án e-commerce dí 🥲
7. **Trang chủ**: Chưa làm vì bị deadline dí 🥲

Rất xinloi vì hiện tại chỉ mới tạm hoàn chỉnh được 3/7 tính năng 🥲🥲🥲

## Tính năng dự kiến:

- Hoàn thiện Ghi chú
- Podcast: Hiển thị một số Podcast đề xuất cũng như đề xuất podcast theo chủ đề
- Thời khóa biểu: Lữu trữ được nhiều template Thời khóa biểu để phù hợp với nhu cầu
- Review mua sắm: Căn bản là cái này làm cho vui nên sẽ xóa
- Trang chủ: Là 1 dashboard để hiển thị tổng quan các thể loại thông tin
- Bạn bè: Hệ thống bạn bè
- Thông báo: Có thể nhận thông báo về todo-list hoặc thời khóa biểu,...
- Tùy biến: Có thể thay đổi light/dark theme + custom backgruond của web
- Cài đặt: Thêm phần cài đặt tổng thể cho web
- Trang người dùng: Có một trang người dùng cụ thể, có thể thay avatar, banner, khung avatar,...
- Cài đặt người dùng: Thêm phần cài đặt người dùng
- Tìm kiếm: Có thể tìm kiếm người dùng khác,...

## Công nghệ đã sử dụng:

<div style="background-color: #f5f5f5; padding: 2%">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" height="50" alt="React">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" height="50" alt="NodeJS">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" height="50" alt="ExpressJS">
</div>

<div style="background-color: #f5f5f5; padding: 2%">
<img style="margin: auto 3%" src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" height="50" alt="SQL Server">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/1920px-MongoDB_Fores-Green.svg.png" height="50" alt="MongoDB">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cloudinary_logo.svg/1920px-Cloudinary_logo.svg.png" height="50" alt="Cloudinary">
</div>

## License

Code này sử dụng [License MIT](LICENSE.txt). Trừ việc clone code này và up lên mxh và nhận do mình làm thì làm gì source
code này cũng được

Đôi lời nhắn gửi: Có trộm code thì đừng trộm code của repo này, code này chưa hoàn thiện đâu :)