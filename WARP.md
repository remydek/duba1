# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

**DUBA1** is a luxury Dubai real estate, yacht, and supercar aggregator with crypto payment integration. Built with Next.js 14 (App Router), Supabase, TypeScript, and Tailwind CSS. The platform enables users to browse and purchase properties, rent yachts, and supercars using Bitcoin, Ethereum, or USDT.

**Current Status:** Operating in dummy data mode with fallback patterns. No live Supabase connection required for development.

**Tech Stack:** Next.js 14 with App Router • TypeScript • Supabase • Tailwind CSS • shadcn/ui • CoinGecko API

---

## Essential Development Commands

### Setup & Development
```bash
# Install dependencies
npm install

# Run development server (with Turbopack)
npm run dev
# Opens at http://localhost:3000

# Build for production (with Turbopack)
npm run build

# Start production server
npm start
```

### Code Quality
```bash
# Run ESLint
npm run lint
# Or directly:
eslint .

# Type check without emitting files
npx tsc --noEmit
```

### Database Setup (When Supabase Configured)
```bash
# Run schema in Supabase SQL Editor or via psql:
psql -h your-project.supabase.co -U postgres -d postgres -f supabase-schema.sql

# Schema creates:
# - properties (10 sample listings)
# - yachts (5 sample rentals)
# - supercars (5 sample cars)
# - leads (inquiry management)
# - crypto_prices (price cache)
```

---

## High-Level Architecture

### Next.js 14 App Router Structure

```
app/
├── layout.tsx              # Root layout with Navbar + Footer
├── page.tsx                # Homepage (server component)
├── globals.css             # Global styles + Tailwind
└── api/
    ├── crypto-prices/      # Fetches BTC/ETH/USDT prices from CoinGecko
    │   └── route.ts
    └── leads/              # Handles form submissions
        └── route.ts
```

- **Server Components by Default:** All components are server components unless marked with `'use client'`
- **API Routes:** Located in `app/api/`, export GET/POST/etc handlers with NextResponse
- **File-Based Routing:** Each folder in `app/` becomes a route segment

### Supabase Integration Pattern

**Current Mode:** Dummy data with graceful degradation

The app operates without a live Supabase connection by design:
- `lib/supabase.ts` creates client with dummy credentials if env vars missing
- Components use `lib/dummy-data.ts` for development data
- When configured, replace imports with actual Supabase queries

**Supabase Connection Flow:**
```typescript
// lib/supabase.ts provides client
import { supabase } from '@/lib/supabase'

// Query pattern (works with dummy or real data)
const { data, error } = await supabase.from('properties').select('*')
```

**Environment Variables Required:**
- `NEXT_PUBLIC_SUPABASE_URL` - Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Anonymous key (safe for client)
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (server-only, use in API routes)

### Database Schema

**Tables:** 5 core tables defined in `supabase-schema.sql`

1. **properties** - Real estate listings with crypto_verified, golden_visa_eligible flags
2. **yachts** - Luxury yacht rentals with daily pricing
3. **supercars** - Exotic car rentals with specs JSON
4. **leads** - Form submissions with interest types and budget
5. **crypto_prices** - Cached BTC/ETH/USDT prices in AED

**Type Safety:** `types/database.ts` mirrors schema structure:
```typescript
import type { Property, Yacht, Supercar, Lead } from '@/types/database'
```

### Crypto Price Conversion Flow

**Data Flow:**
```
CoinGecko API
    ↓
/api/crypto-prices (5-min cache)
    ↓
lib/crypto.ts utilities
    ↓
Components display conversions
```

**Key Files:**
- `app/api/crypto-prices/route.ts` - Fetches from CoinGecko, returns prices object
- `lib/crypto.ts` - Conversion functions: `convertAEDtoCrypto()`, `convertCryptoToAED()`
- Components call `/api/crypto-prices` then use lib functions for display

**Fallback Prices:** If CoinGecko fails, uses:
- BTC: 250,000 AED
- ETH: 9,000 AED  
- USDT: 3.67 AED

### Component Architecture

```
components/
├── ui/                    # shadcn/ui primitives (Button, Card, Input, etc.)
├── Navbar.tsx             # Client component with mobile menu
└── Footer.tsx             # Client component with social links
```

