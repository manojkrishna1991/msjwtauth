import { router, get, post } from 'microrouter';
import Example from './services/example';

const example = Example();

export default router(
  get('/ishealthy', () => 'OK'),
  get('/:id', example.get),
  post('/', example.save),
);
