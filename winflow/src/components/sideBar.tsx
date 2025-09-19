import { HiHome } from "react-icons/hi";
import { FiInfo, FiCompass, FiClock } from "react-icons/fi";

const navItems = [
    { icon: HiHome, label: "Home", active: true },
    { icon: FiInfo, label: "About" },
    { icon: FiCompass, label: "Explore" },
    { icon: FiClock, label: "Recent" },
];

const topics = ["All", "Arts", "Social", "Sport", "Entertainment", "Technology"];

export function Sidebar() {
    return (
        <aside className="w-56 border-r border-gray-200 bg-white h-[calc(100vh-4rem)] sticky top-16 flex flex-col">
            {/* Navigation */}
            <nav className="px-3 py-4 space-y-1">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        className={`
              flex items-center gap-3 w-full rounded-md px-3 py-2 text-sm font-medium
              ${item.active
                                ? "bg-orange-100 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50"
                            }
            `}
                    >
                        <item.icon
                            className={`h-5 w-5 ${item.active ? "text-orange-500" : "text-gray-400"
                                }`}
                        />
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Divider */}
            <hr className="border-gray-200 my-4" />

            {/* Topics */}
            <div className="px-3 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                    Topics
                </h3>
                <div className="space-y-2">
                    {topics.map((topic, i) => (
                        <label
                            key={topic}
                            className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="topic"
                                defaultChecked={i === 0}
                                className="text-orange-500 focus:ring-orange-500"
                            />
                            {topic}
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
}
