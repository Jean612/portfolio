# Jean Chavez - Full Stack Developer Portfolio

A modern, responsive portfolio website built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com). This project showcases my professional experience, skills, and projects as a Full Stack Developer.

## 🚀 Features

-   **Responsive Design:** Fully adaptable layout for mobile, tablet, and desktop devices.
-   **Interactive UI:** Smooth animations and transitions using [Framer Motion](https://www.framer.com/motion/).
-   **Modern Styling:** Clean and consistent styling with Tailwind CSS.
-   **Component-Based:** Modular structure using React components for scalability.
-   **TypeScript:** Strong typing for better code quality and maintainability.

## 🛠 Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org) (App Router)
-   **Library:** [React 19](https://react.dev)
-   **Language:** [TypeScript](https://www.typescriptlang.org)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev)
-   **Utilities:** `clsx`, `tailwind-merge`

## 📂 Project Structure

```
.
├── app/                # Next.js App Router pages and layout
│   ├── layout.tsx      # Root layout with font and metadata configuration
│   ├── page.tsx        # Main landing page assembling all sections
│   └── globals.css     # Global CSS styles and Tailwind directives
├── components/         # Reusable React components for each section
│   ├── Navbar.tsx      # Navigation bar with mobile menu
│   ├── Hero.tsx        # Introductory section with animations
│   ├── About.tsx       # About Me section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Skills.tsx      # Technical skills visualization
│   ├── Projects.tsx    # Showcase of projects
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer with copyright info
├── lib/                # Utility functions
│   └── utils.ts        # Helper for class name merging
└── public/             # Static assets (images, icons)
```

## ⚡ Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) (v18 or higher) installed.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Jean612/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  **Open your browser:**

    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs ESLint to check for code quality issues.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
