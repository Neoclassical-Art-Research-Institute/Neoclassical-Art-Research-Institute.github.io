// src/components/pages/GamingPage.tsx


export const GamingPage = () => {
    return (
        // Use Tailwind classes. Corrected text color to be readable on light background.
        <div className="bg-nari-light-bg text-black py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-nari-dark-gray">Gaming and Arts</h1>
                <p className="text-xl mb-12 text-nari-deep-gray-text">
                    Our research in Gaming and Arts explores the intersection of interactive entertainment, game mechanics, metrics and
                    creative expression. We investigate how technologies can be used to create new forms of
                    art, and how artistic principles can be applied to the design of more engaging and immersive
                    gaming experiences or art presentations.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-nari-dark-gray">Research Areas</h2>
                <ul className="list-disc list-inside text-lg space-y-2 text-nari-deep-gray-text">
                    <li>Game Design and Development</li>
                    <li>Virtual and Augmented Reality</li>
                    <li>Interactive Storytelling</li>
                    <li>Game Art and Expression</li>
                    <li>Events and Gamification</li>
                </ul>
                <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-2xl font-semibold mb-4 text-nari-dark-gray">References & Related Topics</h3>
                    <ul className="list-none space-y-5 text-nari-deep-gray-text text-base md:text-lg">
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Clark DB, Tanner-Smith EE, Killingsworth SS. (2016).</span>
                            <span className="italic">"Digital Games, Design, and Learning: A Systematic Review and Meta-Analysis".</span>
                            <span className="block text-sm text-gray-600">Review of Educational Research, 86(1), 79-122.</span>
                            <a href="https://doi.org/10.3102/0034654315582065" className="text-nari-blue-primary hover:underline text-sm">[https://doi.org/10.3102/0034654315582065]</a>
                        </li>
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Run Yu, Lages WS, Nabiyouni M, et al. (2016).</span>
                            <span className="italic">"Bookshelf and Bird: Enabling Real Walking in Large VR Spaces through Cell-Based Redirection".</span>
                            <span className="block text-sm text-gray-600"></span>
                            <a href="https://doi.org/10.1109/3DUI.2017.7893327" className="text-nari-blue-primary hover:underline text-sm">[https://doi.org/10.1109/3DUI.2017.7893327]</a>
                        </li>
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Lu X. (2023).</span>
                            <span className="italic">"Digital Games, Virtual Idols, and Market Success: Genshin Impact and Yun Jin.".</span>
                            <span className="block text-sm text-gray-600">SAGE Publications: SAGE Business Cases Originals</span>
                            <a href="https://doi.org/10.4135/9781071915806" className="text-nari-blue-primary hover:underline text-sm">[https://doi.org/10.4135/9781071915806]</a>
                        </li>
                    </ul>
                    {/* Add actual game links or content */}
                </div>
            </div>
        </div>
    );
};