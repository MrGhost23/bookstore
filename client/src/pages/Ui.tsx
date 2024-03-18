import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import { PiHeart, PiHeartBold } from "react-icons/pi";
import { FaRegStar, FaStar } from "react-icons/fa";

const Ui = () => {
  return (
    <div className="px-8 py-4">
      {/* <Button variant="destructive" onClick={() => toast("this is toast")}>
        Click me
      </Button> */}
      <h1 className="font-bold text-black text-lg mb-4">Popular</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="rounded-lg border w-full shadow-lg">
            <CardHeader className="mx-0 p-0 rounded-t-lg">
              <img
                src="https://book-store-show.netlify.app/images/white-nights.jpg"
                alt="image"
                className="rounded-t-xl w-full"
              />
            </CardHeader>
            <CardContent className="pt-4 w-full space-y-2 relative flex flex-col items-center px-2.5 justify-between">
              <div className="flex items-center justify-between w-full">
                <CardTitle className="w-[70%] text-wrap">
                  White Nights
                </CardTitle>
                <PiHeartBold className="fill-sky-500 text-sky-500" />
              </div>
              <CardDescription className="font-semibold line-clamp-2">
                White Nights, is a classic short story by Fyodor Dostoevsky, one
                this is a deep and moving story of a young man battling with his
                inner restlessness.
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
              <p className="font-bold">$ 7.90</p>
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
