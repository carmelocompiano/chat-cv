'use client'

import ChatHeaderComponent from "./ChatHeaderComponent";
import {  useEffect, useState } from "react";
import { sendMessage } from "@/utils/api";
import DateMessageComponent from "./DateMessageComponent";
import WarningMessageComponent from "./WarningMessageComponent";
import ChatMessageComponent from "./ChatMessageComponent";
import { ToastContainer, toast } from "react-toastify";

const ChatComponent = () => {
  useEffect(() => {
    mostrarMensajeDeBienvenida();
  }, []);
  const mostrarMensajeDeBienvenida = () => {
    toast.info(
      <div>
      <h1 className="text-2xl font-bold mb-2">Bienvenido!</h1>
      <p>Podés usar el chat para conocer más sobre mi o seguir los siguientes links</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
        onClick={handleBoton1Click}
      >
        Contacto
      </button>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded"
        onClick={handleDownloadClick}
      >
        Resume
      </button>
      </div>,
      {
        position: toast.POSITION.BOTTOM_LEFT,
        icon: '👏', // Icono personalizado
        timer: 10000, // Tiempo de duración del mensaje
        hideProgressBar: true, // Ocultar barra de progreso
      }
    );
  };
  
  const handleBoton1Click = () => {
    // Lógica para manejar el clic en el Botón 1
    window.open(process.env.WA_LINK, "_blank");
  };

  const handleDownloadClick = () => {
    // Reemplaza 'example.pdf' con la ruta relativa o absoluta de tu archivo PDF.
    const pdfFilePath = '/resume.pdf';

    // Crea un elemento <a> temporal para iniciar la descarga.
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'resume.pdf'; // Nombre del archivo al guardar.
    link.target = '_blank'; // Opcional: Abre el enlace en una nueva pestaña.

    // Simula un clic en el enlace para iniciar la descarga.
    link.click();
  };


  

  const [value, setValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handleSendMessage =  () => {
    setValue('');
    setMessages(prevMessages => [
      ...prevMessages,
      {text: value, type: "myself", date: new Date()}])
    setIsThinking(true);
    sendMessage(value).subscribe({
      next: data => {
        let text = data.data.response;
        let type = "third";
        let date = new Date();
        if(text == "cv requested"){
          type = "download";
        }
        setMessages(prevMessages => [
          ...prevMessages,
          {text,type,date}
        ]);
      setIsThinking(false);
      },
      error: (error) => {
        setIsThinking(false);
        console.log(error);
      }
    });
  }
  const [messages, setMessages] = useState([]);

  return (
    <>
      <ToastContainer />
      <ChatHeaderComponent></ChatHeaderComponent>
      {/* Messages */}
      <div className="flex-1 overflow-auto" style={{ backgroundColor: '#DAD3CC' }}>
        <div className="py-2 px-3">
          <DateMessageComponent></DateMessageComponent>
          <WarningMessageComponent></WarningMessageComponent>
          <ChatMessageComponent messages={messages} handleDownloadClick={handleDownloadClick} isThinking={isThinking}></ChatMessageComponent>
        </div>
      </div>
      {/* Input */}
      <div className="bg-grey-lighter px-4 py-4 flex items-center">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".45" fill="#263238" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 11.966c0 .112.002.225.006.337 0 .067-.001.132-.001.199.002 6.927 4.628 10.957 10.818 10.957 6.188 0 10.822-4.03 10.822-10.957 0-.067 0-.132-.001-.199.003-.111.005-.224.005-.337 0-5.933-4.629-10.955-10.82-10.955zm0 18.646c-5.152 0-9.342-4.19-9.342-9.342 0-.076-.003-.152-.003-.228 0-4.802 3.892-8.694 8.694-8.694 4.8 0 8.693 3.892 8.693 8.694 0 .076-.001.152-.003.228 0 5.152-4.189 9.342-9.342 9.342zm5.453-10.31c.104.125.17.289.17.468 0 .517-.419.936-.937.936-.049 0-.097-.004-.146-.007.059.275.094.562.094.86 0 3.867-3.141 7.007-7.007 7.007-.14 0-.28-.005-.419-.016.297-.729.459-1.519.459-2.34 0-5.246-4.26-9.506-9.506-9.506-1.075 0-2.111.179-3.081.505a.934.934 0 0 0-.558-.185c-.518 0-.937.419-.937.936 0 .179.066.343.17.468-.317.383-.51.857-.51 1.373 0 1.409 1.144 2.553 2.553 2.553 1.037 0 1.965-.624 2.352-1.574a5.21 5.21 0 0 0 1.843.337c2.276 0 4.129-1.853 4.129-4.129 0-1.319-.487-2.534-1.266-3.483.022-.072.039-.146.039-.225 0-.518-.419-.937-.936-.937-.516 0-.936.419-.936.937 0 .156.049.303.132.43-.225.267-.361.59-.361.937 0 1.409 1.145 2.553 2.553 2.553.91 0 1.696-.482 2.144-1.205.524.47 1.187.758 1.907.758 1.558 0 2.823-1.266 2.823-2.822 0-.078-.018-.152-.04-.226.758-.395 1.272-1.175 1.272-2.084 0-1.409-1.145-2.553-2.553-2.553-.767 0-1.465.332-1.948.86-.785-.715-1.808-1.151-2.922-1.151a2.97 2.97 0 0 0-.612.064c-.303-.565-.9-.954-1.61-.954-1.196 0-2.17.974-2.17 2.17 0 .128.009.254.026.38-.539.127-.956.633-956 1.247 0 .655.511 1.187 1.158 1.243-.079.163-.126.345-.126.543 0 .518.419.937.936.937.074 0 .146-.014.214-.04.261.505.648.933 1.115 1.221-.065.253-.1.518-.1.787 0 2.502 2.035 4.537 4.537 4.537a4.553 4.553 0 0 0 4.537-4.537c0-.232-.037-.459-.1-.682.459-.288.796-.709.933-1.194.348.058.676.175.978.342.506.256 1.1.408 1.738.408 2.09 0 3.794-1.705 3.794-3.794 0-.083-.01-.162-.012-.245.47-.143.817-.573.817-1.096 0-.518-.419-.937-.936-.937-.119 0-.235.016-.346.043-.309-.475-.772-.818-1.312-.936a2.764 2.764 0 0 0 1.313-.718c.503.269 1.085.427 1.71.427 1.974 0 3.577-1.602 3.577-3.577 0-1.409-.54-2.698-1.414-3.678z"></path></svg>
        </div>
        <div className="ml-4 flex-1">
          <textarea className="w-full outline-none text-grey-darker" 
            value={value} 
            onChange={e=>setValue(e.target.value)}
            placeholder="Write a message..." 
          />
        </div>
        <div className="ml-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  )
}
export default ChatComponent;