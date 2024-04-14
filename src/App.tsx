import { QueryClient, QueryClientProvider } from "react-query";
import PokedexPage from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>App</h1>
        <PokedexPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
