import Image from "next/image";
import { Reveal } from "./Reveal";

export function BrandShowcase({ brands }: { brands: string[][] }) {
  return <Reveal className="client-showcase"><p>Some of the brands we’ve worked with.</p><div className="brand-wall">{brands.map(([name, file]) => <div key={file}><Image src={`/logos/${file}.png`} alt={name} width={150} height={64} sizes="150px" /></div>)}</div></Reveal>;
}
