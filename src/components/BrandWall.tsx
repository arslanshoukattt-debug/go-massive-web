"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Portfolio snapshot tiles. Client identities stay confidential, so tiles
// carry category/channel/outcome facts already approved for publication.
// When client logos are cleared for use, add `logo: "/logos/name.png"` to an
// item and the tile renders the logo instead - no component changes needed.
type WallItem = { title: string; detail: string; logo?: string };

// Logo tiles (owner-cleared, Aug 2026) carry soft category labels only -
// growth metrics stay on the anonymous tiles so numbers are never publicly
// attributable to a named client. First 12 entries = the initial wall, so
// logos and metric tiles are interleaved deliberately.
const POOL: WallItem[] = [
  { title: "Hallowood Furniture", detail: "Furniture", logo: "/logos/hallowood.png" },
  { title: "Outdoor & Leisure", detail: "Amazon US · 2.4x revenue in 6 months" },
  { title: "Love & Peanut", detail: "Food & Beverage", logo: "/logos/love-and-peanut.png" },
  { title: "PPC & Retail Media", detail: "200+ accounts managed" },
  { title: "Calzitaly", detail: "Apparel & Hosiery", logo: "/logos/calzitaly.png" },
  { title: "Food & Beverage", detail: "Amazon · +250% sales at 15% TACoS" },
  { title: "Witt", detail: "Consumer Goods", logo: "/logos/witt.png" },
  { title: "Consumer Goods", detail: "5 EU marketplaces · +700% sales" },
  { title: "DBZ Beds", detail: "Home & Furniture", logo: "/logos/dbz-beds.png" },
  { title: "Amazon US & EU", detail: "Full account management" },
  { title: "Bigfoot Bushcraft", detail: "Outdoor & Leisure", logo: "/logos/bigfoot-bushcraft.png" },
  { title: "TikTok Shop", detail: "Emerging-channel growth" },
  { title: "Hot Star Honey", detail: "Food & Beverage", logo: "/logos/hot-star-honey.png" },
  { title: "Home & Furniture", detail: "Amazon · 4x monthly sales" },
  { title: "funSLINGER", detail: "Toys & Outdoor Play", logo: "/logos/funslinger.png" },
  { title: "Walmart Marketplace", detail: "Expansion & operations" },
  { title: "Qnaturals", detail: "Health & Naturals", logo: "/logos/qnaturals.png" },
  { title: "eBay", detail: "Wholesale & white label" },
  { title: "Shopify / DTC", detail: "Storefront & retention" },
  { title: "Outdoor Launch", detail: "Amazon · +300% first-season growth" },
  { title: "Temu", detail: "Marketplace expansion" },
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
          <div className="gm-wall-tile-inner group">
            {tile.logo ? (
              // Fixed 40px-tall frame; fill + object-contain scales any aspect
              // ratio (wide wordmark or square mark) without distortion.
              // Logos render black-and-white and regain colour on tile hover.
              <span className="relative block h-10 w-full max-w-[150px]">
                <Image src={tile.logo} alt={tile.title} fill sizes="150px" className="object-contain object-left grayscale transition-[filter] duration-300 group-hover:grayscale-0" />
              </span>
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
