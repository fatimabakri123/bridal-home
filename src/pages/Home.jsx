
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";

import { useLanguage } from "../context/LanguageContext";
import { supabase } from "../lib/supabase";

function Home() {
  const { t, language } = useLanguage();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // Fetch categories from Supabase
  async function fetchCategories() {
    setLoadingCategories(true);

    try {
      const { data, error } = await supabase
        .from("categories")
        .select("id, name_en, name_ar, image_url")
        .order("id", { ascending: true });

      if (error) {
        console.error("Customer categories error:", error);
        setCategories([]);
        return;
      }

      console.log("Customer categories:", data);
      setCategories(data || []);
    } catch (error) {
      console.error("Unexpected categories error:", error);
      setCategories([]);
    } finally {
      setLoadingCategories(false);
    }
  }

  // Fetch products from Supabase
  async function fetchProducts() {
    setLoadingProducts(true);

    try {
      // First, fetch all product columns without filters or joins.
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.error("Customer products error:", error);
        setProducts([]);
        return;
      }

      console.log("All products from Supabase:", data);

      // Show all returned products while diagnosing the issue.
      setProducts(data || []);
    } catch (error) {
      console.error("Unexpected products error:", error);
      setProducts([]);
    } finally {
      setLoadingProducts(false);
    }
  }

  // Format category data for CategoryCard
  function formatCategory(category) {
    return {
      ...category,
      name: {
        en: category.name_en || "",
        ar: category.name_ar || "",
      },
      image: category.image_url || "",
      image_url: category.image_url || "",
    };
  }

  const isArabic = language === "ar";

  return (
    <main>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section">
        <SectionTitle
          title={t.categories.title}
          subtitle={t.categories.subtitle}
        />

        {loadingCategories ? (
          <p className="section-message">
            {isArabic
              ? "جاري تحميل الأقسام..."
              : "Loading categories..."}
          </p>
        ) : categories.length === 0 ? (
          <p className="section-message">
            {isArabic
              ? "لا توجد أقسام متاحة."
              : "No categories available."}
          </p>
        ) : (
          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={formatCategory(category)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Featured Products Section */}
      <section id="products" className="featured-products-section">
        <SectionTitle
          title={t.products?.title || "Featured Products"}
          subtitle={
            t.products?.subtitle || "Discover our latest products"
          }
        />

        {loadingProducts ? (
          <p className="section-message">
            {isArabic
              ? "جاري تحميل المنتجات..."
              : "Loading products..."}
          </p>
        ) : products.length === 0 ? (
          <p className="section-message">
            {isArabic
              ? "لا توجد منتجات متاحة."
              : "No products available."}
          </p>
        ) : (
          <div className="products-grid">
            {products.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>

      {/* Checklist Banner */}
      <section id="checklist" className="checklist-banner">
        <div className="checklist-content">
          <span>💍</span>

          <h2>{t.checklist.title}</h2>

          <p>{t.checklist.subtitle}</p>

          <Link to="/checklist" className="checklist-button">
            {t.checklist.button}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
