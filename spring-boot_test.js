Feature('spring-boot');

const { I } = inject();

const expect = require('chai').expect;

Scenario('Verify a successful call', async () => {
  const res = await I.sendGetRequest('/');
  expect(res.status).to.eql(200);
});

Scenario('Verify return value', async () => {
  const res = await I.sendGetRequest('/');
  expect(res.data.message).to.eql('Hello Hello');
});
