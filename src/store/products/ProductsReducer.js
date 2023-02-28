import {
  ADDPRODUCT,
  ADDTOCART,
  CHANGEVIEW,
  DECREASEFROMCART,
  INCREASEFROMCART,
  REMOVEFROMCART,
} from "./actionTypes";
// {
//     id: 1,
//     name: "Hasaner Virginity",
//     category: "Sexual Item",
//     imageURL:
//       "https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/330166683_728002748710556_5956630312998201613_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFLTdHjniG9M6ztcvmrXdgjTAatye5-CpZMBq3J7n4KllaXn1UqkQud_7HOuF6BS6sQyZe9xJ5Rv8Q3RLTNDj0A&_nc_ohc=efjn5n35KUYAX9drrl7&_nc_ht=scontent.frjh1-1.fna&oh=00_AfC4F51JdIeRJ9elfVYTLcg-_2OkZieSfyUM5FX0d3nEPA&oe=64030CD2",
//     price: 1000,
//     quantity: 10,
//   },
//   {
//     id: 2,
//     name: "Messi Tshirt",
//     category: "Clothing",
//     imageURL:
//       "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-away-stadium-shirt-2022-23-kids-with-messi-30-printing_ss4_p-13324901+u-bejaujdeh0mf8o7kdr7e+v-3ca6ae678c074ba3b043cfd7bd61150b.jpg?_hv=2&w=340",
//     price: 1000,
//     quantity: 23,
//   },
const initialState = {
  products: [],
  cart: {
    cartCount: 0,
    items: [],
    billing: {
      total: 0,
    },
  },
  view: "home",
};
export const productsReucer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      const id =
        state.products.length <= 0
          ? 0
          : parseInt(state.products[state.products.length - 1].id) +1;
      const obj = {
        id,
        ...action.payload.product,
      };
      return {
        ...state,
        products: [...state.products, obj],
      };
    case ADDTOCART:
      const selectedItem = state.products.filter(
        (item) => item.id == action.payload.id
      );

      if (selectedItem[0].quantity > 0) {
        const productOnCart = state.cart.items.filter((i) => {
          return i.id == action.payload.id;
        });
        const isNewProduct = productOnCart.length <= 0;
        let newCartItems = state.cart.items;
        if (isNewProduct) {
          newCartItems = [
            ...state.cart.items,
            {
              ...selectedItem[0],
              addedQuantity: 1,
              calculatedPrice: parseInt(selectedItem[0].price),
            },
          ];
        } else {
          newCartItems = state.cart.items.map((i) => {
            if (i.id == selectedItem[0].id) {
              i.addedQuantity = i.addedQuantity + 1;
              i.calculatedPrice = i.calculatedPrice + parseInt(i.price);
            }
            return i;
          });
        }

        let total = newCartItems.reduce(
          (totalPrice, item) => totalPrice + parseInt(item.calculatedPrice),
          0
        );
        // total += parseInt(selectedItem[0].price);
        return {
          ...state,
          products: state.products.map((item) => {
            if (item.id == action.payload.id) {
              item.quantity -= 1;
            }
            return item;
          }),
          cart: {
            ...state.cart,
            items: newCartItems,
            billing: {
              ...state.cart.billing,
              total: total,
            },
            cartCount: state.cart.cartCount + 1,
          },
        };
      } else {
        return state;
      }
    case DECREASEFROMCART:
      return {
        ...state,
        products: state.products.filter((i) => {
          if (i.id == action.payload.id) {
            i.quantity = i.quantity + 1;
          }
          return i;
        }),
        cart: {
          ...state.cart,
          items: state.cart.items.filter((i) => {
            if (i.id == action.payload.id) {
              if (i.addedQuantity > 1) {
                i.addedQuantity = i.addedQuantity - 1;
                i.calculatedPrice = Number(i.calculatedPrice) - Number(i.price);
              } else {
                return false;
              }
            }
            return i;
          }),
          cartCount: state.cart.cartCount - 1,
          billing: {
            total:
              state.cart.billing.total -
              state.cart.items.filter((i) => i.id == action.payload.id)[0]
                .price,
          },
        },
      };
    case INCREASEFROMCART:
      return {
        ...state,
        products: state.products.filter((i) => {
          if (i.id == action.payload.id) {
            i.quantity = i.quantity >= 1 ? i.quantity - 1 : i.quantity;
          }
          return i;
        }),
        cart: {
          ...state.cart,
          items: state.cart.items.filter((i) => {
            if (i.id == action.payload.id) {
              i.addedQuantity = i.addedQuantity + 1;
              i.calculatedPrice = Number(i.calculatedPrice) + Number(i.price);
            }
            return i;
          }),
          cartCount: state.cart.cartCount + 1,
          billing: {
            total:
              state.cart.billing.total +
              state.cart.items.filter((i) => i.id == action.payload.id)[0]
                .price,
          },
        },
      };
    case REMOVEFROMCART:
      
      return {
        ...state,
        products: state.products.filter((item, index) => {
          if (item.id == action.payload.id) {
            item.quantity =
              item.quantity +
              state.cart.items.filter((i) => i.id == item.id)[0].addedQuantity;
          }
          return item;
        }),
        cart: {
          ...state.cart,
          items: state.cart.items.filter((i) => i.id != action.payload.id),
          cartCount:
            state.cart.cartCount -
            state.cart.items.filter((i) => i.id == action.payload.id)[0]
              .addedQuantity,
          billing: {
            total:
              state.cart.billing.total -
              state.cart.items.filter((i) => i.id == action.payload.id)[0]
                .calculatedPrice,
          },
        },
      };
    case CHANGEVIEW:
      return {
        ...state,
        view: action.payload.name,
      };
    default:
      return state;
  }
};
export default productsReucer;
