import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import MainLayout from "./layout/main-layout";
import { HomePage } from "./pages/Home";
import { TutorialsPage } from "./pages/tutorials";
import { AboutPage } from "./pages/about";
import { NotFoundPage } from "./pages/not-found";
import ReactComponent from "./tutorials/react-components";
import { WelcomePage } from "./tutorials/welcome";
import { StateInCC } from "./tutorials/state-in-cc";
import { StateInFC } from "./tutorials/state-in-fc";

import { UsersPage } from "./pages/users";
import { ProductsPage, ProductNewPage, ProductEditPage } from "./pages/products";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="tutorials" element={<TutorialsPage />}>
              <Route index element={<WelcomePage />} />
              <Route path="react-components" element={<ReactComponent />} />
              <Route path="state-in-cc" element={<StateInCC />} />
              <Route path="state-in-fc" element={<StateInFC />} />
            </Route>

            <Route path="users" element={<UsersPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/new" element={<ProductNewPage />} />
            {/*
                URL Parameter Syntax
                path='path/:parameter'
                path='path/:parameter/path'
                path='path/:parameter1/:parameter2'
                path='path/:parameter1/path/:parameter2'
            */}
            <Route path="products/edit/:id" element={<ProductEditPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
