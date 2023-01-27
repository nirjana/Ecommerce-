import * as productController from "./productController";
import * as productService from "../services/productServices";

jest.mock("../services/productServices");

describe("Product Controller", () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      body: {
        name: "Test Product",
        price: 10.99,
        description: "This is a test product"
      },
      params: {
        id: "123"
      }
    };
    res = {
      json: jest.fn()
    };
    next = jest.fn();
  });

  describe("createProduct", () => {
    it("should call createProduct service", async () => {
      productService.createProduct.mockResolvedValue("Created Product");
      await productController.createProduct(req, res, next);
      expect(productService.createProduct).toHaveBeenCalledWith(req.body);
    });

    it("should return created product", async () => {
      productService.createProduct.mockResolvedValue("Created Product");
      await productController.createProduct(req, res, next);
      expect(res.json).toHaveBeenCalledWith("Created Product");
    });
  });

  describe("getAllProducts", () => {
    it("should call getAllProducts service", async () => {
      productService.getAllProducts.mockResolvedValue(["Product 1", "Product 2"]);
      await productController.getAllProducts(req, res, next);
      expect(productService.getAllProducts).toHaveBeenCalledWith(req.params);
    });

    it("should return all products", async () => {
      productService.getAllProducts.mockResolvedValue(["Product 1", "Product 2"]);
      await productController.getAllProducts(req, res, next);
      expect(res.json).toHaveBeenCalledWith(["Product 1", "Product 2"]);
    });
  });

  describe("getProductDetails", () => {
    it("should call getProductDetails service", async () => {
      productService.getProductDetails.mockResolvedValue("Product Details");
      await productController.getProductDetails(req, res, next);
      expect(productService.getProductDetails).toHaveBeenCalledWith(req.params.id);
    });

    it("should return product details", async () => {
      productService.getProductDetails.mockResolvedValue("Product Details");
      await productController.getProductDetails(req, res, next);
      expect(res.json).toHaveBeenCalledWith("Product Details");
    });
  });

  describe("updateProduct", () => {
    it("should call updateProduct service", async () => {
      productService.updateProduct.mockResolvedValue("Updated Product");
      await productController.updateProduct(req, res, next);
      expect(productService.updateProduct).toHaveBeenCalledWith(req.params.id, req.body);
    });
  })
})