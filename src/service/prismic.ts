import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client('https://customwebsite.prismic.io/api/v2', {
    req,
    accessToken: process.env.PRISMIC_ACESS_TOKEN,
  });
  return prismic;
}
