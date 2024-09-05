export function getImageUrl(name: string, path: string = '') {
  return new URL(`../assets/images/${path}/${name}`, import.meta.url).href
}