const ContactsComponent = () => {
    return (
        <div className="bg-white py-2 px-3 shadow-md ">
            <h3 className="text-lg font-semibold">Contacts</h3>
            <ul className="mt-3">
            <li className="flex items-center justify-between py-2">
                <div className="flex items-center">
                <img
                    src="./GC.jpeg"
                    alt={process.env.FULLNAME}
                    className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                    <p className="text-sm font-medium">{process.env.FULLNAME}</p>
                    <p className="text-xs text-gray-500">Javascript Developer</p>
                </div>
                </div>
                <div className="flex items-center">
                <button className="text-xs text-gray-500">Message</button>
                <button className="ml-2 text-xs text-gray-500">Call</button>
                </div>
            </li>
            </ul>
        </div>
    );
}
export default ContactsComponent;
