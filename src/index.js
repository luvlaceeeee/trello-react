import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css'
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import IconButton from "./components/UI/IconButton/IconButton";
import { FiChevronDown } from "react-icons/fi";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Sidebar>
          <h1 className='font-black text-3xl'>TRL</h1>
      </Sidebar>
      <Content>
          <header className='bg-white text-black p-4 shrink-0 basis-auto border-b-2 border-zinc-400 border-opacity-20'>
              <div className='p-2 inline-flex items-center space-x-2'>
                  <div>
                      <div className='inline-flex space-x-1'>
                          <h1 className='font-bold text-2xl'>RNI Studio Space</h1>
                          <IconButton icon={<FiChevronDown/>}/>
                      </div>

                        <div className='text-zinc-400'>
                            <span>17 Running Projects</span>
                        </div>
                  </div>
                  <div className="flex -space-x-4">
                      <img className="w-12 h-12 rounded-full "
                           src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                      <img className="w-12 h-12 rounded-full "
                           src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                  </div>
              </div>
          </header>
          <div className="p-4 flex space-x-3 overflow-auto scroll-smooth flex-1 scrollbar">
              <div className="w-72 h-72 shrink-0 basis-auto">
                  <App/>
              </div>

              <div className="w-72 h-72 shrink-0 basis-auto">
                  <App/>
              </div>

              <div className="w-72 h-72 shrink-0 basis-auto">
                  <App/>
              </div>

              <div className="w-72 h-72 shrink-0 basis-auto">
                  <App/>
              </div>

              <div className="w-72 h-72 shrink-0 basis-auto">
                  <App/>
              </div>

              <div className="w-72 h-72 shrink-0 basis-auto">
                  <App/>
              </div>

              <div className="w-72 h-72 shrink-0 basis-auto">
                  <App/>
              </div>

              <div className="w-72 h-72 shrink-0 basis-auto">
                  <App/>
              </div>

          </div>
      </Content>
      {/*<div className='p-2 bg-gray-700 h-screen'>*/}
      {/*    <App/>*/}
      {/*</div>*/}
  </React.StrictMode>
);

