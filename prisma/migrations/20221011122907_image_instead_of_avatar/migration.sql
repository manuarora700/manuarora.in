/*
  Warnings:

  - You are about to drop the column `avatar` on the `words` table. All the data in the column will be lost.
  - Added the required column `image` to the `words` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "words" DROP COLUMN "avatar",
ADD COLUMN     "image" VARCHAR(500) NOT NULL;
