
# 🚀 Greeting App

A simple greeting application built with Next.js 15.1, Shadcn UI, and TypeScript. The app allows users to enter their name and receive a personalized greeting using Next.js Server Actions.




## 📌 Features

✅ **Server Actions** – Processes user input and returns a greeting asynchronously.

✅ **Shadcn UI Components** – Styled components like `Input`, `Button`, `Card`, and `Accordion`.

✅ **Next.js 15.1 Features** – Uses the App Router, Client & Server Components, and TypeScript.

## 📂 Project Structure

* **`app/actions.ts`**: This file contains the server action responsible for handling user input from the form. It processes the data and generates the personalized greeting.
* **`app/layout.tsx`**: The root layout of the application. It sets up the overall structure and includes the theme provider for Shadcn UI.
* **`app/page.tsx`**: The main page of the application. It features an input form for users to enter their name and displays the generated greeting.
* **`components/`**: This directory houses reusable UI components built using Shadcn UI, ensuring a consistent and polished user interface.
* **`public/`**: Stores static assets such as images or icons.
* **`styles/`**: Contains global CSS styles for the application.
* **`package.json`**: Manages project dependencies and defines npm scripts.
* **`README.md`**: Provides documentation for the project, including setup instructions and usage guidelines.
## 🛠️ Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone [https://github.com/your-username/greeting-app.git](https://www.google.com/search?q=https://github.com/your-username/greeting-app.git)
    cd greeting-app
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Run the development server:**

    ```sh
    npm run dev
    ```

4.  **Open the app in your browser:**

    ```
    http://localhost:3000
    ```