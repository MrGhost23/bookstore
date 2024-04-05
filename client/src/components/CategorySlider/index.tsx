
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { GiBrodieHelmet } from "react-icons/gi";
import { FaChildren } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { GiShamblingZombie } from "react-icons/gi";
import { FaFantasyFlightGames } from "react-icons/fa";
import { TbSailboat } from "react-icons/tb";

const CategorySlider = () => {
  return (
<>

<Carousel className="w-full max-w-sm">
<p className="text-xl">Categories</p>
      <CarouselContent className="-ml-1">
      
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-orange-500 text-white">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold text-center flex flex-col items-center justify-center">
                  <GiBrodieHelmet  />
                  <p>Fiction</p>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1 ">
              <Card className="bg-orange-300 text-white">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <span className="text-2xl font-semibold flex flex-col items-center justify-center">
                  <FaChildren />
                  <p>Children's</p>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1 ">
              <Card className="bg-orange-700 text-white">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <span className="text-2xl font-semibold flex flex-col items-center justify-center">
                  <GiSelfLove />
                  <p>Romance</p>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1 ">
              <Card className="bg-orange-950 text-white">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <span className="text-2xl font-semibold flex flex-col items-center justify-center">
                  <GiShamblingZombie />
                  <p>Horro</p>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1 ">
              <Card className="bg-orange-300 text-white">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <span className="text-2xl font-semibold flex flex-col items-center justify-center">
                  <FaFantasyFlightGames />
                  <p>Fantasy</p>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1 ">
              <Card className="bg-orange-700 text-white">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <span className="text-2xl font-semibold flex flex-col items-center justify-center">
                  <TbSailboat />
                  <p>Adventure</p>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</>
  );
};

export default CategorySlider;
