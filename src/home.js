export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = `
      <div class="container shadow-sm bg-dark rounded mx-auto my-5 p-4">
        <h3 class="text-warning text-center mb-4">🍽️ Kim's Breakfast Bar</h3>
        <div class="shadow-sm bg-white rounded ny-4 p-5 mx-auto w-75">
          <p class="lead text-center">
            "Kim has the best porridge! The atmosphere and customer service make
            you feel like you're sitting in the middle of the woods, eating like a
            bear! This is exactly the kind of place I like to return to again and
            again." — <strong>Goldilocks</strong>
          </p>
        </div>
  
        <div class="row justify-content-center g-4">
          <div class="col-md-4">
            <div class="shadow-sm bg-white rounded text-center mt-4 p-4">
              <h2>⏰ Hours</h2>
              <p>
                <strong>Sunday : </strong> 8am -9pm <br />
                <strong>Monday - Wednesday:</strong> 6am - 6pm<br />
                <strong>Thursday:</strong> 6am - 10pm<br />
                <strong>Friday - Saturday:</strong> 6am - 10pm<br />
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="shadow-sm rounded bg-white text-center p-4 mt-4">
              <h2>📍 Location</h2>
              <p>
                Beechgrove Glanmire <br />
                Glanmire, Dublin <br />
                IRELAND
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  