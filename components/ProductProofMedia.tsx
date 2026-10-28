import Image from "next/image";

type ProductProofMediaProps = {
  alt: string;
  caption: string;
  className?: string;
  loading?: "lazy" | "eager";
};

export function ProductProofMedia({ alt, caption, className = "", loading = "eager" }: ProductProofMediaProps) {
  return <figure className={`product-proof-media ${className}`.trim()}>
    <div className="product-proof-media-image">
      <Image src="/media/optimized/matchpulse-worldcup-ranking-crop.webp" alt={alt} width={1200} height={620} sizes="(max-width: 900px) 100vw, 560px" loading={loading} />
    </div>
    <figcaption>{caption}</figcaption>
  </figure>;
}
