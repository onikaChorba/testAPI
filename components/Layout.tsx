import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import { FC, ReactNode } from "react";


type layoutProps = {
  children : ReactNode,
}

export const  Layout:FC<layoutProps> = ({children}) =>{ 
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
