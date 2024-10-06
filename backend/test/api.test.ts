import request from 'supertest';
import app from '../src/app';
import { describe, it, expect } from '@jest/globals';

const testOptionData = {
  option_type: 'Color',
  option_description: 'Red',
  sub_categories: [],
};

const testProductData = {
  name: 'Example Product test',
  price_initial: '19.99',
  option_id: [],
};

const testSubcategoryData = {
  color_name: 'Red',
  color_hexadecimal: '#FF0000',
  option_id: '000000000000000000000000',
};

describe('API Tests', () => {
  describe('Product Routes', () => {
    it('should get all products', async () => {
      const res = await request(app).get('/api/products').expect(200);
      expect(res.body).toBeInstanceOf(Array);
    }, 10000); // Ajout d'un timeout spécifique

    it('should create a new product', async () => {
      const res = await request(app)
        .post('/api/products')
        .send(testProductData)
        .expect('Content-Type', /json/)
        .expect(201);
      expect(res.body.name).toBe(testProductData.name);
    }, 10000);

    it('should not create a product without name', async () => {
      const productData = { ...testProductData, name: '' };
      const res = await request(app)
        .post('/api/products')
        .send(productData)
        .expect(400);
      expect(res.body.errors).toBeDefined();
    });

    it('should not create a product without price_initial', async () => {
      const productData = { ...testProductData, price_initial: '' };
      const res = await request(app)
        .post('/api/products')
        .send(productData)
        .expect(400);
      expect(res.body.errors).toBeDefined();
    });
  });

  describe('Option Routes', () => {
    it('should get all options', async () => {
      const res = await request(app).get('/api/options').expect(200);
      expect(res.body).toBeInstanceOf(Array);
    }, 10000);

    it('should create a new option', async () => {
      const res = await request(app)
        .post('/api/options')
        .send(testOptionData)
        .expect('Content-Type', /json/)
        .expect(201);
      expect(res.body.option_type).toBe(testOptionData.option_type);
    });

    it('should not create an option without option_type', async () => {
      const optionData = { ...testOptionData, option_type: '' };
      const res = await request(app)
        .post('/api/options')
        .send(optionData)
        .expect(400);
      expect(res.body.errors).toBeDefined();
    });

    it('should not create an option without option_description', async () => {
      const optionData = { ...testOptionData, option_description: '' };
      const res = await request(app)
        .post('/api/options')
        .send(optionData)
        .expect(400);
      expect(res.body.errors).toBeDefined();
    });
  });

  describe('Subcategory Routes', () => {
    it('should get all subcategories', async () => {
      const res = await request(app).get('/api/subcategories').expect(200);
      expect(res.body).toBeInstanceOf(Array);
    }, 10000);

    it('should create a new subcategory', async () => {
      const res = await request(app)
        .post('/api/subcategories')
        .send(testSubcategoryData)
        .expect('Content-Type', /json/)
        .expect(201);
      expect(res.body.color_name).toBe(testSubcategoryData.color_name);
    });

    it('should not create a subcategory without color_name', async () => {
      const subcategoryData = { ...testSubcategoryData, color_name: '' };
      const res = await request(app)
        .post('/api/subcategories')
        .send(subcategoryData)
        .expect(400);
      expect(res.body.errors).toBeDefined();
    });

    it('should not create a subcategory without color_hexadecimal', async () => {
      const subcategoryData = { ...testSubcategoryData, color_hexadecimal: '' };
      const res = await request(app)
        .post('/api/subcategories')
        .send(subcategoryData)
        .expect(400);
      expect(res.body.errors).toBeDefined();
    });

    it('should not create a subcategory without option_id', async () => {
      const subcategoryData = {
        ...testSubcategoryData,
        option_id: '',
      };
      const res = await request(app)
        .post('/api/subcategories')
        .send(subcategoryData)
        .expect(400);
      expect(res.body.errors).toBeDefined();
    });
  });
});
