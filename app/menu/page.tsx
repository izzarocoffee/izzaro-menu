"use client";

import { useState } from "react";
import { categories, products } from "../data/menu";

type PizzaSize = {
  name: string;
  price: number;
};

type Product = {
  id: string;
  category: string;
  name: string;
  description: string;
  price?: number;
  image?: string;
  sizes?: PizzaSize[];
};

/*
  FOTOĞRAF GÖSTERİLECEK KATEGORİLER
*/
const photoCategories = [
  "wrap",
  "pasta",
  "burger",
  "salad",
  "fajita",
  "snacks",
  "toast",
  "pizza",
  "dessert",
];

/*
  ÜRÜN İSİMLERİNİ NORMALLEŞTİRİYORUZ.
  Böylece Türkçe karakter / büyük-küçük harf
  farklılıkları fotoğraf eşleşmesini bozmaz.
*/
function normalizeName(name: string) {
  return name
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/’/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/*
  ÜRÜN → FOTOĞRAF
*/
const foodImages: Record<string, string> = {
  // =========================
  // WRAP
  // =========================
  "vejeteryan wrap": "/images/vejeteryan wrap.png",
  "tavuklu wrap": "/images/tavuklu wrap.png",
  "et wrap": "/images/et wrap.png",

  // =========================
  // MAKARNA
  // =========================
  arabiatta: "/images/arabitta.png",
  "fettuccine alfredo": "/images/fetticcine alfredo.png",
  spagetti: "/images/spagetti.png",

  // =========================
  // BURGER
  // =========================
  "tavuk burger": "/images/tavuk burger.png",
  "classic burger": "/images/classic burger.png",
  cheeseburger: "/images/cheese burger.png",
  "izzaro burger": "/images/izzaro burger.png",

  // =========================
  // SALATA
  // =========================
  "mevsim salata": "/images/mevsim salata.png",
  "sezar salata": "/images/sezar salata.png",

  // =========================
  // FAJİTA
  // =========================
  "tavuk fajita": "/images/tavuk fajita.png",
  "et fajita": "/images/et fajita.png",
  "tavuklu mantarli krep": "/images/tavuklu mantarlı krep.png",

  // =========================
  // ATIŞTIRMALIK
  // =========================
  cips: "/images/patates kızartması.png",
  "patates kızartması": "/images/patates kızartması.png",
  "sogan halkasi": "/images/soğan halkası.png",
  "bira tabagi": "/images/bira tabağı.png",

  // =========================
  // TOST
  // ÜÇÜ DE AYNI FOTOĞRAFI
  // =========================
  "kasarli tost": "/images/tost.png",
  "karisik tost": "/images/tost.png",
  "tavuklu tost": "/images/tost.png",

  // =========================
  // PİZZA
  // =========================
  "vejeteryan pizza": "/images/vejeteryan pizza.png",
  "tavuklu pizza": "/images/tavuklu pizza.png",
  "karisik pizza": "/images/karışık pizza.png",
  "bbq pizza": "/images/BBQ pizza.png",

  // =========================
  // TATLI
  // =========================
  "cilekli magnolya": "/images/çilekli magnolya.png",
  snickers: "/images/snickers.png",
  "tum pasta cesitleri": "/images/tüm pasta çeşitleri.png",
};

/*
  Ürünün fotoğrafını bulur.
*/
function getFoodImage(productName: string) {
  const normalized = normalizeName(productName);

  return foodImages[normalized];
}

export default function MenuPage() {
  const [selectedSizes, setSelectedSizes] = useState<
    Record<string, number>
  >({});

  const typedProducts = products as Product[];

  function selectPizzaSize(
    productId: string,
    sizeIndex: number
  ) {
    setSelectedSizes((current) => ({
      ...current,
      [productId]: sizeIndex,
    }));
  }

  return (
    <main className="min-h-screen bg-[#062d24] text-[#f5f0df]">

      {/* =====================================
          ÜST BAR
      ===================================== */}
      <header className="sticky top-0 z-50 border-b border-[#d4af37]/20 bg-[#062d24]/95 px-5 py-5 backdrop-blur-md">

        <div className="mx-auto flex max-w-6xl items-center justify-between">

          <div>
            <p className="text-xs tracking-[0.4em] text-[#d4af37]">
              İZZARO
            </p>

            <p className="mt-1 text-[10px] tracking-[0.25em] text-[#f5f0df]/50">
              COFFEE • BAR • SHISHA
            </p>
          </div>

          <a
            href="/"
            className="border border-[#d4af37]/50 px-4 py-2 text-xs tracking-[0.15em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-[#062d24]"
          >
            ANA SAYFA
          </a>

        </div>

      </header>


      {/* =====================================
          BAŞLIK
      ===================================== */}
      <section className="px-5 pb-8 pt-12 text-center">

        <p className="text-xs tracking-[0.45em] text-[#d4af37]">
          İZZARO
        </p>

        <h1 className="mt-3 text-4xl font-light tracking-[0.18em] sm:text-5xl">
          MENÜ
        </h1>

        <div className="mx-auto mt-5 h-px w-20 bg-[#d4af37]" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#f5f0df]/60">
          Özenle seçilmiş kahveler, özel içecekler, seçkin lezzetler
          ve İzzaro imzalı deneyimler.
        </p>

      </section>


      {/* =====================================
          KATEGORİLER
      ===================================== */}
      <nav className="mx-auto max-w-6xl px-5 pb-10">

        <div className="flex gap-3 overflow-x-auto pb-3">

          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 rounded-sm border border-[#d4af37]/30 bg-[#0a392e] px-5 py-3 text-xs tracking-[0.12em] text-[#f5f0df]/80 transition duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#062d24]"
            >
              {category.name}
            </a>
          ))}

        </div>

      </nav>


      {/* =====================================
          MENÜ
      ===================================== */}
      <section className="mx-auto max-w-6xl px-5 pb-20">

        <div className="space-y-16">

          {categories.map((category) => {

            const categoryProducts = typedProducts.filter(
              (product) =>
                product.category === category.id
            );

            if (categoryProducts.length === 0) {
              return null;
            }

            const hasPhotos =
              photoCategories.includes(category.id);

            return (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-32"
              >

                {/* =====================================
                    KATEGORİ BAŞLIĞI
                ===================================== */}
                <div className="mb-7 flex items-center gap-4">

                  <div className="h-px flex-1 bg-[#d4af37]/20" />

                  <div className="text-center">

                    <p className="text-[9px] tracking-[0.4em] text-[#d4af37]/60">
                      İZZARO
                    </p>

                    <h2 className="mt-1 text-xl font-light tracking-[0.12em] text-[#d4af37] sm:text-2xl">
                      {category.name}
                    </h2>

                  </div>

                  <div className="h-px flex-1 bg-[#d4af37]/20" />

                </div>


                {/* =====================================
                    ÜRÜNLER
                ===================================== */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {categoryProducts.map((product) => {

                    const isPizza =
                      category.id === "pizza" &&
                      product.sizes &&
                      product.sizes.length > 0;

                    const selectedSize =
                      selectedSizes[product.id] ?? 0;

                    const currentPrice = isPizza
                      ? product.sizes![selectedSize].price
                      : product.price;

                    const productImage =
                      getFoodImage(product.name);

                    return (
                      <article
                        key={product.id}
                        className="group overflow-hidden rounded-sm border border-[#d4af37]/20 bg-[#0a392e] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/70 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
                      >

                        {/* =====================================
                            FOTOĞRAF
                        ===================================== */}
                        {hasPhotos && (
                          <div className="relative h-56 overflow-hidden bg-[#082f27]">

                            {productImage ? (

                              <img
                                src={productImage}
                                alt={product.name}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                              />

                            ) : (

                              <div className="absolute inset-0 flex items-center justify-center">

                                <div className="text-center">

                                  <div className="mx-auto mb-3 h-px w-10 bg-[#d4af37]/40" />

                                  <p className="text-xs tracking-[0.35em] text-[#d4af37]/40">
                                    İZZARO
                                  </p>

                                  <div className="mx-auto mt-3 h-px w-10 bg-[#d4af37]/40" />

                                </div>

                              </div>

                            )}

                            {/* FOTOĞRAF ÜZERİ GRADIENT */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a392e] via-transparent to-transparent" />

                          </div>
                        )}


                        {/* =====================================
                            ÜRÜN BİLGİSİ
                        ===================================== */}
                        <div className="p-5">

                          <div className="flex items-start justify-between gap-4">

                            <h3 className="text-base font-medium tracking-wide text-[#f5f0df]">
                              {product.name}
                            </h3>

                            <span className="shrink-0 text-sm font-semibold text-[#d4af37]">
                              {currentPrice} TL
                            </span>

                          </div>


                          {/* =====================================
                              PİZZA BOYUTLARI
                          ===================================== */}
                          {isPizza && (
                            <div className="mt-4">

                              <p className="mb-2 text-[9px] tracking-[0.25em] text-[#d4af37]/60">
                                BOYUT SEÇİN
                              </p>

                              <div className="flex gap-2">

                                {product.sizes!.map(
                                  (size, index) => {

                                    const isSelected =
                                      selectedSize === index;

                                    return (
                                      <button
                                        key={size.name}
                                        onClick={() =>
                                          selectPizzaSize(
                                            product.id,
                                            index
                                          )
                                        }
                                        className={`flex-1 border px-2 py-2 text-[10px] tracking-[0.12em] transition duration-300 ${
                                          isSelected
                                            ? "border-[#d4af37] bg-[#d4af37] text-[#062d24]"
                                            : "border-[#d4af37]/30 bg-[#062d24] text-[#f5f0df]/70 hover:border-[#d4af37] hover:text-[#d4af37]"
                                        }`}
                                      >
                                        {size.name}
                                      </button>
                                    );

                                  }
                                )}

                              </div>

                            </div>
                          )}


                          {/* AÇIKLAMA */}
                          <p className="mt-3 text-sm leading-6 text-[#f5f0df]/50">
                            {product.description}
                          </p>

                          <div className="mt-4 h-px w-8 bg-[#d4af37]/60 transition-all duration-300 group-hover:w-16" />

                        </div>

                      </article>
                    );

                  })}

                </div>

              </section>
            );

          })}

        </div>

      </section>


      {/* =====================================
          FOOTER
      ===================================== */}
      <footer className="border-t border-[#d4af37]/20 px-5 py-12 text-center">

        <p className="text-sm tracking-[0.4em] text-[#d4af37]">
          İZZARO
        </p>

        <p className="mt-3 text-[10px] tracking-[0.25em] text-[#f5f0df]/40">
          COFFEE • BAR • SHISHA
        </p>

        <div className="mx-auto mt-6 h-px w-12 bg-[#d4af37]/50" />

        <p className="mt-5 text-[10px] text-[#f5f0df]/30">
          Premium Coffee • Bar • Shisha Experience
        </p>

      </footer>

    </main>
  );
}