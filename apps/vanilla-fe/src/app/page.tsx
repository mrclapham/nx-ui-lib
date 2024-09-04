import { ButtonUi } from "@org/vanilla-ui";

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="wrapper">
        <div className="container">
                      <ButtonUi />

          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome vanilla-fe 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
