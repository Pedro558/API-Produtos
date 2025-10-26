import prisma from "../src/prismaClient.js";

async function main() {
  await prisma.cliente.createMany({
    data: [
      { nome: "João Silva", email: "joao@example.com" },
      { nome: "Ana Pereira", email: "ana@example.com" },
      { nome: "Maria Silva", email: "maria@exemplo.com" },
    ],
    skipDuplicates: true,
  });

  console.log("Seed completo");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
