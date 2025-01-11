'use client'
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/Feautreprod";
import LatestProducts from "./components/Latestproducts";
import ShopexOffer from "./components/Shopexoffer";
import UniqueFeatures from "./components/UniqueFeautures";
import TrendingProducts from "./components/TrendingProducts";
import Discount from "./components/Discount";
import TopCateg from "./components/TopCateg";
import Offers from "./components/Offers";
import Blog from "./components/Blogs";
import Footer from "./components/Footer";


const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
       <Hero
        title="Welcome to Our Store"
        subtitle="Limited Time Offer"
        description="Discover amazing furniture for your home. Transform your space today!"
        buttonText="Shop Now"
        leftImage="/images/lamp.png"
        rightImage="/images/cover.png"
        discountText="20% OFF"
      />
        <FeaturedProducts />
        <LatestProducts />
        <ShopexOffer />
        <UniqueFeatures />
        <TrendingProducts />
        <Discount/>
        <TopCateg/>
        <Offers/>
        <Blog/>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
