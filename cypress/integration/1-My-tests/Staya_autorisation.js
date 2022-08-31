describe('Тестирование авторизации на Staya.dog', function()
{
	it('[Positive] После авторизации в ЛК есть строка "Мои заказы"', function()
	{
		cy.visit('https://staya.dog/');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('maksim.qa2020@gmail.com');
		cy.get('.auth-form > form > [type="password"]').type('12345678');
		cy.get('.auth-form__submit > .s-button__content').click();
		cy.contains('Мои заказы');
		cy.clearCookies();
	})

	it('[Negative] После ввода неправильного пароля есть строка "Невозможно войти с предоставленными учетными данными."', function()
	{
		cy.visit('https://staya.dog/');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('maksim.qa2020@gmail.com');
		cy.get('.auth-form > form > [type="password"]').type('11111111');
		cy.get('.auth-form__submit > .s-button__content').click();
		cy.contains('Невозможно войти с предоставленными учетными данными.')
	})
})