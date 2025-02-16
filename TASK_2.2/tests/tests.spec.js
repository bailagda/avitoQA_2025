const { test, expect } = require('@playwright/test');
const name = 'Название товара' + Date.now();

test('Создать новое объявление', async ({ page }) => {
  const urlToWait = 'http://tech-avito-intern.jumpingcrab.com/api/advertisement';

  await page.goto('http://tech-avito-intern.jumpingcrab.com/advertisements/');
  await page.getByText('Создать').click();
  await page.getByText('Название').fill(name);
  await page.getByText('Цена').nth(1).fill('1000');
  await page.getByText('Описание').fill('Очень хороший товар');
  await page.getByText('Ссылка на изображение').fill('https://example.com/');
  // const reqPromise = page.waitForRequest(urlToWait);
  await page.getByText('Сохранить').click();
  await page.getByText('Сохранить').click();
  // const req = await reqPromise;
  // const request = await page.waitForRequest(urlToWait);
  // const responce = await page.waitForResponse(urlToWait, '201 Created');
});

test('Поиск объявления', async ({ page }) => {
  await page.goto('http://tech-avito-intern.jumpingcrab.com/advertisements/');
  await page.getByPlaceholder('Поиск по объявлениям').isVisible();
  await page.getByPlaceholder('Поиск по объявлениям').fill(name);
  await page.getByText('Найти').click();

  expect( page.locator('h4').first().innerText() , 'Объявление не найдено');

});
