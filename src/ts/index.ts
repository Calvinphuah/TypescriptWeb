import { Pizza, PizzaProps } from "./models/Pizza";

const rootElement = document.querySelector(".root")!;

function createPizzaTemplate(pizza: PizzaProps): string {
  return `
        <div class="pizza">
            <h2>${pizza.title}</h2>
            <p class="toppings">${pizza.toppings.join(", ")}</p>
            <p>${pizza.description}</p>
            <span>$${pizza.price}</span>
        </div>
    `;
}

function renderTemplates(templates: string[], parent: Element): void {
  const templateElement = document.createElement("template");

  for (const t of templates) {
    templateElement.innerHTML += t;
  }

  parent.append(templateElement.content);
}

document.addEventListener("DOMContentLoaded", async () => {
  // laod the pizza data
  const pizzas = await Pizza.loadAll();
  //   console.log(pizzas);

  // create html template string for each pizza
  // const pizzaTemplates = pizzas.map((pizza) => createPizzaTemplate(pizza));
  const pizzaTemplates = pizzas.map(createPizzaTemplate);

  // render pizza templates on the DOM
  renderTemplates(pizzaTemplates, rootElement);
});
