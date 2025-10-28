-- =============================================
-- DUBA1.COM - Complete Database Schema & Seed Data
-- =============================================

-- Drop existing tables if they exist
DROP TABLE IF EXISTS leads CASCADE;
DROP TABLE IF EXISTS crypto_prices CASCADE;
DROP TABLE IF EXISTS supercars CASCADE;
DROP TABLE IF EXISTS yachts CASCADE;
DROP TABLE IF EXISTS properties CASCADE;

-- =============================================
-- TABLES
-- =============================================

-- Properties table
CREATE TABLE properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price_aed DECIMAL NOT NULL,
  property_type TEXT CHECK (property_type IN ('villa', 'apartment', 'penthouse', 'townhouse')),
  bedrooms INT,
  bathrooms INT,
  sqft INT,
  area TEXT,
  developer TEXT,
  crypto_verified BOOLEAN DEFAULT FALSE,
  golden_visa_eligible BOOLEAN DEFAULT FALSE,
  images TEXT[] DEFAULT '{}',
  amenities TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'available',
  latitude DECIMAL,
  longitude DECIMAL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Yachts table
CREATE TABLE yachts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price_per_day_aed DECIMAL NOT NULL,
  length_ft INT,
  guests_max INT,
  yacht_type TEXT,
  images TEXT[] DEFAULT '{}',
  amenities TEXT[] DEFAULT '{}',
  whatsapp_booking TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Supercars table
CREATE TABLE supercars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT,
  price_per_day_aed DECIMAL NOT NULL,
  images TEXT[] DEFAULT '{}',
  specs JSONB,
  whatsapp_booking TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  whatsapp TEXT NOT NULL,
  interest_type TEXT[] DEFAULT '{}',
  budget_max DECIMAL,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Crypto prices cache (for live conversions)
