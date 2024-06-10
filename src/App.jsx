import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCart } from './Features/cartSlice';
import Cart from './Components/Cart';
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "../iphone9.png",
        "https://www.igyaan.in/wp-content/uploads/2018/08/1iphones2.jpg",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Untitled-9.jpeg",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/iPhone_91.png?size=690:388"
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "../iphoneX.png",
        "https://images.indianexpress.com/2017/09/iphone-x-200.jpg",
        "https://images-cdn.ubuy.co.in/646fa80aa41d0f16c4001881-new-in-sealed-box-apple-iphone-x-256gb.jpg",
        "https://www.apple.com/newsroom/images/product/iphone/standard/iPhone_X_family_line_up_big.jpg.large.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: [
        "../universe.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMmHVwpNvWzkh9sEHijyxdjmbmRaeC-ZkuHJn04DIVLnIsaE70y2gy5XwNLH9z10ySSE&usqp=CAU",
        "https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800",
        "https://pbs.twimg.com/media/Dr2wz4AU4AEXQeN.jpg"
      ]

    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "../oppo.png",
        "https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v2/v1/assets/kvr-1920.png",
        "https://resize.indiatvnews.com/en/resize/newbucket/400_-/2021/04/oppo-f19-1617703431.jpg",
        "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f19-0.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "huawei.png",
        "https://m.media-amazon.com/images/I/61jJeZBliWL._AC_UF1000,1000_QL80_.jpg",
        "https://static.toiimg.com/thumb/msid-68583996,width-1280,height-720,resizemode-4/68583996.jpg",
        "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30/P30_black.png"
      ],
    },
  ];
  useEffect(() => {
    dispatch(setCart(products));
  }, [dispatch, products]);

  return (
    <div>
      <Cart />
    </div>
  );
};

export default App;