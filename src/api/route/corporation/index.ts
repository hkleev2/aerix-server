import { Router } from 'express';
import get from './get';
import gets from './gets';
import post from './post';
import patch from './patch';
import del from './del';

export const router = Router();

router.get('/:id', get);
router.get('/', gets);
router.post('/', post);
router.patch('/:id', patch);
router.delete('/:id', del);
