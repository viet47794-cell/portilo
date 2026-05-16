# BÁO CÁO TIẾN ĐỘ & NHẬT KÝ PHÁT TRIỂN ĐỒ ÁN PORTFOLIO CÁ NHÂN
### ĐỒ ÁN: XÂY DỰNG WEBSITE PORTFOLIO CAO CẤP CHUẨN AWWWARDS
**Môn học:** Phát triển Ứng dụng Web / Nguyên lý Thiết kế Visual
**Sinh viên thực hiện:** Nguyễn Quốc Việt  
**Trường Đại học:** Đại học Gia Định (GDU)  
**Chuyên ngành:** Song ngành Công nghệ Thông tin (IT) & Thiết kế Đồ họa (Graphic Design)

---

## 📑 MỤC LỤC
1. CHỨNG CỨ PHÁT TRIỂN: THÔNG TIN TÁC GIẢ (PERSONAL CONTEXT)
2. TỔNG QUAN PHƯƠNG PHÁP TIẾP CẬN VÀ KIẾN TRÚC HỆ THỐNG
3. NHẬT KÝ KHỞI TẠO & CÁC LẦN REFACTOR CODE (LOG LỊCH SỬ CHỈNH SỬA)
4. HỆ THỐNG KỸ NGHỆ CÂU LỆNH (PROMPT ENGINEERING LOG)
5. CÁC THÁCH THỨC KỸ THUẬT & GIẢI PHÁP SỬA LỖI (DEBUGGING & OPTIMIZATION)
6. HƯỚNG DẪN KIỂM THỬ VÀ TRIỂN KHAI (DEPLOYMENT)

---

## 1. CHỨNG CỨ PHÁT TRIỂN: THÔNG TIN TÁC GIẢ (PERSONAL CONTEXT)

Đồ án này được xây dựng dựa trên chính các chỉ số thực tế, kỹ năng chuyên môn và lộ trình phát triển cá nhân của sinh viên, nhằm đảm bảo tính độc bản và không trùng lặp:

* **Lĩnh vực nghiên cứu chuyên sâu:** Lập trình Frontend (HTML5/CSS3/Vanilla JS), Định hướng UI/UX Designer và Ứng dụng Nguyên lý Thị giác (Visual Design Principles) vào Không gian số.
* **Chỉ số Phản xạ & Tư duy Nhịp độ (Rhythm Games Integration):** Tích hợp thành tích thực tế từ bộ môn Rhythm Games (**maimai DX** - Rating hiện tại: `11,500` với tổng kinh nghiệm `144 credits`). Chỉ số này được đưa vào hệ thống đếm số tự động (Animated Counter) để minh chứng cho khả năng phản xạ tay mắt và sự kiên trì.
* **Nhãn quan Đồ họa & Nhiếp ảnh (Photography Integration):** Ứng dụng thực tế kỹ thuật khai thác bố cục, ánh sáng và độ tương phản từ quá trình thực hành nhiếp ảnh chuyên sâu (Hệ máy **Canon EOS 1200D** kết hợp ống kính **Tamron 18-200mm Non-VC** chuyên portrait/still-life).
* **Lộ trình phát triển qua các mốc thời gian:** Đồ án lưu vết hành trình từ năm 2020 (bắt đầu tiếp cận lập trình tư duy logic), năm 2021 (rèn luyện thể lực, sức bền qua thể thao bóng đá), đến giai đoạn 2022-2026 (học song ngành IT & Design tại GDU và tích lũy trải nghiệm thực tế tốc độ cao tại kho vận Shopee).

---

## 2. TỔNG QUAN PHƯƠNG PHÁP TIẾP CẬN VÀ KIẾN TRÚC HỆ THỐNG

### 2.1 Triết lý thiết kế (Design Philosophy)
Sản phẩm hướng tới tiêu chuẩn thiết kế cao cấp của **Awwwards**, áp dụng xu hướng lai giữa **Bento Grid (Apple/Linear Style)** và **Glassmorphism**. Hệ thống sử dụng một nền tối sâu (`#030305`) làm bệ đỡ cho các khối thấu kính mờ có viền phát sáng nhẹ, tạo chiều sâu thị giác (Cinematic Depth) mạnh mẽ mà vẫn giữ được sự tinh tế, tối giản.

