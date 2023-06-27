import React, { useContext, useState } from "react";
import { LanguageContext } from "../../LanguageContext";
import '../../App.css';

export const LanguageSwitch = () => {
  const DropdownMenu = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectetLanguage] = useState("");

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (language) => {
      setSelectetLanguage(language);
      setIsOpen(false);
      setLanguage(language);
    };

    const languages = [
      { language: 'Deutsch', message: 'Hallo Welt!' },
      { language: 'English', message: 'Hello World!' },
      { language: 'Espanol', message: '¡Hola Mundo!' },
      { language: 'Français', message: 'Bonjour le monde !' }
    ];

    const selectedLanguageObject = languages.find(
      (lang) => lang.language === selectedLanguage
    );

    return (
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedLanguage ? selectedLanguage : 'Select a Language'}
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {languages.map((lang) => (
              <li key={lang.language}>
                <button onClick={() => handleLanguageSelect(lang.language)}>
                  {lang.language}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="message">
          {selectedLanguageObject && (
            <h2>{selectedLanguageObject.message}</h2>
          )}
        </div>
      </div>
    );
  };

  return <DropdownMenu />;
};
