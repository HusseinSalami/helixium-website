import Image from "next/image";

type ProductProofMediaProps = {
  alt: string;
  caption: string;
  className?: string;
};

export function ProductProofMedia({ alt, caption, className = "" }: ProductProofMediaProps) {
  return <figure className={`product-proof-media ${className}`.trim()}>
    <div className="product-proof-media-image">
      <Image src="/media/optimized/matchpulse-worldcup-ranking.webp" alt={alt} width={1200} height={750} sizes="(max-width: 900px) 100vw, 560px" />
    </div>
    <figcaption>{caption}</figcaption>
  </figure>;
}
