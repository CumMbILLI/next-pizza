import { prisma } from "./prisma-client";
import {
  CATEGORIES,
  INGREDIENTS,
  OTHER_PRODUCTS,
  PRODUCTS,
  USERS,
  VARIANT_PIZZA_1,
  VARIANT_PIZZA_2,
  VARIANT_PIZZA_3,
} from "./constants";
import { CARTS } from "./constants/carts";

async function up() {
  await prisma.user.createMany({
    data: USERS,
  });

  await prisma.category.createMany({ data: CATEGORIES });

  await prisma.ingredients.createMany({
    data: INGREDIENTS,
  });

  await prisma.product.createMany({
    data: PRODUCTS,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Мясной микс с говядиной и колбасками",
      imageUrl: "/pizza/pizza-1.avif",
      categoryId: 1,
      ingredients: {
        connect: INGREDIENTS.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Бефстроганов",
      imageUrl: "/pizza/pizza-2.avif",
      categoryId: 1,
      ingredients: {
        connect: INGREDIENTS.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Мясная с аджикой",
      imageUrl: "/pizza/pizza-3.avif",
      categoryId: 1,
      ingredients: {
        connect: INGREDIENTS.slice(5, 17),
      },
    },
  });

  await prisma.variationProduct.createMany({
    data: [
      //pizza
      ...VARIANT_PIZZA_1(pizza1.id),
      ...VARIANT_PIZZA_2(pizza2.id),
      ...VARIANT_PIZZA_3(pizza3.id),

      //остальные продукты
      ...OTHER_PRODUCTS,
    ],
  });

  await prisma.cart.createMany({
    data: CARTS,
  });

  await prisma.cartItem.create({
    data: {
      cartId: 1,
      quantity: 2,
      variationProductId: 1,
      ingredients: { connect: [{ id: 1 }, { id: 2 }, { id: 2 }] },
    },
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredients" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "VariationProduct" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error(error);

    prisma.$disconnect();
    process.exit(1);
  });
