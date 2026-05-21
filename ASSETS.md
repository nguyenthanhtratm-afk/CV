# ASSETS.md

Đây là nơi bạn để **tất cả ảnh và tài liệu thô** về cá nhân và các dự án. Khi build website, mình sẽ vào đây lấy, tối ưu (resize, nén, convert sang WebP/AVIF) rồi copy sang `public/` của Next.js.

> Quy tắc: **assets/** chứa file gốc do bạn cung cấp. **public/** (sẽ có sau khi scaffold) chứa file đã tối ưu để website dùng. Không sửa trực tiếp file trong `public/`.

---

## Cấu trúc thư mục

```
assets/
├── personal/         # Ảnh & tài liệu cá nhân
│   ├── avatar.jpg              ← ảnh đại diện chính (vuông, ≥ 400×400)
│   ├── hero-photo.jpg          ← ảnh lớn cho section Hero (tuỳ chọn)
│   ├── cv.pdf                  ← bản CV PDF (cho nút "Tải CV")
│   └── signature.png           ← chữ ký (tuỳ chọn)
│
├── projects/         # Một thư mục con cho mỗi dự án
│   └── <slug-du-an>/
│       ├── cover.jpg           ← ảnh đại diện dự án (16:9, ≥ 1200×675)
│       ├── 01-screenshot.jpg   ← các ảnh chi tiết, đánh số thứ tự
│       ├── 02-screenshot.jpg
│       ├── logo.png            ← logo dự án (tuỳ chọn)
│       └── notes.md            ← ghi chú riêng cho dự án (tuỳ chọn)
│
└── documents/        # Tài liệu khác
    ├── certificates/           ← chứng chỉ (PDF/JPG)
    ├── references/             ← thư giới thiệu
    └── portfolio-old.pdf       ← portfolio cũ nếu có
```

---

## Quy ước đặt tên

- **Slug dự án**: chỉ chữ thường, gạch ngang, không dấu, không khoảng trắng.
  - ✅ `pump-control-system`, `landing-page-spa`
  - ❌ `Pump Control`, `du_an_1`, `dự-án-bơm`
- **Tên file ảnh**: gợi tả nội dung, có số thứ tự nếu nhiều ảnh cùng loại.
  - ✅ `01-dashboard.jpg`, `cover.jpg`, `logo.svg`
  - ❌ `IMG_2049.JPG`, `Screen Shot 2024-01-15.png`
- **Định dạng ưu tiên**:
  - Ảnh chụp / screenshot: `.jpg` (chất lượng 85+) hoặc `.png` nếu cần trong suốt
  - Logo / icon: `.svg` (ưu tiên) hoặc `.png` (≥ 512px)
  - Tài liệu: `.pdf`

## Kích thước khuyến nghị

| Loại | Tỉ lệ | Kích thước tối thiểu |
|------|-------|----------------------|
| Avatar | 1:1 | 400×400 |
| Hero photo | tuỳ ý | chiều rộng ≥ 1600 |
| Project cover | 16:9 | 1200×675 |
| Project screenshot | tuỳ ý | chiều rộng ≥ 1200 |
| OG image (mạng xã hội) | 1.91:1 | 1200×630 |
| Favicon (nguồn) | 1:1 | ≥ 512×512 |

Không cần bạn tự resize — cứ đưa file gốc lớn, lúc build sẽ tự tối ưu.

## Liên kết với CONTENT.md

Khi điền [CONTENT.md](CONTENT.md), với mỗi dự án bạn ghi rõ **slug** (vd: `pump-control-system`). Mình sẽ map sang `assets/projects/pump-control-system/cover.jpg`.

## Khi build website

Quy trình tự động:

1. Đọc danh sách dự án từ `CONTENT.md` (hoặc `src/content/{vi,en}.ts` sau khi đã chuyển).
2. Với mỗi slug, copy ảnh từ `assets/projects/<slug>/` → `public/images/projects/<slug>/`.
3. Tối ưu: resize nhiều kích cỡ, convert WebP/AVIF, generate `placeholder` blur.
4. PDF (`cv.pdf`, certificates) copy nguyên sang `public/files/`.

Bạn **không cần** tự copy file sang `public/` — chỉ cần để file ở `assets/`.

---

## Checklist cho bạn

- [ ] `assets/personal/avatar.jpg`
- [ ] `assets/personal/cv.pdf` (nếu muốn có nút Tải CV)
- [ ] Với mỗi dự án trong CONTENT.md: tạo `assets/projects/<slug>/cover.jpg`
- [ ] (Tuỳ chọn) Logo, screenshot bổ sung, chứng chỉ
