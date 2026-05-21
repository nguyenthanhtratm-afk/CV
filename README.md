# Personal Portfolio

Website giới thiệu cá nhân, kinh nghiệm làm việc và các dự án — single-page, song ngữ VI/EN, light/dark theme.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- next-themes (light/dark)
- next-intl (VI/EN)
- Deploy: Vercel

## Getting started

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Scripts

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Dev server với hot reload |
| `npm run build` | Build production |
| `npm run start` | Chạy bản production đã build |
| `npm run lint` | Kiểm tra ESLint |

## Cấu trúc thư mục (dự kiến)

```
src/
  app/                  # Next.js App Router (layout, page)
  components/
    sections/           # Hero, About, Experience, Projects, Skills, Contact
    ui/                 # Button, Card, ThemeToggle, LangToggle
  content/
    vi.ts               # Nội dung tiếng Việt
    en.ts               # Nội dung tiếng Anh
    types.ts            # Kiểu dữ liệu CV
  lib/
public/
  images/               # Ảnh dự án, avatar
```

## Cập nhật nội dung CV

Sửa file `src/content/vi.ts` và `src/content/en.ts`. Xem [CONTENT.md](./CONTENT.md) để biết cấu trúc dữ liệu.

## Deploy

Push lên GitHub rồi import vào [Vercel](https://vercel.com). Không cần config thêm.
