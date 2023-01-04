const renderMenuPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("data-tab-content", "");
  menu.innerHTML = `
  <div class="hero">
  <h1>Menu</h1>
  <img src="./images/chef.png" alt="" width="50" height="50" />
</div>
<div class="menu-container">
  <div class="menu-item">
    <img src="./images/hamburger.png" alt="" />
    <div class="item-content">
      <h4>Hamburger: <span>P 150.00</span></h4>
      <p>
        Buns, patty, tomato, onions, lettuce, and our secret family
        recipe.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/cheeseburger.png" alt="" />
    <div class="item-content">
      <h4>Cheeseburger: <span>P 165.00</span></h4>
      <p>Similar to our hamburger, but with cheese.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/double-cheeseburger.png" alt="" />
    <div class="item-content">
      <h4>Double Cheeseburger: <span>P 190.00</span></h4>
      <p>Similar to our cheeseburger, but with an extra patty.</p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/grilled-cheese.png" alt="" />
    <div class="item-content">
      <h4>Grilled Cheese Sandwich: <span>P 110.00</span></h4>
      <p>
        A toasted and grilled cheese sandwich, dipped in our special
        sauce.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/salad.png" alt="" />
    <div class="item-content">
      <h4>Chicken Salad: <span>P 95.00</span></h4>
      <p>
        Your typical caesar salad that comes with your choice of
        dressings.
      </p>
    </div>
  </div>
  <div class="menu-item">
    <img src="./images/french-fries.png" alt="" />
    <div class="item-content">
      <h4>French Fries: <span>P 80.00</span></h4>
      <p>
        Sometimes you don't want to eat your burger alone, why not add
        some french fries?
      </p>
    </div>
  </div>
</div>`;

  contentContainer.appendChild(menu);
})();

export { renderMenuPage };
