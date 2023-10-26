import React from 'react'
import {AiOutlineMenu,AiFillYoutube,AiOutlineSearch,AiOutlineVideoCamera} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiSolidPhotoAlbum} from 'react-icons/bi'
import {MdKeyboardVoice} from 'react-icons/md'
const navbar = () => {
  return (
   <>
   <div className='bg-[#212121] opacity-90 flex justify-between p-2'>
    <div className='flex items-center justify-center gap-6'>
        <div className='ml-4'>
        <AiOutlineMenu className=' text-white'/>
        </div>
        <div className='flex justify-center items-center text-white'>
        <AiFillYoutube className=' text-red-600 text-2xl'/>
        <div className=''>YouTube</div>
        </div>
    </div>
    <div className='flex items-center justify-center   '>
        <div>

        <input type="text" placeholder='search'  className='rounded-l-lg'/>
        </div>
        <div className='bg-[#7c7777]  p-1 px-2 rounded-r-lg '>

        <AiOutlineSearch />
        </div>
        <div className='bg-[#7c7777] p-1 rounded-2xl ml-2 text-white'>
            <MdKeyboardVoice/>
        </div>

    </div>

    <div className='flex justify-center items-center gap-2 mr-4 text-white'>
        <div>
            <AiOutlineVideoCamera/>
        </div>
        <div>
            <IoMdNotificationsOutline/>
        </div>
        <div>
            <BiSolidPhotoAlbum/>
        </div>
    </div>
    
   </div>
   
   </>
  )
}

export default navbar