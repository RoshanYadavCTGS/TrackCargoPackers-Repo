"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Check } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Relocation Photos" },
    { id: "fleet", label: "Container Fleet" },
    { id: "packing", label: "4-Layer Packing" },
    { id: "loading", label: "Rigging & Loading" },
    { id: "vehicles", label: "Car & Bike Transit" },
    { id: "warehousing", label: "Warehousing & Staging" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        selectedPhotoIndex === 0 ? filteredItems.length - 1 : selectedPhotoIndex - 1
      );
    }
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        selectedPhotoIndex === filteredItems.length - 1 ? 0 : selectedPhotoIndex + 1
      );
    }
  };

  const currentPhoto =
    selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex]
      ? filteredItems[selectedPhotoIndex]
      : null;

  return (
    <div className="bg-surface py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4" />
            <span>Field Operations Gallery ({galleryItems.length} Verified Photos)</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight">
            Our Relocation Operations in Action
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Authentic photographs from our actual household moves, multi-car carriers, two-wheeler wrapping, container loading, and warehousing facilities.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const count =
                cat.id === "all"
                  ? galleryItems.length
                  : galleryItems.filter((g) => g.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedPhotoIndex(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? "bg-navy text-white shadow-md"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-base text-navy group-hover:text-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed flex-grow">
                  {item.caption}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Photo
                  </span>
                  <span className="font-semibold text-slate-600">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer z-50"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevPhoto}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextPhoto}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-4xl w-full bg-navy-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative my-auto max-h-[calc(100vh-2rem)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[45vh] sm:h-[55vh] md:h-[500px] w-full bg-black shrink-0">
              <Image
                src={currentPhoto.image}
                alt={currentPhoto.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>

            <div className="p-4 sm:p-6 bg-navy-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-orange uppercase tracking-wider">
                    {currentPhoto.category}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-xs text-slate-400">{currentPhoto.date}</span>
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                  {currentPhoto.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {currentPhoto.caption}
                </p>
              </div>

              <div className="text-xs text-slate-400 font-mono shrink-0">
                Photo {(selectedPhotoIndex ?? 0) + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
