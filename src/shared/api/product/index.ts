import { ProductType, Tag } from "../../model/product";

function getRandom(min: number, max: number) {
  return Math?.floor(Math?.random() * (max - min)) + min;
}

type GetProductProps = {
  id: number;
  select?: Array<keyof ProductType>;
};

const names = [
    "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
    // "Гироскутер Smart Balance",
    // "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
  ],
  prices = [
    5400,
    // 6000,
    // 13690
  ],
  sales = [
    // 30,
    20,
    // 0, 0, 0, 0
  ],
  tags: Tag[] = ["new", "bestseller"];

const getProduct = async (props: GetProductProps): Promise<ProductType> => {
  const start = getRandom(0, tags.length);
  if (props)
    return new Promise((res) => {
      setTimeout(() => {
        res({
          description: {
            content:
              "Описание гироскутера" +
              "Вопрос безопасности всегда стоит очень остро, в этом году производител…",
            title: names[getRandom(0, names.length)],
          },
          image: ["/public/image 18.png"],
          name: names[getRandom(0, names.length)],
          overallRates: getRandom(0, 5),
          price: prices[getRandom(0, prices.length)],
          sale: sales[getRandom(0, sales.length)],
          specification: {
            speed: 25,
            productName: "Сигвей",
            typeP: "Сигвей",
            power: 300,
            charge: 36,
            frontBrake: "Дисковый механический",
            cruise: "Есть",
            power1: 300,
            power2: 300,
            charge1: 36,
            frontBrake1: "Дисковый механический",
            cruise1: "Есть",
            power3: 300,
            charge2: 26,
            frontBrake2: "Дисковый механический",
            cruise2: "Есть",
            frontBrake3: "-",
          },
          tags: ["new", "bestseller"],
          // tags.slice(start, getRandom(start, tags.length)),
          waterproof: Boolean(getRandom(0, 10)),
          ratesCount: getRandom(0, 100),
        });
      }, 700);
    });
  else
    return Promise.reject({
      message: "Incorrect creditionals",
    });
};

export { getProduct, type Tag };
