import {PrismaClient} from '@prisma/client';
import {BLOGS, CATEGORIES, DISCOUNTS, DRINKS, SHOPS, USERS} from './data.js';

const prisma = new PrismaClient();

const ORDERS = [];

const data = {
  users: USERS,
  categories: CATEGORIES,
  discounts: DISCOUNTS,
  drinks: DRINKS,
  shops: SHOPS,
  orders: ORDERS,
  blogs: BLOGS,
};

const seedCategories = async () => {
  CATEGORIES.forEach(async item => {
    await prisma.categories.create({
      data: {
        name: item.name,
        thumbnail: item.thumbnail,
      },
    });
  });

  console.log('Seeded categories');
};

const seedBlogs = async () => {
  BLOGS.forEach(async item => {
    await prisma.blogs.create({
      data: {
        thumbnail: item.thumbnail,
        title: item.title,
        content: item.content,
        created_at: item.created_at,
      },
    });
  });

  console.log('Seeded blogs');
};

const seedDrinks = async () => {
  const categories = await prisma.categories.findMany({});
  console.log(categories[Math.floor(Math.random() * categories.length)].id);
  DRINKS.forEach(async item => {
    await prisma.drinks.create({
      data: {
        thumbnail: item.thumbnail,
        price: item.price,
        name: item.name,
        category: categories[Math.floor(Math.random() * categories.length)].id,
      },
    });
  });

  console.log('Seeded drinks');
};

const seedUsers = async () => {
  USERS.forEach(async item => {
    await prisma.users.create({
      data: {
        phone_number: item.phone_number,
        address: item.address,
        points: item.points,
        password: item.password,
        created_at: item.created_at,
      },
    });
  });

  console.log('Seeded users');
};

const seedDiscounts = async () => {
  const users = await prisma.users.findMany({});
  DISCOUNTS.forEach(async item => {
    await prisma.discounts.create({
      data: {
        user_id: users[Math.floor(Math.random() * users.length)].id,
        description: item.description,
        thumbnail: item.thumbnail,
        due_date: item.due_date,
      },
    });
  });

  console.log('Seeded discounts');
};

const seedShops = async () => {
  SHOPS.forEach(async item => {
    await prisma.shops.create({
      data: {
        thumbnail: item.thumbnail,
        address: item.address,
      },
    });
  });

  console.log('Seeded discounts');
};
const main = async () => {
  await seedUsers();
  await seedCategories();
  await seedDrinks();
  await seedBlogs();
  await seedDiscounts();
  await seedShops();
  console.log('Done');
};

main();
