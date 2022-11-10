Feature('github');

Scenario('test something', ({ I }) => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
  I.see('Let’s build from here');
  I.scrollPageToBottom();
  I.seeElement("//li[contains(.,'© 2022 GitHub, Inc.')]")
});
