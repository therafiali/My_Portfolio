import React from "react";
import Blog from "./Blog";
import { BlogPost } from "@/utils/types/BlogPost";
import { getBlogPosts } from "@/utils/sanity-utils";
import Link from "next/link";

type Props = {};

const Blogs = async (props: Props) => {
  const blogData: BlogPost[] = await getBlogPosts();

  return (
    <section className="relative md:h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center mt-80 md:mt-0 md:space-y-24">
      <h1 className="text-2xl uppercase tracking-wider md:tracking-[20px] text-violet-500">
        blogs
      </h1>
      <div className="mt-8 w-full flex flex-col items-start space-y-3 px-4 md:px-0">
        {blogData.map((b: BlogPost, index: number) => (
          <Blog key={index} props={b} />
        ))}
      </div>
      <button
        type="submit"
        className="mt-8 bg-gradient-to-r from-violet-500 to-pink-500 p-3 rounded-full font-bold w-32 text-white hover:opacity-90"
      >
        <Link href="/posts">See more...</Link>
      </button>
    </section>
  );
};

export default Blogs;
