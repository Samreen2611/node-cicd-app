const test = require('node:test');
const assert = require('node:assert/strict');
const { message, renderPage } = require('../src/app');

test('the greeting identifies Jenkins', () => {
  assert.match(message, /Jenkins/);
});

test('the page contains the heading and build number', () => {
  const html = renderPage('42');
  assert.ok(html.includes(`<h1>${message}</h1>`));
  assert.ok(html.includes('<strong>42</strong>'));
});

test('the page shows my registration number and course message', () => {
  const html = renderPage('7');
  assert.ok(html.includes('FA23-BSE-015'));
  assert.ok(html.includes('Automate everything with CI/CD'));
});