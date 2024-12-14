# MyRandomApplication

Chỉ là một ứng dụng với những tính năng vô cùng ngẫu nhiên được nghĩ ra trong lúc ~~khùng~~ nghỉ hè.

## Mục lục

* [Giới thiệu](#giới-thiệu)
* [Cài đặt](#cài-đặt)
* [Tính năng:](#tính-năng)
* [Tính năng dự kiến:](#tính-năng-dự-kiến)
* [Công nghệ đã sử dụng:](#công-nghệ-đã-sử-dụng)

## Giới thiệu

Web này sử dụng MERN Stack, SQL Server để lưu dữ liệu chung của web và Cloudinary để làm cloud storage.

Cái web này được tạo ra chủ yếu là để học cách sử dụng React và tập code một cái gì đó thực tế xíu

## Cài đặt

1. Clone repo này
2. Config biến môi trường bằng cách tạo 2 file với nội dung như sau:

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

3. Mở `server/config/CustomDB.sql` và execute file này.

4. Sau khi xong các bước config ở trên thì bắt đầu host client và server như sau:
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
- Thời khóa biểu: Lưu trữ được nhiều template Thời khóa biểu để phù hợp với nhu cầu
- Review mua sắm: Căn bản là cái này làm cho vui nên sẽ xóa
- Trang chủ: Là 1 dashboard để hiển thị tổng quan các thể loại thông tin
- Bạn bè: Hệ thống bạn bè
- Thông báo: Có thể nhận thông báo về todo-list hoặc thời khóa biểu,...
- Tùy biến: Có thể thay đổi light/dark theme + custom backgruond của web
- Cài đặt: Thêm phần cài đặt tổng thể cho web
- Trang người dùng: Có một trang người dùng cụ thể, có thể thay avatar, banner, khung avatar,...
- Cài đặt người dùng: Thêm phần cài đặt người dùng
- Tìm kiếm: Có thể tìm kiếm người dùng khác,...

*Sẽ deploy app trong một tương lai nào đó...*

## Công nghệ đã sử dụng:

<div style="padding: 2%">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" height="50" alt="React">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" height="50" alt="NodeJS">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" height="50" alt="ExpressJS">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/1920px-MongoDB_Fores-Green.svg.png" height="50" alt="MongoDB">
</div>

<div style="padding: 2%">
<img style="margin: auto 3%" src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" height="50" alt="SQL Server">
<img style="margin: auto 3%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cloudinary_logo.svg/1920px-Cloudinary_logo.svg.png" height="50" alt="Cloudinary">
</div>

**License:** Sử dụng [License MIT](LICENSE.txt).

## Hình ảnh của web
![image](https://res.cloudinary.com/dh90ponfw/image/upload/v1734214539/image_gvvtls.png)
![image](https://res.cloudinary.com/dh90ponfw/image/upload/v1734214551/image_qp7dji.png)
![image](https://res.cloudinary.com/dh90ponfw/image/upload/v1734214559/image_d4ws4o.png)
![image](https://res.cloudinary.com/dh90ponfw/image/upload/v1734214567/image_spn0m4.png)
![image](https://res.cloudinary.com/dh90ponfw/image/upload/v1734214577/image_kmfn5j.png)
![image](https://res.cloudinary.com/dh90ponfw/image/upload/v1734214584/image_ul4ef3.webp)
