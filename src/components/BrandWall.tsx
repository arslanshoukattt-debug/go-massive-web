"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Portfolio snapshot tiles. Client identities stay confidential, so tiles
// carry category/channel/outcome facts already approved for publication.
// When client logos are cleared for use, add `logo: "/logos/name.png"` to an
// item and the tile renders the logo instead - no component changes needed.
type WallItem = { title: string; detail: string; logo?: string };

const POOL: WallItem[] = [
  { title: "Outdoor & Leisure", detail: "Amazon US · 2.4x revenue in 6 months" },
  { title: "Food & Beverage", detail: "Amazon · +250% sales at 15% TACoS" },
  { title: "Consumer Goods", detail: "5 EU marketplaces · +700% sales" },
  { title: "Home & Furniture", detail: "Amazon · 4x monthly sales" },
  { title: "Outdoor Launch", detail: "Amazon · +300% first-season growth" },
  { title: "Amazon US & EU", detail: "Full account management" },
  { title: "Walmart Marketplace", detail: "Expansion & operations" },
  { title: "eBay", detail: "Wholesale & white label" },
  { title: "TikTok Shop", detail: "Emerging-channel growth" },
  { title: "Shopify / DTC", detail: "Storefront & retention" },
  { title: "Temu", detail: "Marketplace expansion" },
  { title: "PPC & Retail Media", detail: "200+ accounts managed" },
  { title: "Creative & A+ Content", detail: "Conversion-first brand content" },
  { title: "Compliance & Health", detail: "Risk handled before it escalates" },
  { title: "Product Launches", detail: "Demand built from day one" },
  { title: "Multi-Market Brands", detail: "US · Europe · beyond" },
];

const TILE_COUNT = 12;
const SWAP_EVERY_MS = 4200;
const SWAP_ANIM_MS = 330;
// stride is coprime with TILE_COUNT so successive swaps move around the grid
const POSITION_STRIDE = 5;

export function BrandWall() {
  const [tiles, setTiles] = useState<WallItem[]>(() => POOL.slice(0, TILE_COUNT));
  const [swapping, setSwapping] = useState<number | null>(null);
  const nextItem = useRef(TILE_COUNT);
  const nextPosition = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      const position = nextPosition.current % TILE_COUNT;
      nextPosition.current += POSITION_STRIDE;
      setSwapping(position);
      timeout = setTimeout(() => {
        setTiles((prev) => {
          const next = [...prev];
          // skip pool entries already visible so the wall never shows duplicates
          let candidate = POOL[nextItem.current % POOL.length];
          let guard = 0;
          while (prev.some((t) => t.title === candidate.title) && guard < POOL.length) {
            nextItem.current += 1;
            candidate = POOL[nextItem.current % POOL.length];
            guard += 1;
          }
          nextItem.current += 1;
          next[position] = candidate;
          return next;
        });
        setSwapping(null);
      }, SWAP_ANIM_MS);
    }, SWAP_EVERY_MS);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []);

  return (
    <div className="gm-wall" aria-label="A rotating selection of Go Massive engagement categories, channels, and outcomes">
      {tiles.map((tile, index) => (
        <div key={index} className={`gm-wall-tile ${swapping === index ? "gm-wall-tile--out" : ""}`}>
          <div className="gm-wall-tile-inner">
            {tile.logo ? (
              <Image src={tile.logo} alt={tile.title} width={150} height={48} className="h-10 w-auto object-contain" />
            ) : (
              <b>{tile.title}</b>
            )}
            <span>{tile.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
