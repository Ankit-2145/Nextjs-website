"use client";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

const words = `
At Pinnacle, we firmly believe that if you can dream it, we can build it. Our team excels in various fields, leveraging our expertise and creativity to bring your visions to life. We are passionate about continuous growth and improvement, constantly expanding our skills and knowledge. Whether we are already masters in a particular area or just starting our journey, our commitment to excellence ensures that we will deliver exceptional results. Trust us to not only meet your expectations but to exceed them, as we strive to turn your dreams into reality.
`;

function FeaturedCourses() {
  return (
    <div className="py-12">
      <div>
        <div className="text-center">
          <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-[#0070f3] to-purple-600 font-semibold">
            What we're good at ?
          </h2>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <TextGenerateEffect words={words} />
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: webinar.slug,
          }))}
        />
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
