-- CreateTable
CREATE TABLE "properties" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price_aed" DECIMAL NOT NULL,
    "property_type" TEXT,
    "bedrooms" INTEGER,
    "bathrooms" INTEGER,
    "sqft" INTEGER,
    "area" TEXT,
    "developer" TEXT,
    "crypto_verified" BOOLEAN DEFAULT false,
    "golden_visa_eligible" BOOLEAN DEFAULT false,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "amenities" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" TEXT DEFAULT 'available',
    "latitude" DECIMAL,
    "longitude" DECIMAL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supercars" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER,
    "price_per_day_aed" DECIMAL NOT NULL,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "specs" JSONB,
    "whatsapp_booking" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supercars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "yachts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price_per_day_aed" DECIMAL NOT NULL,
    "length_ft" INTEGER,
    "guests_max" INTEGER,
    "yacht_type" TEXT,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "amenities" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "whatsapp_booking" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "yachts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crypto_prices" (
    "currency" TEXT NOT NULL,
    "price_aed" DECIMAL NOT NULL,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "crypto_prices_pkey" PRIMARY KEY ("currency")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "whatsapp" TEXT NOT NULL,
    "interest_type" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "budget_max" DECIMAL,
    "message" TEXT,
    "status" TEXT DEFAULT 'new',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "properties_id_key" ON "properties"("id");

-- CreateIndex
CREATE INDEX "idx_properties_area" ON "properties"("area");

-- CreateIndex
CREATE INDEX "idx_properties_crypto_verified" ON "properties"("crypto_verified");

-- CreateIndex
CREATE INDEX "idx_properties_price" ON "properties"("price_aed");

-- CreateIndex
CREATE INDEX "idx_properties_status" ON "properties"("status");

-- CreateIndex
CREATE INDEX "idx_properties_type" ON "properties"("property_type");

-- CreateIndex
CREATE UNIQUE INDEX "supercars_id_key" ON "supercars"("id");

-- CreateIndex
CREATE INDEX "idx_supercars_price" ON "supercars"("price_per_day_aed");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "yachts_id_key" ON "yachts"("id");

-- CreateIndex
CREATE INDEX "idx_yachts_price" ON "yachts"("price_per_day_aed");

-- CreateIndex
CREATE UNIQUE INDEX "crypto_prices_currency_key" ON "crypto_prices"("currency");

-- CreateIndex
CREATE UNIQUE INDEX "leads_id_key" ON "leads"("id");

-- CreateIndex
CREATE INDEX "idx_leads_created" ON "leads"("created_at");

-- CreateIndex
CREATE INDEX "idx_leads_status" ON "leads"("status");
