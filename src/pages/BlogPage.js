import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

import BlogSection from "../components/blogpage/BlogSection";
import BlogGlad from "../components/blogpage/BlogGlad";
import CustomerBlog from "../components/blogpage/CustomerBlog";

function BlogPage() {
  return (
    <>
      <Header />
      <BlogSection />
      <BlogGlad />
      <CustomerBlog />
      <Footer />
    </>
  );
}

export default BlogPage;


