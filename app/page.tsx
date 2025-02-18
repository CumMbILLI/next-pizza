import { Container, Filters, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { SortPopup } from "@/components/shared/sort-popup";

const MOCK_PRODUCTS_PIZZA = [
  {
    id: 1,
    imageUrl: "/pizza/pizza-1.avif",
    name: "Сырный цыпленок",
    description:
      "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
    price: 395,
  },
  {
    id: 2,
    imageUrl: "/pizza/pizza-1.avif",
    name: "Диабло",
    description:
      "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла",
    price: 449,
  },
  {
    id: 3,
    imageUrl: "/pizza/pizza-1.avif",
    name: "Чизбургер-пицца",
    description:
      "Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла",
    price: 399,
  },
  {
    id: 4,
    imageUrl: "/pizza/pizza-1.avif",
    name: "Кола-барбекю",
    description:
      "Пряная говядина, пикантная пепперони, острые колбаски чоризо, соус кола-барбекю, моцарелла и фирменный томатный соус",
    price: 589,
  },
];

const MOCK_PRODUCTS_COMBOBOX = [
  {
    id: 1,
    imageUrl: "/combo/combo-1.avif",
    name: "Додо Бокс",
    description:
      "Набор юного космонавта, который легко настроить по вкусу ребенка: две закуски и напиток на выбор. В каждом комбо игрушка, а в нашем приложении игра-компаньон",
    price: 479,
  },
  {
    id: 2,
    imageUrl: "/combo/combo-1.avif",
    name: "Чикен бокс",
    description:
      "Картошка без курицы, как курица без картошки — лучше вместе. Выбирайте куриные наггетсы, кусочки или крылья барбекю и заказывайте сразу в комбо с пряной картошечкой и соусом.",
    price: 309,
  },
  {
    id: 3,
    imageUrl: "/combo/combo-1.avif",
    name: "Завтрак на двоих",
    description:
      "Горячий завтрак для двоих. 2 любые закуски и 2 напитка на выбор",
    price: 499,
  },
  {
    id: 4,
    imageUrl: "/combo/combo-1.avif",
    name: "Четыре в одном",
    description:
      "Если хочется всего понемногу. Маленькая пицца, закуска, напиток и соус. Цена комбо зависит от выбранных продуктов и может быть увеличена",
    price: 739,
  },
];

const MOCK_PRODUCTS_BREAKFAST = [
  {
    id: 1,
    imageUrl: "/breakfast/breakfast-1.avif",
    name: "Омлет с томатами в пите",
    description:
      "Легкий и питательный завтрак: омлет из печи с томатами и моцареллой в пшеничной пите. Удобно брать с собой",
    price: 179,
  },
  {
    id: 2,
    imageUrl: "/breakfast/breakfast-1.avif",
    name: "Омлет с беконом в пите",
    description:
      "Горячий сытный омлет с поджаристой корочкой, бекон, моцарелла и томаты в пшеничной пите. Удобно взять с собой",
    price: 219,
  },
  {
    id: 3,
    imageUrl: "/breakfast/breakfast-1.avif",
    name: "Омлет с ветчиной и грибами в пите",
    description:
      "Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла в пшеничной пите. Удобно взять с собой",
    price: 219,
  },
  {
    id: 4,
    imageUrl: "/breakfast/breakfast-1.avif",
    name: "Омлет с пепперони в пите",
    description:
      "Для тех, кто не пропускает завтраки — омлет с поджаристой корочкой, пикантная пепперони, томаты и моцарелла в пшеничной пите. Удобно взять с собой",
    price: 219,
  },
];

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title size="lg">Все пиццы</Title>

        <div></div>
      </Container>

      <div className="sticky top-0 z-10 bg-white">
        <Container>
          <div className="flex justify-between items-center mt-3">
            <Categories />
            <SortPopup />
          </div>
        </Container>
      </div>

      <Container className="flex mt-9 gap-20 pb-12">
        <Filters />

        <section className="flex-1">
          <ProductsGroupList
            title="Пиццы"
            name="pizza"
            products={MOCK_PRODUCTS_PIZZA}
            categoryId={0}
          />

          <ProductsGroupList
            title="Комбо"
            name="combo"
            products={MOCK_PRODUCTS_COMBOBOX}
            categoryId={1}
          />

          <ProductsGroupList
            title="Завтрак"
            name="breakfast"
            products={MOCK_PRODUCTS_BREAKFAST}
            categoryId={2}
          />
        </section>
      </Container>
    </>
  );
}
