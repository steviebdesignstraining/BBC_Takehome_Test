import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import "cypress-real-events";
let response;

Given("I send a GET request to the media API", () => {
  cy.request("/media").then((res) => {
    response = res;
  });
});


Given("I send a GET request to mediax", () => {
  cy.getMediaAPI('x').then(({ response }) => {
    apiResult.response = response;
  });
});

Then("the response status code should be {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});


Then("the response time should be below {int} ms", (max) => {
  expect(apiResult.duration).to.be.lessThan(max);
});

Then("all items should have a non-empty id", () => {
  mediaData.forEach((item) => {
    expect(item.id).to.exist;
    expect(item.id).to.not.be.empty;
  });
});

Then('only one item should have "now_playing" offset as true', () => {
  const nowPlaying = mediaData.filter(item => item.offset?.now_playing === true);
  expect(nowPlaying.length).to.eq(1);
});

Then("the response should contain a Date header", () => {
  expect(apiResult.response.headers).to.have.property('date');
});

Then("the response should contain {int} items", (count) => {
  expect(mediaData).to.have.length(count);
});

Then("there should be only one item with now_playing true", () => {
  const nowPlaying = mediaData.filter(item => item.offset?.now_playing === true);
  expect(nowPlaying.length).to.eq(1);
});

Then("the response should contain a list of media items", () => {
  expect(response.body).to.have.property("media").and.to.be.an("array");
});
