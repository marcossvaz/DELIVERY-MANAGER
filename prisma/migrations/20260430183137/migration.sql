/*
  Warnings:

  - Made the column `status` on table `Delivery` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'PICKING';

-- AlterTable
ALTER TABLE "Delivery" ALTER COLUMN "status" SET NOT NULL;
