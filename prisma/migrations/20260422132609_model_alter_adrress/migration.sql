/*
  Warnings:

  - You are about to drop the column `id_primary` on the `Adrress` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Adrress" DROP COLUMN "id_primary",
ADD COLUMN     "is_primary" BOOLEAN NOT NULL DEFAULT true;
