# PLAN.md

Kế hoạch build website portfolio.

## Mục tiêu

Một trang web single-page giới thiệu cá nhân, kinh nghiệm, dự án — song ngữ VI/EN, light/dark theme, deploy lên Vercel.

## Phạm vi (v1)

### Các section trên trang

1. **Hero** — Tên, title, tagline, CTA (Liên hệ / Xem dự án), avatar
2. **About** — Đoạn giới thiệu + một vài chỉ số (số năm kinh nghiệm, số dự án…)
3. **Experience** — Timeline kinh nghiệm làm việc
4. **Projects** — Grid card các dự án, có filter theo loại (tuỳ chọn)
5. **Skills** — Phân nhóm kỹ năng, có icon
6. **Education / Certifications** — Danh sách ngắn
7. **Contact** — Form gửi email (qua mailto hoặc Resend / Formspree) + social links
8. **Footer** — Copyright, link nhanh

### Tính năng

- Sticky nav với scroll-to-section, highlight section đang xem
- Toggle ngôn ngữ VI/EN (lưu vào `localStorage`)
- Toggle theme light/dark (lưu vào `localStorage`)
- Animation khi cuộn (Framer Motion hoặc CSS) — nhẹ, không quá lố
- Responsive: mobile, tablet, desktop
- SEO: meta tags, OG image, sitemap, robots.txt
- Lighthouse target: 95+ trên cả 4 trục

## Lộ trình

### Bước 1 — Khởi tạo project (sau khi nhận nội dung CV)
- [ ] `npx create-next-app@latest` với TypeScript + Tailwind + App Router
- [ ] Cài deps: `next-themes`, `next-intl` (hoặc i18n thủ công), `lucide-react`
- [ ] Setup ESLint + Prettier
- [ ] Tạo `src/content/{vi,en}.ts` từ CONTENT.md

### Bước 2 — Layout & theme
- [ ] Root layout với theme provider
- [ ] Nav + ThemeToggle + LangToggle
- [ ] Footer
- [ ] Typography & color tokens trong `tailwind.config`

### Bước 3 — Sections
- [ ] Hero
- [ ] About
- [ ] Experience (timeline)
- [ ] Projects (card grid)
- [ ] Skills
- [ ] Education
- [ ] Contact

### Bước 4 — Hoàn thiện
- [ ] Animation cuộn
- [ ] SEO + OG image
- [ ] Responsive QA (mobile, tablet, desktop)
- [ ] Lighthouse audit
- [ ] Deploy Vercel + custom domain (nếu có)

## Quyết định kỹ thuật

| Vấn đề | Quyết định | Lý do |
|--------|-----------|-------|
| Cấu trúc | Single-page | Phù hợp portfolio cá nhân, UX cuộn liền mạch |
| i18n | `next-intl` hoặc dict thủ công | Chỉ 2 ngôn ngữ, content tĩnh — không cần giải pháp nặng |
| Theme | `next-themes` | Chuẩn, ít code, tránh FOUC |
| Form contact | Bắt đầu bằng `mailto:`, sau nâng cấp Resend/Formspree | Đơn giản, không cần backend ngay |
| Animation | CSS + Tailwind, dùng Framer Motion nếu cần | Giữ bundle nhẹ |
| Image | `next/image` + ảnh trong `public/` | Tối ưu sẵn |

## Câu hỏi cần bạn quyết

- [ ] Tên miền custom? (vd: `tenban.com`) — hay dùng subdomain `.vercel.app` trước
- [ ] Có cần blog không? (v1 chưa có; nếu có sẽ thêm sau bằng MDX)
- [ ] Có muốn tải CV PDF từ trang web không? Nếu có, file ở đâu?
- [ ] Form contact có cần lưu lead không, hay chỉ gửi email là đủ?

## Out of scope (v1)

- Blog / bài viết
- CMS (sửa nội dung qua UI)
- Analytics nâng cao (chỉ dùng Vercel Analytics mặc định)
- Đa ngôn ngữ thứ 3
