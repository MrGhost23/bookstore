import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from "@/store/slices/bookSlice";
import bookimg from "../assets/img/Picsart_24-03-29_03-07-07-179.png";
import BooksCard from "@/components/HomeCards/BooksCard";
// import BestSeller from "@/components/HomeCards/BestSeller";
// import SoonBoks from "@/components/HomeCards/SoonBooks";
// import BookDetails from "@/components/BookDetails/BookDetails";
import MyCart from "@/components/ShoppingCart/MyCart";
import WishList from "@/components/WishList";
import BookDetailsTest from "@/components/HomeCards/BookDetailsTest";

const Home = () => {
  const books = useSelector((state: RootState) => state.book.books);
  const loading = useSelector((state: RootState) => state.book.loading);
  const error = useSelector((state: RootState) => state.book.error);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  return (
    <>
      <div className="px-8 my-5 bg-sky-100 ">
        <div className="grid grid-cols-1 relative lg:grid-cols-2 px-4 py-8 rounded-md">
          <div className="flex flex-col justify-center align-middle ">
            <h2 className="mb-3">Build your library</h2>
            <p className="mb-3 font-bold">
              Online shop where you can find your favorite book
            </p>
            <button
              type="button"
              className="text-white w-36 bg-sky-700  hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
            >
              Shop now
            </button>
          </div>
          <div className="flex flex-row absolute right-0 -bottom-10 lg:static justify-center">
            <img src={bookimg} className="h-24 lg:h-72" alt="book img" />
          </div>
        </div>
      </div>

      <div className="flex justify-center align-middle my-16">
        {/* <CategorySlider/> */}
      </div>

      <div className="my-16">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {!loading && !error && <BooksCard title="All Books" books={books} />}
      </div>
      {/* <div className="my-16">
        <BestSeller />
      </div>

      <div className="my-16">
        <SoonBoks />
      </div>  */}
    </>
  );
};
export default Home;
