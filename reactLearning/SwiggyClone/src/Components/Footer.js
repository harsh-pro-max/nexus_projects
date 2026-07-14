export default function Footer() {
    return (
        <div className="bg-gray-100 mt-20 py-12">
            <div className="w-[85%] mx-auto grid grid-cols-5 gap-10">

                {/* Logo Section */}
                <div id="footer">
                    <img 
                        className="w-32 mb-4"
                        src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" 
                        alt="logo"
                    />
                    <p className="text-gray-500 text-sm">
                        © 2025 Swiggy Limited
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>About Us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Dineout</li>
                        <li>Minis</li>
                        <li>Pyng</li>
                    </ul>
                </div>

                {/* Contact + Legal */}
                <div>
                    <h3 className="font-semibold mb-4">Contact us</h3>
                    <ul className="space-y-2 text-gray-600 text-sm mb-6">
                        <li>Help & Support</li>
                        <li>Partner With Us</li>
                        <li>Ride With Us</li>
                    </ul>

                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Cities */}
                <div>
                    <h3 className="font-semibold mb-4">Available in:</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>Hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                    </ul>

                    <button className="mt-4 border px-3 py-1 rounded text-sm">
                        685 cities
                    </button>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-4">Life at Swiggy</h3>
                    <ul className="space-y-2 text-gray-600 text-sm mb-6">
                        <li>Explore With Swiggy</li>
                        <li>Swiggy News</li>
                        <li>Snackables</li>
                    </ul>

                    <h3 className="font-semibold mb-4">Social Links</h3>
                    <div className="flex gap-4 text-xl text-gray-700">
                        <span>🔗</span>
                        <span>📸</span>
                        <span>📘</span>
                        <span>📌</span>
                        <span>🐦</span>
                    </div>
                </div>

            </div>
        </div>
    );
}