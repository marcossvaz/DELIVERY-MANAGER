/*
  Warnings:

  - You are about to drop the column `order_items_id` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_order_items_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "order_items_id";

-- CreateTable
CREATE TABLE "_OrderToOrder_Items" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_OrderToOrder_Items_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_OrderToOrder_Items_B_index" ON "_OrderToOrder_Items"("B");

-- AddForeignKey
ALTER TABLE "_OrderToOrder_Items" ADD CONSTRAINT "_OrderToOrder_Items_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToOrder_Items" ADD CONSTRAINT "_OrderToOrder_Items_B_fkey" FOREIGN KEY ("B") REFERENCES "Order_Items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
