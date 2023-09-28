import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import slugify from "@utils/slugify";
import { SITE } from "@config";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    // slugify function takes only CollectionEntry<"blog"> type
    // other frontmatter properties is type of CollectionEntry<"blog">["data"]
    items: sortedPosts.map(data => ({
      link: `posts/${slugify(data)}`,
      title: data["data"].title,
      description: data["data"].description,
      pubDate: new Date(data["data"].pubDatetime),
    })),
  });
}
