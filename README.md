⏰ Hybrid Analog & Digital Clock

A dynamic, stylish clock application built with Vanilla JavaScript, HTML, and CSS. This project simultaneously displays time in both classic analog and modern digital formats, complete with 12-hour AM/PM conversion and real-time updates.

✨ Features

Dual Display: Features a fully functional analog clock face and a digital time display, updated every second.

Real-Time Analog Hands: Hour, Minute, and Second hands move smoothly based on precise rotation calculations.

12-Hour Digital Format: Implements JavaScript logic to convert the 24-hour system into the standard 12-hour format, correctly handling AM/PM and the '12 o'clock' rule.

Zero Padding: Ensures minutes and seconds are always displayed with two digits (e.g., 09 instead of 9).

Day Display: Shows the current day of the week (Sun, Mon, etc.) next to the digital time.

Custom Aesthetics: The clock and container are styled with custom, glowing box-shadows and vibrant color variables (--clr, --h, --a) for the clock hands, creating an eye-catching design.

🛠️ Technologies Used

HTML5: Structure for the analog clock face and the digital display elements.

CSS3 (style.css): Extensive custom styling, using transform: rotate() for the hands and advanced box-shadows for a glowing effect.

JavaScript (ES6+) (script.js): Core logic for fetching system time, calculating hand rotations, and formatting the digital output (12-hour conversion and zero-padding).

🚀 Getting Started

This project is a static web application and requires no dependencies or build steps.

Prerequisites

You only need a modern web browser (Chrome, Firefox, Edge, etc.) to run the application.

Installation

Clone the repository:

git clone [https://github.com/codemorph18/Clock-app.git](https://github.com/codemorph18/Clock-app.git)


Navigate to the project directory:

cd Clock-app


Open the file:
Simply open the clock.html file in your web browser.

open clock.html


(Or double-click the file in your file explorer.)

🌐 Deployment (Live Demo)

Since this is a static site (.html, .css, .js), you can easily deploy it as a live web page using GitHub Pages:

Go to your repository settings on GitHub.

Click Pages in the left sidebar.

Under "Build and deployment," choose Deploy from a branch and select your primary branch (e.g., main or master) and the / (root) folder.

Save the changes. Your live clock will be available in a few minutes at a URL like https://codemorph18.github.io/Clock-app/.

⚙️ Core Logic Highlights

The core functionality resides in script.js within the displayTime() function, which runs every second using setInterval().

1. Analog Rotation Calculation

Hand rotations are calculated to ensure smooth, continuous movement, where the Hour hand also factors in the Minutes (mm):

Hour Rotation: 30 * (hh % 12) + mm / 2 (30 degrees per hour, plus 0.5 degrees per minute)

Minute Rotation: 6 * mm (6 degrees per minute)

Second Rotation: 6 * ss (6 degrees per second)

2. Digital 12-Hour Conversion

The script correctly converts the 24-hour time to the 12-hour format:

let ampm = hh >= 12 ? 'PM' : 'AM';
hh = hh % 12;      // 13 -> 1, 0 -> 0
hh = hh ? hh : 12; // Fixes 0 (midnight/noon) back to 12
hh = (hh < 10) ? "0" + hh : hh; // Zero padding


🖼️ File Structure

.
├── clock.html          # Main HTML structure with analog and digital placeholders
├── krinshna.png        # Background image file (as referenced in style.css)
├── script.js           # All JavaScript logic
└── style.css           # Styling for the clock face, hands, and digital display


🤝 Contribution

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

📄 License

This project is licensed under the MIT License. See the LICENSE.md file for details.

Built with precision and style by codemorph18
