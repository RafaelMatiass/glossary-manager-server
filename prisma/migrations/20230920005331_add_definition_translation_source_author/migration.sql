/*
  Warnings:

  - You are about to drop the `DisciplineTerm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DisciplineTerm";
PRAGMA foreign_keys=on;

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
);

-- CreateTable
CREATE TABLE "Translation" (
    "translationId" TEXT NOT NULL PRIMARY KEY,
    "sourceId" TEXT NOT NULL,
    "language" TEXT,
    "translation" TEXT,
    "page" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Source" (
    "sourceId" TEXT NOT NULL PRIMARY KEY,
    "pageDefinition" TEXT NOT NULL,
    "pageTranslation" TEXT NOT NULL,
    CONSTRAINT "Source_pageDefinition_fkey" FOREIGN KEY ("pageDefinition") REFERENCES "Definition" ("page") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Source_pageTranslation_fkey" FOREIGN KEY ("pageTranslation") REFERENCES "Translation" ("page") ON DELETE RESTRICT ON UPDATE CASCADE
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
    "definitionId" TEXT NOT NULL,
    CONSTRAINT "Term_Discipline_Definition_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Term_Discipline_Definition_definitionId_fkey" FOREIGN KEY ("definitionId") REFERENCES "Definition" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Term_Discipline_Definition_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Source_Authorship" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "sourceId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "Source_Authorship_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("authorId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Source_Authorship_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("sourceId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Definition_page_key" ON "Definition"("page");

-- CreateIndex
CREATE UNIQUE INDEX "Translation_page_key" ON "Translation"("page");
