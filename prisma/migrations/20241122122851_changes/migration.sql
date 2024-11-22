/*
  Warnings:

  - The primary key for the `Definition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Definition` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `sourceId` on the `Definition` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Term` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Term` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Glossary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `courseId` on the `Glossary` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `Glossary` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Source` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sourceId` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `type_publication` on the `Source` table. All the data in the column will be lost.
  - You are about to alter the column `year` on the `Source` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `prontuario` on the `Users` table. All the data in the column will be lost.
  - The primary key for the `Term_Discipline_Definition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `Term_Discipline_Definition` table. All the data in the column will be lost.
  - You are about to alter the column `definitionId` on the `Term_Discipline_Definition` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `disciplineId` on the `Term_Discipline_Definition` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `termId` on the `Term_Discipline_Definition` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Discipline` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `glossaryId` on the `Discipline` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `Discipline` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `year` on the `Discipline` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Author` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `Author` table. All the data in the column will be lost.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Source_Authorship` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `Source_Authorship` table. All the data in the column will be lost.
  - You are about to alter the column `authorId` on the `Source_Authorship` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `sourceId` on the `Source_Authorship` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Translation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `translationId` on the `Translation` table. All the data in the column will be lost.
  - You are about to alter the column `sourceId` on the `Translation` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `termId` on the `Translation` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `id` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Term_Discipline_Definition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Source_Authorship` table without a default value. This is not possible if the table is not empty.
  - Made the column `authorId` on table `Source_Authorship` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `id` to the `Translation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Definition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT,
    "page" TEXT NOT NULL,
    "sourceId" INTEGER NOT NULL,
    CONSTRAINT "Definition_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Definition" ("description", "id", "page", "sourceId") SELECT "description", "id", "page", "sourceId" FROM "Definition";
DROP TABLE "Definition";
ALTER TABLE "new_Definition" RENAME TO "Definition";
CREATE UNIQUE INDEX "Definition_page_key" ON "Definition"("page");
CREATE TABLE "new_Term" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Term" ("id", "name") SELECT "id", "name" FROM "Term";
DROP TABLE "Term";
ALTER TABLE "new_Term" RENAME TO "Term";
CREATE TABLE "new_Glossary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "courseId" INTEGER NOT NULL,
    CONSTRAINT "Glossary_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Glossary" ("courseId", "description", "id", "name") SELECT "courseId", "description", "id", "name" FROM "Glossary";
DROP TABLE "Glossary";
ALTER TABLE "new_Glossary" RENAME TO "Glossary";
CREATE TABLE "new_Source" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "publisher" TEXT,
    "year" INTEGER,
    "publicationType" TEXT
);
INSERT INTO "new_Source" ("publisher", "title", "year") SELECT "publisher", "title", "year" FROM "Source";
DROP TABLE "Source";
ALTER TABLE "new_Source" RENAME TO "Source";
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE TABLE "new_Term_Discipline_Definition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "termId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,
    "definitionId" INTEGER,
    CONSTRAINT "Term_Discipline_Definition_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Term_Discipline_Definition_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Term_Discipline_Definition_definitionId_fkey" FOREIGN KEY ("definitionId") REFERENCES "Definition" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Term_Discipline_Definition" ("definitionId", "disciplineId", "termId") SELECT "definitionId", "disciplineId", "termId" FROM "Term_Discipline_Definition";
DROP TABLE "Term_Discipline_Definition";
ALTER TABLE "new_Term_Discipline_Definition" RENAME TO "Term_Discipline_Definition";
CREATE TABLE "new_Discipline" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "year" INTEGER,
    "description" TEXT,
    "glossaryId" INTEGER NOT NULL,
    CONSTRAINT "Discipline_glossaryId_fkey" FOREIGN KEY ("glossaryId") REFERENCES "Glossary" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Discipline" ("description", "glossaryId", "id", "name", "year") SELECT "description", "glossaryId", "id", "name", "year" FROM "Discipline";
DROP TABLE "Discipline";
ALTER TABLE "new_Discipline" RENAME TO "Discipline";
CREATE TABLE "new_Author" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);
INSERT INTO "new_Author" ("name") SELECT "name" FROM "Author";
DROP TABLE "Author";
ALTER TABLE "new_Author" RENAME TO "Author";
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT
);
INSERT INTO "new_Course" ("description", "id", "name") SELECT "description", "id", "name" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE TABLE "new_Source_Authorship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sourceId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Source_Authorship_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Source_Authorship_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Source_Authorship" ("authorId", "sourceId") SELECT "authorId", "sourceId" FROM "Source_Authorship";
DROP TABLE "Source_Authorship";
ALTER TABLE "new_Source_Authorship" RENAME TO "Source_Authorship";
CREATE TABLE "new_Translation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "language" TEXT,
    "translation" TEXT,
    "page" TEXT,
    "termId" INTEGER NOT NULL,
    "sourceId" INTEGER NOT NULL,
    CONSTRAINT "Translation_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Translation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Translation" ("language", "page", "sourceId", "termId", "translation") SELECT "language", "page", "sourceId", "termId", "translation" FROM "Translation";
DROP TABLE "Translation";
ALTER TABLE "new_Translation" RENAME TO "Translation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
