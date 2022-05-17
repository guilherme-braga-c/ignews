import * as prismic from '@prismicio/client'

export function getPrismiClient() {
  const prism = prismic.createClient(process.env.PRISMIC_URL, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });
  return prism;
}
