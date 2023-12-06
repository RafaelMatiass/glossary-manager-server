/*
  Warnings:

  - You are about to drop the column `descripition` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `descripition` on the `Discipline` table. All the data in the column will be lost.
  - You are about to drop the column `descripition` on the `Glossary` table. All the data in the column will be lost.
  - Added the required column `description` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Discipline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Glossary` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Course" ("id", "name") SELECT "id", "name" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE TABLE "new_Discipline" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Discipline" ("id", "name") SELECT "id", "name" FROM "Discipline";
DROP TABLE "Discipline";
ALTER TABLE "new_Discipline" RENAME TO "Discipline";
CREATE TABLE "new_Term" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "disciplineId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    CONSTRAINT "Term_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Term" ("definition", "disciplineId", "id", "name", "translation", "year") SELECT "definition", "disciplineId", "id", "name", "translation", "year" FROM "Term";
DROP TABLE "Term";
ALTER TABLE "new_Term" RENAME TO "Term";
CREATE TABLE "new_Glossary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Glossary_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Glossary" ("courseId", "id", "name") SELECT "courseId", "id", "name" FROM "Glossary";
DROP TABLE "Glossary";
ALTER TABLE "new_Glossary" RENAME TO "Glossary";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
