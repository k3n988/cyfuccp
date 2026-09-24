"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { navItems } from "../data/site-content";
export function SiteHeader() { const [open, setOpen] = useState(false); return <header className="site-header"><a href="#home" className="brand" onClick={() => setOpen(false)}><Image className="brand-logo" src="/logo.jpg" alt="Christian Youth Fellowship UCCP Bacolod logo" width={56} height={56} priority/><span><strong>Christian Youth Fellowship</strong><small>UCCP Bacolod</small></span></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={21}/> : <Menu size={21}/>}</button><nav className={open ? "main-nav open" : "main-nav"}>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}</nav><div className="header-actions"><a className="button button-pink" href="#contact">Join Fellowship <ArrowRight size={14}/></a></div></header>; }
