export default [
  {
    id: 1,
    name: "Espresso",
    image: require("../../assets/coffees/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg"),
    price: "2.00",
    description:
      "Corto y denso.\nUn café espresso es un café molido de manera muy fina, a través del cual pasa una determinada cantidad de agua cuya temperatura es cercana al punto de ebullición.",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Doppio",
    image: require("../../assets/coffees/nathan-dumlao-ikU3J1nr52w-unsplash.jpg"),
    price: "4.01",
    description:
      "Doble espresso, fuerte e intenso.\nUn doppio es un café espresso hecho con dos cargas, extraído utilizando un filtro de café doble. Esto resulta en 60 ml de bebida, el doble de un espresso convencional. También es llamado estándar doble y es un estándar para juzgar la calidad de un barista en competencia. La palabra doppio significa 'doble' en italiano.",
    categoryId: 1,
  },
  {
    id: 3,
    name: "Long Black",
    image: require("../../assets/coffees/nathan-dumlao-nBJHO6wmRWw-unsplash.jpg"),
    price: "3.05",
    description:
      "Doble espresso largo.\nUn Long Black son dos espressos que se vierten sobre 3/4 de agua de una taza de 180ml, esta receta es muy parecida al café americano con la diferencia que los espressos se vierten encima del agua para retener la crema de los cafés espressos.",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Short Black",
    image: require("../../assets/coffees/robbie-down-LI8inyHnm_A-unsplash.jpg"),
    price: "3.00",
    description:
      "Espresso largo, bajo cuerpo.\nUn Short Black es un espresso con 3/4 de agua de una taza de 90ml.",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Flat White",
    image: require("../../assets/coffees/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg"),
    price: "4.00",
    description:
      "Doble espresso con leche, intenso.\nEl flat white es una bebida de café inventada en Australia en la década de 1980. Se prepara agregando una capa fina de leche caliente o microespuma (leche vaporizada con pequeñas burbujas y una consistencia cremosa) en un café espreso, simple o doble. Es similar al tradicional cappuccino o al café con leche aunque de menor volumen y, por lo tanto, con una mayor proporción de café que de leche (más cercano a un cortado), y la leche es más suave permitiendo que el espreso domine en sabor.",
    categoryId: 2,
  },
  {
    id: 6,
    name: "Cappuccino",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "5.00",
    description:
      "Espresso con leche, cremoso.\nEl cappuccino es una bebida nacida en Italia, preparada con café espresso y leche montada con vapor para darle cremosidad. Un capuchino se compone de 125 ml de leche y 25 ml de café espresso.\nLa característica del cappuccino se la da el café espresso, la textura y temperatura de la leche, ya que esta no debe pasar de los 65 °C. La técnica del barista para dar volumen a la leche es introduciendo, por medio de vapor a presión, minúsculas burbujas de aire que le otorgan una textura cremosa.",
    categoryId: 2,
  },
  {
    id: 7,
    name: "Latte",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Espresso con leche, suave y dulce.\nEl café latte es el hermano mayor del capuchino, donde todo gira en torno a la espuma suave y sedosa. Normalmente, el café latte se prepara con una o dos dosis de espresso (1/3 de la bebida) y 2/3 de leche calentada con vapor, con una pequeña capa (alrededor de 1 cm) de espuma de leche. La textura de un café latte es muy importante, ya que aporta esa bella apariencia a la bebida.",
    categoryId: 2,
  },
  {
    id: 8,
    name: "Piccolo",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Espresso cortado con leche.\nUna parte de espresso y dos partes de leche texturizada con una capa de espuma sedosa en la parte superior. Más específicamente, un shot de espresso, de unos 20-30 ml, con 40-60 ml de leche.",
    categoryId: 2,
  },
  {
    id: 9,
    name: "Macchiato",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Espresso corto manchado con espuma latte.\nCafé Macchiato significa literalmente café manchado. Vendría a ser un café espresso que se ha cortado con leche para reducir el amargor. En un café macchiato la leche es la menor proporción de la bebida que te vas a tomar ya que simplemente va a manchar tu café espresso.",
    categoryId: 2,
  },
  {
    id: 10,
    name: "Mocha",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Espresso con leche y cacao dulce.\nUn café mocha es una variante del café con leche. Como este, suele llevar un tercio de espresso y dos tercios de leche vaporizada, pero se añade una parte de chocolate.",
    categoryId: 2,
  },
  {
    id: 11,
    name: "Té",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "El té es el resultado de infusionar hojas y brotes de la planta Camellia sinensis. Se consigue un gusto fresco, con un toque de amargor y ligeramente áspero que ha hecho que esta infusión se haya convertido a lo largo de la historia en la bebida más habitual en todos los confines del mundo, sólo superada por el agua.",
    categoryId: 3,
  },
  {
    id: 12,
    name: "Té con Leche",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "El té con leche es, simplemente, té con leche añadida. Esto crea un sabor más suave y endulza ligeramente el té. Es una forma popular de servir té en muchas partes del mundo y es una manera fácil de preparar una taza de té diferente.",
    categoryId: 3,
  },
  {
    id: 13,
    name: "Té Helado",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "El té helado (o iced tea en inglés) es el té preparado en infusión caliente (de la forma normal en que preparamos el té) pero servido frío o con hielo.",
    categoryId: 3,
  },
  {
    id: 14,
    name: "Nutellatte",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "Café latte con sabor Nutella.",
    categoryId: 4,
  },
  {
    id: 15,
    name: "Vainilla Latte",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "Café latte con sabor vainilla.",
    categoryId: 4,
  },
  {
    id: 16,
    name: "Chocolate Caliente",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "El chocolate contiene compuestos que pueden mejorar el estado de ánimo y reducir los niveles de estrés y ansiedad.",
    categoryId: 4,
  },
  {
    id: 17,
    name: "Caramel Latte",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "Café latte con sabor caramelo.",
    categoryId: 4,
  },
  {
    id: 18,
    name: "Bon o Bon Latte",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "Café latte con crema Bon o Bon.",
    categoryId: 4,
  },
  {
    id: 19,
    name: "Café Helado",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Con hielo, intenso.\nEl café helado es una variante fría del café bebido normalmente caliente.",
    categoryId: 5,
  },
  {
    id: 20,
    name: "Latte Helado",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Espresso, leche y hielo, suave.\nA diferencia del tradicional, esta bebida se sirve fría acompañada de hielo.",
    categoryId: 5,
  },
  {
    id: 21,
    name: "Chocolate Helado",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "Espresso con leche, cacao y hielo, dulce.",
    categoryId: 5,
  },
  {
    id: 22,
    name: "Latte Helado Tucán",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "Doble espresso con leche y hielo, intenso.",
    categoryId: 5,
  },
  {
    id: 23,
    name: "Especial Tucán",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "Doble espresso sobre dos bochas de helado.",
    categoryId: 5,
  },
  {
    id: 24,
    name: "Licuado + Frutas de estación",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Con agua, jugo o leche.\nLos licuados de frutas son una opción saludable y deliciosa para satisfacer los antojos de alimentos dulces y también son una excelente manera de obtener una porción adicional de frutas en la dieta.",
    categoryId: 6,
  },
  {
    id: 25,
    name: "Yogurt + Melange de Frutas de estación",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "El yogurt con frutas es una opción popular como desayuno o como merienda, ya que es una fuente de proteínas, calcio y otros nutrientes importantes. Además, las frutas aportan sabor y nutrientes adicionales al yogurt, lo que lo convierte en una opción saludable y deliciosa.",
    categoryId: 6,
  },
  {
    id: 26,
    name: "Jugo de naranja",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "El jugo de naranja es una fuente rica de vitamina C y otros nutrientes como el potasio, el ácido fólico y la tiamina. También es una bebida popular debido a su sabor dulce y refrescante.",
    categoryId: 7,
  },
  {
    id: 27,
    name: "Limonada",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Además de ser refrescante, el jugo de limón contiene vitamina C y otros nutrientes que pueden proporcionar algunos beneficios para la salud, como mejorar la digestión y fortalecer el sistema inmunológico.",
    categoryId: 7,
  },
  {
    id: 28,
    name: "Limonada con menta y jengibre",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "La menta y el jengibre agregan un sabor y aroma fresco y picante a la limonada, y también tienen beneficios para la salud. La menta puede ayudar a aliviar la indigestión y el jengibre tiene propiedades antiinflamatorias y antioxidantes que pueden ayudar a mejorar la salud en general.",
    categoryId: 7,
  },
  {
    id: 29,
    name: "Muffin",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "Pequeño pastelillo individual.",
    categoryId: 8,
  },
  {
    id: 30,
    name: "Brownie",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Pastel de chocolate que se caracteriza por ser denso y tener una textura suave y húmeda.",
    categoryId: 8,
  },
  {
    id: 31,
    name: "Budín",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Postre que se hace con una mezcla de ingredientes como huevos, leche, azúcar, pan o bizcochos y otros ingredientes adicionales, como frutas, frutos secos... La mezcla se hornea en un molde y se sirve en rebanadas.",
    categoryId: 8,
  },
  {
    id: 32,
    name: "Medialuna",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Las medialunas se hacen con una masa de pan similar a la de los croissants, que se dobla y se enrolla en forma de media luna. La masa se puede endulzar con azúcar y se puede agregar mantequilla para darle un sabor más rico.",
    categoryId: 8,
  },
  {
    id: 33,
    name: "Galleta",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Las galletas son un bocadillo popular que se puede disfrutar en cualquier momento del día.",
    categoryId: 8,
  },
  {
    id: 34,
    name: "Tortilla",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description: "Tipo de pan hecho con harina, agua, aceite y sal.",
    categoryId: 8,
  },
  {
    id: 35,
    name: "Bizcochos",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Los bizcochos se pueden disfrutar en el desayuno o como merienda y se pueden comer solos o con mermelada, dulce de leche o queso crema. También se pueden disfrutar con café o té.",
    categoryId: 8,
  },
  {
    id: 36,
    name: "Tiramisú",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "El nombre 'tiramisú' significa 'levántame' o 'hazme feliz' en italiano, debido a su combinación de sabores y texturas, que hacen que sea un postre delicioso y satisfactorio. Se sirve frío y es un postre elegante y sofisticado.",
    categoryId: 8,
  },
  {
    id: 37,
    name: "Croissant con jamón y queso",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Croissant cortado por la mitad, relleno con jamón y queso y luego calentado.",
    categoryId: 8,
  },
  {
    id: 38,
    name: "Sandwich de pan de campo con jamón y queso",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "El pan de campo es un tipo de pan tradicional de Argentina, Uruguay y Paraguay. Es un pan rústico que se caracteriza por su forma redonda y plana y su textura densa y masticable.",
    categoryId: 8,
  },
  {
    id: 39,
    name: "Bocha de Helado",
    image: require("../../assets/coffees/taylor-franz-GJogrGZxKJE-unsplash.jpg"),
    price: "1.99",
    description:
      "Acompañá tu pedido con una bocha de helado adicional.",
    categoryId: 9,
  },
];
