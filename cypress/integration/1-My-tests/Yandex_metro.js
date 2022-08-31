describe('Проверка Яндекс.Метро (Мск) на время поездки и пересадку', function()
{
	it('[Positive] Время поездки между станциями Говорово и Озерная - 5 минут, без пересадок', function()
	{
		cy.visit('https://yandex.ru/metro/moscow?scheme_id=sc34974011');
		cy.contains('Москва — схема метро');
		cy.get(':nth-child(210) > :nth-child(4) > tspan').click();
		cy.get(':nth-child(209) > :nth-child(4) > tspan').click();
		cy.contains('5 мин');
		cy.contains('Без пересадок')
	})
})