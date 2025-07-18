import { ReactNode } from "react";

export interface Template {
    title: string | JSX.Element; 
    children:ReactNode; 
    li?: boolean; 
    arrow?: boolean
}


export type TitlePos = {
    left: number;
    right: number;
    width: number;
    bottom: number;
  } | null;

  export type Adjust = 'left' | 'right' | false