/*
  Warnings:

  - You are about to drop the `_OrderToOrder_Items` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `order_id` to the `Order_Items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_OrderToOrder_Items" DROP CONSTRAINT "_OrderToOrder_Items_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderToOrder_Items" DROP CONSTRAINT "_OrderToOrder_Items_B_fkey";

-- AlterTable
ALTER TABLE "Order_Items" ADD COLUMN     "order_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "_OrderToOrder_Items";

-- AddForeignKey
ALTER TABLE "Order_Items" ADD CONSTRAINT "Order_Items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
