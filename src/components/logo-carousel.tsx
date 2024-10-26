"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import kinsleaf from "../app/images/kinsleaf.png";

interface Logo {
  src: StaticImageData;
  alt: string;
}

interface LogoCarouselProps {
  logos?: Logo[];
  autoPlayInterval?: number;
}

export default function LogoCarousel({
  logos = [{ src: kinsleaf, alt: "Kinsleaf" }],
  autoPlayInterval = 3000,
}: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + logos.length) % logos.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex justify-center items-center h-32">
            <Image
              src={logos[currentIndex].src}
              alt={logos[currentIndex].alt}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={prevSlide}
            aria-label="Previous logo"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={nextSlide}
            aria-label="Next logo"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
