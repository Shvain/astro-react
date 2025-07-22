interface Item {
  title: string;
  price: string;
  image: string;
  rating: number;
  link: string;
}

const MockData: Item[] = [
  {
    title: "ワイヤレスイヤホン Pro",
    price: "¥12,800",
    image: "/heratemoji.png",
    rating: 4.8,
    link: "#product-1"
  },
  {
    title: "スマートウォッチ Series X",
    price: "¥24,800",
    image: "/heratemoji.png",
    rating: 4.6,
    link: "#product-2"
  },
  {
    title: "Bluetoothスピーカー Mini",
    price: "¥8,900",
    image: "/heratemoji.png",
    rating: 4.7,
    link: "#product-3"
  },
  {
    title: "モバイルバッテリー 20000mAh",
    price: "¥3,980",
    image: "/heratemoji.png",
    rating: 4.5,
    link: "#product-4"
  },
  {
    title: "USB-C ケーブル 2m",
    price: "¥1,580",
    image: "/heratemoji.png",
    rating: 4.3,
    link: "#product-5"
  },
  {
    title: "ワイヤレス充電器",
    price: "¥5,800",
    image: "/heratemoji.png",
    rating: 4.4,
    link: "#product-6"
  },
];

export { 
  MockData,
  type Item,
};
