import { body, param, ValidationChain } from 'express-validator';

// verif des champs pour la création d'une option
export const validateOption: ValidationChain[] = [
  body('option_type')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Option type is required'),
  body('option_description')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Option description is required'),
];

// verif des champs pour la création d'un produit
export const validateProduct: ValidationChain[] = [
  body('name')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Product name is required'),
  body('price_initial').isFloat().withMessage('Initial price must be a number'),
  body('option_id')
    .isArray()
    .withMessage('Option IDs must be an array')
    .optional(),
];

// verif des champs pour la création d'une sous-catégorie
export const validateSubcategory: ValidationChain[] = [
  body('color_name')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Color name is required'),
  body('color_hexadecimal')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Color hexadecimal is required'),
  body('option_id').isString().withMessage('Option ID is required'),
];

// verif de l'id dans l'url
export const validateIdParam: ValidationChain[] = [
  param('id').isMongoId().withMessage('Invalid ID format'),
];
