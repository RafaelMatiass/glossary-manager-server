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
    "name" TEXT NOT NULL,
    "descripition" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Term" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "disciplineId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "definition" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    CONSTRAINT "Term_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
