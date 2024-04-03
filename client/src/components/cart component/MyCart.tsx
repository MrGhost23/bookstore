
import img from '../../Assets/img/The 7 best Harry Potter covers of all time - The Daily Universe.jpeg'
import { Button } from '../ui/button';





const MyCart = () => {


    return (
        <>
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                    <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
                    </h2>
                    <div className="hidden lg:grid grid-cols-2 py-6">
                        <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                        <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                            <span className="w-full max-w-[200px] text-center">Delivery Charge</span>
                            <span className="w-full max-w-[260px] text-center">Quantity</span>
                            <span className="w-full max-w-[200px] text-center">Total</span>
                        </p>
                    </div>
                    {Array.from({ length: 2 }, (_, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                            <div
                                className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                <div className="img-box"><img src={img} alt="perfume bottle image" className="" /></div>
                                <div className="pro-data w-full max-w-sm ">
                                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">Harry potter
                                    </h5>
                                    <p
                                        className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                        The story of Harry Potter and the wizarding world
                                        will live forever</p>
                                    <h6 className="font-medium text-lg leading-8 text-primary  max-[550px]:text-center">$10.00</h6>
                                </div>
                            </div>
                            <div
                                className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                                <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                                    $15.00 <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery
                                        Charge)</span></h6>
                                <div className="flex items-center w-full mx-auto justify-center">
                                    <Button
                                        className="group rounded-l-full px-6 py-[29px] border border-gray-200 flex items-center justify-center bg-primary shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-darksky">
                                        <svg className="stroke-white transition-all duration-500 group-hover:stroke-white"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                            fill="none">
                                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </Button>
                                    <span className="border-y -translate-y-[3px] -translate-x-1 border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent">1</span>
                                    <Button
                                        className="group rounded-r-full px-6 py-[29px] border border-gray-200 flex items-center justify-center bg-primary shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-darksky">
                                        <svg className="stroke-white transition-all duration-500 group-hover:stroke-white"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                            fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </Button>
                                </div>
                                <h6
                                    className="text-primary font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                                    $120.00</h6>
                            </div>
                        </div>
                    ))}
                    <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                        <div className="flex items-center justify-between w-full mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                            <h6 className="font-semibold text-xl leading-8 text-gray-900">$360.00</h6>
                        </div>
                        <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                            <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                            <h6 className="font-semibold text-xl leading-8 text-gray-900">$45.00</h6>
                        </div>
                        <div className="flex items-center justify-between w-full py-6">
                            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                            <h6 className="font-manrope font-medium text-2xl leading-9 text-primary">$405.00</h6>
                        </div>
                    </div>
                    <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                        <Button variant="default" className="button rounded-full w-full max-w-[280px] py-8 text-center text-xl justify-center items-center bg-primary hover:bg-darksky ">
                            Continue to Payment <svg className="ml-2 translate-y-[2.6px]" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                fill="none">
                                <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyCart