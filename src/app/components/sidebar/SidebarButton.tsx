import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import styles from '../../styles/SideBar/SidebarButton.module.css';

interface SidebarButtonProps {
  text: string;
  icon: IconDefinition;
  expanded: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ text, icon, expanded }) => {
  const [showText, setShowText] = useState(false); // Estado do texto do botão

  // Atualiza o estado do texto após um pequeno atraso, apenas se a barra lateral estiver expandida
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (expanded) {
      timeoutId = setTimeout(() => {
        setShowText(true);
      }, 300); // Atraso de 0.3s antes de mostrar o texto
    } else {
      setShowText(false); // Se a barra lateral estiver recolhida, oculte imediatamente o texto
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [expanded]);

  return (
    <button className={styles.button}>
      <div className={'button-container'}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        {showText && <div className={`${styles.text} anta-regular ${showText ? styles.show : ''}`}>{text}</div>}
      </div>
    </button>
  );
};

export default SidebarButton;
