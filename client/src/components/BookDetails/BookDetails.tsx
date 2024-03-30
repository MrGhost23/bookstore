import { FaStar } from "react-icons/fa";
import img from "../../Assets/img/The new science fiction and fantasy books to read this summer.jpeg";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";

const BookDetails = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };
  return (
    <>
      <div className="w-full mx-auto">
        <h3 className="text-center mb-5">Book details</h3>
        <div className="flex justify-center">
          <div className="flex w-full justify-between px-12">
            <Card className="border-none shadow-none my-10">
              <CardContent className="flex justify-cemter align-middle">
                <div className="mr-10">
                  <img
                    src={img}
                    alt="Card Image"
                    className="max-w-48 rounded-lg"
                  />
                </div>
                <div>
                  <p className="title">Summer sons</p>
                  <p className="text-[14px]">By Lee Mandelo's</p>
                  <div className="flex justify-start align-middle my-1 mb-8 ">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        onClick={() => handleClick(index)}
                        color={index < rating ? "#FF8C00" : "gray"}
                        size={16}
                        style={{ cursor: "pointer" }}
                      />
                    ))}
                  </div>

                  <p className="mt-10 mb-4">Product details</p>
                  <div className="flex justify-center align-middle">
                    <div className="mr-10">
                      <p className="mb-2 text-sm">Publisher :</p>
                      <p className="mb-2 text-sm">Publication date :</p>
                      <p className="mb-2 text-sm">Pages :</p>
                      <p className="mb-2 text-sm">Sales rank :</p>
                    </div>
                    <div>
                      <p className="mb-2 text-sm">penguin publishing group</p>
                      <p className="mb-2 text-sm">10/22/2019</p>
                      <p className="mb-2 text-sm">384</p>
                      <p className="mb-2 text-sm">11.663</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="min-w-72 h-60 my-10">
              <CardContent className="mt-5">
                <p className="title">$9.90</p>
                <div className="maincolor flex mb-3">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="translate-y-1"
                  >
                    <path d="M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1080 0 40 40 0 10-80 0zm239-167.6L935.3 372a8 8 0 00-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 00-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 00-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 003-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <p className="ml-1">Free delivery</p>
                </div>
                <div className="flex items-center">
                  <button className="w-10 mx-0 ">
                    <svg
                      className="w-4 h-4 -translate-x-2 translate-y-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 10a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2H5z"
                      />
                    </svg>
                  </button>

                  <p className="text-center mx-2 -translate-y-1">1</p>

                  <button className="w-10">
                    <svg
                      className="w-4 h-4 -translate-x-2 translate-y-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H6a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1z"
                      />
                    </svg>
                  </button>
                </div>

                <button type="button">Add to basket</button>
                <button className="buybtn border border-gray-400 mt-1">
                  Buy
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
