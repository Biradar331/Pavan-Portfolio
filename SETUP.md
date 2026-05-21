# Portfolio setup & deployment — Pavan Biradar

## 1. Add your assets (required before deploy)

### Profile photo (required)
Copy your **graduation profile photo** to:
```
public/images/profile.jpg
```
- Used in the hero with a professional head-and-shoulders crop
- Recommended: portrait orientation, at least **800×1000px** for sharp display
- The site serves it at `/images/profile.jpg`

### Resume PDF
Copy your resume to:
```
public/resume/Resume_Software.pdf
```
Source: `C:\Users\Pavan\OneDrive\Desktop\Resume_Software.pdf`

### Project screenshots (optional but recommended)
Add cover screenshots (JPG/PNG, 16:10 ratio recommended):
```
public/images/projects/hmer/cover.jpg
public/images/projects/meal-buddy/cover.jpg
public/images/projects/gesture-vehicle/cover.jpg
```
- **HMER:** export a slide from `final_majorproject_ppt_01.pptx`
- **Meal Buddy:** screenshot of https://meal-buddy-app.onrender.com
- **Gesture vehicle:** export from `POSTER_PRESENTATION_2025.pptx`

Cards show elegant placeholders until images are added.

---

## 2. Install & run locally

```bash
cd C:\Users\Pavan\OneDrive\Desktop\portfolio-project
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production build test
```bash
npm run build
npm run preview
```

---

## 3. Deploy to GitHub

1. Create a new repository on GitHub (e.g. `pavan-biradar-portfolio`).
2. In the project folder:

```bash
git init
git add .
git commit -m "Add professional portfolio website"
git branch -M main
git remote add origin https://github.com/Biradar331/YOUR-REPO-NAME.git
git push -u origin main
```

---

## 4. Deploy to Vercel (recommended)

1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New Project** → import your portfolio repository.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

Your site will be live at `https://your-project.vercel.app`.

### Custom domain (optional)
Vercel → Project → Settings → Domains → add your domain.

---

## 5. Deploy to Netlify (alternative)

1. Go to [https://netlify.com](https://netlify.com) → **Add new site** → **Import from Git**.
2. Select the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

---

## 6. Security reminders

- Never commit Razorpay/API keys (Meal Buddy Django project).
- Rotate keys if they were ever pushed to GitHub.
- Keep phone number off the public site (already configured — email only).

---

## 7. Update content later

Edit all text and links in:
```
src/data/portfolioData.js
```

No need to hunt through components for name, bio, projects, or links.
