import { FC } from 'react';
import { Header } from './Header';

export const TemplateApp: FC = ({ children }) => {
  return (
    <>
  <Header/>
      <main className="p-4 font-bold max-w-4xl mx-auto">{children}</main>
    </>
  );
};
