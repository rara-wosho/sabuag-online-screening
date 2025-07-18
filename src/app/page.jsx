import Link from "next/link";

export default function JoinHero() {
    return (
        <section className="relative bg-gray-900 text-white min-h-[60vh] flex items-center justify-center">
            {/* Background overlay + image */}
            <div
                className="absolute inset-0 bg-[url('/images/student-journalists.jpg')] bg-cover bg-center opacity-40"
                aria-hidden="true"
            />

            <div className="container mx-auto px-6 z-10 text-center">
                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Join{" "}
                    <span className="text-blue-400">
                        The {`{School}`} Chronicle
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                    Write. Edit. Photograph.{" "}
                    <span className="font-semibold text-yellow-300">
                        Make Your Voice Heard.
                    </span>
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#positions"
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                        View Open Roles
                    </Link>
                    <Link
                        href="/join"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Additional Info */}
                <div className="mt-12 flex flex-col md:flex-row justify-center gap-6 text-gray-300">
                    <div className="flex items-center justify-center gap-2">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>No experience required</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Applications close March 15</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
