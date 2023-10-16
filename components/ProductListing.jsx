import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductListing({ data, title, headerBg }) {
  return (
    <section className="category-listing product-listing">
      <div className="section-header" style={{ background: headerBg }}>
        <h2>{title}</h2>
      </div>
      <div className="grid-col-4">
        {data.map((product) => {
          return (
            <Link href="#" className="grid-card" key={product.id}>
              <div className="category-image">
                <Image src={product.image} fill alt={product.title} />
              </div>
              <h2 className="category-title">{product.title}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
