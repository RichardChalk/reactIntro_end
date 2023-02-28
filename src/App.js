import ClassComponent from "./Components/ClassComponent";
import { FunctionComponent } from "./Components/FunctionComponent";
import { Person } from "./Components/Person";

function App() {
  return (
    <div>
      <ClassComponent />
      <FunctionComponent />
      <div className="personContainer">
        <Person name={"Richard"} surName={"Chalk"} age={"52"} />
        <Person name={"Linda"} surName={"Chalk"} age={"47"} />
        <Person name={"Tony"} surName={"Stark"} age={"48"} />
      </div>
    </div>
  );
}

export default App;
