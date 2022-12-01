import Prismic from '@prismicio/client';

export function getPrismicCliente(req?: unknown) {
  const prismic = Prismic.client('https://customwebsite.prismic.io/api/v2', {
    req,
  });
  return prismic;
}
