describe('Поиск картинок в Яндекс', function()
{
	it('Найти картинки с котиками', function()	
	{
	cy.visit('https://yandex.ru/');
	cy.get('#text').type('котики');
	cy.get('.search2__button > .button').click();
	cy.contains('Картинки по запросу «котики»')

	})
})