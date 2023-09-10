import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Notfound } from "./Components/Notfound";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import { createContext } from "react";
import {Test} from "./Components/Test";
import { QueryClient, QueryClientProvider} from "react-query";
import { Provider } from "react-redux";
import { store } from "./Components/store";
import { Data } from "./Components/Data";
export const siteName = createContext();
const App = () => {
const client = new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:false,refetchOnMount:false}}})
  return (
    <Provider store={store}>
    <QueryClientProvider client={client}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/test" element={<Test/>}/>
            <Route path="/test/:id?" element={<Data/>}/>
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
</QueryClientProvider>
</Provider>
  );
};

export default App;
