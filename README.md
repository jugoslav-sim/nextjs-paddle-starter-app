# Next.js SaaS Template with Clerk Authentication

A modern SaaS template built with Next.js 15, featuring Clerk authentication, Paddle billing, and a beautiful UI.

## Features

- 🔐 **Clerk Authentication** - Modern authentication with email/password and social logins
- 💳 **Paddle Billing** - Integrated payment processing and subscription management
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS and shadcn/ui components
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🚀 **Next.js 15** - Built with the latest Next.js features
- 🔒 **Protected Routes** - Middleware-based route protection
- 📊 **Dashboard** - User dashboard with subscription management
- 🌐 **International** - Support for multiple currencies and countries

## Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nextjs-saas-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with the following variables:

   ```bash
   # Clerk Configuration
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   CLERK_SECRET_KEY=your_clerk_secret_key_here

   # Clerk URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Paddle Configuration
   NEXT_PUBLIC_PADDLE_CLIENT_ID=your_paddle_client_id_here
   PADDLE_SECRET_KEY=your_paddle_secret_key_here
   PADDLE_WEBHOOK_SECRET=your_paddle_webhook_secret_here

   # Database Configuration (if using Supabase for data)
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
   ```

4. **Set up Clerk**
   - Go to [clerk.com](https://clerk.com) and create an account
   - Create a new application
   - Get your publishable key and secret key
   - Configure your application settings in the Clerk dashboard

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Authentication

This template uses **Clerk** for authentication, which provides:

- Email/password authentication
- Social login support (GitHub, Google, etc.)
- User session management
- Protected routes with middleware
- Beautiful pre-built components

### Authentication Flow

1. Users can sign up or log in at `/login` and `/signup`
2. After authentication, users are redirected to `/dashboard`
3. Protected routes are automatically handled by Clerk middleware
4. User sessions are managed securely by Clerk

## Billing & Subscriptions

The template integrates with **Paddle** for payment processing:

- Multiple pricing tiers
- Subscription management
- Payment history
- Webhook handling for payment events

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Protected dashboard routes
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   └── checkout/         # Paddle checkout pages
├── components/           # React components
│   ├── authentication/   # Clerk auth components
│   ├── dashboard/        # Dashboard components
│   ├── home/            # Landing page components
│   └── ui/              # shadcn/ui components
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── styles/              # CSS styles
└── utils/               # Utility functions
```

## Customization

### Styling

The template uses Tailwind CSS with a custom design system. You can customize colors, fonts, and components in the `tailwind.config.js` file.

### Authentication

Clerk components can be customized using the `appearance` prop. See the login and signup pages for examples.

### Billing

Paddle configuration can be modified in the `src/utils/paddle/` directory.

## Deployment

The template is ready for deployment on Vercel, Netlify, or any other platform that supports Next.js.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
