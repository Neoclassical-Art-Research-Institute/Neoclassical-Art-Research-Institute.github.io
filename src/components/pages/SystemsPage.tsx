// src/components/pages/SystemsPage.tsx

// Removed import React if you did that earlier based on TS errors

export const SystemsPage = () => {
    return (
        // Use Tailwind classes defined in tailwind.config.js
        // You can change bg-nari-light-bg to bg-white, bg-gray-100, etc. if desired
        <div className="bg-nari-light-bg text-black py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-nari-dark-gray">Systems, Security, and Networking</h1>
                <p className="text-xl mb-12 text-nari-deep-gray-text">
                    Our research in Systems, Security, and Networking focuses on the fundamental technologies that
                    underpin modern computing and communication. We explore new paradigms in distributed systems,
                    research advanced security protocols, and investigate innovative networking architectures to meet the
                    challenges of an increasingly interconnected world.
                </p>

                <h2 className="text-3xl font-semibold mb-6 text-nari-dark-gray">Research Areas</h2>
                <ul className="list-disc list-inside text-lg space-y-2 text-nari-deep-gray-text">
                    <li>Distributed Systems and Cloud Computing</li>
                    <li>Network Security</li>
                    <li>Internet of Things (IoT) and Edge Computing</li>
                    <li>Wireless and Mobile Networking</li>
                    <li>Cybersecurity and Threat Analysis</li>
                    <li>Traditional Server-Client Networking Analysis</li>
                </ul>

                {/* Updated References Section */}
                <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                    <h3 className="text-2xl font-semibold mb-6 text-nari-dark-gray">References & Related Topics</h3>
                    {/* Removed previous placeholder paragraph */}

                    {/* List of example references */}
                    <ul className="list-none space-y-5 text-nari-deep-gray-text text-base md:text-lg">
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Neal Cardwell, Yuchung Cheng, C. Stephen Gunn, Soheil Hassas Yeganeh, and Van Jacobson (2017).</span>
                            <span className="italic">"BBR: congestion-based congestion control".</span>
                            <span className="block text-sm text-gray-600">Communications of the ACM, Volume 60, Issue 2.</span>
                            <a href="https://dl.acm.org/doi/10.1145/3009824" className="text-nari-blue-primary hover:underline text-sm">[https://doi.org/10.1145/3009824]</a>
                        </li>
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Nakamoto, S. (2008).</span>
                            <span className="italic">"Bitcoin: A Peer-to-Peer Electronic Cash System".</span>
                            <span className="block text-sm text-gray-600"></span>
                            <a href="https://bitcoin.org/bitcoin.pdf" className="text-nari-blue-primary hover:underline text-sm">[Source]</a>
                        </li>
                        <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">Pascoe, C., Quinn, S., & Scarfone, K. (2024).</span>
                            <span className="italic">"The NIST Cybersecurity Framework (CSF) 2.0".</span>
                            <span className="block text-sm text-gray-600">NIST Cybersecurity White Papers (CSWP), National Institute of Standards and Technology.</span>
                            <a href="https://doi.org/10.6028/NIST.CSWP.29" className="text-nari-blue-primary hover:underline text-sm">[https://doi.org/10.6028/NIST.CSWP.29]</a>
                        </li>
                         <li className="border-b border-gray-200 pb-4">
                            <span className="font-semibold block mb-1">De Naray, Rachel K., and Allyson M. Buytendyk. (2022).</span>
                            <span className="italic">"Analysis of Mission Based Cyber Risk Assessments (MBCRAs) Usage in DoD’s Cyber Test & Evaluation".</span>
                            <span className="block text-sm text-gray-600">INSTITUTE FOR DEFENSE ANALYSES.</span>
                            <a href="https://apps.dtic.mil/sti/trecms/pdf/AD1203757.pdf" className="text-nari-blue-primary hover:underline text-sm">[Source]</a>
                        </li>
                    </ul>
                    {/* End list of examples */}

                </div>
            </div>
        </div>
    );
};
