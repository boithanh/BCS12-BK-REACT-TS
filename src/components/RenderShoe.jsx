// lưu ý function luôn luôn phải có lệnh return

import React from "react";

function RenderShoe() {
  const arrShoe = [
    {
      id: 2,
      name: "vans old school",
      alias: "vans-old-school",
      price: 200,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
      relatedProducts: "[3,2,1]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/van-old-school.png",
    },
    {
      id: 4,
      name: "nike adapt bb",
      alias: "nike-adapt-bb",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "NIKE","category":"NIKE"}]',
      relatedProducts: "[5,6,7]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-adapt-bb.png",
    },
    {
      id: 11,
      name: "nike sp dunk",
      alias: "nike-sp-dunk.png",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "NIKE","category":"NIKE"}]',
      relatedProducts: "[11,10,9]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-sp-dunk.png",
    },
    {
      id: 12,
      name: "adidas prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[13,14,15]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
    {
      id: 13,
      name: "adidas prophere black white",
      alias: "adidas-prophere-black-white",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[12,14,15]",
      feature: true,
      image:
        "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 14,
      name: "adidas prophere customize",
      alias: "adidas-prophere-customize",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[13,15,16]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 15,
      name: "adidas super star red",
      alias: "adidas-super-star-red",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[14,16,17]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-super-star-red.png",
    },
    {
      id: 16,
      name: "adidas swift run",
      alias: "adidas-swift-run",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[15,17,18]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-swift-run.png",
    },
    {
      id: 17,
      name: "adidas tenisky super star",
      alias: "adidas-tenisky-super-star",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[16,18,19]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 18,
      name: "adidas ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[17,19,16]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 19,
      name: "adidas yeezy 350",
      alias: "adidas-yeezy-350",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[16,17,18]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-yeezy-350.png",
    },
  ];

  function render() {
    return arrShoe.map((item, index) => {
      return (
        <div className="render_shoe_item space-y-5">
          {/* hình ảnh  */}
          <img src={item.image} alt="" />
          {/* tên sản phẩm  */}
          <h3 className="font-bold text-[45px]">{item.name}</h3>
          {/* Có thể truyền thẳng vào nhưng không khuyến nghị vì có thể ko đồng bộ dữ liệu */}
          {/* giá tiền  */}
          <p>{item.price}</p>
          {/* nút tương tác  */}
          <button className="py-2 px-5 bg-red-500">Xem ngay</button>
        </div>
      );
    });
  }

  //   return <div>{render()}</div>;
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-3">{render()}</div>
    </div>
  );
}

export default RenderShoe;
