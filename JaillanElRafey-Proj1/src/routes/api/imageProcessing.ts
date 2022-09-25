import express from 'express';
const imPro = express.Router();

import { checkForImg } from './../../index';

imPro.get('/', checkForImg);

export default imPro;
