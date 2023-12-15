import React from "react";
import './App.css';
import {Button, Skeleton ,Card} from "@nextui-org/react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Text } from './Pages/Text'
import Images from './Pages/Image'
import { Home } from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/text' element={<Text/>}></Route>
        <Route path='/image' element={<Images/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
