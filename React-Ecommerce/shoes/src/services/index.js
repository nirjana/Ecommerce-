import axios from "axios";
import config from "../config.js";

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const fetchProducts = async (query) => {
  const url = `${config.apiUrl}${config.endpoints.products}`;
  const data = await axios.get(url);
  console.log("popop",url,data)
  console.log("data",data);
  return data.data.data;
};

// export const fetchProductsById = async (id) => {
//   const url = `${config.apiUrl}${config.endpoints.products}/${id}`;
//   const data = await axios.get(url);
//   return data.data.data[0];
// };

// export const AddProduct= async(addData) => {
//   try {
//     console.log("inside",addData);
//     const url = `${config.apiUrl}${config.endpoints.products}`;
//     const data = await axios.post(url,addData, { headers: authHeader() }
//     );
//     console.log("Added data",data.data.data);
//     return data.data.data;
//   }
//    catch (err) {
//     console.log("yehi err",err);
//     return err.response.data;
//   }
// };

// export const EditProduct= async(EditData,id) => {
//   try {
//     const url = `${config.apiUrl}${config.endpoints.product}`;
//     const data = await axios.put(interpolate(url, { id }), EditData, { headers: authHeader() }
//     );
//     console.log("edited data",data.data.data);
//     return data.data.data;
//   }
//    catch (err) {
//      console.log("yehi details",err.response.data.details);
//     return err.response.data;
//   }
// };

// export const deleteProduct = async (id) => {
//   try{
//   const url = `${config.apiUrl}${config.endpoints.product}`;
//   const data = await axios.delete(interpolate(url, { id }), { headers: authHeader() });
//   console.log("deleted data",data);
//   return data.data.data;}
//   catch (err) {
//     console.log("yehi err",err);
//    return err.response.data;
//  }
// };
