import CategoryListing from "@/components/CategoryListing";
import { getCategories } from "./api/categories/route";
import { getProducts } from "./api/products/route";
import ProductListing from "@/components/ProductListing";
import Search from "@/components/Search";

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();
  // const allTelevisions = products.filter((product) => product.category_id == 1);
  // const allFridges = products.filter((product) => product.category_id == 2);
  // const allMicrowaves = products.filter((product) => product.category_id == 3);
  // const allLaundry = products.filter((product) => product.category_id == 4);
  // console.log(products);

  return (
    <div className="home-page">
      <Search />
      <ProductListing data={products} title="All Products" headerBg="blue" />
    </div>
  );
}
