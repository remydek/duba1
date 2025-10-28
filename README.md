# DUBA1.com - Dubai Crypto Real Estate Platform

A luxury Dubai real estate, yacht, and supercar aggregator with crypto payment focus. Built with Next.js 14, Supabase, and Tailwind CSS.

## 🚀 Features

- **Property Listings**: Browse luxury villas, apartments, penthouses, and townhouses
- **Yacht Rentals**: Premium yacht charter services
- **Supercar Rentals**: Exotic car rentals
- **Crypto Calculator**: Real-time BTC/ETH/USDT to AED conversions
- **Crypto Payments**: Accept Bitcoin, Ethereum, and USDT
- **Golden Visa Eligible**: Properties marked for UAE Golden Visa
- **Live Crypto Prices**: Real-time price conversions using CoinGecko API
- **WhatsApp Integration**: Direct WhatsApp booking and inquiries
- **Lead Management**: Capture and store leads in Supabase
- **Dark Theme**: Luxury brown/gold accent design (#8D5628, #D4AF37)
- **Mobile-First**: Fully responsive design

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier works)
- Git

## 🏗️ Setup Instructions

### 1. Clone the Repository

```bash
cd /Users/billionaire/Documents/GitHub/duba1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

#### Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details
4. Wait for project to be ready (~2 minutes)

#### Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the contents of `supabase-schema.sql` (470 lines)
4. Paste and click "Run"
5. Verify success: You should see "10 properties, 5 yachts, 5 supercars, 3 crypto prices"

### 4. Environment Variables

Create `.env.local` in the project root:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values:

```env
# Get these from Supabase Dashboard > Project Settings > API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Your WhatsApp number with country code
NEXT_PUBLIC_WHATSAPP_NUMBER=+971501234567

# Optional: CoinGecko API (free tier works without key)
COINGECKO_API_KEY=
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
duba1/
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles with dark theme
│   ├── properties/             # Properties pages (TODO)
│   ├── yachts/                 # Yachts page (TODO)
│   ├── supercars/              # Supercars page (TODO)
│   ├── calculator/             # Crypto calculator (TODO)
│   └── api/
│       ├── crypto-prices/      # Fetch crypto prices
│       └── leads/              # Submit lead forms
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── Navbar.tsx              # Navigation bar
│   └── Footer.tsx              # Footer
├── lib/
│   ├── supabase.ts             # Supabase client
│   ├── crypto.ts               # Crypto utilities
│   └── utils.ts                # General utilities
├── types/
│   └── database.ts             # TypeScript types
├── supabase-schema.sql         # Database schema & seed data
└── .env.local.example          # Environment variables template
```

## 🎨 Design System

### Colors

- **Primary (Gold)**: `#D4AF37` (rgb: 212, 175, 55)
- **Secondary (Brown)**: `#8D5628` (rgb: 141, 86, 40)
- **Background**: `#0f0f0f` (dark)
- **Card**: `#141414`
- **Border**: `#282828`

### Typography

- Font: Geist Sans (default)
- Headings: Bold, with gradient effects
- Body: Regular weight

## 🔑 Key Features Implementation

### Homepage
- ✅ Hero section with crypto badge
- ✅ Quick crypto calculator widget
- ✅ Search bar with location input
- ✅ Featured properties grid (6 cards)
- ✅ Quick links to Properties/Yachts/Supercars

### API Routes
- ✅ `/api/crypto-prices` - Fetches BTC/ETH/USDT prices from CoinGecko
- ✅ `/api/leads` - Saves lead submissions to Supabase

### Database
- ✅ Properties table with 10 sample listings
- ✅ Yachts table with 5 sample rentals
- ✅ Supercars table with 5 sample cars
- ✅ Crypto prices cache table
- ✅ Leads table for inquiry management

## 📱 Pages to Complete

The following pages need to be created (see todos):

1. **Properties Listing** (`/app/properties/page.tsx`)
   - Grid view with filters
   - Crypto price conversions
   - Filter by type, price, beds, crypto verified, golden visa

2. **Property Detail** (`/app/properties/[id]/page.tsx`)
   - Image carousel
   - Full specs and amenities
   - Cost breakdown calculator
   - Location map
   - Viewing form with WhatsApp CTA

3. **Yachts** (`/app/yachts/page.tsx`)
   - Grid of yacht cards
   - WhatsApp booking integration

4. **Supercars** (`/app/supercars/page.tsx`)
   - Grid of car cards
   - Specs display
   - WhatsApp booking

5. **Calculator** (`/app/calculator/page.tsx`)
   - Input crypto amount
   - Show AED equivalent
   - Display matching properties in budget

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Add environment variables from `.env.local`
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to Settings > Domains
2. Add `duba1.com`
3. Update DNS records as instructed

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## 📊 Database Management

### Access Supabase Database

- **Dashboard**: Your project dashboard on supabase.com
- **SQL Editor**: Run custom queries
- **Table Editor**: View and edit data visually
- **API Docs**: Auto-generated API documentation

### Update Crypto Prices

Prices auto-update every 5 minutes via the `/api/crypto-prices` endpoint. Manual update:

```sql
UPDATE crypto_prices SET price_aed = 250000, updated_at = NOW() WHERE currency = 'BTC';
UPDATE crypto_prices SET price_aed = 9000, updated_at = NOW() WHERE currency = 'ETH';
UPDATE crypto_prices SET price_aed = 3.67, updated_at = NOW() WHERE currency = 'USDT';
```

## 🤝 WhatsApp Integration

The platform uses WhatsApp deep links:

```
whatsapp://send?phone=+971XXXXXXXXX&text=Hi, I'm interested in [Property Name]
```

Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` to your number.

## 🔐 Security Notes

- **Supabase Anon Key**: Safe to expose (Row Level Security should be enabled)
- **Service Role Key**: Keep secret, never expose client-side
- **API Routes**: Use Service Role Key only in API routes, never client components

## 📈 Future Enhancements

- [ ] User authentication (for property owners/agents)
- [ ] Property comparison feature
- [ ] Saved favorites/watchlist
- [ ] Email notifications for leads
- [ ] Property virtual tours
- [ ] Multi-currency support beyond crypto
- [ ] Advanced search with map view
- [ ] Mortgage calculator
- [ ] Property owner dashboard
- [ ] Blog/News section

## 🐛 Troubleshooting

### Supabase Connection Issues
- Verify `.env.local` has correct values
- Check Supabase project is not paused (free tier pauses after 1 week inactivity)
- Ensure RLS policies allow anonymous reads

### Crypto Prices Not Loading
- Check CoinGecko API is accessible
- Fallback prices (BTC: 250k, ETH: 9k, USDT: 3.67 AED) will be used if API fails

### Images Not Displaying
- Verify Unsplash URLs are accessible
- Consider uploading images to Supabase Storage for production

## 📄 License

MIT License - feel free to use for your own projects

## 🙋 Support

For issues or questions:
- Check the code comments
- Review Supabase documentation
- Consult Next.js 14 docs

---

**Built with ❤️ for Dubai's crypto community**
