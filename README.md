# Next.js SaaS Starter Kit 🚀
<!--
![Next.js SaaS Starter Kit](public/images/hero.jpg) -->

Welcome to the **Next.js SaaS Starter Kit**! This starter kit is designed to accelerate your SaaS (Software as a Service) application development by providing a robust foundation with essential features out of the box. Whether you're a developer, startup, or tech leader, this starter kit will help you build scalable, secure, and efficient SaaS applications with ease.

## 📦 Features

Our starter kit comes packed with a suite of powerful features:

- **Next.js**: A React framework for production.
- **App Router**: Streamlined routing with Next.js App Router.
- **NextAuth.js**: Secure authentication and authorization.
- **TypeScript**: Type safety for scalable codebases.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **ESLint**: Code linting for consistent code quality.
- **Turbopack**: Next-generation bundler for faster builds.
- **PostgreSQL**: Reliable and powerful relational database.
- **Prisma**: Modern ORM for database interactions.
- **Stripe**: Seamless payment processing and subscription management.
- **NodeMailer**: Email sending capabilities for notifications and confirmations.
- **Lottie Animations**: Engaging SVG animations to enhance UI.
- **Responsive Design**: Mobile-first approach ensuring compatibility across devices.
- **SEO Optimization**: Built-in SEO best practices for better visibility.

## 🛠 Getting Started

Follow these instructions to set up and run the project locally.

### 🚀 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v16 or higher
- **npm** or **yarn** or **pnpm**: Package managers
- **PostgreSQL**: Database system
- **Stripe Account**: For payment processing
- **Email Service Account**: (e.g., SendGrid, Mailgun) for sending emails

### 📝 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/nextjs-saas-starter.git
   cd nextjs-saas-starter

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install

3. **Configure Environment Variables**

    Create a .env file in the root directory based on the .env.example file.
    ```bash
    cp .env.example .env
    ```
    Open .env and fill in your configuration details:
    ```code

      # Database Configuration
      DATABASE_URL="postgresql://username:password@localhost:5432/nextjs_saas?schema=public"

      # NextAuth Configuration
      NEXTAUTH_URL=http://localhost:3000
      NEXTAUTH_SECRET=your_nextauth_secret

      # Stripe Configuration
      STRIPE_SECRET_KEY=your_stripe_secret_key
      STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

      # Email Configuration
      MAIL_HOST=smtp.mailgun.org
      MAIL_PORT=587
      MAIL_USERNAME=your_mailgun_username
      MAIL_PASSWORD=your_mailgun_password
      MAIL_ENCRYPTION=tls
      MAIL_FROM_ADDRESS=example@example.com
      MAIL_FROM_NAME="Next.js SaaS Starter"

      # Additional Configurations (if any)
      ```

  4. **Initialize Prisma and Migrate Database**
      ```bash
      npx prisma migrate dev --name init
      npx prisma generate

  5. **Run the Development Server**
      ```bash
      npm run dev
      # or
      yarn dev
      # or
      pnpm dev
  6. **Access the Application**

      Open http://localhost:3000 in your browser to see the result.

      You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

## 🖥 Project Structure
Here's an overview of the project's directory structure:
```bash
/nextjs-saas-starter
├── /app
│   ├── /api
│   │   ├── /auth
│   │   │   └── [...nextauth].ts      # NextAuth.js API routes
│   │   └── /subscriptions
│   │       └── route.ts              # Subscription-related API routes
│   ├── /auth
│   │   ├── /login
│   │   │   └── page.tsx              # Login page
│   │   └── /register
│   │       └── page.tsx              # Registration page
│   ├── /dashboard
│   │   └── page.tsx                  # User dashboard
│   ├── /admin
│   │   └── page.tsx                  # Admin dashboard
│   ├── layout.tsx
│   └── page.tsx                      # Landing page
├── /components
│   ├── /layout
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── /ui
│       ├── Button.tsx
│       ├── FeatureCard.tsx
│       ├── StatisticCard.tsx
│       ├── TestimonialCard.tsx
│       ├── AnimatedSection.tsx       # Lottie Animation Section
│       └── PureSVGAnimatedSection.tsx# Pure SVG Animation Section
├── /lib
│   ├── prisma.ts                      # Prisma client setup
│   ├── stripe.ts                      # Stripe client setup
│   └── mails
│       └── SubscriptionConfirmation.ts # Email sending logic
├── /prisma
│   └── schema.prisma                  # Prisma schema
├── /public
│   ├── /animations
│   │   └── feature-animation.json      # Lottie Animation JSON
│   └── /images
│       ├── hero.jpg
│       ├── feature1.svg
│       ├── feature2.svg
│       ├── feature3.svg
│       ├── feature4.svg
│       ├── feature5.svg
│       ├── feature6.svg
│       ├── feature7.svg
│       ├── feature8.svg
│       ├── statistic.svg
│       ├── testimonial1.jpg
│       ├── testimonial2.jpg
│       └── animated-feature.svg        # Pure SVG Animation
├── /styles
│   └── globals.css                    # Global CSS with Tailwind directives
├── /tests
│   └── ...                            # Testing files
├── .env.example
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```
## 🛠 Configuration Details
### 📦 Prisma ORM
Prisma is used for database interactions. The schema is defined in prisma/schema.prisma. Ensure that the DATABASE_URL in your .env file is correctly set to connect to your PostgreSQL database.

