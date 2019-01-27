import ExampleService from '../example.service';

describe('Example service', () => {
  const exampleService = ExampleService();

  describe('when getting a customer by id', async () => {
    const id = 'id1';

    const customer = await exampleService.get(id);

    it('should return the customer', () => expect(customer).toEqual(id));
  });
});
