// src/components/pages/CulturesPage.tsx


export const CulturesPage = () => {
    return (
        // Use Tailwind classes
        <div className="bg-nari-light-bg text-black py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-nari-dark-gray">Cultures and Representations</h1>
                <p className="text-xl mb-12 text-nari-deep-gray-text">
                    Our research in Cultures, Representations, and Ideologies examines the social, ethical, and cultural implications of
                    technological advancements. We explore how arts shapes and is shaped by different cultures,
                    and we grapple with the complex social-economical questions that arise as tech-powered arts becomes increasingly
                    integrated into our lives.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-nari-dark-gray">Research Areas</h2>
                <ul className="list-disc list-inside text-lg space-y-2 text-nari-deep-gray-text">
                    <li>Artificial Intelligence and LLM biases</li>
                    <li>Hegemonic Regime of Represenations in Arts</li>
                    <li>Digital Culture and Identity</li>
                    <li>Technology and Human Rights</li>
                </ul>
                <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-nari-dark-gray">References & Related Topics</h3>
                    <ul className="list-none space-y-5 text-nari-deep-gray-text text-base md:text-lg">
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Felkner et al. (2024).</span>
                            <span className="italic">"GPT is Not an Annotator: The Necessity of Human Annotation in Fairness Benchmark Construction".</span>
                            <span className="block text-sm text-gray-600">Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers).</span>
                            <a href="https://doi.org/10.18653/v1/2024.acl-long.760" className="text-nari-blue-primary hover:underline text-sm">[https://doi.org/10.18653/v1/2024.acl-long.760]</a>
                        </li>
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Said, Edward W. (1978).</span>
                            <span className="italic">"Orientalism".</span>
                            <span className="block text-sm text-gray-600">Pantheon Books</span>
                            <a href="https://www.amazon.com/Orientalism-Edward-W-Said/dp/039474067X" className="text-nari-blue-primary hover:underline text-sm">[Purchase on Amazon]</a>
                        </li>
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Cho, A. (2017).</span>
                            <span className="italic">"Default publicness: Queer youth of color, social media, and being outed by the machine".</span>
                            <span className="block text-sm text-gray-600">New Media & Society, 20(9), 3183-3200.</span>
                            <a href="https://doi.org/10.1177/1461444817744784" className="text-nari-blue-primary hover:underline text-sm">[https://doi.org/10.1177/1461444817744784]</a>
                        </li>
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Phi, Thien-bao. (2009).</span>
                            <span className="italic">"Game over: Asian Americans and video game representation".</span>
                            <span className="block text-sm text-gray-600">Transformative Works and Cultures (TWC) Vol. 2</span>
                            <a href="https://doi.org/10.3983/twc.2009.084" className="text-nari-blue-primary hover:underline text-sm">[https://doi.org/10.3983/twc.2009.084]</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};