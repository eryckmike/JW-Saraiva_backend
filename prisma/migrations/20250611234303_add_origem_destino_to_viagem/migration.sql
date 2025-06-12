/*
  Warnings:

  - Added the required column `destino` to the `Viagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origem` to the `Viagem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Viagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataSaida" DATETIME NOT NULL,
    "dataVolta" DATETIME NOT NULL,
    "veiculoId" INTEGER NOT NULL,
    "motoristaId" INTEGER NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Viagem_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Viagem_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Viagem" ("createdAt", "dataSaida", "dataVolta", "id", "motoristaId", "updatedAt", "veiculoId") SELECT "createdAt", "dataSaida", "dataVolta", "id", "motoristaId", "updatedAt", "veiculoId" FROM "Viagem";
DROP TABLE "Viagem";
ALTER TABLE "new_Viagem" RENAME TO "Viagem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
