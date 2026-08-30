import ChatComponent from "@/components/ChatComponent";
import ContactsComponent from "@/components/ContactsComponent";
import LeftHeaderComponent from "@/components/LeftHeaderComponent";
import SearchComponent from "@/components/SearchComponent";

const ChatPage = () => {
  return (
    <div>
      <div className="w-full h-32" style={{ backgroundColor: '#449388' }}></div>
      <div className="container mx-auto" style={{ marginTop: '-128px' }}>
        <div className="py-6 h-screen">
          <div className="flex border border-grey rounded shadow-lg h-full">
            {/* Left */}
            <div className="w-1/3 border flex flex-col">
              <LeftHeaderComponent></LeftHeaderComponent>
              <SearchComponent></SearchComponent>
              <div className="bg-grey-lighter flex-1 overflow-auto">
                <ContactsComponent></ContactsComponent>
              </div>
            </div>

            {/* Right */}
            <div className="w-2/3 border flex flex-col">
              <ChatComponent></ChatComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatPage;