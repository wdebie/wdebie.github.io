import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { content } from '../content';

const Footer: React.FC = () => {
  const { footer } = content;

  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <a href={`mailto:${footer.contact.email}`} className="flex items-center hover:text-primary mb-2">
                <Mail size={18} className="mr-2" />
                {footer.contact.email}
              </a>
              <a href={`tel:${footer.contact.phone}`} className="flex items-center hover:text-primary">
                <Phone size={18} className="mr-2" />
                {footer.contact.phone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="flex space-x-4">
                <a href={content.hero.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                  <Github size={24} />
                </a>
                <a href={content.hero.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="flex items-center">
                <MapPin size={18} className="mr-2" />
                {footer.location}
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center w-full max-w-3xl">
            <p className="text-sm text-muted-foreground">
              {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;