-- CreateTable
CREATE TABLE "notify_gn" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notify_gn_pkey" PRIMARY KEY ("id")
);
