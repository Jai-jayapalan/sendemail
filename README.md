# 📬 FileFlow | Professional File Sender

A sleek, high-performance Next.js application designed to streamline file sharing via email. Featuring a modern drag-and-drop interface, real-time validation, and automated email dispatching.

## ✨ Key Features

* **Modern UI/UX**: Built with a "Mobile-First" approach using **Tailwind CSS v4** for a clean, high-contrast aesthetic.
* **Intelligent Dropzone**: Advanced file upload area with drag-and-drop support, file type icons, and size validation.
* **Real-time Validation**: Dynamic form handling that prevents submission until a valid email and at least one file are present.
* **Smooth Feedback**: Integrated **React-Toastify** for success/error notifications and a custom pulse-ring loader for network states.
* **Robust Backend**: Powered by Next.js App Router and **Nodemailer** for reliable SMTP delivery.
* **CI/CD Ready**: Pre-configured GitHub Actions pipeline for automated deployment to Vercel.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons**: [React Icons (Feather)](https://react-icons.github.io/react-icons/)
* **Mailing**: [Nodemailer](https://nodemailer.com/)
* **Pipeline**: GitHub Actions & Vercel CLI

---

## 🚀 Getting Started

### 1. Prerequisites
* Node.js 20.x or 24.x
* A Gmail account (or SMTP provider)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/fileflow.git

# Navigate to the directory
cd fileflow

# Install dependencies
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory and add your SMTP credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```
> **Note**: For Gmail, you must generate an **App Password** in your Google Account security settings.

### 4. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## ☁️ Deployment

### Vercel (Manual)
The easiest way to deploy is to link your GitHub repository to Vercel. Ensure you add `EMAIL_USER` and `EMAIL_PASS` to the **Environment Variables** in the Vercel Dashboard.

### CI/CD (Automated)
This project includes a `.github/workflows/deploy.yml` file. To enable automated deployments:
1.  Go to GitHub **Settings > Secrets and variables > Actions**.
2.  Add the following secrets:
    * `VERCEL_TOKEN`: Your Vercel Personal Access Token.
    * `VERCEL_ORG_ID`: Found in `.vercel/project.json`.
    * `VERCEL_PROJECT_ID`: Found in `.vercel/project.json`.
    * `EMAIL_USER` & `EMAIL_PASS`: Your SMTP credentials.

---

## 📂 Project Structure

```text
├── app/
│   ├── api/send-email/  # API Route (Multipart FormData handling)
│   ├── components/      # UI Components (FileUpload, EmailForm, Loader)
│   ├── globals.css      # Tailwind v4 configuration & custom animations
│   └── page.tsx         # Main application entry point
├── lib/
│   └── mailer.js        # Nodemailer transport configuration
└── public/              # Static assets
```

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
*Developed with 💙 by jai*
