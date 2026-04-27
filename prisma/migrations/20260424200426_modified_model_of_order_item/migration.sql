/*
  Warnings:

  - Added the required column `depth` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "depth" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "height" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;
