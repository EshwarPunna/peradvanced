# Hosting Your Portfolio on GitHub Pages

Follow these steps to make your site live at `https://yourusername.github.io/portfolio`:

## 1. Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** icon (top right) and select **New repository**.
3. Name it `portfolio` (or anything you like).
4. Set it to **Public**.
5. Click **Create repository**.

## 2. Upload Your Files (Commands)
Open your terminal in the `c:\Users\Eshwar\Desktop\Portfolio` folder and run these commands one by one:

```powershell
# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initialize Professional AI Portfolio"

# Connect to your new GitHub repo (Replace <YOUR_GITHUB_URL>)
# Example: git remote add origin https://github.com/Eshwar-Raj/portfolio.git
git remote add origin <YOUR_GITHUB_URL>

# Push to GitHub
git branch -M main
git push -u origin main
```

## 3. Enable GitHub Pages
1. On your GitHub repository page, go to **Settings** (top tab).
2. Click **Pages** on the left sidebar.
3. Under **Build and deployment > Branch**, select `main` and `/ (root)`.
4. Click **Save**.

Your site will be live at `https://<yourusername>.github.io/portfolio/` in a few minutes!
