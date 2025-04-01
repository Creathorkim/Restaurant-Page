import honeyTeaImage from './images/honeytea.webp';
import kimTeaImage from './images/kimtea.webp'
import coffeeImage from "./images/coffee.webp";
import toastImage from "./images/t.webp";
import fruitsImage from "./images/Fruits.webp";
import pancakeImage from "./images/pancake.webp";
import FrenchToastImage from "./images/FrenchToast.webp";
import veggiesSandwichImage from "./images/veggies.webp";
import baconveggiesImage from "./images/vb.webp";
import bagelImage from "./images/bagel.webp";
import berriesImage from "./images/bberries.webp";
import porridgeImage from "./images/porridge.webp";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="container shadow-sm rounded p-4 mx-auto bg-dark mt-5">
      <h3 class="text-warning text-center">🍽️ Our Menu</h3>

      <h2 class="text-light">Beverages</h2>
      <div class="row justify-content-center g-4 mb-5">
        <div class="col-md-4">
          <div class="p-4 shadow-sm rounded bg-white text-dark">
            <h4>Honey Tea</h4>
            <p class="lead">
              A warm, sweet tea made with the highest quality honey and a bit of
              lemon to start your day off right!$2 dahm my images arre 
            </p>
            <img src="${honeyTeaImage}" alt="honeyImage" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="shadow-sm rounded p-4 bg-white text-dark">
            <h4>Kim Tea</h4>
            <p class="lead">
              Berry-infused tea served cold or hot. A refreshing and flavorful
              drink for any time of the day. $3
            </p>
            <img src="${kimTeaImage}" alt="Kim Tea" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="shadow-sm rounded text-dark p-4 bg-white">
            <h4>Coffee</h4>
            <p class="lead">
              Rich and aromatic coffee brewed to perfection. A classic beverage
              to wake you up with bold flavor. $3
            </p>
            <img src="${coffeeImage}" alt="Coffee" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
      </div>

      <h2 class="text-light">Sides</h2>
      <div class="row justify-content-center g-4 mb-5">
        <div class="col-md-4">
          <div class="shadow-sm rounded p-4 bg-white text-dark">
            <h4>Toast and Jam</h4>
            <p class="lead">
              Toast made with your choice of bread, served with our homemade
              blackberry or raspberry jam. $1
            </p>
            <img src="${toastImage}" alt="Toast and Jam" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="shadow-sm rounded p-4 bg-white text-dark">
            <h4>Fresh Fruit</h4>
            <p class="lead">
              A fresh bowl of seasonal fruit sourced locally. Perfect as a snack
              or side for any meal. $3
            </p>
            <img src="${fruitsImage}" alt="Fresh Fruit" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="shadow-sm rounded p-4 bg-white text-dark">
            <h4>Kim Bowl</h4>
            <p class="lead">
              A hearty bowl of fresh berries, served plain with honey. $7
            </p>
            <img src="${berriesImage}" alt="" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
      </div>
      <h2 class="text-light">Main Dishes</h2>
      <div class="row justify-content-center g-4 mb-5">
        <div class="col-md-4">
          <div class="shadow-sm rounded bg-white text-dark p-4">
            <h4>Pancakes</h4>
            <p class="lead">
              Buttermilk pancakes stacked high and served with our locally
              sourced maple syrup. $4
            </p>
            <img src="${pancakeImage}" alt="Pancakes" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="shadow-sm rounded bg-white text-dark p-4">
            <h4>French Toast</h4>
            <p class="lead">
              French toast made fresh and served with a drizzle of locally
              sourced maple syrup. A morning classic. $5
            </p>
            <img src="${FrenchToastImage}" alt="French Toast" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="shadow-sm rounded bg-white text-dark p-4">
            <h4>Kim Veggie Sandwich</h4>
            <p class="lead">
              A veggie sandwich filled with crisp and fresh produce, sure to
              satisfy anyone craving a healthy meal. $8
            </p>
            <img src="${veggiesSandwichImage}" alt="Kim Veggie Sandwich" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="shadow-sm rounded bg-white text-dark p-4">
            <h4>BLT</h4>
            <p class="lead">
              A BLT made with crispy bacon, fresh vegetables, and a spread of
              mayonnaise on your choice of bread. $6
            </p>
            <img src="${baconveggiesImage}" alt="BLT" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="shadow-sm rounded bg-white text-dark p-4">
            <h4>Bagel</h4>
            <p class="lead">
              A bagel topped with sustainably harvested salmon, cream cheese,
              and fresh herbs for a perfect bite. $8
            </p>
            <img src="${bagelImage}" alt="Bagel" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="shadow-sm rounded bg-white text-dark p-4">
            <h4>The Kim Best Porridge</h4>
            <p class="lead">
              A warm and hearty porridge prepared with care. Simple, filling,
              and perfect for a cold morning. $5
            </p>
            <img src="${porridgeImage}" alt="The Kim Best Porridge" class="img-fluid rounded shadow-lg mt-3" />
          </div>
        </div>
      </div>
    </div>
    `;
}
