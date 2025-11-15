
import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-slate-100 dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Crystelf</h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        crystelf is a passionate, community-driven organization focused on creating high-quality, open-source software and public services. Our mission is to build tools that are not only powerful and efficient but also free and accessible to everyone. We believe in the power of collaboration and strive to foster a welcoming environment for contributors from all backgrounds.
                    </p>
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold">Contact Us</h3>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            The best way to get in touch is through our QQ group or by opening an issue on our GitHub repositories. We look forward to hearing from you!
                        </p>
                         <a
                            href="https://github.com/crystelf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-transform hover:-translate-y-1"
                        >
                            Join the Conversation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
