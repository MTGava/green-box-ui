import Input from "./components/Input";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Input icone={faUser} mensagem="E-mail corporativo"/>
      <Input icone={faLock} mensagem="Senha"/>
    </div>
  );
}

export default App;
