/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `news_articles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `news_articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "news_articles" ADD COLUMN     "ai_description" TEXT,
ADD COLUMN     "ai_generated_summary" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "news_articles_slug_key" ON "news_articles"("slug");
