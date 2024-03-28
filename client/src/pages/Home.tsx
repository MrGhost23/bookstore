import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from '@/store/slices/bookSlice';


const Home = () => {

  const books = useSelector((state: RootState) => state.book.books)
  console.log(books)

  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(fetchBook())
  },[])



  return <div>
  HOME
  </div>;
};
export default Home;
