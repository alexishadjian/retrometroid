import request from 'supertest';
import app from '../src/app';
import { describe, it, expect } from '@jest/globals';

// Test datas
const testOptionData = {
  option_type: 'Color',
  option_description: 'Red',
  option_subcategory_id: '000000000000000000000000',
};

const testProductData = {
  name: 'Example Product test',
  price_initial: '19.99',
  option_id: [],
};

const testSubcategoryData = {
  color_name: 'Red',
  color_hexadecimal: '#FF0000',
  option_subcategory_id: [],
};

describe('API Tests', () => {
  // Describe block for Product Routes
  describe('Product Routes', () => {
    // Test for getting all products
    it('should get all products', async () => {
      const res = await request(app).get('/api/products').expect(200);
      expect(res.body).toBeInstanceOf(Array);
    });

    // Test for creating a new product
    it('should create a new product', async () => {
      const res = await request(app)
        .post('/api/products')
        .send(testProductData)
        .expect('Content-Type', /json/)
        .expect(201);
      expect(res.body.name).toBe(testProductData.name);
    });

    // Test for validation failure when name is missing
    it('should not create a product without name', async () => {
      const productData = { ...testProductData, name: '' };
      const res = await request(app)
        .post('/api/products')
        .send(productData)
        .expect(400);
      expect(res.body.message).toBeDefined();
    });

    // Test for validation failure when price_initial is missing
    it('should not create a product without price_initial', async () => {
      const productData = { ...testProductData, price_initial: '' };
      const res = await request(app)
        .post('/api/products')
        .send(productData)
        .expect(400);
      expect(res.body.message).toBeDefined();
    });
  });

  // Describe block for Option Routes
  describe('Option Routes', () => {
    // Test for getting all options
    it('should get all options', async () => {
      const res = await request(app).get('/api/options').expect(200);
      expect(res.body).toBeInstanceOf(Array);
    });

    // Test for creating a new option
    it('should create a new option', async () => {
      const res = await request(app)
        .post('/api/options')
        .send(testOptionData)
        .expect('Content-Type', /json/)
        .expect(201);
      expect(res.body.option_type).toBe(testOptionData.option_type);
    });

    // Test for validation failure when option_type is missing
    it('should not create an option without option_type', async () => {
      const optionData = { ...testOptionData, option_type: '' };
      const res = await request(app)
        .post('/api/options')
        .send(optionData)
        .expect(400);
      expect(res.body.message).toBeDefined();
    });

    // Test for validation failure when option_description is missing
    it('should not create an option without option_description', async () => {
      const optionData = { ...testOptionData, option_description: '' };
      const res = await request(app)
        .post('/api/options')
        .send(optionData)
        .expect(400);
      expect(res.body.message).toBeDefined();
    });

    // Test for validation failure when option_subcategory_id is missing
    it('should not create an option without option_subcategory_id', async () => {
      const optionData = { ...testOptionData, option_subcategory_id: '' };
      const res = await request(app)
        .post('/api/options')
        .send(optionData)
        .expect(400);
      expect(res.body.message).toBeDefined();
    });
  });

  // Describe block for Subcategory Routes
  describe('Subcategory Routes', () => {
    // Test for getting all subcategories
    it('should get all subcategories', async () => {
      const res = await request(app).get('/api/subcategories').expect(200);
      expect(res.body).toBeInstanceOf(Array);
    });

    // Test for creating a new subcategory
    it('should create a new subcategory', async () => {
      const res = await request(app)
        .post('/api/subcategories')
        .send(testSubcategoryData)
        .expect('Content-Type', /json/)
        .expect(201);
      expect(res.body.color_name).toBe(testSubcategoryData.color_name);
    });

    // Test for validation failure when color_name is missing
    it('should not create a subcategory without color_name', async () => {
      const subcategoryData = { ...testSubcategoryData, color_name: '' };
      const res = await request(app)
        .post('/api/subcategories')
        .send(subcategoryData)
        .expect(400);
      expect(res.body.message).toBeDefined();
    });

    // Test for validation failure when color_hexadecimal is missing
    it('should not create a subcategory without color_hexadecimal', async () => {
      const subcategoryData = { ...testSubcategoryData, color_hexadecimal: '' };
      const res = await request(app)
        .post('/api/subcategories')
        .send(subcategoryData)
        .expect(400);
      expect(res.body.message).toBeDefined();
    });

    // Test for validation failure when option_subcategory_id is missing
    it('should not create a subcategory without option_subcategory_id', async () => {
      const subcategoryData = {
        ...testSubcategoryData,
        option_subcategory_id: '',
      };
      const res = await request(app)
        .post('/api/subcategories')
        .send(subcategoryData)
        .expect(400);
      expect(res.body.message).toBeDefined();
    });
  });
});
