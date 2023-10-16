import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryListing({ data }) {
  return (
    <section className="category-listing">
      <div className="section-header">
        <h2>Shop By categories</h2>
      </div>
      <div className="grid-col-4">
        {data.map((category) => {
          return (
            <Link href="#" className="grid-card" key={category.id}>
              <div className="category-image">
                <Image src={category.image} fill alt={category.title} />
              </div>
              <h2 className="category-title">{category.title}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
