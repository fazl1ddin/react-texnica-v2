import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Contacts } from "./contacts";
import { Logo } from "./logo";
import { Toolbar } from "./toolbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  auth: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  mobile: z.boolean().default(false).optional(),
});

const Header = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      auth: "",
      mobile: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="py-[10px] flex items-center justify-between">
      <Logo />
      <Contacts />
      <Toolbar />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="px-[26.5px]">Войти</Button>
        </DialogTrigger>
        <DialogContent className="w-[370px] sm:max-w-md">
          <DialogHeader className="bg-accent px-[30px] py-5">
            <DialogTitle className="text-start">Вход</DialogTitle>
          </DialogHeader>
          <div className="px-[30px] py-[15px]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="auth"
                  render={({ field }) => (
                    <FormItem className="mt-0">
                      <FormLabel>Эл. почта или телефон</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="auth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Пароль</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p
                  className="text-primary cursor-pointer"
                  style={{ marginTop: "5px" }}
                >
                  Забыли пароль?
                </p>
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="ml-[5px]">
                          Запомнить меня
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full mt-5">
                  Войти
                </Button>
              </form>
            </Form>
          </div>
          <p className="px-[30px] pb-[30px] text-center text-primary cursor-pointer">
            Зарегистрироваться
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export { Header };
