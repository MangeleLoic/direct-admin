import ClientList from "./Components/ClientList";
import MyFooter from "./Components/MyFooter";
import MyForm from "./Components/MyForm";
import MyNavbar from "./Components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyForm />
      <ClientList />
      <MyFooter />
    </div>
  );
}

export default App;
