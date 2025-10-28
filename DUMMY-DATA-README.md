# Dummy Data Mode

This application is currently running with **dummy data** instead of a live Supabase connection.

## What's Been Set Up

### 1. Dummy Supabase Credentials (`lib/supabase.ts`)
- Added fallback dummy credentials so the app doesn't crash
- URL: `https://dummy-project.supabase.co`
- Key: Mock JWT token

### 2. Dummy Data File (`lib/dummy-data.ts`)
Contains sample data for:
- **Properties** (6 luxury properties in Dubai)
- **Yachts** (3 luxury yachts)
- **Supercars** (4 exotic cars)

All data includes:
- Placeholder images from Unsplash
- Realistic prices in AED
- Proper property details (bedrooms, bathrooms, sqft, etc.)

### 3. Updated Components

#### Homepage (`app/page.tsx`)
- Now uses `dummyProperties` instead of fetching from Supabase
- Displays 6 featured properties with images

#### API Routes
- **`/api/crypto-prices`**: Returns dummy crypto prices (BTC, ETH, USDT in AED)
  - Still tries to fetch from CoinGecko API when available
  - Falls back to dummy prices if API fails
  
- **`/api/leads`**: Logs lead submissions to console
  - Validates input
  - Returns mock success response
  - Doesn't save to database

## Running the App

```bash
npm run dev
```

The app should now start without the Supabase error!

## When Ready to Connect Supabase

### Steps to switch from dummy data to real Supabase:

1. **Set up your Supabase project** at https://supabase.com

2. **Update environment variables**:
   Create `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_actual_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
   ```

3. **Create database tables** using the schema in `types/database.ts`:
   - `properties`
   - `yachts`
   - `supercars`
   - `leads`
   - `crypto_prices`

4. **Update the code**:
   - `app/page.tsx`: Replace `dummyProperties` import with Supabase query
   - `app/api/crypto-prices/route.ts`: Uncomment Supabase caching logic
   - `app/api/leads/route.ts`: Replace console.log with actual Supabase insert

5. **Populate with real data**:
   - Import your actual property listings
   - Add real yacht and supercar inventory
   - Upload proper images to Supabase Storage

## Image Placeholders

Currently using Unsplash images. For production:
- Upload images to Supabase Storage
- Update image URLs in database
- Or use your preferred CDN

## Notes

- All prices are in AED (United Arab Emirates Dirham)
- Crypto calculations use approximate exchange rates
- WhatsApp booking numbers are placeholders (+971501234567)
