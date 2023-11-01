// console.log("Loại bỏ các phần tử trùng nhau trong mảng");
// const arr = [1, 2, 3, 1, 3, 4, 5, 4, 3, 3]

// const newArr: any = []
// for (let i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) {
//     newArr.push(arr[i])
//   }
//   console.log(newArr)
// }

// console.log("kiemtrasonaycophaisolonnhattheochieudocvachieunganghaykhong ");
// const arr1 = [
//   [2, 3, 8, 11, 1, 4],

//   [9, 8, 2, 10, 2, 1],

//   [8, 99, 4, 1, 8, 2],

//   [3, 4, 5, 6, 7, 8],

//   [22, 11, 7, 2, 4, 9],

//   [1, 10, 9, 2, 3, 8],

//   [1, 13, 9, 5, 4, 8],
// ];

// const check = (row: number, col: number, arr1: number[][]) => {
// const number = arr1[row][col];
// console.log(number);
// console.log(arr1[row]);
// let max = arr1[row][0];
// arr1[row].forEach((i) => {
//   if (i > max) {
//     max = i;
//   }
// });
// if (max === number) {
// console.log("Lon nhat hang");
// } else {
// console.log("Ko Lon nhat hang");
//   return false;
// }
// console.log("Tong so hang: " + arr1.length);
// const cols = [];
// for (let i = 0; i < arr1.length; i++) {
//   cols.push(arr1[i][col]);
// }
// console.log(cols);
// let maxCol = cols[0];
// cols.forEach((i) => {
//   if (i > maxCol) {
//     maxCol = i;
//   }
// });
// console.log({ maxCol, number });

// if (maxCol === number) {
// console.log("Lon nhat cot");
// } else {
// console.log("Ko Lon nhat cot");
//     return false;
//   }
//   return true;
// };

// const arr2 = [
//   [13, 28, 0, 20, 3, 22],

//   [12, 5, 9, 20, 22, 0],

//   [9, 6, 16, 5, 3, 4],

//   [8, 27, 15, 16, 8, 9],
// ];

// console.log(check(3,1,arr2));

// let count = 0
// for (let i = 0; i < arr2.length; i++) {
//   const element = arr2[i];
//   for (let j = 0; j < element.length; j++) {
//     const data = element[j];
//     if(check(i, j, arr2)){
//       count++
//     }
//     console.log(data, check(i, j, arr2));
//   }
// }
// console.log({count});

// const checkNumberRow = (arr: any) => {
//   var bigRow = [];
//   for (var i = 0; i < arr.length; i++) {
//     var largestNumber = arr[i][0];
//     for (var j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNumber) {
//         largestNumber = arr[i][j];
//       }
//     }
//     bigRow[i] = largestNumber;
//   }
//   return bigRow;
// };
// console.log(checkNumberRow(arr2));

// const checkNumberCol = (arr: any) => {
//   var bigCol = [];
//   for (let i = 0; i < arr.length; i++) {
//       bigCol.push(arr[i][0]);
//     }
//   console.log(bigCol);
//   let maxCol = bigCol[0];
//   bigCol.forEach((i) => {
//     if (i > maxCol) {
//       maxCol = i;
//     }
//   });
//   console.log(maxCol);
//   return maxCol
// };
// console.log(checkNumberCol(arr2));

// const kiemtrasonaycophaisolonnhattheochieudocvachieunganghaykhong = () => {
// const number = array[0][3]
// console.log(array)
// console.log(number);
// for(var x =0; x < array.length; x++) {
//     if(number <= array[x]) {
//       return number
//     }else {
//       return console.log("123134")
//     }
// }
// console.log(number)
//   const number = [0][0]
//   for(var y =0; y< arr1.length; y++) {
//     for(var x=0; x< arr1.length; x++) {

//     }
//   }
// }
// const number = arr1[0][3]
// // console.log(number)
// for(var x = 0; x < arr1[0].length; x++) {
//     if(number > arr1[0]) {
//       console.log(':',number)
//     } else {
//       console.log('12345')
//     }
// }
// function timMax(arr: any) {
//   // for(let x = 0; x < arr[0]?.length; x++) {
//   //   let max = arr[0][3]
//   //   if(max >= arr[0][x]) {
//   //     console.log(max)
//   //     max = arr[0][x]
//   //   } else {
//   //     console.log("12345")
//   //   }
//   //   return max
//   // }
//   let number = arr[0][2];
//   for (let i = 0; i < arr[0].length; i++) {
//     if (number > arr[0][i]) {
//       // console.log(arr[0][i])
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
//   return number

