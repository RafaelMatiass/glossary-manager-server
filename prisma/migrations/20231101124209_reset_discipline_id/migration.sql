/*
  Warnings:

  - You are about to drop the column `disciplineId` on the `Term` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Term" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Term" ("id", "name") SELECT "id", "name" FROM "Term";
DROP TABLE "Term";
ALTER TABLE "new_Term" RENAME TO "Term";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
