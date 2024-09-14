/*
  Warnings:

  - You are about to drop the column `token` on the `notify_gn` table. All the data in the column will be lost.
  - Added the required column `notification` to the `notify_gn` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notify_gn" DROP COLUMN "token",
ADD COLUMN     "notification" TEXT NOT NULL;
