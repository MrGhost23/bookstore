import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PiHeartBold } from "react-icons/pi";
import { FaRegStar, FaStar } from "react-icons/fa";
import useAxios from "@/hooks/useAxios";
import { useEffect } from "react";
import { Book } from "@/types/BookType";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchBook } from "@/store/slices/bookSlice";

const Ui = () => {
  // const {
  //   data: books,
  //   loading,
  //   error,
  //   runAxios,
  // } = useAxios({
  //   url: "http://localhost:5000/book",
  // });

  const books = useSelector((state: RootState) => state.book.books);

  const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  // }, []);

  return (
    <div className="px-8 py-4">
      {/* <Button variant="destructive" onClick={() => toast("this is toast")}>
        Click me
      </Button> */}
      <h1 className="font-bold text-black text-xl mb-4">All Books</h1>
      <Button onClick={() => dispatch(fetchBook())}>Click Me</Button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full">
        {books.map((book: Book) => (
          <Card key={book._id} className="rounded-lg border w-full shadow-lg">
            <CardHeader className="mx-0 p-0 rounded-t-lg">
              <img
                src={book.image}
                alt="image"
                className="rounded-t-xl w-full"
              />
            </CardHeader>
            <CardContent className="pt-4 w-full space-y-2 relative flex flex-col items-center px-2.5 justify-between">
              <div className="flex items-center justify-between w-full">
                <CardTitle className="w-[70%] text-wrap">
                  {book.title}
                </CardTitle>
                <PiHeartBold className="fill-sky-500 text-sky-500" />
              </div>
              <CardDescription className="font-semibold line-clamp-2">
                {book.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start mx-0 px-2 space-y-2">
              <div className="flex text-yellow-500">
                <FaStar className="w-[18px] h-[18px]" />
                <FaStar className="w-[18px] h-[18px]" />
                <FaStar className="w-[18px] h-[18px]" />
                <FaStar className="w-[18px] h-[18px]" />
                <FaRegStar className="w-[18px] h-[18px]" />
              </div>
              <p className="font-bold">$ {book.price}</p>
            </CardFooter>
            <div className="block w-full pb-2 px-2">
              <Button
                variant="outline"
                className="border w-full border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white"
              >
                Add to the basket
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Ui;
