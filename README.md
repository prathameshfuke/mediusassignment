# Better.com Replica

A pixel-close, modern, and highly interactive replica of Better.com built using Next.js 14, React, TypeScript, and Tailwind CSS. It features professional brand styling, smooth Framer Motion animations, a dynamic mortgage calculator with live charting, and a clean user application wizard.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS range slider controls
- **Animations:** Framer Motion (Transitions, carousel, accordions, wizards)
- **Icons:** Lucide React
- **Charts:** Recharts (Dynamic monthly payment donut chart)
- **Fonts:** Noto Serif Display (Headings), Inter (Body) loaded via `next/font`

---

## 🛠️ Pages Replicated

1. **Home Page (`/`):**
   - Sticky navigation header with mobile drawer menu.
   - Animated hero block, trust badges, and Google review cards.
   - Metric Stats bar highlighting loan numbers.
   - Interactive testimonials review slider.
   - FAQ collapsible accordion.
   - Regulatory footer columns and disclosures.
2. **About Us (`/about-us`):**
   - Company genesis and editorial mission section.
   - Interactive vertical timeline showing milestones.
   - Grid layout of leadership members with custom SVG portrait graphics.
   - Press quote items from Forbes, WSJ, Bloomberg, and NYT.
3. **Mortgage Calculator (`/mortgage-calculator`):**
   - Left side input panels containing home price sliders, down payment percentage/dollar toggles, loan term filters, and editable fees.
   - Right side real-time calculation card.
   - Dynamic Recharts donut chart detailing monthly payments (Principal, taxes, insurance, HOA).
4. **Start Flow (`/start`):**
   - Full screen wizard interface.
   - Minimal header and footer layout.
   - Animated step changes, including progress tracking and contact form validations.

---

## 💻 Local Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Test Production Ready Bundle
```bash
npm run build
```

---

## ☁️ Deployment

Deploy easily to Vercel:
```bash
npm install -g vercel
vercel --prod
```
Configuration details are predefined in `vercel.json`.
