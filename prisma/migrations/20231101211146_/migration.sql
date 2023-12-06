-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Term_Discipline_Definition" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "disciplineId" TEXT NOT NULL,
    "termId" TEXT NOT NULL,
    "definitionId" TEXT,
    CONSTRAINT "Term_Discipline_Definition_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Term_Discipline_Definition_definitionId_fkey" FOREIGN KEY ("definitionId") REFERENCES "Definition" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Term_Discipline_Definition_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Term_Discipline_Definition" ("Id", "definitionId", "disciplineId", "termId") SELECT "Id", "definitionId", "disciplineId", "termId" FROM "Term_Discipline_Definition";
DROP TABLE "Term_Discipline_Definition";
ALTER TABLE "new_Term_Discipline_Definition" RENAME TO "Term_Discipline_Definition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
