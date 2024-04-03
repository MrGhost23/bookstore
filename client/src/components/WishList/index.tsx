import { FaStar } from "react-icons/fa";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import img from "../../assets/img/The 7 best Harry Potter covers of all time - The Daily Universe.jpeg";
import { useState } from "react";

const WishList = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (index) => {
        setRating(index + 1);
    };

    return (
        <>
            <div className="px-12 mx-auto">
                <div className="my-8">
                    <h1 className="text-3xl text-center lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white ">
                        Favourites
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {Array.from({ length: 6 }, (_, index) => (
                        <Card className="" key={index}>
                            <CardHeader className="p-1">
                                <CardTitle>
                                    <img src={img} className="rounded-t-xl" alt="" />
                                </CardTitle>
                                <CardDescription>
                                    <div className="flex justify-between align-middle">
                                        <p className="title">Harry Potter</p>
                                    </div>
                                    <div>
                                        <p className="my-1">
                                            The story of Harry Potter and <br /> the wizarding world
                                            will live forever
                                        </p>
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
                                    <p className="title">$7.90</p>
                                    <Button className="text-white full bg-sky-700  hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">
                                        Add to basket
                                    </Button>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WishList;
