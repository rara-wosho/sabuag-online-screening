// "use client" is not required for static pages
import { Mail, User, BookOpen } from "lucide-react";

export default function JoinUsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero */}
            <section className="bg-emerald-600 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Join Our Organization
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                    Be part of a community that grows, builds, and innovates
                    together.
                </p>
            </section>

            {/* About */}
            <section className="py-16 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-4">Why Join Us?</h2>
                <p className="text-gray-700 text-lg">
                    As an active member, you'll have opportunities to enhance
                    your skills through real-world projects, connect with other
                    passionate individuals, and represent the IT student body.
                </p>
            </section>

            {/* Benefits */}
            <section className="bg-gray-100 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div>
                        <User className="mx-auto text-emerald-600" size={40} />
                        <h3 className="text-xl font-medium mt-4">Leadership</h3>
                        <p className="text-gray-600 mt-2">
                            Build confidence and lead in various initiatives.
                        </p>
                    </div>
                    <div>
                        <BookOpen
                            className="mx-auto text-emerald-600"
                            size={40}
                        />
                        <h3 className="text-xl font-medium mt-4">
                            Skill Development
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Work on events, websites, and org-wide activities.
                        </p>
                    </div>
                    <div>
                        <Mail className="mx-auto text-emerald-600" size={40} />
                        <h3 className="text-xl font-medium mt-4">Networking</h3>
                        <p className="text-gray-600 mt-2">
                            Collaborate with fellow IT students and faculty.
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16 px-6 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Apply Now
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">
                            Student Email
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">
                            Why do you want to join?
                        </label>
                        <textarea
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                        Submit Application
                    </button>
                </form>
            </section>
        </main>
    );
}
