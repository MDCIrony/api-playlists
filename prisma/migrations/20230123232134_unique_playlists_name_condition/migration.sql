/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `playlists` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "playlists_name_key" ON "playlists"("name");
