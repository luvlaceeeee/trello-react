import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css'
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import IconButton from "./components/UI/IconButton/IconButton";
import { FiChevronDown, FiCodesandbox, FiAlignJustify, FiLayout, FiList, FiMessageSquare, FiGitPullRequest, FiLogOut } from "react-icons/fi";
import ButtonMenu from "./components/UI/Button/ButtonMenu";


const buttons = [
    {title: 'Space', icon: <FiCodesandbox size={20}/>},
    {title: 'Dashboard', icon: <FiLayout size={20}/>},
    {title: 'Schedule', icon: <FiList size={20}/>},
    {title: 'Inbox', icon: <FiMessageSquare size={20}/>},
    {title: 'Teams', icon: <FiGitPullRequest size={20}/>},

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Sidebar>
          <div className='flex flex-col justify-between items-center h-full'>
              <div className='w-full'>
                  <div className='flex justify-between items-center p-2 pb-4'>
                      <h1 className='font-black text-3xl block'>TRL</h1>
                        <button><FiAlignJustify size={20}/></button>
                  </div>
                      <div className='flex flex-col items-center justify-center p-2 space-y-5'>
                          {buttons.map(button =>
                             <ButtonMenu title={button.title} icon={button.icon}/>
                          )}
                      </div>
              </div>

              <div className='w-full p-2'>
                  <ButtonMenu title={'Log out'} icon={<FiLogOut size={20}/>}/>
              </div>
          </div>
      </Sidebar>
      <Content>
          <header className='bg-white text-black p-4 shrink-0 basis-auto border-b-2 border-zinc-400 border-opacity-20'>
              <div className='p-2 inline-flex items-center space-x-2'>
                  <div>
                      <div className='inline-flex space-x-2'>
                          <h1 className='font-bold text-2xl'>RNI Studio Space</h1>
                          <IconButton icon={<FiChevronDown/>}/>
                      </div>

                        <div className='text-zinc-400'>
                            <span>17 Running Projects</span>
                        </div>
                  </div>
                  <div className="flex -space-x-4">
                      <img className="w-10 h-10 rounded-full border-2 border-amber-50"
                           src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                      <img className="w-10 h-10 rounded-full border-2 border-amber-50"
                           src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                      <div className='w-10 h-10 rounded-full bg-zinc-900 bg-opacity-80 border-2 border-amber-50 text-white text-center text-xs flex items-center justify-center'>
                        <span>+50</span>
                      </div>
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

