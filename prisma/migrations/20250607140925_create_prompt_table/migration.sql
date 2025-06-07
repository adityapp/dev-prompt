-- CreateTable
CREATE TABLE "Prompt" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Prompt_pkey" PRIMARY KEY ("id")
);
