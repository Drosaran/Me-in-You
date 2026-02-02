# Me in You

A multi-step, branching romantic site for your special person.

---

## Best way to share: host it and send a link (not the .html file)

**Opening the .html file from a phone (e.g. after downloading or from a ZIP) often breaks:**
- Images may not load
- Tapping options may not work (JavaScript can be restricted)
- Links between pages can fail

**Solution: put the site online and send her one link.** Then it works on any phone or laptop.

### Option A: Netlify Drop (no account, ~2 minutes)

1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)** in your browser.
2. Drag and drop your **entire `me-in-you` folder** (the one that contains `index.html`, `script.js`, `styles.css`, and all the other `.html` files) onto the page.
3. Netlify will give you a URL like `https://random-name-12345.netlify.app`.
4. Copy that link and send it to her. She opens it on her phone or laptop and everything works.

You can create a free Netlify account to edit the site name (e.g. `me-in-you.netlify.app`) or leave it as the random name.

### Option B: GitHub Pages (free, good if you use GitHub)

1. Create a new repository on GitHub (e.g. `me-in-you`).
2. Upload all the files from your `me-in-you` folder into the **root** of the repo (so `index.html` is at the root, not inside a subfolder).
3. Go to **Settings → Pages**.
4. Under "Source" choose **Deploy from a branch**.
5. Branch: **main**, folder: **/ (root)**. Save.
6. After a minute, your site will be at `https://yourusername.github.io/me-in-you/`.
7. Send her that link.

### Option C: Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in (e.g. with GitHub).
2. Click **Add New → Project** and import your folder or repo.
3. Deploy. You’ll get a URL like `https://me-in-you-xxx.vercel.app`.
4. Send her that link.

---

## After you host it

- **Formspree:** Your `script.js` already has your Formspree URL. Once the site is live at `https://...`, you’ll get an email for every answer she selects.
- **Custom URL (optional):** On Netlify/Vercel you can add a custom domain later if you want (e.g. `meinyou.com`).

---

## If you still share the folder as a file

- **Images:** The site now uses inline graphics (no external image URLs), so they should show even when opened from a file.
- **Taps on mobile:** Touch handling was added so taps on options should work on phones when the page is opened from a **hosted** URL. Opening from a local file on a phone can still be unreliable, so hosting is strongly recommended.

---

## Changing the text or flow

Edit the `.html` files in the `me-in-you` folder. After you change them, re-upload the folder to Netlify (or push to GitHub / Vercel) so the live link shows the updates.
