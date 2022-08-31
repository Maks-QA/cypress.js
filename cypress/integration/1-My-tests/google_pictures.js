describe('Поиск картинок в Google', function()
{
	it('Найти картинки с котиками', function()	
	{
	cy.visit('https://www.google.ru/');
	cy.get('.gLFyf').type('котики{enter}');
	cy.contains('Картинки по запросу котики')
	})
})