### 2.2 Ràng buộc kỹ thuật (Technical Constraints)
Đồ án tuân thủ nghiêm ngặt yêu cầu tối ưu hóa mã nguồn thuần (**Vanilla Tech Stack**):
* **Không** sử dụng Framework (React, Vue, Angular).
* **Không** sử dụng thư viện CSS UI (Bootstrap, Tailwind CSS).
* **Không** sử dụng jQuery hay thư viện hiệu ứng bên ngoài (GSAP, Anime.js).
* Toàn bộ chuyển động 3D, canvas hạt bụi lơ lửng, theo dõi tọa độ chuột, đếm số, cuộn mượt và hiệu ứng xuất hiện đều được code thủ công bằng **Vanilla JS và CSS Keyframes** nhằm đạt chỉ số hiệu năng tối đa (60 FPS) trên cả thiết kế Desktop và Mobile.

---

## 3. NHẬT KÝ KHỞI TẠO & CÁC LẦN REFACTOR CODE (LOG LỊCH SỬ CHỈNH SỬA)

Để có được sản phẩm hoàn chỉnh cuối cùng, dự án đã trải qua 5 giai đoạn lặp và tối ưu hóa mã nguồn liên tục:

| Giai đoạn | Nội dung công việc thực hiện | Kết quả đạt được | Trạng thái |
| :--- | :--- | :--- | :--- |
| **Giai đoạn 1** | Khởi tạo khung sườn portfolio nguyên bản. Thử nghiệm tích hợp ảnh nền Anime phòng học đón nắng chiều (`1370569.jpeg`). | Gặp lỗi không nhận diện được ảnh nền do trình duyệt phân biệt nghiêm ngặt đuôi mở rộng `.jpg` và `.jpeg`. | Đã sửa xong |
| **Giai đoạn 2** | Nghiên cứu cấu trúc giao diện Modern SaaS Agency Portfolio (Style của bạn Quốc Huy). Chuyển đổi layout chữ dọc thô sơ sang cấu trúc phân bổ mảng miếng pastel và soft shadow. | Layout bắt đầu thành hình nhưng còn rời rạc, chưa có tính liên kết và chiều sâu nghệ thuật. Chữ bị tràn khi co giãn màn hình. | Đã Refactor |
| **Giai đoạn 3** | Thử nghiệm mô hình cấu trúc **Bento Grid** (Apple style). Gom toàn bộ kỹ năng công cụ (Ps, Ai, Figma, VS Code), nhiếp ảnh, maimai DX thành các ô độc lập có hiệu ứng nổi (Lift-up hover). | Giao diện gọn gàng hơn rõ rệt. Bổ sung thành công các mốc lịch sử cá nhân (Timeline dọc từ 2020 - 2022). Gặp lỗi mất kết nối CSS khi đẩy lên GitHub Pages. | Đã sửa xong |
| **Giai đoạn 4** | Tiến hành **Refactor toàn diện hệ thống** theo chuẩn Awwwards Premium. Đổi hẳn sang Dark Mode Futuristic. Tích hợp Custom Cursor Glow và thuật toán xoay 3D (3D Tilt) cho thẻ nội dung. | Gặp sự cố nghiêm trọng: Code bị lẫn dữ liệu mẫu tiếng Anh từ Template cũ (Tên hiển thị bị sai thành "Amelia"). Hệ thống đứng im ở màn hình Loading do lỗi đồng bộ JS. | Đã sửa xong |
| **Giai đoạn 5** | Loại bỏ Preloader bị kẹt. Sửa thông tin hiển thị chính chủ (Nguyễn Quốc Việt - Sinh viên GDU). Xử lý độ tương phản ảnh nền bằng giải pháp phủ mờ "kính râm" (`linear-gradient overlay`). | Trang web vận hành mượt mà, tải trực tiếp không độ trễ, hình ảnh sắc nét, hiệu ứng 3D hoạt động hoàn hảo trên Desktop. | **Hoàn thành** |

---

## 4. HỆ THỐNG KỸ NGHỆ CÂU LỆNH (PROMPT ENGINEERING LOG)

Dưới đây là các câu lệnh (prompts) tư duy mang tính kỹ nghệ đã được sử dụng trong quá trình làm việc cùng trợ lý AI để tạo sinh, sửa lỗi và tối ưu hóa mã nguồn qua từng bước:

