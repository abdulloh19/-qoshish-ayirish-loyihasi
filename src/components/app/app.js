import { Component, Fragment, useState, useEffect, useCallback } from "react";
import CounterItem from "../counter-item/counter-item";

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//       age: "",
//       isLogin: false,
//     };
//   }

//   onIncrement = () =>
//     this.setState((prevState) => ({ counter: prevState.counter + 1 }));

//   onDecrement = () =>
//     this.setState((prevState) => ({ counter: prevState.counter - 1 }));

//   onRestart = () => this.setState({ counter: 0 });

//   changeHandler = (e) => this.setState({ age: e.target.value });

//   componentDidMount() {
//     document.title = `Counter: ${this.state.counter}`;
//     console.log("didmount");
//   }

//   componentDidUpdate() {
//     console.log("update");
//   }

//   onToggleLogin = () => {
//     this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
//   };

//   render() {
//     const { firstName, lastName, link } = this.props;
//     const { age, counter } = this.state;
//     return (
//       <div className="w-50 mx-auto">
//         <div className="border p-3 mt-5">
//           <h4>
//             Mening ismim - {firstName}, sharifim - {lastName}, Yoshim - {age}
//           </h4>
//           <a href={link}>Youtube kanal</a>
//           <div className="mt-3">
//             <button onClick={this.onIncrement} className="btn btn-success">
//               Increment
//             </button>
//             <button onClick={this.onDecrement} className="btn btn-danger mx-2">
//               Decrement
//             </button>
//             <button onClick={this.onRestart} className="btn btn-info">
//               Restart
//             </button>
//             <p className="pt-2">{counter}</p>
//           </div>
//           <form>
//             <span>Yoshim</span>
//             <input
//               type="text"
//               className="form-control"
//               onChange={(e) => this.changeHandler(e, "sammi")}
//             />
//           </form>
//           {this.state.isLogin ? <p>LOGIN USER</p> : null}
//           <button onClick={this.onToggleLogin} className="btn btn-info">
//             TOGGLE
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

const User = () => {
  const [counter, setCount] = useState(0);
  const [active, setActive] = useState(true);

  const onIncrement = () => setCount((prevState) => prevState + 1);

  const onToggle = () => setActive((prevState) => !prevState);

  const counterGenerate = useCallback(
    () =>
      new Array(counter).fill("").map((_, idx) => `Counter number ${idx + 1}`),
    [counter]
  );

  const colors = {
    fontWeight: "bold",
    color: active ? "green" : "red",
  };

  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <p className="text-center" style={colors}>
          User activeted {counter}
        </p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onIncrement}>
            Incearse
          </button>
          <button className="btn btn-warning" onClick={onToggle}>
            Toggle
          </button>
        </div>
        <CounterItem counterGenerate={counterGenerate} />
      </div>
    </div>
  );
};

const App = () => {
  return <User firstName="Samar" lastName="Badriddinov" link="youtube.com" />;
};

export default App;
