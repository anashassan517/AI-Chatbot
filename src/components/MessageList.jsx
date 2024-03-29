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
            key={message.parts}
          >
            {!isUser && (
              <img
                src="../../img/Bot.jpg"
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
              {message.parts}
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
  

          {/* loader */}
          <div className="loader ml-2 p-2.5 px-4 bg-gray-200 dark:bg-gray-800 rounded-full space-x-1.5 flex justify-between items-center relative">
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesList;
