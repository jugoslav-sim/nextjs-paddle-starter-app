# Clerk Authentication Setup

This project has been migrated from Supabase authentication to Clerk. Follow these steps to complete the setup:

## 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Keep existing Paddle and Supabase configuration
NEXT_PUBLIC_PADDLE_CLIENT_ID=your_paddle_client_id_here
PADDLE_SECRET_KEY=your_paddle_secret_key_here
PADDLE_WEBHOOK_SECRET=your_paddle_webhook_secret_here

# Database Configuration (if still using Supabase for data)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

## 2. Clerk Dashboard Setup

1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Get your publishable key and secret key from the Clerk dashboard
4. Configure your application settings:
   - Set the sign-in URL to `/login`
   - Set the sign-up URL to `/signup`
   - Set the after sign-in URL to `/dashboard`
   - Set the after sign-up URL to `/dashboard`

## 3. Features

The migration includes:

- ✅ Clerk authentication with email/password
- ✅ Social login support (GitHub, Google, etc.)
- ✅ Protected routes with middleware
- ✅ User session management
- ✅ Sign out functionality
- ✅ Responsive design matching the existing UI

## 4. What's Changed

- Replaced Supabase auth with Clerk
- Updated middleware to use Clerk's authMiddleware
- Replaced custom login/signup forms with Clerk components
- Updated user hooks and components to use Clerk
- Removed Supabase auth-specific files and utilities

## 5. Next Steps

1. Set up your Clerk application and get your keys
2. Update the environment variables
3. Test the authentication flow
4. Customize the Clerk components appearance if needed
5. Update any remaining Supabase database queries to work with Clerk user IDs
