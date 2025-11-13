import { getCountryData } from '../data/basecode';

const Stats = () => {
    const data = getCountryData();

    const colorClasses = {
        purple: 'from-purple-500 to-pink-500',
        blue: 'from-blue-400 to-blue-200',
        yellow: 'from-yellow-300 to-yellow-100'
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12">
                    <div className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
                        {data.achievements?.stats.badge}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {data.achievements.stats.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        {data.achievements.stats.description}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {data.achievements.stats.map((metric: any, index: any) => {
                        const isMainStat = index === 0;
                        const gradientClass = colorClasses.purple;

                        return isMainStat ? (
                            // Large featured stat
                            <div
                                key={metric.id}
                                className={`md:col-span-2 bg-gradient-to-br ${gradientClass} rounded-3xl p-8 md:p-12 text-white relative overflow-hidden`}
                            >
                                <div className="relative z-10">
                                    <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
                                        {metric.label}
                                    </div>
                                    <div className="text-5xl md:text-6xl font-bold mb-4">
                                        {metric.value}
                                    </div>
                                    <p className="text-lg opacity-90 max-w-md">
                                        {metric.description}
                                    </p>
                                </div>

                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                            </div>
                        ) : (
                            // Smaller stats
                            <div
                                key={metric.id}
                                className={`bg-gradient-to-br ${gradientClass} rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden`}
                            >
                                <div className="relative z-10">
                                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                                        {metric.value}
                                    </div>
                                    <div className="text-lg font-semibold text-gray-800">
                                        {metric.label}
                                    </div>
                                </div>

                                {/* Decorative circle */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;