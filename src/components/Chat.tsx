'use client'

import { FC } from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import ChatHeader from './ChatHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const Chat: FC = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='relative bg-black z-40 shadow'>
      <AccordionItem value='item-1'>
        <div className='fixed right-8 w-80 bottom-8 bg-slate-700 border border-gray-800 rounded-md overflow-hidden'>
          <div className='w-full h-full flex flex-col'>
            <AccordionTrigger className='px-6 border-b border-slate 400'>
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col h-80'>
                <ChatMessages className='px-2 py-3 flex-1' />
                <ChatInput className='px-4' />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default Chat