### 🌟 Prompt 1: Đặt nền móng & Xử lý lỗi định dạng file hệ thống
> *"Tui tải cái ảnh phòng học anime Project SEKAI lấp lánh về làm nền, file ảnh đuôi là .jpeg chứ không phải .jpg thì trong file style.css ghi làm sao cho trình duyệt nó nhận diện được? Viết code background-image chuẩn và chỉ cách up lên kho GitHub Pages sao cho không bị lỗi."*

### 🌟 Prompt 2: Định hướng nâng cấp thẩm mỹ Đồ họa (Style Benchmarking)
> *"Nhìn đống trang web hiện tại thấy sơ sài quá, trông như bài tập thô của những năm 90. Tôi muốn nâng cấp giao diện, làm phải giống phong cách Modern SaaS / Agency Portfolio của trang mẫu này: sáng sủa, sang xịn, sử dụng mảng màu pastel gradient, hiệu ứng bóng đổ mềm soft shadow và typography to bản giống bạn Quốc Huy. Hãy thiết kế lại file index.html và style.css, đưa thông tin IT, Đồ họa GDU và maimai DX của tôi vào."*

### 🌟 Prompt 3: Cấu trúc hóa thông tin thành mô hình Bento Grid & Timeline
> *"Hãy đập đi xây lại toàn bộ code từ đầu theo xu hướng Bento Grid của Apple. Hãy gom tất cả học vấn GDU, công cụ thiết kế, số liệu maimai DX rating 11k5, nhiếp ảnh Canon 1200D vào các ô vuông bo góc lặp lại linh hoạt. Đồng thời thiết kế thêm một cấu trúc dòng thời gian sự nghiệp timeline dọc có đường kẻ đứt phát sáng ghi các mốc: 2020 tập lập trình, 2021 đấm bóng banh, 2022 tập đánh rhythm games."*

### 🌟 Prompt 4: Đột phá công nghệ chuẩn Awwwards (Hacker/Futuristic Theme)
> *"Hãy tạo một website portfolio cá nhân cao cấp chuẩn Awwwards bằng chỉ 3 file: index.html, style.css, script.js. Yêu cầu phong cách Dark mode futuristic, Glassmorphism, Neon glow nhẹ, UI giống Framer/Linear/Apple. Phải có hiệu ứng xoay 3D tilt khi hover vào card, có con trỏ chuột custom cursor tỏa sáng, có canvas sinh hạt bụi lơ lửng phía sau và hiệu ứng tiết lộ nội dung cuộn trang reveal animation."*

### 🌟 Prompt 5: Tối ưu hóa hiệu năng, gỡ bỏ Preloader & Fix tương phản nền
> *"Cái màn hình loading screen preloader nó bị đứng im hoài khi mạng chậm không cho vào web, hãy bỏ luôn cái thanh loading đó để web vào thẳng nội dung cho lẹ. Ngoài ra, khi tôi thêm ảnh nền 1370569.jpeg vào thì nền bị sáng quá làm chìm hết chữ đen mode, hãy chỉ cách tạo một lớp phủ màu đen mờ như kính râm đè lên ảnh nền trong CSS để chữ phát sáng nổi bật lên."*

---

## 5. CÁC THÁCH THỨC KỸ THUẬT & GIẢI PHÁP SỬA LỖI (DEBUGGING & OPTIMIZATION)

### 5.1 Sự cố mất kết nối CSS khi Deploy lên GitHub Pages
* **Triệu chứng:** Trang web hiển thị toàn bộ chữ chạy dọc màn hình, font chữ thô sơ, không có màu sắc và các khối hộp bị biến mất hoàn toàn khi xem link trực tuyến.
* **Nguyên nhân:** Lỗi sai lệch đường dẫn tương đối (Relative Path) và viết hoa/thường tên file. Hệ điều hành Windows cục bộ không phân biệt `Style.css` và `style.css`, nhưng máy chủ Linux của GitHub Pages phân biệt nghiêm ngặt.
* **Giải pháp:** Đồng bộ hóa toàn bộ tên file về chữ thường 100% (`style.css`), kiểm tra kỹ thẻ `<link rel="stylesheet" href="style.css">` ở phần `<head>` của file HTML, thực hiện ép trình duyệt xóa cache bằng tổ hợp phím `Ctrl + Shift + R` (hoặc `Ctrl + F5`).

