import React, { useMemo, useEffect, useRef } from 'react';
import { productsData } from '../data/productsData';
import { ArrowRight, ShoppingCart, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import useScrollSpy from '../hooks/useScrollSpy';

const Products = () => {
    const navRef = useRef(null);

    // Scroll to specific section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Adjust offset for sticky header
            const headerOffset = 100; // Reduced offset since sidebar doesn't overlay content
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const categoryIds = useMemo(() => productsData.map((cat) => cat.id), []);
    const activeCategory = useScrollSpy(categoryIds, categoryIds[0], {
        threshold: 0.1, // Low threshold to ensure detection even for tall sections
        rootMargin: "-15% 0px -50% 0px" // Adjusted trigger zone
    });

    // Auto-scroll mobile nav to keep active item in view
    useEffect(() => {
        if (activeCategory) {
            const activeBtn = document.getElementById(`nav-btn-${activeCategory}`);
            if (activeBtn && navRef.current) {
                const container = navRef.current;
                const scrollLeft = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeCategory]);

    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHero
                title="Our Products"
                subtitle="Explore our wide range of pharmaceutical solutions tailored for your health needs."
                backgroundImage="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">

                    {/* Desktop Sidebar Navigation */}
                    <div className="hidden lg:block lg:col-span-3 sticky top-24">
                        <nav className="space-y-1" aria-label="Sidebar">
                            {productsData.map((category) => {
                                const isActive = activeCategory === category.id;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => scrollToSection(category.id)}
                                        className={`group w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isActive
                                            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700 shadow-sm'
                                            : 'text-gray-900 hover:bg-gray-100 border-l-4 border-transparent'
                                            }`}
                                    >
                                        <span className="truncate">{category.category}</span>
                                        {isActive && <ChevronRight className="ml-auto w-4 h-4 text-blue-500" />}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Mobile Navigation Bar */}
                    <div className="lg:hidden sticky top-16 z-40 bg-gray-50/95 backdrop-blur-sm -mx-4 px-4 py-2 border-b border-gray-200 mb-6">
                        <div
                            ref={navRef}
                            className="flex overflow-x-auto gap-2 py-1 no-scrollbar scroll-smooth"
                        >
                            {productsData.map((category) => {
                                const isActive = activeCategory === category.id;
                                return (
                                    <button
                                        key={category.id}
                                        id={`nav-btn-${category.id}`}
                                        onClick={() => scrollToSection(category.id)}
                                        className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${isActive
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        {category.category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Product Sections */}
                    <div className="lg:col-span-9 space-y-16">
                        {productsData.map((categorySection) => (
                            <div
                                key={categorySection.id}
                                id={categorySection.id}
                                className="scroll-mt-24 lg:scroll-mt-24"
                            >
                                <div className="flex justify-between items-end mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{categorySection.category}</h2>
                                        <p className="text-gray-500 mt-1">{categorySection.description}</p>
                                    </div>
                                    <button className="hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                                        View All <ArrowRight className="ml-1 w-4 h-4" />
                                    </button>
                                </div>

                                {/* Desktop Grid / Mobile Scroll */}
                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-2 md:w-full overflow-x-scroll no-scrollbar md:overflow-x-hidden">
                                    {categorySection.products.map((product) => (
                                        <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                                            <div className="relative h-30 md:h-48 overflow-hidden bg-gray-100">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <ShoppingCart className="w-4 h-4 text-gray-700" />
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <div className="text-[10px] md:text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                                                    {product.generic}
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[56px]" title={product.name}>
                                                    {product.name}
                                                </h3>
                                                <div className="mt-4 flex items-center justify-between">
                                                    <button className="w-full py-2 px-4 bg-gray-50 hover:bg-white hover:text-blue-600 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200 shadow-sm">
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile "View All" Button */}
                                <div className="mt-4 sm:hidden">
                                    <button className="w-full flex items-center justify-center text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold text-sm transition-colors">
                                        View All {categorySection.category} <ArrowRight className="ml-1 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
