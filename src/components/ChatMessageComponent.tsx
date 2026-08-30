import ChatMessageDownloadComponent from "./ChatMessageDownloadComponent";
import ChatMessageFromAnotherComponent from "./ChatMessageFromAnotherComponent";
import ChatMessageFromMySelfComponent from "./ChatMessageFromMySelfComponent";
import ChatMessageThinkingComponent from "./ChatMessageThinkingComponent";

const ChatMessageComponent = ({ messages, handleDownloadClick, isThinking }) => {
    const defaultMessages = [
        {
            text: `Hi! I'm GC. Ask me anything about my experience.`,
            type: "third",
        },
    ];
    return (
        <>
            {[...defaultMessages,...messages].map((message, index) => {
                if (message.type == "third") {
                    return <ChatMessageFromAnotherComponent key={index} message={message}></ChatMessageFromAnotherComponent>
                } 
                if(message.type == "download"){
                    return <ChatMessageDownloadComponent key={index} message={message} handleDownloadClick={handleDownloadClick}></ChatMessageDownloadComponent>
                }
                return <ChatMessageFromMySelfComponent key={index} message={message}></ChatMessageFromMySelfComponent>
            })}
            {isThinking && <ChatMessageThinkingComponent></ChatMessageThinkingComponent>}
        </>
    );
}
export default ChatMessageComponent;
