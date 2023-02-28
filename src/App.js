import ClassComponent from "./Components/ClassComponent";
import { FunctionComponent } from "./Components/FunctionComponent";
import { Person } from "./Components/Person";

function App() {
  return (
    <div>
      <ClassComponent />
      <FunctionComponent />
      <Person name={"Richard"} surName={"Chalk"} age={"52"} />
      <Person name={"Linda"} surName={"Chalk"} age={"47"} />
    </div>
  );
}

export default App;
