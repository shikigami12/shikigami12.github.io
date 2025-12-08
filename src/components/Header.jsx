import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Send, MessageCircle, FileDown } from 'lucide-react';

const Header = ({ profile }) => {
    return (
        <div className="bg-slate-800 text-white p-8 sm:flex justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Photo / Avatar - Preserved as requested */}
                <div className="w-32 h-32 rounded-full bg-slate-700 flex items-center justify-center text-4xl font-bold text-slate-300 border-4 border-slate-600 overflow-hidden shrink-0 shadow-lg">
                    {profile.photo ? (
                        <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
                    ) : (
                        <span>{profile.name.split(' ').map(n => n[0]).join('')}</span>
                    )}
                </div>

                <div className="text-center sm:text-left">
                    <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
                    <p className="text-xl text-slate-300 font-light">{profile.title}</p>

                    <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-slate-300">
                        {profile.location && (
                            <span className="flex items-center gap-2">
                                <MapPin size={14} /> {profile.location}
                            </span>
                        )}
                        {profile.email && (
                            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail size={14} /> {profile.email}
                            </a>
                        )}
                        {profile.phone && (
                            <span className="flex items-center gap-2">
                                {profile.phone.map((phone, index) => (
                                    <a key={index} href={`tel:${phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                        <Phone size={14} /> {phone}
                                    </a>
                                ))}
                            </span>
                        )}
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-slate-300">
                        {profile.downloadLink && (
                            <a href={profile.downloadLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                <FileDown size={14} /> Download CV
                            </a>
                        )}
                    </div>
                </div>

            </div>

            <div className="mt-6 sm:mt-0 flex flex-col items-center sm:items-end gap-2">
                {profile.linkedin && (
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <Linkedin size={18} /> LinkedIn
                    </a>
                )}
                {profile.telegram && (
                    <a href={profile.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <Send size={18} /> Telegram
                    </a>
                )}
                {profile.whatsapp && (
                    <a href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <MessageCircle size={18} /> WhatsApp
                    </a>
                )}
            </div>
        </div>
    );
};

export default Header;
