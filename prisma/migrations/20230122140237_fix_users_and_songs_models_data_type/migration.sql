/*
  Warnings:

  - You are about to alter the column `year` on the `songs` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_songs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "genere" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "private" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_songs" ("album", "artist", "duration", "genere", "id", "name", "private", "year") SELECT "album", "artist", "duration", "genere", "id", "name", "private", "year" FROM "songs";
DROP TABLE "songs";
ALTER TABLE "new_songs" RENAME TO "songs";
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "last_session" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL,
    "date_born" DATETIME
);
INSERT INTO "new_users" ("created_at", "date_born", "email", "id", "last_session", "name", "password", "update_at") SELECT "created_at", "date_born", "email", "id", "last_session", "name", "password", "update_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
