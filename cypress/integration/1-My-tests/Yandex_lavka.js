describe('Тестирования Яндекс.Лавка на алкоголь и энергетики', function()
{
	it('Проверка отсутствия в выдаче водки', function()	
	{
	cy.visit('https://lavka.yandex.ru/');
	cy.get('.p3bdddo').click();
	cy.get('#search-input-id').type('водка');
	cy.contains('По запросу «водка» ничего не найдено')
	})

	it('Проверка, что на энергетики есть уведомление 18+', function()	
	{
	cy.visit('https://lavka.yandex.ru/');
	cy.get('.p3bdddo').click();
	cy.get('#search-input-id').type('red bull');
	cy.contains('Вам уже есть 18 лет?')
	})
})