//   // var max = [];
//   // for (var i = 0; i < arr[i]?.length; i++) {
//   //   var maxNumber = arr[0][3];
//   //   if (arr[0][i] < maxNumber) {
//   //     console.log(maxNumber);
//   //   } else {
//   //     console.log("1234567");
//   //   }
//   //   max = maxNumber;
//   // }
//   // return max;

//   // var maxTotal = [];
//   // for (var i = 0; i < arr.length; i++) {
//   //   var largestNumber = arr[i][0];
//   //   for (var j = 0; j < arr[i].length; j++) {
//   //     if (arr[i][j] > largestNumber) {
//   //       largestNumber = arr[i][j];
//   //     }
//   //   }
//   //   maxTotal[i] = largestNumber;
//   // }
//   // return maxTotal;
// }
// console.log(timMax(arr1));

// console.log(kiemtrasonaycophaisolonnhattheochieudocvachieunganghaykhong())

// for(var i=0; i < arr1.length; i++) {
//   for(var j = 0; j < arr1[i].length; j++) {

//     console.log(arr1[i][j])
//   }
// }

// const findMax = (array:any) => {
//   let maxX = [0][0]
//   for(var i=0; i < array[4].length; i++) {
//     for(var j = 0; j < array[i].length; j++) {
//       if(array[1][j] > maxX) {
//         maxX = array[4][j]
//       }
//     }
//   }
// let maxY = [0][0]
// for(var i=0; i < array.length; i++) {
//   for(var j=0; j<array[1].length; j++ ) {
//     if(array[i][1] > maxY) {
//       maxY = array[i][1]
//     }
//   }
// }
// console.log(maxY)
// return(maxY)
// console.log(maxX)
// return maxX;
// }
// console.log(findMax(arr1))
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  IProduct,
  fetchProducts,
  getImageBySku,
  listImages,
} from "./productSlice";
import ProductItem from "./ProductItem";
import { Row } from "antd/es/grid";
import styles from "./Product.module.css";
import Sizes from "../sizes/Sizes";
import Cart from "../cart/Cart";
import { selectSizes } from "../sizes/sizesSlice";
import { addToCart } from "../cart/cartSlice";

type Props = {};

const Product = (props: Props) => {
  const dispatch = useAppDispatch();
  const size = useAppSelector(selectSizes);
  const products: IProduct[] = useAppSelector(
    (state) => state.product.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const sizesActive = size
    .map((item: any) => (item.active ? item.text : ""))
    .filter((i) => i !== "");

  const newProducts: IProduct[] = [];
  products.forEach((i) => {
    // console.log({pName: i.title,availableSizes:i.availableSizes,sizesActive});
    if (sizesActive.length !== 0) {
      i.availableSizes.forEach((size) => {
        if (sizesActive.includes(size)) {
          //tim xem mang newProducts co chua san pham nay chua
          const product = newProducts.find((p) => p.id === i.id);
          if (!product) {
            newProducts.push(i);
          }
        }
      });
    } else {
      newProducts.push(i);
    }
  });

  // add to cart
  function AddToCartHandler(product: any) {
    dispatch(addToCart(product));
  }

  return (
    <>
      <Row>
        <div style={{ width: "30%", display: "flex" }}>
          <Sizes />
        </div>
        <div style={{ width: "60%" }}>
          {
            <p className={styles.header}>
              {newProducts.length} Product(s) found
            </p>
          }
          <Row>
            {newProducts?.map((i) => (
              <ProductItem
                key={i.id}
                title={i.title}
                price={i.price}
                image={getImageBySku(i.sku, listImages) || ""}
                isFreeShipping={i.isFreeShipping}
                onAdd={() => AddToCartHandler(i)}
              />
            ))}
          </Row>
        </div>
        <div
          style={{
            width: "10%",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Cart />
        </div>
      </Row>
    </>
  );
};

export default Product;