**Server vs Client Components:**
- **Server (default):** Data fetching, static rendering, async functions
- **Client (`'use client'`):** Interactivity, useState, useEffect, event handlers

**Navbar/Footer Integration:**
- Both imported in `app/layout.tsx` root layout
- Navbar: Sticky header with hamburger menu for mobile
- Footer: 4-column layout with property types, services, contact info

---

## Key Development Patterns

### Crypto Conversions

```typescript
import { formatAED, formatCrypto, convertAEDtoCrypto } from '@/lib/crypto'

// Format currency
const formatted = formatAED(3500000)  // "AED 3,500,000"

// Convert AED to crypto
const prices = { BTC: 250000, ETH: 9000, USDT: 3.67 }
const crypto = convertAEDtoCrypto(3500000, prices)
// Returns { BTC: 14, ETH: 388.89, USDT: 953678.88 }

// Format crypto amounts
const btcFormatted = formatCrypto(crypto.BTC, 2)  // "14.00"
```

### Fetching Crypto Prices

**In Server Components:**
```typescript
async function PriceDisplay() {
  const res = await fetch('http://localhost:3000/api/crypto-prices', {
    cache: 'no-store'
  })
  const { prices } = await res.json()
  return <div>{prices.BTC}</div>
}
```

**In Client Components:**
```typescript
'use client'
import { useEffect, useState } from 'react'

export function PriceWidget() {
  const [prices, setPrices] = useState(null)
  
  useEffect(() => {
    fetch('/api/crypto-prices')
      .then(r => r.json())
      .then(data => setPrices(data.prices))
  }, [])
  
  return prices ? <div>{prices.BTC} AED</div> : <div>Loading...</div>
}
```

### Supabase Client Usage

**Currently (Dummy Mode):**
```typescript
import { dummyProperties } from '@/lib/dummy-data'

async function getProperties() {
  return dummyProperties  // Returns mock data
}
```

**When Supabase Configured:**
```typescript
import { supabase } from '@/lib/supabase'
import type { Property } from '@/types/database'

async function getProperties(): Promise<Property[]> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('status', 'available')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}
```

