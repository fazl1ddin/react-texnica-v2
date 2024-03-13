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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/shared/api";
import { Link } from "@tanstack/react-router";

const singInSchema = z.object({
  creditionals: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  save: z.boolean().default(false).optional(),
});

const SingInForm = () => {
  const form = useForm<z.infer<typeof singInSchema>>({
    resolver: zodResolver(singInSchema),
    defaultValues: {
      save: true,
    },
  });

  function onSubmit(values: z.infer<typeof singInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    mutate(values);
  }

  const { mutate, isPending, data } = useMutation({
    mutationKey: ["auth-login"],
    mutationFn: login,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="creditionals"
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
          name="password"
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
        <Link className="text-primary cursor-pointer mt-[5px] block">
          Забыли пароль?
        </Link>
        <FormField
          control={form.control}
          name="save"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="ml-[5px]">Запомнить меня</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-5" isLoading={isPending}>
          Войти
        </Button>
      </form>
    </Form>
  );
};

const singUpSchema = z.object({
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  mail: z.string().min(2, {
    message: "E-mail must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const SingUpForm = () => {
  const form = useForm<z.infer<typeof singUpSchema>>({
    resolver: zodResolver(singUpSchema),
  });

  function onSubmit(values: z.infer<typeof singUpSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { mutate, isPending, data } = useMutation({
    mutationKey: ["auth-login"],
    mutationFn: login,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem className="mt-0">
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Эл. почта</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Придумайте пароль</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-[10px] text-sm leading-[18px]">
          Регистрируясь, вы соглашаетесь с&nbsp;
          <Link>пользовательским соглашением</Link>
        </p>
        <Button
          type="submit"
          className="w-full mt-[10px]"
          isLoading={isPending}
        >
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  );
};

export { SingInForm, SingUpForm };
