# Ghaith Home 🏡

**Your Home, Your Style.**

Ghaith Home is a bilingual home goods catalog designed to help customers explore home essentials and discover products for their homes. The application provides an organized browsing experience with support for both Arabic and English.

## ✨ Features

- **Bilingual Interface:** Switch between Arabic and English.
- **Product Catalog:** Browse home goods and household essentials.
- **Category Navigation:** Explore products through organized categories and subcategories.
- **Product Details:** View product descriptions and images.
- **Product Image Gallery:** Display multiple images for supported products.
- **Availability Status:** Identify products that are currently available.
- **Bridal Checklist:** Organize and keep track of home essentials.
- **Admin Authentication:** Provide a separate login for authorized administrators.
- **Product Management:** Add and manage products through the admin dashboard.
- **Category Management:** Organize the catalog through product categories.
- **Cloud Database:** Store product and category information using Supabase.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Routing:** React Router
- **Backend Services:** Supabase
- **Database:** PostgreSQL through Supabase
- **Authentication:** Supabase Auth
- **Storage:** Supabase Storage
- **Styling:** CSS

## 🌐 Live Demo

[Visit Ghaith Home](https://bridal-home-8cvn.vercel.app/)

## 📂 GitHub Repository

[View Source Code](https://github.com/fatimabakri123/bridal-home)

## ⚙️ Installation

### Prerequisites

- Node.js
- npm
- A Supabase project

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/fatimabakri123/bridal-home.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bridal-home
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure your Supabase connection:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
   ```

   Use the environment variable names expected by your application's Supabase client configuration.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown in the terminal.

## 🔐 Security

- Keep private credentials and secret API keys out of the repository.
- Configure Supabase Row Level Security (RLS) policies for database access.
- Restrict administrative operations to authorized users.
- Never expose a Supabase service-role key in frontend code.

## 🎯 Project Goal

The goal of Ghaith Home is to create a simple and accessible digital catalog for home essentials, with bilingual navigation and tools to help customers organize their shopping needs.

## 👩‍💻 Author

**Fatima Ali Bakri**

- GitHub: [@fatimabakri123](https://github.com/fatimabakri123)

---

*Built with React, Vite, and Supabase.*