### API Route Pattern

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation
    if (!body.required_field) {
      return NextResponse.json(
        { error: 'Field required' },
        { status: 400 }
      )
    }
    
    // Process data
    const result = await processData(body)
    
    return NextResponse.json(
      { success: true, data: result },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Mark as dynamic to prevent static optimization
export const dynamic = 'force-dynamic'
```

### Image Handling with Next.js Image

```typescript
import Image from 'next/image'

// With fill (requires parent with position: relative)
<div className="relative h-64">
  <Image
    src={property.images[0]}
    alt={property.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>

// With explicit dimensions
<Image
  src="/logo.png"
  alt="Logo"
  width={200}
  height={100}
  priority  // For above-the-fold images
/>
```

### Path Aliasing

TypeScript configured with `@/` alias pointing to repository root:

```typescript
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { formatAED } from '@/lib/crypto'
import type { Property } from '@/types/database'
```

---

## Environment Setup

### Required Environment Variables

Create `.env.local` from template:

```bash
cp .env.local.example .env.local
```

**Configuration:**

```env
# Supabase (optional - app runs in dummy mode without these)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key  # Server-only

# WhatsApp Contact Number
NEXT_PUBLIC_WHATSAPP_NUMBER=+971501234567

# CoinGecko API (optional - free tier works without key)
COINGECKO_API_KEY=
```

### Running Without Supabase

The app is designed to work without Supabase:

1. **Homepage displays dummy properties** from `lib/dummy-data.ts`
2. **API routes return mock data** with console logs for leads
3. **Crypto prices fetch from CoinGecko** or fallback to hardcoded values
4. **No database errors** - graceful degradation throughout

See `DUMMY-DATA-README.md` for full details on dummy data mode.

### Setting Up Real Supabase Connection

**Steps:**

1. **Create Supabase Project** at [supabase.com](https://supabase.com)

2. **Run Database Schema:**
   - Go to Supabase Dashboard → SQL Editor
   - Copy contents of `supabase-schema.sql` (entire file)
   - Paste and run
   - Verify: Should see 10 properties, 5 yachts, 5 supercars, 3 crypto prices

3. **Get API Credentials:**
   - Dashboard → Project Settings → API
   - Copy `URL` and `anon` key
   - Copy `service_role` key (keep secret!)

4. **Update `.env.local`:**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
   ```

5. **Replace Dummy Data Imports:**
   - In `app/page.tsx`, replace `dummyProperties` with Supabase query
   - In API routes, replace console.logs with actual inserts

---

## Design System

### Color Palette

**Luxury Dark Theme:**
- Primary Gold: `#D4AF37` (212, 175, 55)
- Secondary Brown: `#8D5628` (141, 86, 40)
- Background: `#0f0f0f` (near black)
- Card: `#141414`
- Border: `#282828`

**Tailwind Usage:**
```tsx
className="bg-primary text-primary-foreground"      // Gold background
className="border-primary hover:bg-primary/10"      // Gold border with hover
className="text-secondary"                          // Brown text
className="bg-gradient-to-r from-primary to-secondary"  // Gradient
```

### Typography

**Font:** Geist Sans (loaded via `next/font/google`)
- Applied at root in `app/layout.tsx`
- Fallback: Geist Mono for code

**Heading Pattern:**
```tsx
<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
  Luxury Title
</h1>
```

### Responsive Design

**Mobile-First Approach:**
- Base styles are for mobile
- Use breakpoints for larger screens: `sm:`, `md:`, `lg:`, `xl:`
- Test at 375px (mobile), 768px (tablet), 1280px (desktop)

**Common Patterns:**
```tsx
className="flex-col sm:flex-row"           // Stack on mobile, row on tablet+
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  // Responsive grid
className="hidden md:flex"                 // Hide on mobile
className="md:hidden"                      // Show only on mobile
```

### Component Library

**shadcn/ui Components:**
Located in `components/ui/`, installed components:
- `button` - Primary/secondary/outline variants
- `card` - Card, CardContent, CardHeader wrappers
- `badge` - Crypto Verified, Golden Visa badges
- `input` - Form inputs
- `select` - Dropdown menus
- `dialog` - Modals
- `carousel` - Image galleries (using embla-carousel-react)

**Customization:** Components use CSS variables from `app/globals.css` that reference the gold/brown theme.

**Adding New Components:**
```bash
npx shadcn@latest add [component-name]
```

---

## Current State & Roadmap

### What's Complete

✅ **MVP Foundation:**
- Homepage with hero, search bar, quick calculator widget
- Featured properties grid with crypto conversions
- Navbar with mobile hamburger menu
- Footer with links and social media

✅ **Core Infrastructure:**
- Next.js 14 App Router setup with TypeScript
- Supabase schema with 470 lines of seed data
- API endpoints: `/api/crypto-prices`, `/api/leads`
- Crypto conversion utilities
- Type-safe database definitions

✅ **Dummy Data Mode:**
- 6 properties, 3 yachts, 4 supercars in `lib/dummy-data.ts`
- Graceful degradation without Supabase
- Console logging for lead submissions

✅ **Design System:**
- Dark luxury theme (#D4AF37, #8D5628)
- shadcn/ui component library
- Mobile-responsive layouts

### What's TODO (See PROJECT_SUMMARY.md)

🚧 **High Priority:**
- Properties listing page (`/app/properties/page.tsx`) with filters
- Property detail page (`/app/properties/[id]/page.tsx`) with image carousel
- Crypto calculator page (`/app/calculator/page.tsx`)

🚧 **Medium Priority:**
- Yachts listing page
- Supercars listing page
- WhatsApp booking integration
- Lead form component

🚧 **Future Enhancements:**
- User authentication
- Property comparison
- Virtual tours
- Email notifications

### Running Status

**Development Mode:** Fully operational without external dependencies
- No Supabase required (dummy data mode)
- CoinGecko API optional (falls back to hardcoded prices)
- WhatsApp links functional with placeholder number

**Production Readiness:** Requires Supabase configuration and environment variables

---

## Architecture Insights (Multi-File Context)

### Understanding Crypto Price Flow

**Full Stack Journey:**

1. **API Route (`app/api/crypto-prices/route.ts`):**
   - Fetches from CoinGecko API every 5 minutes
   - Returns JSON: `{ prices: { BTC: 250000, ETH: 9000, USDT: 3.67 } }`
   - Uses `next: { revalidate: 300 }` for caching

2. **Utility Layer (`lib/crypto.ts`):**
   - `convertAEDtoCrypto(aedAmount, prices)` - Converts AED to all cryptos
   - `convertCryptoToAED(cryptoAmount, currency, prices)` - Converts specific crypto to AED
   - `formatAED(amount)` - Formats as "AED 3,500,000"
   - `formatCrypto(amount, decimals)` - Formats as "14.00"

3. **Component Usage:**
   ```typescript
   // Fetch prices
   const res = await fetch('/api/crypto-prices')
   const { prices } = await res.json()
   
   // Convert and display
   const crypto = convertAEDtoCrypto(property.price_aed, prices)
   const formatted = `${formatCrypto(crypto.BTC, 2)} BTC`
   ```

**Why This Architecture?**
- API route provides centralized price fetching with caching
- Utilities allow consistent conversion logic across components
- Components don't need to know about CoinGecko API details

### Dummy Data Fallback Pattern

**How It Works:**

1. **Supabase Client (`lib/supabase.ts`):**
   ```typescript
   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy-project.supabase.co'
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummyKeyForDevelopment'
   ```
   Creates client even without real credentials

2. **Dummy Data (`lib/dummy-data.ts`):**
   - Exports `dummyProperties`, `dummyYachts`, `dummySupercars`
   - Structured identically to database rows
   - Uses Unsplash images for visuals

3. **Component Pattern:**
   ```typescript
   // Current (dummy mode)
   import { dummyProperties } from '@/lib/dummy-data'
   const properties = await getFeaturedProperties()  // Returns dummy data
   
   // Future (Supabase mode)
   import { supabase } from '@/lib/supabase'
   const { data: properties } = await supabase.from('properties').select('*')
   ```

**Benefits:**
- Develop frontend without backend setup
- Test UI with realistic data
- Types remain consistent (both use `Property` type)
- Easy switchover when ready (just change data source)

### Type Safety Chain

**How Types Flow Through Stack:**

1. **Database Schema (`supabase-schema.sql`):**
   ```sql
   CREATE TABLE properties (
     id UUID PRIMARY KEY,
     title TEXT NOT NULL,
     price_aed DECIMAL NOT NULL,
     ...
   );
   ```

2. **TypeScript Types (`types/database.ts`):**
   ```typescript
   export interface Database {
     public: {
       Tables: {
         properties: {
           Row: {
             id: string
             title: string
             price_aed: number
             ...
           }
         }
       }
     }
   }
   export type Property = Database['public']['Tables']['properties']['Row']
   ```

3. **Supabase Client:**
   ```typescript
   import { createClient } from '@supabase/supabase-js'
   import { Database } from '@/types/database'
   
   export const supabase = createClient<Database>(url, key)
   // Now all queries are typed!
   ```

4. **Component Usage:**
   ```typescript
   import type { Property } from '@/types/database'
   
   function PropertyCard({ property }: { property: Property }) {
     return <div>{property.title}</div>  // TypeScript knows all fields!
   }
   ```

**Maintaining Type Safety:**
- When schema changes, update `types/database.ts`
- Use Supabase CLI to auto-generate types: `supabase gen types typescript`
- TypeScript catches mismatches at compile time

### Navbar/Footer Layout Integration

**Root Layout Pattern (`app/layout.tsx`):**

```typescript
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />           {/* Sticky header */}
        <main>{children}</main>  {/* Page content */}
        <Footer />           {/* Always at bottom */}
      </body>
    </html>
  )
}
```

**Why This Matters:**
- Navbar/Footer render on every page automatically
- Both are client components (`'use client'`) for interactivity
- Navbar uses `NEXT_PUBLIC_WHATSAPP_NUMBER` from env
- Layout persists across route changes (no re-render)

**Client Component Requirements:**
- `useState` for mobile menu toggle in Navbar
- Event handlers for menu clicks
- Cannot be async (no direct data fetching)

---

## References

- **Project Summary:** See `PROJECT_SUMMARY.md` for detailed roadmap and todos
- **Dummy Data Info:** See `DUMMY-DATA-README.md` for fallback behavior details
- **Main README:** See `README.md` for user-facing setup instructions
- **Supabase Docs:** [supabase.com/docs](https://supabase.com/docs)
- **Next.js 14 Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **shadcn/ui:** [ui.shadcn.com](https://ui.shadcn.com)
