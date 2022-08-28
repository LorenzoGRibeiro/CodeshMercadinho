import { count } from "rxjs";
import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tags";

export const foods: Food[] = [
  {
    id: "1",
    name: "Alface",
    price: 1.8,
    description: "Alface lisa",
    image:"assets/img/alface-lisa.jpg",
    category: ["Verdura"],
    restaurant: "Ceasa"
  },
  {
    id: "2",
    name: "Cebolinha",
    price: 2.5,
    description: "Cebolinha",
    image:"assets/img/cebolinha.jpg",
    category: ["Tempero"],
    restaurant: "Ceasa"
  },
  {
    id: "3",
    name: "Alface Crespa",
    price: 1.8,
    description: "Alface lisa",
    image:"assets/img/alface-crespa.jpg",
    category: ["Verdura"],
    restaurant: "Ceasa"
  },
  {
    id: "4",
    name: "Salsinha",
    price: 3.5,
    description: "Salsinha",
    image:"assets/img/salsinha.jpg",
    category: ["Tempero"],
    restaurant: "Ceasa"
  },
  {
    id: "5",
    name: "Batata",
    price: 7,
    description: "Batata, R$ 7,00 o kg",
    image:"assets/img/batata.jpg",
    category: ["Verdura"],
    restaurant: "Ceasa"
  },
  {
    id: "6",
    name: "Cenoura",
    price: 6.5,
    description: "Cenoura, R$ 6,50 o Kg",
    image:"assets/img/cenoura.jpg",
    category: ["Verdura"],
    restaurant: "Ceasa"
  },
  {
    id: "7",
    name: "Laranja",
    price: 5,
    description: "Laranja suculenta, R$ 5,00 o Kg",
    image:"assets/img/laranja.jpg",
    category: ["Fruta"],
    restaurant: "Ceasa"
  },
  {
    id: "8",
    name: "Limão",
    price: 5.00,
    description: "Limão galego, R$ 5,00 o Kg",
    image:"assets/img/limao.jpg",
    category: ["Fruta"],
    restaurant: "Ceasa"
  },
  {
    id: "9",
    name: "Banana",
    price: 10,
    description: "Banana madura, boa para fritura",
    image:"assets/img/banana.jpg",
    category: ["Fruta"],
    restaurant: "Ceasa"
  },
  {
    id: "10",
    name: "Maçã",
    price: 10,
    description: "Maçã, R$ 10,00 o Kg",
    image:"assets/img/maca.jpg",
    category: ["Fruta"],
    restaurant: "Ceasa"
  },
  {
    id: "11",
    name: "Pera",
    price: 10,
    description: "Pera doce, e suculenta, R$ 10,00 o Kg",
    image:"assets/img/pera.jpg",
    category: ["Fruta"],
    restaurant: "Ceasa"
  },
  {
    id: "12",
    name: "Amora",
    price: 10,
    description: " Amora, R$ 10,00 o Kg",
    image:"assets/img/amora.jpg",
    category: ["Fruta"],
    restaurant: "Ceasa"
  },
  {
    id: "13",
    name: "Biscoito-casadinho",
    price: 23.62,
    description: "Biscoito-casadinho, feito com leite e goiabada, R$ 23,62 o Kg",
    image:"assets/img/biscoito-casadinho.jpg",
    category: ["Biscoito", 'Doce'],
    restaurant: "Ceasa"
  },
  {
    id: "14",
    name: "Biscoito de polvilho",
    price: 5,
    description: "Biscoito de polvilho, feito com polvilho azedo",
    image:"assets/img/biscoito-de-polvilho.jpg",
    category: ["Biscoito"],
    restaurant: "Vale da Prata"
  },
  {
    id: "15",
    name: "Queijo Minas Frescal",
    price: 52,
    description: "Queijo canastra, 1kg",
    image:"assets/img/queijo-minas.jpg",
    category: ['Queijo', 'Laticínio'],
    restaurant: "Ceasa"
  },
  {
    id: "16",
    name: "Goiabada",
    price: 10,
    description: "Doce feito de goiaba",
    image:"assets/img/goiabada.jpg",
    category: ["Doce"],
    restaurant: "Ceasa"
  },
  {
    id: "17",
    name: "Doce de leite",
    price: 25.5,
    description: "A very tasty pizza",
    image:"assets/img/doce-de-leite.jpg",
    category: ["Doce"],
    restaurant: "Doces da vovó"
  },
  {
    id: "18",
    name: "Oregano",
    price: 15.5,
    description: "Tempero feito de orégano, bom para temperar pizzas",
    image:"assets/img/oregano.jpg",
    category: ["Tempero"],
    restaurant: "Fazenda do retiro"
  },
  {
    id: "19",
    name: "Açafrao em pó",
    price: 25.8,
    description: "Tempero feito de açafrão, usado para dar cor e sabor a comida",
    image:"assets/img/acafrao-em-po.jpg",
    category: ["Tempero"],
    restaurant: "Jatobá organicos"
  },
  {
    id: "20",
    name: "Mel",
    price: 25.5,
    description: "Mel da melhor qualidade, extraido na região de Minas Gerais",
    image:"assets/img/mel.jpg",
    category: ["Doce"],
    restaurant: "Ceasa"
  }
];

export const tags: Tag[] = [
  {name:'Todos', count:20},
  {name:'Doce', count:3},
  {name:'Fruta', count:6},
  {name:'Verdura', count:4},
  {name:'Tempero', count:4},
  {name:'Biscoito', count:2}
]
