import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiSliders, FiMenu, FiX } from 'react-icons/fi';

const navLinks = ['Home', 'Shop'];
const filters = ['All', 'Corduroy', 'Denim', 'Adire', 'Leather'];

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeFilter, setActiveFilter] = useState('All');
   const menuRef = useRef(null);
   const lastFocusedElementRef = useRef(null);

   const openMenu = () => {
      lastFocusedElementRef.current = document.activeElement;
      setIsMenuOpen(true);
      setTimeout(() => {
         menuRef.current?.focus();
      }, 0);
   };

   const closeMenu = () => {
      setIsMenuOpen(false);
      setTimeout(() => {
         lastFocusedElementRef.current?.focus();
      }, 0);
   };

   useEffect(() => {
      const handleEscapeKey = (e) => {
         if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
         }
      };

      document.addEventListener('keydown', handleEscapeKey);
      return () => {
         document.removeEventListener('keydown', handleEscapeKey);
      };
   }, [isMenuOpen]);

   return (
      <header className="bg-[#f4fbfa] font-sans text-slate-900">
         <div className="h-2 bg-slate-200" />

         <nav
            aria-label="Main navigation"
            className="relative z-20 max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20"
         >
            <div className="flex items-center gap-6">
               <button
                  type="button"
                  aria-controls="collapseMenu"
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                  onClick={openMenu}
                  className="lg:hidden cursor-pointer text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
               >
                  <span className="sr-only">Open main menu</span>
                  <FiMenu size={22} aria-hidden="true" />
               </button>

               <div
                  id="collapseMenu"
                  ref={menuRef}
                  tabIndex={-1}
                  className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex max-lg:fixed max-lg:inset-0 max-lg:bg-[#f4fbfa] max-lg:flex-col max-lg:p-6 max-lg:z-50 outline-none`}
               >
                  <div className="flex justify-between items-center lg:hidden mb-8">
                     <span className="text-lg font-light tracking-wide">thetotebagshop</span>
                     <button
                        type="button"
                        onClick={closeMenu}
                        id="toggleClose"
                        className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
                     >
                        <span className="sr-only">Close main menu</span>
                        <FiX size={22} aria-hidden="true" />
                     </button>
                  </div>

                  <ul className="flex flex-col gap-6 lg:flex-row lg:gap-6 text-xs font-medium tracking-widest uppercase">
                     {navLinks.map((link, index) => (
                        <li key={link}>
                           <a
                              href="#"
                              aria-current={index === 1 ? 'page' : undefined}
                              className={`relative pb-1 hover:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded ${
                                 index === 1 ? 'after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-4 after:bg-slate-900' : ''
                              }`}
                           >
                              {link}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <a
               href="#"
               className="absolute left-1/2 -translate-x-1/2 flex items-start text-2xl md:text-3xl font-light tracking-tight text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
            >
               <span className="sr-only">The Tote Bag Shop</span>
               <span aria-hidden="true">thetotebagshop</span>
               <sup className="text-xs ml-0.5 mt-1" aria-hidden="true">®</sup>
            </a>

            <div className="flex items-center gap-5 text-slate-900">
               <button
                  type="button"
                  aria-label="Account"
                  className="cursor-pointer hover:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
               >
                  <FiUser size={20} />
               </button>
               <button
                  type="button"
                  aria-label="Cart"
                  className="relative cursor-pointer hover:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
               >
                  <FiShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-slate-900" />
               </button>
            </div>
         </nav>

         <div className="flex flex-col items-center px-4 pt-4 pb-8 gap-5">
            <div className="flex w-full max-w-xl shadow-sm">
               <button
                  type="button"
                  aria-label="Search"
                  className="flex items-center justify-center w-12 rounded-l-md bg-slate-900 text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
               >
                  <FiSearch size={18} />
               </button>
               <input
                  type="text"
                  placeholder="search for your favourite totebag, colour, design patterns"
                  className="flex-1 min-w-0 rounded-r-md bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
               />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
               {filters.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                     <button
                        key={filter}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveFilter(filter)}
                        className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                           isActive
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-900 border-slate-200 hover:border-slate-400'
                        }`}
                     >
                        {filter === 'All' && <FiSliders size={14} aria-hidden="true" />}
                        {filter}
                     </button>
                  );
               })}
            </div>
         </div>
      </header>
   );
}