# Step-by-step: Put "Me in You" on GitHub Pages

Your site needs **all** of these files in the repo, not just `index.html`. If only `index.html` is there, the site will break (no styles, no script, no other pages).

---

## Step 1: Have all files ready

On your computer, open the **`me-in-you`** folder. You should see these files:

| File | Needed for |
|------|------------|
| `index.html` | Main page / first screen |
| `script.js` | Choices, back button, notifications |
| `styles.css` | Layout and look |
| `yes.html` | "Yes" response page |
| `need-time.html` | "Need time" page |
| `lets-talk.html` | "Let's talk" page |
| `concerns.html` | "What's holding you back?" page |
| `busy.html` | Busy → solution page |
| `not-ready.html` | Not ready → solution page |
| `something-else.html` | Something else → page |
| `get-to-know.html` | (optional, not linked anymore) |
| `gentle-no.html` | (optional, not linked) |
| `README.md` | (optional) |

You **must** upload at least: **index.html**, **script.js**, **styles.css**, **yes.html**, **need-time.html**, **lets-talk.html**, **concerns.html**, **busy.html**, **not-ready.html**, **something-else.html**.

---

## Step 2: Open your GitHub repo in the browser

1. Go to **https://github.com**
2. Log in.
3. Open the **repository** you created for this project (e.g. `me-in-you` or whatever you named it).
4. Make sure you’re on the **main** branch (dropdown at the top left usually says **main**).

---

## Step 3: Upload all files (not just index.html)

### Option A: Drag and drop (easiest)

1. In the repo, click **"Add file"** → **"Upload files"**.
2. On your computer, open the **`me-in-you`** folder.
3. **Select all files** in that folder:
   - **Windows:** Ctrl + A  
   - **Mac:** Cmd + A  
   Or select them one by one while holding Ctrl (Windows) or Cmd (Mac).
4. **Drag** the selected files into the GitHub "Drag files here" area (the big box on the upload page).
5. Wait until every file shows in the list (you should see `index.html`, `script.js`, `styles.css`, and all the `.html` files).
6. Scroll down, add a short note like **"Add all site files"** in the commit message.
7. Click **"Commit changes"**.

If you already have `index.html` in the repo:

- You can still drag the other files.  
- If it asks to replace `index.html`, choose **Replace** so the latest version is there.

### Option B: Add missing files one by one

1. Click **"Add file"** → **"Upload files"**.
2. Click **"choose your files"** and pick one file (e.g. `script.js`).
3. Commit.
4. Repeat for **styles.css**, **yes.html**, **need-time.html**, **lets-talk.html**, **concerns.html**, **busy.html**, **not-ready.html**, **something-else.html**, until all are in the repo.

All these files must be in the **root** of the repo (not inside a subfolder like `me-in-you`). So when you open the repo, you should see something like:

```
your-repo-name/
  index.html
  script.js
  styles.css
  yes.html
  need-time.html
  ...
```

---

## Step 4: Turn on GitHub Pages

1. In the **same repo**, click **Settings** (top menu).
2. In the left sidebar, click **Pages** (under "Code and automation" or "Options").
3. Under **"Build and deployment"**:
   - **Source:** choose **"Deploy from a branch"**.
   - **Branch:** choose **main** (or **master** if that’s what you use).
   - **Folder:** choose **"/ (root)"**.
4. Click **Save**.
5. Wait 1–2 minutes. Then refresh the Settings → Pages section. You should see a green box like:  
   **"Your site is live at https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"**

---

## Step 5: Open your site

1. Copy that URL (e.g. `https://johndoe.github.io/me-in-you/`).
2. Open it in your browser (phone or laptop).
3. You should see the first screen ("Hey, quick one"). Tapping options should move to the next step and open other pages.

**Important:** The link must end with a **slash** or with **/index.html** when you share it, e.g.:

- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`  
- or `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/index.html`

Send **that link** to her (not the .html file). It will work on mobile and desktop.

---

## If something still doesn’t work

- **404 or "There isn’t a GitHub Pages site here"**  
  Wait a few more minutes and try again. Make sure **Branch: main**, **Folder: / (root)** in Settings → Pages.

- **Page loads but looks broken (no style, no layout)**  
  `styles.css` is missing or in a subfolder. Upload `styles.css` to the **root** of the repo (same level as `index.html`).

- **Tapping options does nothing**  
  `script.js` is missing or in a subfolder. Upload `script.js` to the **root** of the repo.

- **"Yes" / "Need time" / etc. give 404**  
  Upload the missing `.html` file (e.g. `yes.html`, `need-time.html`) to the root of the repo.

---

## Quick checklist

- [ ] All 10+ files are in the repo (at least index.html, script.js, styles.css, yes.html, need-time.html, lets-talk.html, concerns.html, busy.html, not-ready.html, something-else.html).
- [ ] All files are in the **root** of the repo (no extra folder like `me-in-you` around them).
- [ ] Settings → Pages → Source: **Deploy from a branch** → Branch: **main** → Folder: **/ (root)** → Save.
- [ ] I use the link from the green box (e.g. `https://USERNAME.github.io/REPO_NAME/`) to open and share the site.
