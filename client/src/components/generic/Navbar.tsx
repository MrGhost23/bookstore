import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/img/logo.png";
import { logout, selectUser } from "@/store/slices/userSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AppDispatch } from "@/store/store";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-white">
      <div className="mx-auto px-8 py-4 flex items-center">
        <div className="mr-auto md:w-48 flex-shrink-0 text-xl font-bold ">
          {/* <img src={logo} alt="logo" className="size-24" /> */}
          <Link to="/" className="text-primary cursor-pointer text-3xl">
            Eqraa
          </Link>
        </div>

        <div className="w-full py-2 m-auto max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
          <Select>
            <SelectTrigger className="w-[180px] shadow-none outline-none focus:outline-none border-none focus-visible:ring-0 focus:ring-0  focus-visible:outline-none focus:border-none">
              <SelectValue
                placeholder="All Categories"
                className="outline-none focus:outline-none border-none focus:border-none focus-visible:ring-0 focus:ring-0 focus-visible:outline-none"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="allcategories">All Categories</SelectItem>
            </SelectContent>
          </Select>
          <input
            className="border-l w-full border-none outline-none bg-transparent font-semibold text-sm pl-4"
            type="text"
            placeholder="I'm searching for ..."
          />
          <svg
            className="ml-auto h-5 px-4 text-gray-500"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
            ></path>
          </svg>
        </div>

        <nav className="contents">
          <ul className="ml-4 xl:w-48 lg:flex hidden items-center justify-end">
            <li className="ml-2 lg:ml-4 relative inline-block">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none border-none focus:outline-none cursor-pointer ring-0 focus:ring-0 focus-visible:outline-none">
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500 outline-none border-none focus:outline-none cursor-pointer ring-0 focus:ring-0 focus-visible:outline-none"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="user"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    ></path>
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <Link className="" to="/wishlist">
                <div className="absolute -top-1 right-0 z-10 text-white bg-secondary text-xs font-bold px-1 py-0.5 rounded-full">
                  {user?.wishlist?.length || 0}
                </div>
                <svg
                  className="h-9 lg:h-10 p-2 text-gray-500"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
              </Link>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <Link className="" to="/cart">
                <div className="absolute -top-1 right-0 z-10 bg-secondary text-xs font-bold px-1 py-0.5 rounded-full text-white">
                  {user?.cart?.length || 0}
                </div>
                <svg
                  className="h-9 lg:h-10 p-2 text-gray-500"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="shopping-cart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
          <div>
            <Sheet>
              <SheetTrigger>
                {" "}
                <FaBars className="lg:hidden text-2xl outline-none border-none focus:outline-none text-gray-700 cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="w-[70%]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div>Cart</div>
                <div>Wishlist</div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
      <hr />
    </header>
  );
};
export default Navbar;
