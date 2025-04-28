# Wedding Project Web

Website đám cưới cá nhân được xây dựng trên nền tảng Next.js, sử dụng Google Sheets làm backend và cơ sở dữ liệu.

## Tổng quan dự án

Đây là một giải pháp đơn giản, linh hoạt và dễ quản lý cho việc tạo website đám cưới với các tính năng thiết yếu. Website được thiết kế với giao diện thân thiện và dễ sử dụng, đồng thời cung cấp trang quản trị để dễ dàng điều chỉnh nội dung.

## Chức năng chính

- **Trang chủ:** Hiển thị carousel ảnh, thông tin đám cưới và countdown
- **Album ảnh:** Hiển thị gallery ảnh đám cưới với layout responsive
- **Chuyện tình yêu:** Timeline hiển thị các sự kiện quan trọng trong hành trình tình yêu
- **RSVP:** Form xác nhận tham dự đám cưới với mã code và thông tin khách mời
- **Lời chúc:** Hiển thị và cho phép khách gửi lời chúc đến cô dâu chú rể
- **Trang Admin:** Quản lý danh sách khách mời, duyệt lời chúc và quản lý nội dung 

## Tech Stack

### Frontend
- **Next.js:** Framework React với server-side rendering và API routes
- **React:** Thư viện UI 
- **TailwindCSS:** Styling và responsive design
- **React Hooks:** Quản lý state và side effects
- **SWR:** Data fetching và caching
- **React Carousel:** Hiển thị ảnh slide show
- **TypeScript:** Typed JavaScript để phát triển an toàn hơn

### Backend
- **Google Sheets API:** Lưu trữ và quản lý dữ liệu
- **Next.js API Routes:** Tạo các endpoints để giao tiếp với Google Sheets API
- **NextAuth.js:** Quản lý xác thực cho trang Admin

### Database
- **Google Sheets:** Lưu trữ thông tin RSVP và lời chúc

## Cài đặt

```bash
# Clone dự án
git clone <repository-url>
cd wedding-project-web

# Cài đặt dependencies
pnpm install

# Thiết lập môi trường
cp .env.local.example .env.local
# Cập nhật thông tin trong file .env.local

# Chạy development server
pnpm dev
```

## Cấu trúc dự án

```
/wedding-project-web
  ├── /components        # React components
  ├── /hooks             # Custom hooks
  ├── /pages             # Next.js pages và API routes
  ├── /public            # Static assets
  ├── /services          # Services giao tiếp với API
  ├── /styles            # CSS và Tailwind styles
  ├── /types             # TypeScript type definitions
  └── /utils             # Utility functions
```

## Triển khai

Dự án có thể được triển khai lên Vercel, Netlify hoặc các dịch vụ hosting khác hỗ trợ Next.js:

```bash
# Build sản phẩm
pnpm build

# Chạy production server
pnpm start
```

## Tùy chỉnh

- **Ảnh:** Thêm ảnh vào `/public/images/`
- **Nội dung:** Chỉnh sửa thông tin trong Google Sheets hoặc các file mock data
- **Giao diện:** Tùy chỉnh thiết kế trong `/styles` và TailwindCSS config

## License

MIT
