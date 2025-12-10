import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
async function main() {
  await prisma.properties.createMany({
    data: [
      {
        title: 'Palm Jumeirah Beachfront Villa',
        description:
          'Stunning 7-bedroom villa with private beach access, infinity pool, and panoramic Arabian Gulf views. This architectural masterpiece features floor-to-ceiling windows, Italian marble flooring, and smart home automation.',
        price_aed: 45000000,
        property_type: 'villa',
        bedrooms: 7,
        bathrooms: 9,
        sqft: 12000,
        area: 'Palm Jumeirah',
        developer: 'Nakheel',
        crypto_verified: true,
        golden_visa_eligible: true,
        images: [
          'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        ],
        amenities: [
          'Private Beach',
          'Infinity Pool',
          'Home Cinema',
          'Gym',
          "Maid's Room",
          'Smart Home',
          'Landscaped Garden',
          'BBQ Area',
          'Jacuzzi',
        ],
        latitude: 25.1124,
        longitude: 55.139,
      },
      {
        title: 'Burj Khalifa Sky Penthouse',
        description:
          "Exclusive penthouse on the 120th floor of the world's tallest building. 360-degree views of Dubai, premium finishes, and access to Armani Hotel amenities.",
        price_aed: 50000000,
        property_type: 'penthouse',
        bedrooms: 5,
        bathrooms: 7,
        sqft: 10500,
        area: 'Downtown Dubai',
        developer: 'Emaar',
        crypto_verified: true,
        golden_visa_eligible: true,
        images: [
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
          'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
        ],
        amenities: [
          'Burj Khalifa Views',
          'Concierge Service',
          'Private Elevator',
          'Wine Cellar',
          'Home Office',
          'Sauna',
          'Steam Room',
          'Butler Service',
        ],
        latitude: 25.1972,
        longitude: 55.2744,
      },
      {
        title: 'Dubai Marina Luxury Apartment',
        description:
          'Modern 3-bedroom apartment with marina views, high-end finishes, and resort-style amenities. Walking distance to the beach and Dubai Marina Mall.',
        price_aed: 3500000,
        property_type: 'apartment',
        bedrooms: 3,
        bathrooms: 4,
        sqft: 2400,
        area: 'Dubai Marina',
        developer: 'Emaar',
        crypto_verified: false,
        golden_visa_eligible: true,
        images: [
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
          'https://images.unsplash.com/photo-1502672260066-6bc35f0af07e?w=800',
        ],
        amenities: [
          'Marina View',
          'Swimming Pool',
          'Gym',
          'Covered Parking',
          'Security 24/7',
          "Children's Play Area",
          'Retail Outlets',
        ],
        latitude: 25.0772,
        longitude: 55.1364,
      },
      // Add all other property entries here...
    ],
  });

  await prisma.yachts.createMany({
    data: [
      {
        name: 'Majesty 120',
        description:
          'Luxury superyacht with 5 cabins, jacuzzi, water toys, and professional crew. Perfect for corporate events, parties, or leisure cruises around Dubai Marina and Palm Jumeirah.',
        price_per_day_aed: 35000,
        length_ft: 120,
        guests_max: 25,
        yacht_type: 'Motor Yacht',
        images: [
          'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800',
          'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800',
        ],
        amenities: [
          'Jacuzzi',
          '5 Cabins',
          'Water Toys',
          'Professional Crew',
          'Sound System',
          'BBQ Grill',
          'Air Conditioning',
          'WiFi',
        ],
        whatsapp_booking: '+971501234567',
      },
      {
        name: 'Sea Ray Sundancer 65',
        description:
          'Modern sport yacht ideal for day trips. Features sun pads, entertainment system, and experienced captain. Great for families and small groups.',
        price_per_day_aed: 12000,
        length_ft: 65,
        guests_max: 12,
        yacht_type: 'Sport Yacht',
        images: [
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
          'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800',
        ],
        amenities: [
          'Sun Pads',
          'Entertainment System',
          'Fishing Equipment',
          'Snorkeling Gear',
          'Captain',
          'Refreshments',
          'Life Jackets',
        ],
        whatsapp_booking: '+971501234567',
      },
      // Add all other yacht entries here...
    ],
  });

  await prisma.supercars.createMany({
    data: [
      {
        brand: 'Lamborghini',
        model: 'Aventador SVJ',
        year: 2023,
        price_per_day_aed: 4500,
        images: [
          'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800',
          'https://images.unsplash.com/photo-1621135802920-1f650a9f4f33?w=800',
        ],
        specs: {
          engine: '6.5L V12',
          horsepower: '770 HP',
          topSpeed: '350 km/h',
          color: 'Verde Mantis',
        },
        whatsapp_booking: '+971501234567',
      },
      {
        brand: 'Ferrari',
        model: '488 Pista',
        year: 2023,
        price_per_day_aed: 4000,
        images: [
          'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
          'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800',
        ],
        specs: {
          engine: '3.9L Twin-Turbo V8',
          horsepower: '711 HP',
          topSpeed: '340 km/h',
          color: 'Rosso Corsa',
        },
        whatsapp_booking: '+971501234567',
      },
      // Add all other supercar entries here...
    ],
  });

  await prisma.crypto_prices.createMany({
    data: [
      { currency: 'BTC', price_aed: 250000, updated_at: new Date() },
      { currency: 'ETH', price_aed: 9000, updated_at: new Date() },
      { currency: 'USDT', price_aed: 3.67, updated_at: new Date() },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
