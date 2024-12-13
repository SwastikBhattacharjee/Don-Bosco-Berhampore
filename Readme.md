# Don Bosco School Website 🌐

This repository contains the source code for the unofficial Don Bosco School website. The website is built using **React** and incorporates smooth scrolling functionality, responsive design, and modern animations to enhance the user experience.

## Features 🚀

- **Responsive Design**: Fully responsive layout, optimized for mobile and desktop views.
- **Smooth Scrolling**: Smooth scrolling behavior when navigating between sections.
- **Dynamic Navbar**: A fully functional, animated navbar with dropdown menus and mobile-specific features.
- **Data Fetching**: Data is dynamically fetched from external APIs and stored locally for better performance.
- **Marquee Sections**: Sections for **News**, **Achievements**, and **Birthdays** with scrolling animations.

## Technologies Used 💻

- **React**: The main JavaScript library used for building the user interface.
- **Tailwind CSS**: A utility-first CSS framework for styling and responsive design.
- **Framer Motion**: A library for animations, used to animate components and transitions.
- **Lucide Icons**: A set of customizable, high-quality icons.
- **React Scroll**: For implementing smooth scrolling navigation.
- **Local Storage**: To store data locally and reduce the need for repeated API requests.

## Installation ⚙️

### Prerequisites

Before starting, ensure that you have the following software installed:

- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (Node package manager, comes with Node.js)

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/SwastikBhattacharjee/don-bosco-berhampore.git
   ```

2. Navigate to the project directory:
   ```bash
   cd don-bosco-berhampore
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:<GIVEN PORT>` to view the website.

## Folder Structure 📝

Here’s a quick breakdown of the folder structure:

```
don-bosco-website/
│
├── index.html           # The main HTML file
│
├── src/                     # Source code for the React app
│   ├── components/          # React components (Navbar, Marquee, etc.)
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Entry point for the React app
│
├── .gitignore               # Specifies files to ignore in version control
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # Project documentation (this file)
```

## Key Features & Components 📚

### Navbar

The **Navbar** component is a responsive, animated navigation bar. It contains links that scroll to different sections of the page, and it includes dropdown menus for additional navigation items like **School** and **Login**.

- **Responsive**: The navbar is fully responsive, transitioning from a horizontal menu on desktop to a vertical, fullscreen menu on mobile.

### Marquee Sections

The website features three **Marquee Sections**:

- **News**: Displays the latest news items, with smooth scrolling animations.
- **Achievements**: Displays competition results, also with a smooth scrolling animation.
- **Birthdays**: Lists the birthdays of students and staff for the day.

The data for these sections is fetched dynamically from external APIs and stored in the browser's local storage to reduce load times.

### Smooth Scrolling

Implemented using **React Scroll**, smooth scrolling is enabled when users click on navbar links. Each link scrolls to a corresponding section of the page, such as "Home," "About," or "Gallery," with a smooth animation.

### Animations

- The **Framer Motion** library is used to add smooth animations to various components, including the mobile navbar and the marquee sections.
- The navbar opens and closes with a sliding animation, providing a smooth user experience.

## Configuration 🌟

### Tailwind CSS Configuration

This project uses **Tailwind CSS** for styling. Tailwind is configured in the `tailwind.config.js` file. Custom colors, spacing, and animations are defined for the navbar, background, and various sections.

To modify the design, you can adjust the configuration in the `tailwind.config.js` file, which provides options for customizing colors, fonts, and breakpoints.

### Local Storage

Data such as **News**, **Achievements**, and **Birthdays** is fetched from an external API and stored in **local storage**. This improves performance by caching the data and reducing the number of API calls.

## Customization 🌟

You can easily customize this project for your own website by:

1. Updating the **content** in the components like **MarqueeSection** and **Navbar**.
2. Modifying the **API endpoints** for fetching dynamic data.
3. Adjusting the **styling** by editing the Tailwind CSS classes in the components.

## Contributing 🤝

Contributions are welcome! If you want to contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your forked repository (`git push origin feature-name`).
6. Create a pull request with a detailed description of your changes.

## License 📄

This project is open source and available under the [MIT License](LICENSE).
