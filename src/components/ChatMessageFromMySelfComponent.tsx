const convertDate = (date:Date) => {
    //get the date hh:mm am/pm
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    let hour = hours % 12;
    let minutesStr = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hour + ':' + minutesStr + ' ' + ampm;
    return strTime;
}

const ChatMessageFromMySelfComponent = ({ message }) => {
    return (
        <div className="flex justify-end mb-2">
            <div className="rounded py-2 px-3" style={{ backgroundColor: '#E2F7CB' }}>
                <p className="text-sm mt-1">
                    {message.text}
                </p>
                <p className="text-right text-xs text-grey-dark mt-1">
                    {convertDate(message.date || new Date())}
                </p>
            </div>
        </div>
    );
}
export default ChatMessageFromMySelfComponent;
