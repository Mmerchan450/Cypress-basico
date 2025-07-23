describe('Visitar TodoMVC React Dist', () => {

  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })
  it('Carga la página correctamente', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
  })

  it('Escribe tarea "hacer la compra"', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("hacer la compra{enter}") 
  })

  it('Marcar tarea como completada', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("hacer la compra{enter}") 
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('.todo-list li').first().should('have.class', 'completed')
  })
 
  



  })