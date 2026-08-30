import { CloudDownloadRounded } from "@mui/icons-material";
const ChatMessageDownloadComponent = ({ message, handleDownloadClick }) => {
    return (
        <div className="flex mb-2">
            <div className="rounded py-2 px-3 cursor-pointer" style={{ backgroundColor: '#F2F2F2' }}
            onClick={() => handleDownloadClick(message)}>
                <div className="w-100 h-70">
                    <img src="top-cv.png" alt="" />
                </div>
                <div className="w-100 h-30">
                    <div className="w-70 m-2 inline-block">
                        {/* div with background using base64 img*/}
                        <div 
                        className="w-10 h-10 ml-2 inline-block"
                        style={{
                            backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAMAAAD8KXLNAAAAvVBMVEUAAAD3d3fxRkbyRkbyRkb3fn74g4PyRUX3lZXzRUXyRUX/RkbyQED3fn7zRUX2iYn/Rkb4lpb0cHDvQEDzRETzRkbzQEDzQkLzOzv////939/yODj2enr4kJD0UVHzPT38xMT92tr5lZX1ZGT+6+v4g4P1bW35m5v7yMj91dX3fn76sLD1XFz6qan//f36trb+5OT0VVX6rKz7vb3yNDT4iIj/9vb0TEz5o6PtTEzlRUXsYWHiNzfyRETsSEiKDgROAAAAFHRSTlMAH+Z5+80n+JHu0AWTv6w6CX3V/BbNCjoAAAHfSURBVHgB7daDsisxGMDxHNtftLZqu+//WDebOu1p08H1f7D8zRoIoferx4djXb4htYvXy7vrI32NXi4U8v6KjzcbFTcKer48bQplS3dYwyhbwhpGRTpGRZpGoNvzjUT6RkU6RkX6RiJNM7dUhE/2NYkVhDU2lCgIa6DxxNr0eathBPoab5re6xjJ1pkaRu2XmP8GiIzKCSrHAW9NiKhiwKnKsFkukRMOZaWCVnWZA7uGxEaZn6UDApBGYjz3ekDFZtrGoig1FRPwZXnoQoXL6p0qwSTjy9pdxdicG41K1ue8g6kwRiWLOPcHQDzO84aoE7N9M2SMWX1eD11hal0zNMQ8tzQ2c0UU75saBXB9zhMmTJthsyc2J7cTuIRSQQ5sxzRZK9oYN4x4VGXCDMtz14IDxiusntiM0SILQ6oG71umMLKcHTCL+rEL+qZe5iWUwta+hUwYz7btoCAHTCdJEgcTgKUxY84NfPwc1AihABhLM+x2N+c6oICXqWa5RJo8bTQ59x04YgJhYMvIMnnvfGtivxmsTdr0RbmNCca0ZjR7FCtGNnCcAd6aEIELyhLFABXb35qg62k59v9d9d/8MnN5fa75QFeXZ5qvN4SezzTPCKEn8et/p9vD49UT+gEdNgrQ89qG8QAAAABJRU5ErkJggg==)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}></div>
                        
                        <span className="text-sm text-teal inline-block text-center ml-2">
                            resume.pdf
                        </span>
                    </div>
                    <div className="w-30 inline-block">
                        <CloudDownloadRounded/>
                    </div>
                </div>
            
            </div>
        </div>
    );
}
export default ChatMessageDownloadComponent;
