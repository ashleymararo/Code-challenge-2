#  Event Guest List Manager

Welcome to **Event Guest List Manager**, a simple and intuitive web app for managing your event's guest list. Add guests, track their attendance, and remove them when needed — all in real time with a clean UI.

---

## Features

-  Add guests with timestamps
-  Toggle attendance status (Attending/Not Attending)
-  Remove guests from the list
-  Limit to 10 guests to avoid overcrowding

---

## How to Use

1. Enter a guest's name in the input field.
2. Click **Submit** to add them to the list.
3. Use the **Attendance** button to toggle status.
4. Click **X** to remove a guest.

---

## Tech Stack

- **HTML** — Markup for the layout
- **CSS** — Styling for that clean aesthetic
- **JavaScript** — Handles guest list logic

---


## Project Structure

```
Event-Guest-List-Manager/
 ├── index.html
 ├── index.js
 └── style.css
```


---

## Deployment

To run this app:

1. Open `index.html` in a browser directly **OR**
2. Host it using GitHub Pages, Netlify, or Vercel for live preview.

---


## Sample Interaction

```
Enter guest name
> Ashley
Guest added with timestamp
> 2025-06-24 20:08:32
Ashley — Attending
Remove | Toggle Attending
```

---

## Notes

- Maximum of **10 guests** can be added.
- Uses `Date.now()` for unique IDs and `toLocaleString()` for readable timestamps.

---

## Future Improvements

- Add local storage so guest list is saved across sessions
- Add search or sort functionality
- Add checkbox for attendance instead of button

---

## Author

Made with 💛 by Ashley
