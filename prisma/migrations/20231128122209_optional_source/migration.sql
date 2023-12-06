-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Source_Authorship" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "sourceId" TEXT NOT NULL,
    "authorId" TEXT,
    CONSTRAINT "Source_Authorship_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("authorId") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Source_Authorship_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("sourceId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Source_Authorship" ("Id", "authorId", "sourceId") SELECT "Id", "authorId", "sourceId" FROM "Source_Authorship";
DROP TABLE "Source_Authorship";
ALTER TABLE "new_Source_Authorship" RENAME TO "Source_Authorship";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