### 5.2 Lỗi kẹt màn hình Preloader (Asynchronous Loading Error)
* **Triệu chứng:** Web hiển thị vòng quay loading vô hạn, người dùng không thể cuộn chuột hay nhìn thấy nội dung chính của portfolio.
* **Nguyên nhân:** Sự kiện `window.onload` hoặc logic tính toán phần trăm tiến độ của JavaScript bị kẹt do một số tài nguyên ảnh ngoài mạng (Unsplash API) phản hồi quá chậm hoặc bị chặn kết nối, khiến hàm ẩn preloader không được gọi.
* **Giải pháp:** Loại bỏ hoàn toàn các thẻ HTML liên quan đến preloader, tái cấu trúc lại tệp `script.js` bằng cách chuyển sang lắng nghe sự kiện `DOMContentLoaded` (chỉ cần khung sườn DOM tải xong là hiển thị luôn), thiết lập hàm `setTimeout` kích hoạt class `.active` cho phần Hero sau đúng `100ms`.

### 5.3 Lỗi tương phản chữ trên nền hình ảnh (Visual Hierarchy Issue)
* **Triệu chứng:** Khi ốp bức ảnh phòng học lấp lánh vào, các vùng sáng của ảnh đè lên font chữ màu trắng làm người xem không thể đọc được nội dung, vi phạm nghiêm trọng nguyên lý thiết kế UI/UX.
* **Nguyên nhân:** Độ sáng (Brightness) và độ bão hòa (Saturation) của ảnh nền quá cao, không có lớp đệm ngăn cách với tầng văn bản.
* **Giải pháp:** Sử dụng kỹ thuật lồng lớp phủ trực tiếp trong thuộc tính `background-image` của CSS bằng cách trộn một dải màu gradient đen mờ với ảnh gốc: `linear-gradient(rgba(3, 3, 5, 0.85), rgba(3, 3, 5, 0.85)), url('1370569.jpeg')`. Việc này đóng vai trò như một thấu kính mờ giúp dìm độ sáng ảnh nền xuống 85%, đẩy toàn bộ hệ thống chữ và khối Glassmorphism tỏa sáng lên bề mặt.

---

## 6. HƯỚNG DẪN KIỂM THỬ VÀ TRIỂN KHAI (DEPLOYMENT)

### 6.1 Quy trình nộp bài và kiểm tra cục bộ (Local Testing)
1.  Tải 3 tệp tin nguồn: `index.html`, `style.css`, `script.js` về cùng một thư mục.
2.  Đảm bảo file ảnh nền tên chính xác là `1370569.jpeg` nằm chung thư mục này.
3.  Click đúp chuột vào file `index.html` để chạy trên trình duyệt (Chrome/Edge/Safari).
4.  Rê chuột quanh màn hình để kiểm tra vệt sáng tỏa ra theo chuột, hover vào các khối để kiểm tra góc nghiêng 3D Tilt.

### 6.2 Quy trình cấu hình chạy trực tuyến trên GitHub Pages
1.  Đăng nhập vào tài khoản GitHub cá nhân, tạo một repository mới tên là `portilo` (hoặc tên tùy ý).
2.  Sử dụng tính năng **Add file -> Upload files** để tải cả 4 tệp tin lên nhánh `main`. Nhấn **Commit changes**.
3.  Truy cập vào mục **Settings** (Cài đặt) của kho lưu trữ -> Chọn mục **Pages** ở danh mục bên trái.
4.  Tại phần **Build and deployment -> Branch**, thiết lập cấu hình chọn nhánh `main` và thư mục `/root`. Nhấn **Save**.
5.  Hệ thống sẽ tự động biên dịch và cấp một đường link URL chính thức có dạng: `https://<ten-tai-khoan>.github.io/portilo/` làm bằng chứng nghiệm thu đồ án hoàn chỉnh.

---
*Báo cáo được chuẩn hóa và cam kết tự thực hiện, tự debug hoàn toàn bởi sinh viên Nguyễn Quốc Việt — Lớp thiết kế ứng dụng số GDU — Năm 2026.*
