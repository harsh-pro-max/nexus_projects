import { useState } from "react";

export default function SignIn() {
    const [value, setValue] = useState("");

    return (
        <div className="w-full h-screen flex justify-end bg-black/30">
            <div className="w-[400px] h-full bg-white px-10 py-8">

                {/* Header */}
                <div className="flex justify-between items-start mb-10">
                    <div>
                        <h1 className="text-3xl font-semibold">Login</h1>
                        <p className="mt-2 text-gray-600">
                            or <span className="text-orange-500 cursor-pointer">create an account</span>
                        </p>
                        <div className="w-8 h-[2px] bg-black mt-3"></div>
                    </div>

                    <img 
                        className="w-16 h-16 rounded-full object-cover" 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                    />
                </div>

                {/* Input */}
                <input 
                    type="number"
                    placeholder="Phone number"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-4 text-lg outline-none focus:border-black"
                />

                {/* Button */}
                <button className="w-full mt-6 bg-orange-500 text-white py-4 text-lg font-semibold hover:bg-orange-600 transition">
                    LOGIN
                </button>

                {/* Footer */}
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                    By clicking on Login, I accept the 
                    <span className="text-black font-medium"> Terms & Conditions </span> 
                    & 
                    <span className="text-black font-medium"> Privacy Policy</span>
                </p>

            </div>
        </div>
    );
}