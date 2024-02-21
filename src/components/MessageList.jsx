import React from 'react';
import { useMessages } from 'utils/useMessages';

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages();

  return (
    <div className="pb-64 relative overflow-auto max-w-3xl mx-auto pt-8 my-auto z-0">
      {messages?.map((message, i) => {
        const isUser = message.role === 'user';
        if (message.role === 'system') return null;
        return (
          <div
            id={`message-${i}`}
            className={`flex mb-4 fade-up ${isUser ? 'justify-end' : 'justify-start'} ${i === 1 ? 'max-w-md' : ''
              }`}
            key={message.content}
          >
            {!isUser && (
              <img
                src="../../img/bot.jpg"
                className="w-11 h-11 rounded-full"
                alt="avatar"
              />
            )}
            <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative px-3 py-2 rounded-lg ${isUser
                  ? 'mr-2 bg-gradient-to-br from-primary-700 to-primary-600 text-white'
                  : 'ml-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
                }`}
            >
              {/* <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative px-3 py-2 ${isUser
                ? 'mr-2  text-white bg-blue-600'
                : 'ml-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
                }`}
            > */}
              {message.content?.trim()}
            </div>
            {isUser && (
              <img
                src="../../img/user.jpg"
                className="w-11 h-11 rounded-full cursor-pointer"
                alt="avatar"
              />
            )}
          </div>
        );
      })}
      {isLoadingAnswer && (
        <div className="flex justify-start mb-4">
          {/* <img
            src="https://www.teamsmart.ai/next-assets/team/ai.jpg"
            className="w-9 h-9 rounded-full"
            alt="avatar"
          /> */}

          {/* loader */}
          <div className="loader ml-2 p-2.5 px-4 bg-gray-200 dark:bg-gray-800 rounded-full space-x-1.5 flex justify-between items-center relative">
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
          </div>
       

          {/* <div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">Bot is Generating Text...</h5>
            <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
              <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div> */}


        </div>
      )}
    </div>
  );
};

export default MessagesList;
