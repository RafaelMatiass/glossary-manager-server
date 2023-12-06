/*
  Warnings:

  - You are about to drop the column `definition` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the column `translation` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Term` table. All the data in the column will be lost.
  - Added the required column `glossaryId` to the `Discipline` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "DisciplineTerm" (
    "disciplineTermId" TEXT NOT NULL PRIMARY KEY,
    "disciplineId" TEXT NOT NULL,
    "termId" TEXT NOT NULL,
    CONSTRAINT "DisciplineTerm_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DisciplineTerm_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT
);
INSERT INTO "new_Course" ("description", "id", "name") SELECT "description", "id", "name" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE TABLE "new_Discipline" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "glossaryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "year" TEXT,
    CONSTRAINT "Discipline_glossaryId_fkey" FOREIGN KEY ("glossaryId") REFERENCES "Glossary" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Discipline" ("description", "id", "name") SELECT "description", "id", "name" FROM "Discipline";
DROP TABLE "Discipline";
ALTER TABLE "new_Discipline" RENAME TO "Discipline";
CREATE TABLE "new_Term" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "disciplineId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Term_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Term" ("disciplineId", "id", "name") SELECT "disciplineId", "id", "name" FROM "Term";
DROP TABLE "Term";
ALTER TABLE "new_Term" RENAME TO "Term";
CREATE TABLE "new_Glossary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    CONSTRAINT "Glossary_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Glossary" ("courseId", "description", "id", "name") SELECT "courseId", "description", "id", "name" FROM "Glossary";
DROP TABLE "Glossary";
ALTER TABLE "new_Glossary" RENAME TO "Glossary";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
