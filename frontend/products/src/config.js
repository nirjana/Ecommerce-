console.log(process.env);

const config = {
  apiUrl: process.env.REACT_APP_API_URL,

  endpoints: {
    products: "products",
    product: "products/:id",
    customers:"customers",
    customer:"customers/:id",
    orders:"orders",
    order:"orders/:id"
  },
};

export default config;