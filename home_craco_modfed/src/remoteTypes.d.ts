///<reference types="react" />

////////// HOME

declare module "home/Header" {
  const HomeHeader: React.ComponentType;
  export default HomeHeader;
}

declare module "home/Footer" {
  const HomeFooter: React.ComponentType;
  export default HomeFooter;
}

declare module "home/MainLayout" {
  const HomeMainLayout: React.ComponentType;
  export default HomeMainLayout;
}

declare module "home/HomeContent" {
  const HomeContent: React.ComponentType;
  export default HomeContent;
}

////////// PDP
declare module "pdp/PDPContent" {
  const PDPContent: React.ComponentType;
  export default PDPContent;
}

////////// CART
declare module "cart/CartContent" {
  const CartContent: React.ComponentType;
  export default CartContent;
}

declare module "cart/MiniCart" {
  const MiniCart: React.ComponentType;
  export default MiniCart;
}

declare module "cart/Login" {
  const CartLogin: React.ComponentType;
  export default CartLogin;
}

declare module "cart/cart" {
  const addToCart: any;
  const useLoggedIn: any;
  export { addToCart, useLoggedIn };
}
