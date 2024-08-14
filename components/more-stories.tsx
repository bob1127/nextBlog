import PostPreview from "./post-preview";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function MoreStories({ posts }) {
  // 筛选出 2024 年的文章
  const posts2024 = posts.filter(({ node }) => {
    const postYear = new Date(node.date).getFullYear();
    return postYear === 2024;
  });

  // 筛选出非 2024 年的文章
  const otherPosts = posts.filter(({ node }) => {
    const postYear = new Date(node.date).getFullYear();
    return postYear !== 2024;
  });

  return (
    <section>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="photos" title="Photos">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              {posts2024.map(({ node }) => (
                <span
                  key={node.slug}
                  className={
                    "card card-normal border-2 border-black overflow-hidden p-8"
                  }
                >
                  <PostPreview
                    title={node.title}
                    coverImage={node.featuredImage}
                    date={node.date}
                    author={node.author}
                    slug={node.slug}
                    excerpt={node.excerpt}
                  />
                </span>
              ))}
            </div>
          </Tab>
          <Tab key="music" title="Music">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 ">
        {otherPosts.map(({ node }) => (
          <span
            key={node.slug}
            className={
              "card card-normal border-2 border-black overflow-hidden p-8"
            }
          >
            <PostPreview
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
