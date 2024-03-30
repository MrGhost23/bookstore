import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from '@/store/slices/bookSlice';
import bookimg from '../Assets/img/Picsart_24-03-29_03-07-07-179.png'
import BooksCard from "@/components/booksCard/BooksCard";
import BestSeller from "@/components/Best Seller/BestSeller";
import SoonBoks from "@/components/soonbooks/SoonBooks";
import BookDetails from "@/components/BookDetails/BookDetails";

const Home = () => {

  const books = useSelector((state: RootState) => state.book.books)
  console.log(books)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBook())
  }, [])



  return <>
    <div className="container mt-20 bg-orange-100">
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col justify-center align-middle">
          <h2 className="mb-3">Build your library</h2>
          <p className="mb-3 font-bold">Online shop where you can find your favorite book</p>
          <button type="button" className="text-white w-36 bg-orange-700  hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Shop now</button>
        </div>
        <div className="flex flex-row justify-center">
          <img src={bookimg} className="h-96" alt="book img" />
        </div>
      </div>
    </div>

    <div className="flex justify-center align-middle my-16">

      {/* <CategorySlider/> */}
    </div>

    <div className="my-16">
      <BooksCard />
    </div>

    <div className="my-16">
      <BestSeller />
    </div>

    <div className="my-16">
      <SoonBoks />
    </div>

    {/* <div className="my-20">
      <BookDetails />
    </div> */}
  </>;
};
export default Home;