### 🔐 Authentication with NextAuth.js
NextAuth.js manages user authentication. Supported providers can be configured in app/api/auth/[...nextauth].ts. By default, it includes credential-based authentication, but you can add OAuth providers as needed.

### 💳 Payment Processing with Stripe
Stripe is integrated for handling payments and subscriptions. Configure your Stripe API keys in the .env file. The Stripe client is set up in lib/stripe.ts.

### 📧 Email Notifications with NodeMailer
NodeMailer is used to send transactional emails, such as subscription confirmations. Configure your email service credentials in the .env file. The email sending logic is encapsulated in lib/mails/SubscriptionConfirmation.ts.

### 🎨 Styling with Tailwind CSS
Tailwind CSS is employed for styling, allowing for rapid and responsive UI development. Customize your Tailwind configuration in tailwind.config.js to match your branding and design preferences.

### 🧪 Testing
The project is set up with Jest and React Testing Library for unit and integration testing. Sample tests are located in the /tests directory. To run tests:

```bash
npm run test
# or
yarn test
# or
pnpm test
```

## 🚀 Deployment
### 🐳 Docker Deployment
A Dockerfile and docker-compose.yml are provided for containerizing the application.

1. **Build and Run Containers**
    ```bash
    docker-compose up --build
    ```
2. **Access the Application**

    Visit http://localhost:3000 to see the application running inside Docker containers.
3. 🛡 **Kubernetes Deployment**

    For scalable deployments, Kubernetes manifests can be created based on the Docker setup. This allows for orchestrating containers in a production environment.

4. 🌐 **Deploy to Vercel**

    Vercel is a great platform for deploying Next.js applications.
    1. Push to GitHub

        Ensure your project is pushed to a GitHub repository.
        ```bash
          git init
          git add .
          git commit -m "Initial commit"
          git remote add origin https://github.com/yourusername/nextjs-saas-starter.git
          git push -u origin main
        ```
    2. Connect to Vercel
       - Sign in to Vercel and import your GitHub repository.
        - Configure environment variables in Vercel based on your .env file.
        - Deploy the application directly from Vercel's dashboard.

  ## 🛠 Development Tools
  - ESLint: Ensures code quality and consistency.
  - Prettier: Code formatter for maintaining a uniform code style.
  - Turbopack: Next-generation bundler for improved build performance.

## 📚 Documentation
- Next.js Documentation: https://nextjs.org/docs
- NextAuth.js Documentation: https://next-auth.js.org/getting-started/introduction
- Prisma Documentation: https://www.prisma.io/docs
- Stripe Documentation: https://stripe.com/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- NodeMailer Documentation: https://nodemailer.com/about/
- React Documentation: https://react.dev/
- Typescript Documentation: https://www.typescriptlang.org/
- MDN Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the Repository
2. Create a New Branch
    ```bash
    git checkout -b feature/YourFeatureName
    ```
3. Make Your Changes
4. Commit Your Changes
    ```bash
    git commit -m "Add some feature"
    ```
5. Push to the Branch
    ```bash
    git push origin feature/YourFeatureName
    ```
6. Open a Pull Request

    Please ensure your contributions adhere to the project's code of conduct and follow best practices.

## 📝 License
This project is licensed under the MIT License.

## 📬 Contact
For any inquiries or support, please contact binny@duskbyte.com.


## 🎉 Thank You!
Thank you for choosing the Next.js SaaS Starter Kit! We hope this starter kit helps you build amazing SaaS applications efficiently and effectively. If you have any feedback or suggestions, feel free to open an issue or contribute to the project.

Happy Coding! 🚀

## 📸 Screenshots

Include screenshots of your application here to give users a visual overview of what to expect.
