# Send Mae Into Your World: setup guide

You have three files:
- `send-mae.html`: the page. Both Mae images are built into it, so it works on its own.
- `mae-guest-pass.jpg`: upload this too, so links to the page show Mae when shared.
- `google-sheet-script.gs`: the script that saves answers to your Google Sheet

Do Part A first, then Part B, then Part C.

---

## Part A: Make the Google Sheet (about 10 minutes, once)

1. Go to **sheets.new** and name the sheet **Send Mae Census**.
2. In the menu, click **Extensions → Apps Script**. A new tab opens.
3. Delete everything in the code box. Open `google-sheet-script.gs`, copy all of it, and paste it in.
4. Click the **Save** icon (the floppy disk).
5. Click the blue **Deploy** button (top right) → **New deployment**.
6. Click the **gear icon** next to "Select type" → choose **Web app**.
7. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
8. Click **Deploy**.
9. Google asks you to **Authorise access**. Choose your account.
10. You'll see **"Google hasn't verified this app"**. That's normal, because it's your own script. Click **Advanced → Go to (unsafe) → Allow**.
11. Copy the **Web app URL**. It starts with `https://script.google.com/macros/s/` and ends with `/exec`.

---

## Part B: Connect the page to the Sheet (2 minutes)

1. Open `send-mae.html` in any text editor, or edit it directly on GitHub.
2. Near the top, find this line:
   `window.SHEET_URL = "";`
3. Paste your Web app URL between the quotes:
   `window.SHEET_URL = "https://script.google.com/macros/s/XXXX/exec";`
4. Save.

---

## Part C: Put it online, next to your board game

1. Open your **start-here-board-game** repo on GitHub.
2. Click **Add file → Upload files**.
3. Drag in `send-mae.html` and `mae-guest-pass.jpg`. You don't need to upload the `.gs` file.
4. Click **Commit changes**.
5. After a minute or two, your page is live at:
   **https://thesiabrat.github.io/start-here-board-game/send-mae.html**

GoatCounter is already built in. You'll see visits, plus events for each sorting, each boarding (by door), prompt copies and guest-pass downloads.

---

## Part D: Test it

1. Open the live link on your **phone**.
2. Board once with silly answers, then check that a new row appears in your Google Sheet within a few seconds.
3. Tap **Copy prompt**, paste it into ChatGPT with the guest pass, and check the picture.
4. Delete your test rows from the Sheet before publishing.

---

## On 20 November

- The page closes itself after **20 November, 11:59pm Singapore time** and shows a "Boarding has closed" message.
- In the Sheet, go to **File → Download → CSV** and send it to me. I'll turn it into your census: the door split, a map, a mood word cloud, the objects, the posts people remember, and Year Two wishes.
