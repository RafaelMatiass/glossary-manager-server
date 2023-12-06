/*
  Warnings:

  - Added the required column `termId` to the `Translation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Translation" (
    "translationId" TEXT NOT NULL PRIMARY KEY,
    "termId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "language" TEXT,
    "translation" TEXT,
    "page" TEXT,
    CONSTRAINT "Translation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("sourceId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Translation_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Translation" ("language", "page", "sourceId", "translation", "translationId") SELECT "language", "page", "sourceId", "translation", "translationId" FROM "Translation";
DROP TABLE "Translation";
ALTER TABLE "new_Translation" RENAME TO "Translation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
