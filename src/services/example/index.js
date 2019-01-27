import ExampleService from './example.service';
import ExampleHandler from './example.handler';

export default () => {
  const exampleService = ExampleService();
  const exampleHandler = ExampleHandler({ exampleService });

  return {
    get: exampleHandler.get,
    save: exampleHandler.save,
  };
};
