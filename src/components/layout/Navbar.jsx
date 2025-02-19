import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const category = [
  {
    name: "Indian",
    url: "/category/indian",
  },
  {
    name: "Greek",
    url: "/category/greek",
  },
  {
    name: "Korean",
    url: "/category/korean",
  },
  {
    name: "Thai",
    url: "/category/thai",
  },

  {
    name: "European",
    url: "/category/european",
  },
  {
    name: "Caribbean",
    url: "/category/caribbean",
  },
];

function Navbar() {
  return (
    <>
      <header className="bg-rose-100 pt-6">
        <section className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
            <Link to="/">
              <h1 className="text-3xl font-bold cursor-pointer">Recipe Finder</h1>
            </Link>

            <SearchBar />
          </div>
          <nav className="flex items-center gap-2 md:gap-8">
            {category.map((data) => (
              <NavLink key={data.name} to={data.url}>
                <p className="py-4 border-b-2 border-b-transparent hover:border-b-black cursor-pointer duration-200">
                  {data.name}
                </p>
              </NavLink>
            ))}
          </nav>
        </section>
      </header>
    </>
  );
}

export default Navbar;
