import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Iris Tours & Car Rental Lahore",
  description: "Read our latest articles on car rentals, travel tips, and luxury chauffeur services in Lahore and across Pakistan.",
};

const blogs = [
  {
    title: "The Ultimate Guide to Lahore to Islamabad Car Rental",
    slug: "lahore-to-islamabad-car-rental",
    desc: "Traveling the M2 motorway? Discover why renting a premium SUV or sedan with a driver is the best way to travel from Lahore to Islamabad.",
    img: "/blog/lahore-islamabad.jpg"
  },
  {
    title: "Experience True Elegance: Luxury Car Rental in Lahore",
    slug: "luxury-car-rental-lahore",
    desc: "Elevate your journey with Iris Tours' luxury car rental in Lahore. Rent premium vehicles like Mercedes, Audi, and limousines with VIP chauffeurs.",
    img: "/blog/luxury-rental.jpg"
  },
  {
    title: "Why Navigating the City is Easier: Rent a Car With Driver",
    slug: "lahore-car-rental-with-driver",
    desc: "Stress-free travel starts here. Book a reliable Lahore car rental with a professional driver to navigate the city easily.",
    img: "/blog/chauffeur-rental.jpg"
  },
  {
    title: "Group Travel Made Easy: Renting a Hiace or Grand Cabin",
    slug: "toyota-hiace-grand-cabin-rental",
    desc: "Planning a family trip or corporate tour? Rent a Toyota Hiace, Grand Cabin, or Coaster in Lahore for spacious group travel.",
    img: "/blog/hiace-rental.jpg"
  }
];

export default function BlogIndex() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-12 text-center">Our Latest Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map(blog => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group block bg-bg-secondary rounded-2xl overflow-hidden border border-border-primary hover:border-accent-primary transition-colors">
              <div className="h-64 overflow-hidden">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-text-primary mb-3">{blog.title}</h2>
                <p className="text-text-secondary">{blog.desc}</p>
                <div className="mt-4 text-accent-primary font-medium">Read Article →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
