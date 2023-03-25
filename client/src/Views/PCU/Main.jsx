import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import axios from 'axios';
import '../../Css/Index.css';

function Main() {
    const { user } = useContext(AuthContext);
    const [isInitiated, setIsInitiated] = useState(null);
    const [cuentas, setCuentas] = useState(0);
    const [personajes, setPersonajes] = useState(0);
    const [casas, setCasas] = useState(0);
    const [negocios, setNegocios] = useState(0);
    const [vehiculos, setVehiculos] = useState(0);
    const [facciones, setFacciones] = useState(0);

    useEffect(() => {
        init();
    });

    const init = async () => {
        const response = await axios.get("/api/pcu/data").catch(e => console.error(e));
        if(typeof response === undefined) { setIsInitiated(true); return; }

        setCuentas(response.data.cuentas);
        setPersonajes(response.data.personajes);
        setCasas(response.data.casas);
        setNegocios(response.data.negocios);
        setVehiculos(response.data.vehiculos);
        setFacciones(response.data.facciones);

        setIsInitiated(true);
    }

    return (
        <main className="bg-wrp">
            {isInitiated && (
            <div>
                <div aria-live="assertive" className="fixed inset-0 top-16 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50">
                    <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                    </div>
                </div>
                <div>
                    <div>
                    <header className="h-24 fixed top-0 z-50 w-full">
                        <div className="flex">
                            <div className="bg-no-repeat bg-cover bg-backdrop-auth backdrop-opacity-50 border border-gray-700 flex z-30 items-center justify-center w-0 h-20 md:w-64 flex-shrink-0 backdrop-blur-sm bg-secondary-wrp-gradient bg-secondary-wrp shadow-sm transition-all duration-500">
                                <img className="h-10 w-auto flex-shrink-0 hover:scale-110 transition duration-300 cursor-pointer" src="/assets/images/logo.png" alt="logo"/>
                            </div>
                            <div className="flex flex-1 bg-transparent backdrop-blur-sm border-b border-gray-700 shadow-2xl h-20 relative z-10 w-full flex-shrink-0 transition-all duration-500">
                                <button type="button" className="flex items-center justify-center w-16 border-r text-center border-gray-500 px-4 text-white hover:bg-usrp-primary-hover hover:text-black md:hidden transition-all duration-300">
                                    <span className="sr-only"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8">
                                        <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <div className="px-4 py-4 flex items-center justify-center w-36 border-r border-gray-500 md:hidden transition-all duration-300">
                                    <img className="h-8 w-auto flex-shrink-0" src="/assets/images/logo.png" alt="logo"/>
                                </div>
                                <div className="flex-1 flex justify-end gap-x-4 px-4 sm:px-6">
                                    <div className="flex flex-none flex-nowrap gap-x-2 items-center">
                                        <span className="text-xs md:text-sm font-medium text-white">2</span>
                                        <img src="" className="h-4 w-4 md:h-6 md:w-6 v-lazy-image v-lazy-image-loaded" alt="uscoin"/>
                                    </div>
                                    <div className="flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                        <div className="relative flex-shrink-0">
                                            <div>
                                                <button id="headlessui-menu-button-67" type="button" aria-haspopup="true" aria-expanded="false" className="bg-usrp-bg hover:bg-usrp-secondary rounded-full flex text-sm shadow transition duration-300">
                                                    <span className="sr-only"></span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="rounded-full p-2 flex-shrink-0 inline-block h-12 w-12 text-white">
                                                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-0 overflow-x-hidden border-r border-gray-700 flex-none md:w-64 md:block sticky h-screen transition-all duration-500 bg-gradient-to-r from-usrp-bg-secondary-gradient to-usrp-bg-secondary">
                            <aside className="space-y-2">
                                <div className="py-8 px-6 mb-12">
                                    <div className="grid grid-cols-1">
                                        <div className="flex items-center text-md font-medium uppercase gap-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-usrp-primary">
                                            <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="text-white/90">Menú</span>
                                    </div>
                                    <div className="grid grid-cols-1 my-4 gap-y-2">
                                        <button className="hover:bg-usrp-bg flex items-center px-2 py-2 text-sm font-semibold gap-x-2 rounded-md transition duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-usrp-primary flex-shrink-0">
                                                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span className="text-white/70">Inicio</span>
                                        </button>
                                        <button className="hover:bg-usrp-bg flex items-center px-2 py-2 text-sm font-semibold gap-x-2 rounded-md transition duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-usrp-primary flex-shrink-0">
                                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span className="text-white/70">Perfil</span>
                                        </button>
                                        <button className="hover:bg-usrp-bg flex items-center px-2 py-2 text-sm font-semibold gap-x-2 rounded-md transition duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-usrp-primary flex-shrink-0">
                                                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"></path>
                                            </svg>
                                            <span className="text-white/70">Personajes</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-gray-100 ml-auto mr-2 flex-shrink-0">
                                                <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clip-rule="evenodd"></path>
                                            </svg>
                                            </button>
                                            <div className="grid grid-cols-1 ml-6 gap-y-2" style="opacity: 1; transform: translate(0px, 0px);">
                                                <button className="hover:bg-usrp-bg flex items-center py-2 px-1 text-xs gap-x-2 rounded-md transition duration-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 h-4 w-4 text-white/50 transition-all duration-300">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                                                    </svg>
                                                    <span className="text-white/50 truncate">Luther Muller</span>
                                                </button>
                                                <button className="hover:bg-usrp-bg flex items-center py-2 px-1 text-xs gap-x-2 rounded-md transition duration-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 h-4 w-4 text-white/50 transition-all duration-300">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                                                    </svg>
                                                    <span className="text-white/50 truncate">Gianluca Bianchi</span>
                                                </button>
                                                <button className="hover:bg-usrp-bg flex items-center py-2 px-1 text-xs gap-x-2 rounded-md transition duration-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 h-4 w-4 text-white/50 transition-all duration-300">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
                                                    </svg>
                                                    <span className="text-white/50 truncate">Crear personaje</span>
                                                </button>
                                            </div>
                                            <button className="hover:bg-usrp-bg flex items-center px-2 py-2 text-sm font-semibold gap-x-2 rounded-md transition duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-usrp-primary flex-shrink-0">
                                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"></path>
                                                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"></path>
                                                </svg>
                                                <span className="text-white/70">Certificación</span>
                                                <div className="bg-usrp-success text-black rounded-sm text-xs px-2 py-1 shrink">Completa</div>
                                            </button>
                                            <button className="hover:bg-usrp-bg flex items-center px-2 py-2 text-sm font-semibold gap-x-2 rounded-md transition duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-usrp-primary flex-shrink-0">
                                                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"></path>
                                                </svg>
                                                <span className="text-white/70">Normativas</span>
                                            </button>
                                            <button className="hover:bg-usrp-bg flex items-center px-2 py-2 text-sm font-semibold gap-x-2 rounded-md transition duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-usrp-primary flex-shrink-0">
                                                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
                                                </svg>
                                                <span className="text-white/70">Tienda</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <div className="flex items-center text-md font-medium uppercase gap-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-usrp-primary">
                                                <path fill-rule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span className="text-white/90">Dentro del jugador</span>
                                        </div>
                                        <div className="grid grid-cols-1 my-4 gap-y-2">
                                            <button className="hover:bg-usrp-bg flex items-center px-2 py-2 text-sm font-semibold gap-x-2 rounded-md transition duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-usrp-primary flex-shrink-0">
                                                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span className="text-white/70">Código penal</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </header>
                    <main className="brightness-100 pointer-events-auto flex-1 flex mt-24 ml-0 md:ml-64 transition-all duration-500">
                        <section className="flex-1 h-screen p-4">
                            <div className="grid grid-cols-6 gap-x-2 gap-y-2">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto xl:grid-cols-6 gap-2">
                                        <div>
                                            <div className="card flex w-100 p-4 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="min-h-8 max-h-12 min-w-max text-white/90">
                                                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"></path>
                                                </svg>
                                                <div className="ml-3">
                                                    <p className="text-2xl font-medium">{cuentas}</p>
                                                    <p className="text-white/70">Cuentas</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card flex w-100 p-4 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="min-h-8 max-h-12 min-w-max text-white/90">
                                                    <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd"></path>
                                                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"></path>
                                                </svg>
                                                <div className="ml-3">
                                                    <p className="text-2xl font-medium">{personajes}</p>
                                                    <p className="text-white/70">Personajes</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card flex w-100 p-4 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="min-h-8 max-h-12 min-w-max text-white/90">
                                                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                                                </svg>
                                                <div className="ml-3">
                                                    <p className="text-2xl font-medium">{casas}</p>
                                                    <p className="text-white/70">Propiedades</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card flex w-100 p-4 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="min-h-8 max-h-12 min-w-max text-white/90">
                                                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z"></path>
                                                    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z"></path>
                                                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path>
                                                </svg>
                                                <div className="ml-3">
                                                    <p className="text-2xl font-medium">{negocios}</p>
                                                    <p className="text-white/70">Empresas</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card flex w-100 p-4 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="min-h-8 max-h-12 min-w-max text-white/90">
                                                    <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clip-rule="evenodd"></path>
                                                </svg>
                                                <div className="ml-3">
                                                    <p className="text-2xl font-medium">{vehiculos}</p>
                                                    <p className="text-white/70">Vehículos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card flex w-100 p-4 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="min-h-8 max-h-12 min-w-max text-white/90">
                                                    <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
                                                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                                                </svg>
                                                <div className="ml-3">
                                                    <p className="text-2xl font-medium">{facciones}</p>
                                                    <p className="text-white/70">Facciones</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6 card">
                                    <div className="flex items-center justify-center flex-nowrap gap-x-2">
                                        <div className="p-autocomplete p-component p-inputwrapper p-autocomplete-dd flex-1" loading="false">
                                            <input type="text" className="p-autocomplete-input p-inputtext p-component p-autocomplete-dd-input" placeholder="Buscar usuarios y personajes" tabindex="0" autocomplete="off" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" aria-controls="pv_id_3_list"/>
                                                <button className="p-button p-component p-button-icon-only p-autocomplete-dropdown" type="button" tabindex="-1" aria-hidden="true">
                                                    <span className="pi pi-chevron-down p-button-icon"></span>
                                                    <span className="p-button-label">&nbsp;</span>    
                                                </button>
                                                <span role="status" aria-live="polite" className="p-hidden-accessible">No results found</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 xl:col-span-4"><div className="card flex mb-2">
                                        <div className="p-2">
                                            <p className="text-white text-medium mb-4"> Bienvenido al panel de control de usuario, este es el lugar donde puedes gestionar tu cuenta, configurar tus preferencias, personalizar tus personajes, comprar con tus créditos en la tienda y muchas opciones más. </p>
                                            <p className="text-white text-medium mb-4"> Te aconsejamos que leas las normativas del servidor antes de empezar a jugar, debido a que el desconocimiento de las mismas no es excusa para no cumplirlas y ser sancionado. Si tienes alguna duda, puedes contactar con el equipo de administradores. </p>
                                            <p className="flex">
                                                <a href="https://us-rp.org/" target="_blank" className="secondary-button p-4 mr-1">
                                                    <span>Foro</span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card flex mb-2">
                                        <div className="p-2">
                                            <p className="text-white text-medium mb-4"> Para poder jugar en el servidor de SA-MP, es necesario descargar la versión 0.3DL del cliente. La versión 0.3DL es la última versión lanzada por San Andreas Multiplayer y nos permite añadir modelos personalizados desde el lado del servidor. </p>
                                            <p>
                                                <button className="primary-button p-4 mr-1" onclick="location.href='https://archive.org/download/sa-mp-0.3.dl/sa-mp-0.3.DL-R1-install.exe'">
                                                    <span>Descargar SA-MP 0.3DL</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center md:text-left">
                                        <a href="https://youtube.com/@us-rp" target="_blank" className="inline-block p-6 mb-2 mr-2 card text-white/95 font-medium hover:bg-usrp-secondary-hover transition duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-10 h-10">
                                                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                                </svg>
                                            </a>
                                            <a href="https://discord.gg/njWWdXD" target="_blank" className="inline-block p-6 mb-2 mr-2 card text-white/95 font-medium hover:bg-usrp-secondary-hover transition duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-10 h-10">
                                                    <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-span-6 xl:col-span-2">
                                        <div className="card min-w-max">
                                            <iframe className="w-full mb-2" height="300" src="https://www.youtube.com/embed/K6hbb-HQoXk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
                                            </iframe>
                                            <iframe className="w-full" height="300" src="https://www.youtube.com/embed/bg3Z0hT4ZYw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
            )}
        </main>
    );
}

export default Main;