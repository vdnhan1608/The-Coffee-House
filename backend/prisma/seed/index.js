import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

// TODO seed data
const USERS = [];
const CATEGORIES = [
  {
    thumbnail: 'https://hrv.hstatic.net/s_1000266602/_creamy.png',
    name: 'Món mới phải thử',
  },
  {
    thumbnail:
      'https://product.hstatic.net/1000075078/product/1686021305_banh-kem-dau-new_4e262f211dac4efd9d4b3a9bb17d5bdc_large.jpg',
    name: 'Đá xay Frosty',
  },
  {
    thumbnail:
      'https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_d9cb7313ec5246f8a1b1b05f8a5320de_large.jpg',
    name: 'Cà phê',
  },
  {
    thumbnail:
      'https://product.hstatic.net/1000075078/product/1675329314_bg-cloudfee-caramel_3757db8b6be24d3d9a45ea71e4f4d9ea_large.jpg',
    name: 'CloudFee',
  },
  {
    thumbnail:
      'https://product.hstatic.net/1000075078/product/1675329651_bg-cloudtea-daxay_11ad0ffe4ec344079f0d97999e5d8822_large.jpg',
    name: 'CloudTea',
  },
  {
    thumbnail:
      'https://product.hstatic.net/1000075078/product/1650529463_hi-tea-vai_a9cfafdab16c4db8bade329040e4186c.jpg',
    name: 'Hi-Tea Healthy',
  },
  {
    thumbnail:
      'https://product.hstatic.net/1000075078/product/tra-sen_905594_9b4a106ee40247ff85ae2a4a6d73497c_large.jpg',
    name: 'Trà trái cây - Trà sữa',
  },
  {
    thumbnail:
      'https://static.vecteezy.com/system/resources/previews/021/190/076/original/more-three-dots-settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg',
    name: 'Xem thêm',
  },
];
const DISCOUNTS = [];
const DRINKS = [];
const SHOPS = [];
const ORDERS = [];
const BLOGS = [];

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
};
const main = async () => {
  //   await seedCategories();
  console.log('Done');
};

main();
