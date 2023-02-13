import './tailwind.css'
import ButtonMenu from "./components/UI/Button/ButtonMenu";
import { FiCodesandbox, FiPlus, FiMoreVertical } from "react-icons/fi";
import Badge from "./components/UI/Badge/Badge";
import Tag from "./components/UI/Tag/Tag";
import IconButton from "./components/UI/IconButton/IconButton";


function App() {
  return (
    <div>
        {/*<ButtonMenu title={'Space'} icon={<FiCodesandbox size={20}/>}/>*/}
        {/*<Badge title={'To do'} color={'blue'}/>*/}
        {/*<Tag title={'UX design'}/>*/}
        {/*<IconButton icon={<FiPlus size={15}/>}/>*/}
        <div className='bg-blue-100 flex flex-col justify-between items-center w-72 rounded-lg p-3 pb-4'>
            <div className='flex flex-row justify-between items-center w-full p-2'>
                <Badge title={'To do'} color={'blue'}/>
                <IconButton icon={<FiPlus size={15}/>}/>
            </div>

            <div className='bg-white flex flex-col justify-between items-start w-11/12 rounded-lg p-4 pb-3 mt-4'>
                <div className='flex flex-row justify-between items-center w-full pb-2'>
                    <Tag title={'UX design'}/>
                    <IconButton icon={<FiMoreVertical size={15}/>}/>
                </div>
                <div className='h-auto'>
                    <h1 className='font-bold pb-1'>Usability Testing</h1>
                </div>
                <div className='pb-3 h-auto'>
                    <span className='text-gray-400 text-sm'>Testing App ke user (16-20 y.o.)</span>
                </div>
                <div className='flex flex-row justify-between items-end w-full'>
                    <div className="flex -space-x-4">
                        <img className="w-7 h-7 rounded-full "
                             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                        <img className="w-7 h-7 rounded-full "
                             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                    </div>
                    <span className='text-gray-400 text-xs'>10 Nov 2021</span>
                </div>
            </div>

            <div className='bg-white flex flex-col justify-between items-start w-11/12 rounded-lg p-4 pb-3 mt-4'>
                <div className='flex flex-row justify-between items-center w-full pb-2'>
                    <Tag title={'UX design'}/>
                    <IconButton icon={<FiMoreVertical size={15}/>}/>
                </div>
                <div className='h-auto'>
                    <h1 className='font-bold pb-1'>Usability Testing</h1>
                </div>
                <div className='pb-3 h-auto'>
                    <span className='text-gray-400 text-sm'>Testing App ke user (16-20 y.o.)</span>
                </div>
                <div className='flex flex-row justify-between items-end w-full'>
                    <div className="flex -space-x-4">
                        <img className="w-7 h-7 rounded-full "
                             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                        <img className="w-7 h-7 rounded-full "
                             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>
                    </div>
                    <span className='text-gray-400 text-xs'>10 Nov 2021</span>
                </div>
            </div>

        </div>
    </div>
  );
}

export default App;
