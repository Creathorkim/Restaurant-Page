export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = `
      <div class="container shadow-sm rounded bg-dark mx-auto p-4 mt-5">
      <h3 class="text-warning mb-4 text-center">📧 Contact Us</h3>
      <div class="row justify-content-center g-4">
        <div class="col">
          <div class="rounded bg-white p-5 container">
            <h3>Ronan Kelly</h3>
            <p>
              Chef <br />
              555-555-5554 <br />
              totallyRealEmail@notFake.com
            </p>
          </div>
        </div>
        <div class="col">
          <div class="rounded bg-white p-5">
            <h3>Cillian Byrne</h3>
            <p>
              Manager <br />
              555-555-5555 <br />
              perfectlyRealEmail@notFake.com
            </p>
          </div>
        </div>
        <div class="col">
          <div class="rounded bg-white p-5">
            <h3>Ronan Kelly</h3>
            <p>
              Waiter <br />
              555-555-5556 <br />
              totallyRealEmail@notFake.com
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}