CREATE TABLE crypto_prices (
  currency TEXT PRIMARY KEY,
  price_aed DECIMAL NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- =============================================
-- SEED DATA - PROPERTIES
-- =============================================

INSERT INTO properties (title, description, price_aed, property_type, bedrooms, bathrooms, sqft, area, developer, crypto_verified, golden_visa_eligible, images, amenities, latitude, longitude) VALUES
(
  'Palm Jumeirah Beachfront Villa',
  'Stunning 7-bedroom villa with private beach access, infinity pool, and panoramic Arabian Gulf views. This architectural masterpiece features floor-to-ceiling windows, Italian marble flooring, and smart home automation.',
  45000000,
  'villa',
  7,
  9,
  12000,
  'Palm Jumeirah',
  'Nakheel',
  TRUE,
  TRUE,
  ARRAY[
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
  ],
  ARRAY['Private Beach', 'Infinity Pool', 'Home Cinema', 'Gym', 'Maid''s Room', 'Smart Home', 'Landscaped Garden', 'BBQ Area', 'Jacuzzi'],
  25.1124,
  55.1390
),
(
  'Burj Khalifa Sky Penthouse',
  'Exclusive penthouse on the 120th floor of the world''s tallest building. 360-degree views of Dubai, premium finishes, and access to Armani Hotel amenities.',
  50000000,
  'penthouse',
  5,
  7,
  10500,
  'Downtown Dubai',
  'Emaar',
  TRUE,
  TRUE,
  ARRAY[
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
  ],
  ARRAY['Burj Khalifa Views', 'Concierge Service', 'Private Elevator', 'Wine Cellar', 'Home Office', 'Sauna', 'Steam Room', 'Butler Service'],
  25.1972,
  55.2744
),
(
  'Dubai Marina Luxury Apartment',
  'Modern 3-bedroom apartment with marina views, high-end finishes, and resort-style amenities. Walking distance to the beach and Dubai Marina Mall.',
  3500000,
  'apartment',
  3,
  4,
  2400,
  'Dubai Marina',
  'Emaar',
  FALSE,
  TRUE,
  ARRAY[
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    'https://images.unsplash.com/photo-1502672260066-6bc35f0af07e?w=800'
  ],
  ARRAY['Marina View', 'Swimming Pool', 'Gym', 'Covered Parking', 'Security 24/7', 'Children''s Play Area', 'Retail Outlets'],
  25.0772,
  55.1364
),
(
  'Emirates Hills Golf Estate Villa',
  'Magnificent 8-bedroom villa overlooking the golf course. Mediterranean architecture with custom interiors, private cinema, and championship-sized pool.',
  38000000,
  'villa',
  8,
  10,
  15000,
  'Emirates Hills',
  'Emaar',
  TRUE,
  TRUE,
  ARRAY[
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
  ],
  ARRAY['Golf Course View', 'Private Cinema', 'Wine Cellar', 'Gym', 'Sauna', 'Driver''s Room', 'Guest House', 'Tennis Court'],
  25.0531,
  55.1858
),
(
  'Business Bay Executive Penthouse',
  'Ultra-modern 4-bedroom penthouse with Burj Khalifa views. Smart home technology, premium Italian kitchen, and private rooftop terrace.',
  12000000,
  'penthouse',
  4,
  5,
  5500,
  'Business Bay',
  'Damac',
  TRUE,
  TRUE,
  ARRAY[
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
  ],
  ARRAY['Rooftop Terrace', 'Burj Khalifa View', 'Smart Home', 'Private Pool', 'BBQ Area', 'Maid''s Room', 'Study Room', 'Storage'],
  25.1881,
  55.2631
),
(
  'Jumeirah Beach Residence Waterfront Apartment',
  'Stunning 2-bedroom apartment with direct beach access. Modern design, fully furnished, and walking distance to The Walk JBR.',
  2800000,
  'apartment',
  2,
  3,
  1800,
  'Jumeirah Beach Residence',
  'Dubai Properties',
  FALSE,
  FALSE,
  ARRAY[
    'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
  ],
  ARRAY['Beach Access', 'Swimming Pool', 'Gym', 'Covered Parking', 'Concierge', 'Retail Outlets', 'Restaurants'],
  25.0784,
  55.1325
),
(
  'Arabian Ranches Golf Villas Townhouse',
  'Family-friendly 4-bedroom townhouse in gated community. Landscaped gardens, community pool, and excellent schools nearby.',
  4200000,
  'townhouse',
  4,
  5,
  3200,
  'Arabian Ranches',
  'Emaar',
  FALSE,
  TRUE,
  ARRAY[
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800'
  ],
  ARRAY['Community Pool', 'Golf Course', 'Parks', 'Schools Nearby', 'Retail Center', 'Covered Parking', 'Maid''s Room'],
  25.0545,
  55.2708
),
(
  'Downtown Dubai Luxury Residence',
  'Premium 3-bedroom apartment in the heart of Downtown. Walking distance to Dubai Mall, Burj Khalifa, and Dubai Fountain.',
  6500000,
  'apartment',
  3,
  4,
  2800,
  'Downtown Dubai',
  'Emaar',
  TRUE,
  TRUE,
  ARRAY[
    'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800'
  ],
  ARRAY['Burj Khalifa View', 'Concierge', 'Valet Parking', 'Swimming Pool', 'Gym', 'Steam Room', 'Children''s Pool'],
  25.1963,
  55.2789
),
(
  'Palm Jumeirah Garden Home Villa',
  'Exclusive 6-bedroom villa on the fronds of Palm Jumeirah. Private pool, beach access, and stunning Dubai skyline views.',
  28000000,
  'villa',
  6,
  7,
  8500,
  'Palm Jumeirah',
  'Nakheel',
  TRUE,
  TRUE,
  ARRAY[
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800'
  ],
  ARRAY['Private Beach', 'Pool', 'Gym', 'Maid''s Room', 'Driver''s Room', 'Covered Parking', 'Garden', 'Security'],
  25.1167,
  55.1419
),
(
  'Dubai Hills Estate Contemporary Villa',
  'Brand new 5-bedroom villa with golf course views. Contemporary design, smart home features, and community amenities.',
  9500000,
  'villa',
  5,
  6,
  6000,
  'Dubai Hills Estate',
  'Emaar',
  FALSE,
  TRUE,
  ARRAY[
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800'
  ],
  ARRAY['Golf Course View', 'Community Pool', 'Parks', 'Retail Center', 'Schools', 'Gym', 'Maid''s Room', 'Garden'],
  25.0932,
  55.2448
);

-- =============================================
-- SEED DATA - YACHTS
-- =============================================

INSERT INTO yachts (name, description, price_per_day_aed, length_ft, guests_max, yacht_type, images, amenities, whatsapp_booking) VALUES
(
  'Majesty 120',
  'Luxury superyacht with 5 cabins, jacuzzi, water toys, and professional crew. Perfect for corporate events, parties, or leisure cruises around Dubai Marina and Palm Jumeirah.',
  35000,
  120,
  25,
  'Motor Yacht',
  ARRAY[
    'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800',
    'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800'
  ],
  ARRAY['Jacuzzi', '5 Cabins', 'Water Toys', 'Professional Crew', 'Sound System', 'BBQ Grill', 'Air Conditioning', 'WiFi'],
  '+971501234567'
),
(
  'Sea Ray Sundancer 65',
  'Modern sport yacht ideal for day trips. Features sun pads, entertainment system, and experienced captain. Great for families and small groups.',
  12000,
  65,
  12,
  'Sport Yacht',
  ARRAY[
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800'
  ],
  ARRAY['Sun Pads', 'Entertainment System', 'Fishing Equipment', 'Snorkeling Gear', 'Captain', 'Refreshments', 'Life Jackets'],
  '+971501234567'
),
(
  'Azimut 88',
  'Elegant luxury yacht with spacious deck, lounge areas, and premium amenities. Perfect for romantic cruises or intimate celebrations.',
  25000,
  88,
  18,
  'Motor Yacht',
  ARRAY[
    'https://images.unsplash.com/photo-1608107472135-9c0da6e3a8c9?w=800',
    'https://images.unsplash.com/photo-1535024966711-d854b32da98a?w=800'
  ],
  ARRAY['Spacious Deck', 'Lounge Areas', '4 Cabins', 'Crew', 'Water Sports', 'Kitchen', 'Dining Area', 'Bluetooth Audio'],
  '+971501234567'
),
(
  'Gulf Craft 75',
  'Traditional Arabic dhow yacht with modern amenities. Ideal for large groups, corporate events, and sightseeing tours.',
  15000,
  75,
  35,
  'Traditional Dhow',
  ARRAY[
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800'
  ],
  ARRAY['Traditional Design', 'Large Capacity', 'Catering Available', 'Sound System', 'Dance Floor', 'Crew', 'Air Conditioning'],
  '+971501234567'
),
(
  'Sunseeker 86',
  'High-performance luxury yacht with sleek design. Features include jet skis, flybridge, and state-of-the-art navigation.',
  28000,
  86,
  20,
  'Motor Yacht',
  ARRAY[
    'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
  ],
  ARRAY['Jet Skis', 'Flybridge', '4 Cabins', 'Professional Crew', 'Water Toys', 'BBQ', 'Premium Sound', 'Navigation System'],
  '+971501234567'
);

-- =============================================
-- SEED DATA - SUPERCARS
-- =============================================

INSERT INTO supercars (brand, model, year, price_per_day_aed, images, specs, whatsapp_booking) VALUES
(
  'Lamborghini',
  'Aventador SVJ',
  2023,
  4500,
  ARRAY[
    'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800',
    'https://images.unsplash.com/photo-1621135802920-1f650a9f4f33?w=800'
  ],
  '{"engine": "6.5L V12", "horsepower": "770 HP", "top_speed": "350 km/h", "acceleration": "0-100 in 2.8s", "color": "Verde Mantis"}'::jsonb,
  '+971501234567'
),
(
  'Ferrari',
  '488 Pista',
  2023,
  4000,
  ARRAY[
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
    'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800'
  ],
  '{"engine": "3.9L Twin-Turbo V8", "horsepower": "711 HP", "top_speed": "340 km/h", "acceleration": "0-100 in 2.85s", "color": "Rosso Corsa"}'::jsonb,
  '+971501234567'
),
(
  'Rolls Royce',
  'Cullinan Black Badge',
  2024,
  3500,
  ARRAY[
    'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800'
  ],
  '{"engine": "6.75L Twin-Turbo V12", "horsepower": "600 HP", "interior": "Bespoke Leather", "features": "Starlight Headliner", "color": "Black"}'::jsonb,
  '+971501234567'
),
(
  'McLaren',
  '720S Spider',
  2023,
  3800,
  ARRAY[
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800'
  ],
  '{"engine": "4.0L Twin-Turbo V8", "horsepower": "710 HP", "top_speed": "341 km/h", "acceleration": "0-100 in 2.9s", "color": "Volcano Orange"}'::jsonb,
  '+971501234567'
),
(
  'Bentley',
  'Continental GT',
  2024,
  2800,
  ARRAY[
    'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800',
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800'
  ],
  '{"engine": "6.0L W12", "horsepower": "626 HP", "interior": "Handcrafted Leather", "features": "Rotating Display", "color": "Glacier White"}'::jsonb,
  '+971501234567'
);

-- =============================================
-- SEED DATA - CRYPTO PRICES
-- =============================================

INSERT INTO crypto_prices (currency, price_aed, updated_at) VALUES
('BTC', 250000.00, NOW()),
('ETH', 9000.00, NOW()),
('USDT', 3.67, NOW());

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================

CREATE INDEX idx_properties_price ON properties(price_aed);
CREATE INDEX idx_properties_area ON properties(area);
CREATE INDEX idx_properties_type ON properties(property_type);
CREATE INDEX idx_properties_crypto_verified ON properties(crypto_verified);
CREATE INDEX idx_properties_status ON properties(status);
CREATE INDEX idx_yachts_price ON yachts(price_per_day_aed);
CREATE INDEX idx_supercars_price ON supercars(price_per_day_aed);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at);

-- =============================================
-- SUCCESS MESSAGE
-- =============================================

SELECT 'Database schema created successfully!' AS message,
       (SELECT COUNT(*) FROM properties) AS properties_count,
       (SELECT COUNT(*) FROM yachts) AS yachts_count,
       (SELECT COUNT(*) FROM supercars) AS supercars_count,
       (SELECT COUNT(*) FROM crypto_prices) AS crypto_prices_count;
