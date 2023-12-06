/*
  Warnings:

  - You are about to drop the column `pageDefinition` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `pageTranslation` on the `Source` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Translation" (
    "translationId" TEXT NOT NULL PRIMARY KEY,
    "sourceId" TEXT NOT NULL,
    "language" TEXT,
    "translation" TEXT,
    "page" TEXT NOT NULL,
    CONSTRAINT "Translation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("sourceId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Translation" ("language", "page", "sourceId", "translation", "translationId") SELECT "language", "page", "sourceId", "translation", "translationId" FROM "Translation";
DROP TABLE "Translation";
ALTER TABLE "new_Translation" RENAME TO "Translation";
CREATE TABLE "new_Source" (
    "sourceId" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "publisher" TEXT,
    "year" TEXT,
    "type_publication" TEXT
);
INSERT INTO "new_Source" ("sourceId") SELECT "sourceId" FROM "Source";
DROP TABLE "Source";
ALTER TABLE "new_Source" RENAME TO "Source";
CREATE TABLE "new_Definition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceId" TEXT NOT NULL,
    "description" TEXT,
    "page" TEXT NOT NULL,
    CONSTRAINT "Definition_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("sourceId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Definition" ("description", "id", "page", "sourceId") SELECT "description", "id", "page", "sourceId" FROM "Definition";
DROP TABLE "Definition";
ALTER TABLE "new_Definition" RENAME TO "Definition";
CREATE UNIQUE INDEX "Definition_page_key" ON "Definition"("page");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
