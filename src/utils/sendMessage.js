// export const sendMessage = async (messages) => {
//     try {
//         const response = await fetch('/api/createMessage', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ messages }),
//         });

//         return await response.json();
//     } catch (error) {
//         console.log(error);
//     }
// };



import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "YOUR_API_KEY"; // Replace with your API key

export const sendMessage = async (messages,context={}) => {
  try{

  
  const genAI = new GoogleGenerativeAI("AIzaSyDeweDNOx-zVsLqNfE0FdcjnTwbfPxarRk");
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.7,
    topK: 90,
    topP: 0.1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    // { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    // { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    // Add additional categories as needed (e.g., defamation, bias)
  ];

  const userMessages = messages.filter((message) => message.role === "user");
  const userMessageContent = userMessages.map((message) => message.parts).join(" ");

  const intro = {
    text: `I'm Sam, assistant for XGen Technology. I trained by XGen Tecnology to provide you assitance! Ask me anything about our company, industry, or how I can help you.`,
  };

  const companyInfo = [
    // ... (previous companyInfo prompts)
    { text: "Geographic Presence: XGen Technologies operates primarily in Karachi, Pakistan, but has a global outlook, with international exposure and collaborations." },
    { text: "Corporate Culture: Fosters a culture of innovation, collaboration, and accountability. Values inclusivity, diversity, and ethical business practices." },
    { text: "Vision Statement: To revolutionize how technology serves humanity, building bridges of opportunity through empowering solutions that drive progress and prosperity." },
    { text: "Mission Statement: At the heart of our mission is a commitment to revolutionize the world by offering cutting-edge technology solutions. We aim to empower businesses and individuals through our Technology House, Business Automation Solutions, Training Centers, Counselling, and Media Production House, fostering a global environment of digital excellence." },
    { text: "Core Values: Excellence: Striving for the highest standards in everything we do. Innovation: Embracing creativity and disruption to push the boundaries of possibility. Collaboration: Building bridges of partnership and trust to achieve shared goals. Empowerment: Equipping others with the tools and knowledge to thrive. Integrity: Upholding ethical principles and building enduring trust. Continuous Learning: We embrace a culture of continuous learning and adaptation in the face of evolving technologies." },
    // ... other prompts
  ];

  const location = [
    { text: "XGEN Technologies Located at Plot # 13-C Stadium Commercial Lane 2, DHA Phase 5 , Karachi South." },
  ];

  const contact = [
    { text: "For more information, Contact us at Email: info@xgentechnologies.com and Phone No: 03011019758" },
  ];

  let parts;
  if (context.companyInfo) {
    parts = companyInfo;
  }if (context.intro) {
    parts = intro;
  } if (context.location) {
    parts = location;
  } 
  if (context.contact) {
    parts = contact;
  } 
  else {
    parts = [
      intro,
      ...companyInfo,
      ...location,
      ...contact,
      { text: `How can I be of assistance today?` },
    ];
  }

  const chat = model.startChat({
    history: [
      { role: "user", parts: userMessageContent },
      { role: "model", parts: parts.map((part) => part.text).join(" ") },
    ],
    generationConfig,
    safetySettings,
  });

  const result = await chat.sendMessage(userMessageContent);

  const response = await result.response;
  const reply = response.text();
  let updatedContext = { ...context };
  if (reply.includes("XGen Technologies")) {
    updatedContext = { companyInfo: true };
  }
  if (reply.includes("Who train")) {
    updatedContext = { intro: true };
  }
  if (reply.includes("contact")) {
    updatedContext = { contact: true };
  }
  if (reply.includes("situated or located")) {
    updatedContext = { location: true };
  }
  if (reply.includes("services offer")) {
    updatedContext = { companyInfo: false };
  }

  return { data: { choices: [{ message: reply }] , context: updatedContext } };
} catch (error) {
  // Handle errors, e.g., show a toast
  console.error(error);
  showToast({ message: 'An error occurred', type: 'error' });
  return { data: { choices: [{ message: 'An error occurred' }] } };
}
};