const convertDateToMMMDDYYYY = (date: Date) => {
    //Convert to MMM DD, YYYY
    let month = date.toLocaleString('default', { month: 'short' });
    let day = date.getDate();
    let year = date.getFullYear();
    return month + ' ' + day + ', ' + year;
}

const DateMessageComponent = ({ date }: { date: Date }) => {
    return (
        <div className="flex justify-center mb-2">
            <div className="rounded py-2 px-4" style={{ backgroundColor: '#DDECF2' }}>
                <p className="text-sm uppercase">
                    {convertDateToMMMDDYYYY(date || new Date())}
                </p>
            </div>
        </div>
    );
}
export default DateMessageComponent;
