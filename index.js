function Navbar() {
  return (
    <nav>
      <h1>~ React Study ~</h1>
      <ul>
        <li>
          <a href="url">Pricing</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function MainContent() {
  return <h1>お疲れ様です！</h1>;
}

console.log(MainContent);

const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a a paragraph</p>
  </div>
);

console.log(page);

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,
  document.getElementById("root")
);

const h2 = document.createElement("h2");
h2.textContent = "This is an imperative way to program";
h2.className = "header";
document.getElementById("root").append(h2);

ReactDOM.render(
  <ul>
    <li>list 1</li>
    <li>list 2</li>
    {page}
  </ul>,
  document.getElementById("list")
);

const jsx = (
  <div>
    <h1>JSX without React</h1>
    <ul>
      <li>jsx list 1</li>
      <li>jsx list 2</li>
    </ul>
  </div>
);

document.getElementById("root3").append(jsx);
document.getElementById("root3").append(JSON.stringify(jsx));

ReactDOM.render(jsx, document.getElementById("rootJSX"));
