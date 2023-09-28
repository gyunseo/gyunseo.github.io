import { slug as slugger } from "github-slugger";
import type { CollectionEntry } from "astro:content";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: CollectionEntry<"blog">) =>
  post.data.postSlug ? slugger(post.data.postSlug) : post.slug;

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
