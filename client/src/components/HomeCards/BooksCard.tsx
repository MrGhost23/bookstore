import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import img from "../../assets/img/The 7 best Harry Potter covers of all time - The Daily Universe.jpeg";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Book } from "@/types/BookType";
import { Link, useNavigate } from "react-router-dom";

const BooksCard = ({ title, books }) => {
  const navigate = useNavigate();
  // const BooksData=[
  //   {title:"All Books" , books:data},
  //   {title:"Soon Books" , books:soonbooks},
  //   {title:"Best Seller" , books:bestseller}
  // ]
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="px-12 mx-auto">
      <div className="flex justify-between align-middle mb-4">
        <p className="booksline mb-3 font-bold text-[24px] translate-y-1">
          {title}
        </p>
        <div
          className="flex justify-center gap-1 align-middle text-sky-600 text-center mb-3 translate-y-3"
          style={{ cursor: "pointer" }}
        >
          <Link to="/shop" className="font-medium">
            See more
          </Link>{" "}
          <ArrowRightIcon className="translate-y-[0.35rem] size-[18px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {books.map((book: Book) => {
          return (
            <Card
              className=" cursor-pointer"
              onClick={() => navigate(`/shop/${book._id}`)}
              key={book._id}
            >
              <CardHeader className="p-1">
                <CardTitle>
                  <img
                    src={book.image}
                    className="rounded-t-xl"
                    alt={book.title}
                  />
                </CardTitle>
                <CardDescription className="px-2">
                  <div className="flex justify-between align-middle">
                    <p className="title">{book.title}</p>
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="2em"
                      width="2em"
                      style={{ cursor: "pointer" }}
                      className="text-secondary translate-y-1"
                    >
                      <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-bold -my-2 mb-3">{book.author}</p>
                    <p className="my-1 line-clamp-2 mb-4">{book.description}</p>
                  </div>

                  <div className="flex justify-start align-middle my-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        onClick={() => handleClick(index)}
                        color={index < rating ? "#0ea5e9" : "gray"}
                        size={16}
                        style={{ cursor: "pointer" }}
                      />
                    ))}
                  </div>

                  <p className="title">${book.price}</p>

                  <Button className="text-white button full bg-sky-700  hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">
                    Add to basket
                  </Button>
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BooksCard;
