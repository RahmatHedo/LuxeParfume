"use client";

import Image from "next/image";
import { product } from "./libs/product";
import Checkout from "./components/Checkout";
import { useEffect } from "react";
import { product2 } from "./libs/product2";
import Checkout2 from "./components/Checkout2";
import { product3 } from "./libs/product3";
import { product4 } from "./libs/product4";
import Checkout3 from "./components/Checkout3";
import Checkout4 from "./components/Checkout4";

export default function Home() {
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-amber-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <h1 className="text-2xl font-bold tracking-[0.3em] bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            LUXE
          </h1>

          <ul className="flex gap-10 text-sm font-light tracking-wider">
            <a href="#home" className="relative group">
              <span className="hover:text-amber-300 transition-colors duration-300">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="relative group">
              <span className="hover:text-amber-300 transition-colors duration-300">About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#produk" className="relative group">
              <span className="hover:text-amber-300 transition-colors duration-300">Produk</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="relative group">
              <span className="hover:text-amber-300 transition-colors duration-300">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-300 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </ul>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-amber-300 text-sm tracking-[0.3em] font-light uppercase border border-amber-300/30 px-6 py-2 rounded-full backdrop-blur-sm bg-amber-300/5">
              Premium Collection
            </span>
          </div>
          
          <h2 className="text-7xl font-bold tracking-tight leading-tight mb-8 bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent animate-fade-in">
            Discover Your<br/>
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Signature Scent
            </span>
          </h2>
          
          <p className="mt-6 text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Luxury fragrance handcrafted with the finest ingredients — made for confidence, class, and unforgettable presence.
          </p>
          
          <div className="mt-12 flex gap-4 justify-center">
            <a
              href="#produk"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 overflow-hidden"
            >
              <span className="relative z-10">Explore Collection</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#about"
              className="inline-flex items-center gap-3 border-2 border-white/20 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Gambar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-purple-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
            <div className="relative">
              <Image
                src="/fotoproduk.png"
                alt="Luxury Perfume"
                width={500}
                height={500}
                className="rounded-3xl shadow-2xl object-cover w-full transform group-hover:scale-105 transition-transform duration-500 border border-white/10"
              />
            </div>
          </div>

          {/* Teks */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-amber-300 text-sm tracking-[0.3em] font-light uppercase">About Us</span>
            </div>
            
            <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Crafted with<br/>Passion & Precision
            </h2>
            
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
            
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              At <span className="text-amber-300 font-semibold">LUXE Perfume</span>, we craft luxury fragrances using 
              premium essential oils sourced from France, Dubai, and Italy.
            </p>
            
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Our mission is to create scents that reflect elegance, confidence, and unforgettable character. 
              Each fragrance is blended carefully to achieve a perfect balance of identity and luxury.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">100%</div>
                <div className="text-sm text-gray-500 mt-1">Premium</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">3+</div>
                <div className="text-sm text-gray-500 mt-1">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">100+</div>
                <div className="text-sm text-gray-500 mt-1">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT SECTION ================= */}
      <section id="produk" className="relative max-w-7xl mx-auto py-32 px-6 z-10">
        <div className="text-center mb-16">
          <span className="text-amber-300 text-sm tracking-[0.3em] font-light uppercase">Our Collection</span>
          <h2 className="text-5xl font-bold tracking-tight mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Signature Fragrances
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-6 no-scrollbar snap-x snap-mandatory">
          {/* PRODUCT 1 */}
          <div className="min-w-[280px] max-w-[280px] snap-center group">
            <div className="relative rounded-3xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-black/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/20 h-full flex flex-col">
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">NEW</span>
              </div>

              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={280}
                  height={280}
                  className="w-full h-[240px] object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold tracking-wide">{product.name}</h3>
              <p className="text-amber-400 text-lg font-semibold mt-1">Rp {product.price}</p>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed flex-grow">
                {product.description}
              </p>

              <div className="mt-6">
                <Checkout />
              </div>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="min-w-[280px] max-w-[280px] snap-center group">
            <div className="relative rounded-3xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-black/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/20 h-full flex flex-col">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-purple-400 text-black text-xs font-bold px-3 py-1 rounded-full">HOT</span>
              </div>

              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={product2.image}
                  alt={product2.name}
                  width={280}
                  height={280}
                  className="w-full h-[240px] object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold tracking-wide">{product2.name}</h3>
              <p className="text-amber-400 text-lg font-semibold mt-1">Rp {product2.price}</p>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed flex-grow">
                {product2.description}
              </p>

              <div className="mt-6">
                <Checkout2 />
              </div>
            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="min-w-[280px] max-w-[280px] snap-center group">
            <div className="relative rounded-3xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-black/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/20 h-full flex flex-col">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-rose-400 text-black text-xs font-bold px-3 py-1 rounded-full">BEST</span>
              </div>

              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={product3.image}
                  alt={product3.name}
                  width={280}
                  height={280}
                  className="w-full h-[240px] object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold tracking-wide">{product3.name}</h3>
              <p className="text-amber-400 text-lg font-semibold mt-1">Rp {product3.price}</p>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed flex-grow">
                {product3.description}
              </p>

              <div className="mt-6">
                <Checkout3 />
              </div>
            </div>
          </div>

          {/* PRODUCT 4 */}
          <div className="min-w-[280px] max-w-[280px] snap-center group">
            <div className="relative rounded-3xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-black/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/20 h-full flex flex-col">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">FRESH</span>
              </div>

              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={product4.image}
                  alt={product4.name}
                  width={280}
                  height={280}
                  className="w-full h-[240px] object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold tracking-wide">{product4.name}</h3>
              <p className="text-amber-400 text-lg font-semibold mt-1">Rp {product4.price}</p>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed flex-grow">
                {product4.description}
              </p>

              <div className="mt-6">
                <Checkout4/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-amber-300 text-sm tracking-[0.3em] font-light uppercase">Get In Touch</span>
            <h2 className="text-5xl font-bold tracking-tight mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto"></div>
          </div>

          {/* 2 Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Contact Form */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Send us a Message</h3>
                <p className="text-gray-400 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 ml-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 ml-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+62 812 3456 7890"
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 ml-1">Your Message</label>
                  <textarea
                    placeholder="Tell us about your inquiry..."
                    rows="5"
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all backdrop-blur-sm resize-none"
                  ></textarea>
                </div>

                <button className="group relative w-full px-10 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                <p className="text-gray-400 mb-8">Reach out to us directly through your preferred platform.</p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                
                {/* WhatsApp */}
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-500"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-green-500/30">
                        <svg className="w-8 h-8" fill="#25D366" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">WhatsApp</h4>
                        <p className="text-sm text-gray-400">+62 812 3456 7890</p>
                        <p className="text-xs text-green-400 mt-1 group-hover:text-green-300">Click to chat →</p>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/luxeperfume" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/5 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all duration-500"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-pink-500/30">
                        <svg className="w-7 h-7" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                          <defs>
                            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" style={{stopColor: '#FD5949', stopOpacity: 1}} />
                              <stop offset="50%" style={{stopColor: '#D6249F', stopOpacity: 1}} />
                              <stop offset="100%" style={{stopColor: '#285AEB', stopOpacity: 1}} />
                            </linearGradient>
                          </defs>
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">Instagram</h4>
                        <p className="text-sm text-gray-400">@luxeperfume</p>
                        <p className="text-xs text-pink-400 mt-1 group-hover:text-pink-300">Follow us →</p>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Shopee */}
                <a href="https://shopee.co.id/luxeperfume" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/5 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-orange-500/30">
                        <svg className="w-8 h-8" fill="#EE4D2D" viewBox="0 0 24 24">
                          <path d="M20.995 8.165C20.995 6.523 19.655 5 17.855 5c-1.8 0-3.14 1.523-3.14 3.165 0 .234 0 .468.09.702l-7.38 4.443c-.54-.468-1.26-.702-2.07-.702C3.555 12.608 2 14.015 2 15.89c0 1.874 1.555 3.281 3.355 3.281 1.8 0 3.265-1.407 3.355-3.164l7.29-4.443c.63.585 1.44.936 2.34.936 1.8 0 3.14-1.523 3.14-3.165 0-.117 0-.234-.09-.351l.09-.117-.09-.117c0-.117.09-.234.09-.351v-.234h-.09zm-3.14 1.64c-.72 0-1.35-.585-1.35-1.406 0-.82.63-1.406 1.35-1.406.72 0 1.35.585 1.35 1.406 0 .82-.63 1.406-1.35 1.406zM5.355 17.413c-.72 0-1.35-.585-1.35-1.407 0-.82.63-1.406 1.35-1.406.72 0 1.35.585 1.35 1.406 0 .82-.63 1.407-1.35 1.407z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">Shopee</h4>
                        <p className="text-sm text-gray-400">luxeperfume.official</p>
                        <p className="text-xs text-orange-400 mt-1 group-hover:text-orange-300">Visit our store →</p>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              {/* Additional Info Box */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/20 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-xl">⏰</span>
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">09:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="text-white">10:00 - 20:00</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-white/10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold tracking-[0.3em] bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4">
                LUXE
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Crafting luxury fragrances with premium essential oils from France, Dubai, and Italy. 
                Every scent tells a story of elegance and sophistication.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://instagram.com/luxeperfume" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-500/50 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="url(#instagram-gradient-footer)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="instagram-gradient-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#FD5949', stopOpacity: 1}} />
                        <stop offset="50%" style={{stopColor: '#D6249F', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#285AEB', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="#25D366" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a href="https://shopee.co.id/luxeperfume" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="#EE4D2D" viewBox="0 0 24 24">
                    <path d="M20.995 8.165C20.995 6.523 19.655 5 17.855 5c-1.8 0-3.14 1.523-3.14 3.165 0 .234 0 .468.09.702l-7.38 4.443c-.54-.468-1.26-.702-2.07-.702C3.555 12.608 2 14.015 2 15.89c0 1.874 1.555 3.281 3.355 3.281 1.8 0 3.265-1.407 3.355-3.164l7.29-4.443c.63.585 1.44.936 2.34.936 1.8 0 3.14-1.523 3.14-3.165 0-.117 0-.234-.09-.351l.09-.117-.09-.117c0-.117.09-.234.09-.351v-.234h-.09zm-3.14 1.64c-.72 0-1.35-.585-1.35-1.406 0-.82.63-1.406 1.35-1.406.72 0 1.35.585 1.35 1.406 0 .82-.63 1.406-1.35 1.406zM5.355 17.413c-.72 0-1.35-.585-1.35-1.407 0-.82.63-1.406 1.35-1.406.72 0 1.35.585 1.35 1.406 0 .82-.63 1.407-1.35 1.407z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com/@luxeperfume" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-amber-300 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-0 h-px bg-amber-300 group-hover:w-4 transition-all duration-300"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-amber-300 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-0 h-px bg-amber-300 group-hover:w-4 transition-all duration-300"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#produk" className="text-gray-400 hover:text-amber-300 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-0 h-px bg-amber-300 group-hover:w-4 transition-all duration-300"></span>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-amber-300 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-0 h-px bg-amber-300 group-hover:w-4 transition-all duration-300"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-4 tracking-wide">Contact Info</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 mt-0.5">📧</span>
                  <span>info@luxeperfume.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 mt-0.5">📱</span>
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 mt-0.5">📍</span>
                  <span>Lubuklinggau, South Sumatra<br/>Indonesia</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div className="text-gray-500">
                © {new Date().getFullYear()} <span className="text-amber-300 font-semibold">LUXE PERFUME</span>. All Rights Reserved.
              </div>
              
              <div className="flex gap-6 text-gray-500">
                <a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-amber-300 transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-amber-300 transition-colors">Shipping Info</a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}