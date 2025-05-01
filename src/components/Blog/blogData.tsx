import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How AIoT is Transforming Smart Mobility Systems",
    paragraph:
      "Discover how real-time data, predictive analytics, and intelligent automation are redefining transport and delivery operations for a smarter, faster world.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Chantelle Abel",
      image: "/images/blog/author-01.png",
      designation: "Mobility Systems Specialist",
    },
    tags: ["Mobility AIoT"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "AgriCore: Empowering Smart Farming Through AIoT",
    paragraph:
      "Learn how AI-driven insights, smart sensors, and automation are reshaping agriculture by boosting yields, conserving resources, and securing food futures.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Ronald Shakur",
      image: "/images/blog/author-02.png",
      designation: "AgriTech Analyst",
    },
    tags: ["Agri AIoT"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "The Connected Future: AIoT for Homes and Businesses",
    paragraph:
      "Explore how AIoT solutions integrate smart interiors, commerce, and enterprise operations to create seamless, intelligent ecosystems that adapt to your needs.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Samuel Efosa",
      image: "/images/blog/author-03.png",
      designation: "AIoT Solutions Architect",
    },
    tags: ["Business AIoT", "Home AIoT"],
    publishDate: "2025",
  },
  // {
  //   id: 4,
  //   title: "AutoEdge: Pioneering the Future of Connected Vehicles",
  //   paragraph:
  //     "Dive into the world of smart automobiles where AIoT fuels autonomous driving, predictive maintenance, and seamless vehicle-to-infrastructure communication.",
  //   image: "/images/blog/blog-04.jpg", // (you can add a matching image later)
  //   author: {
  //     name: "Jordan Adekoya",
  //     image: "/images/blog/author-04.png", // (placeholder, you can change)
  //     designation: "Automotive AI Specialist",
  //   },
  //   tags: ["Automobile AIoT"],
  //   publishDate: "2025",
  // },
];
export default blogData;

