"use client";
import { motion } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const blogs = [
  {
    title: "JWT Auth Made Simple",
    slug: "jwt-auth",
    category: "Web Security",
    description:
      "A clear and concise guide to implementing JWT authentication in your full-stack apps, ensuring secure and scalable login systems.",
    date: "August 2025",
  },
  
  {
    title: "What I Learned Organizing My First Hackathon",
    slug: "first-hackathon",
    category: "Leadership & Events",
    description:
      "From ideation to execution — uncover the challenges, takeaways, and growth from hosting a large-scale tech event.",
    date: "August 2025",
  },
  {
    title: "Founding a Campus Tech Community",
    slug: "adtc-journey",
    category: "Leadership & Community",
    description:
      "Lessons learned from founding ADTC, a campus community that empowered 2000+ students through tech workshops, mentorship, and outreach.",
    date: "July 2025",
  },
  {
    title: "Building Blinkeyit: A Blinkit Clone",
    slug: "blinkeyit",
    category: "Full-Stack Development",
    description:
      "An inside look into building a fast, user-friendly full-stack e-commerce platform with admin controls and cart system inspired by Blinkit.",
    date: "June 2025",
  },
  {
    title: "Organizing College-Level Esports Tournaments",
    slug: "esports-events",
    category: "Esports & Event Management",
    description:
      "Insights from coordinating competitive gaming tournaments, including sponsor deals, player recruitment, and branding strategy.",
    date: "May 2025",
  },
  {
    title: "How I Became a Product Tester at Glip GG",
    slug: "glip-tester",
    category: "Tech Experience",
    description:
      "My experience testing Glip’s screen recording tools, giving feedback, and learning about product iteration in a fast-moving dev team.",
    date: "April 2025",
  },
  {
    title: "From Gamer to CEO: Running an Esports Org",
    slug: "esports-ceo",
    category: "Leadership & Branding",
    description:
      "Behind the scenes of managing sponsorships, player welfare, and brand visibility as the CEO of an esports organization.",
    date: "March 2025",
  },
];

export default function BlogsPage() {
  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white pt-24 pb-20 px-6 md:px-20">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-300 to-cyan-500 text-transparent bg-clip-text tracking-tight"
      >
        Blogs & Insights
      </motion.h2>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#1e293b] border border-cyan-500 rounded-xl p-6 shadow-xl hover:shadow-cyan-400/40 hover:bg-[#1e3a4c] transition-all duration-300 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between text-cyan-300 text-sm font-medium">
              <span className="flex items-center gap-1">
                <FaFeatherAlt className="text-black" /> {blog.category}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <MdDateRange className="text-black" /> {blog.date}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              {blog.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
              {blog.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
