-- All migrations Prisma ORM

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "descripition" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Glossary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descripition" TEXT NOT NULL,
    CONSTRAINT "Glossary_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Discipline" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "glossaryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descripition" TEXT NOT NULL,
    "year" TEXT NOT NULL
    CONSTRAINT "Discipline_glossaryId_fkey" FOREIGN KEY ("glossaryId") REFERENCES "Glossary" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Term" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
);

-- CreateTable
CREATE TABLE "Users" (
    "prontuario" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Definition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceId" TEXT NOT NULL,
    "description" TEXT,
    "page" TEXT NOT NULL
    CONSTRAINT "Definition_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("sourceId") ON DELETE RESTRICT ON UPDATE CASCADE,
);

-- CreateTable
CREATE TABLE "Translation" (
    "translationId" TEXT NOT NULL PRIMARY KEY,
    "termId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "language" TEXT,
    "translation" TEXT,
    "page" TEXT,
    CONSTRAINT "Translation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("sourceId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Translation_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Source" (
    "sourceId" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "type_publication" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Author" (
    "authorId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Term_Discipline_Definition" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "disciplineId" TEXT NOT NULL,
    "termId" TEXT NOT NULL,
    "definitionId" TEXT,
    CONSTRAINT "Term_Discipline_Definition_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Term_Discipline_Definition_definitionId_fkey" FOREIGN KEY ("definitionId") REFERENCES "Definition" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Term_Discipline_Definition_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Source_Authorship" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "sourceId" TEXT NOT NULL,
    "authorId" TEXT,
    CONSTRAINT "Source_Authorship_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("authorId") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Source_Authorship_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("sourceId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Definition_page_key" ON "Definition"("page");

-- CreateIndex
CREATE UNIQUE INDEX "Translation_page_key" ON "Translation"("page");

-- Migrations to relation
-- Mudanças feitas ao decorrer do projeto (Migrations)

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
    "name" TEXT NOT NULL
);
INSERT INTO "new_Term" ("id", "name") SELECT "id", "name" FROM "Term";
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