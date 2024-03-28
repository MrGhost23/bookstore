import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginUser, registerUser } from "@/store/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import logo from './../Assets/img/Picsart_24-03-23_00-03-06-130.png'
const LogiCannot find module './..n = ({ currentForm }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);

  type FormValues =
    | z.infer<typeof loginSchema>
    | z.infer<typeof registerSchema>;

  const dispatch: AppDispatch = useDispatch();
  const loginSchema = z.object({
    email: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

  const registerSchema = z.object({
    email: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    firstName: z.string().min(1, {
      message: "First name is required.",
    }),
    lastName: z.string().min(1, {
      message: "Last name is required.",
    }),
  });

  const navigate = useNavigate();

  const formSchema = currentForm === "login" ? loginSchema : registerSchema;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues:
      currentForm === "login"
        ? {
            email: "",
            password: "",
          }
        : {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          },
  });

  function onSubmit(values: FormValues) {
    if (currentForm === "login") {
      const loginPromise = dispatch(
        loginUser({ email: values.email, password: values.password })
      ).unwrap();
      toast.promise(loginPromise, {
        loading: "Logging in...",
        success: (data) => {
          form.reset();
          console.log(data);
          return `Logged in successfully, Welcome ${data.user.firstName}`;
        },
        error: (err) => err.message || "Error logging in",
      });
    } else {
      const registerValues = values as {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      };

      const registerPromise = dispatch(registerUser(registerValues)).unwrap();
      toast.promise(registerPromise, {
        loading: "Registering...",
        success: () => {
          form.reset();
          return "Registered successfully";
        },
        error: (err) => err.message || "Error registering",
      });
    }
  }

  return (
    <div className="h-[100vh] flex items-center justify-center w-full">
      <section className="h-full">
        <div className="container h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-40"
                          src={logo}
                          alt="logo"
                        />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Welcome to Eqraa,{" "}
                          {user
                            ? user.firstName + " " + user.lastName
                            : "Guest"}
                          {loading && "Loading..."}
                        </h4>
                      </div>
                      {currentForm === "login" ? (
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-2"
                          >
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="shimaa@example.com"
                                      className=" outline-none"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="password"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Password</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="*********"
                                      className=" outline-none"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button
                              type="submit"
                              className="w-full"
                              style={{
                                background:
                                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                              }}
                            >
                              Login
                            </Button>
                            <FormDescription>
                              Don't have an account?{" "}
                              <Button
                                variant="link"
                                onClick={() => navigate("/register")}
                                className="text-gray-700 -ml-3 hover:no-underline"
                              >
                                Sign up
                              </Button>
                            </FormDescription>
                          </form>
                        </Form>
                      ) : (
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-2"
                          >
                            <div className="flex items-center gap-4 w-full flex-1">
                              <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                  <FormItem className="w-full">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Shimaa"
                                        className=" outline-none"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                  <FormItem className="w-full">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Eloraby"
                                        className=" outline-none"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="shimaa@example.com"
                                      className=" outline-none"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="password"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Password</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="*********"
                                      className=" outline-none"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button
                              type="submit"
                              className="w-full"
                              style={{
                                background:
                                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                              }}
                            >
                              Register
                            </Button>
                            <FormDescription>
                              Already have an account?{" "}
                              <Button
                                variant="link"
                                onClick={() => navigate("/login")}
                                className="text-gray-700 -ml-3 hover:no-underline"
                              >
                                Login
                              </Button>
                            </FormDescription>
                          </form>
                        </Form>
                      )}
                    </div>
                  </div>

                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a bookstore
                      </h4>
                      <p className="text-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
