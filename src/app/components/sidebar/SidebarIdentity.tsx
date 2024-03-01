import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/SideBar/SidebarIdentity.module.css';



const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="1em"
    height="1em"
    
  >
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
  </svg>
)






interface SidebarIdentityProps {
  expanded: boolean;
}

const SidebarIdentity: React.FC<SidebarIdentityProps> = ({ expanded }) => {
  const [showText, setShowText] = useState(false); // Estado do texto do botão
  const [sidebarHovered, setSidebarHovered] = useState(false); // Estado para verificar se o cursor está sobre a barra lateral

  // Atualiza o estado do texto após um pequeno atraso, apenas se a barra lateral estiver expandida
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (expanded && sidebarHovered) {
      timeoutId = setTimeout(() => {
        setShowText(true);
      }, 400); // Atraso de 0.5s antes de mostrar o texto
    } else {
      setShowText(false); // Se a barra lateral estiver recolhida ou o cursor não estiver sobre ela, oculte imediatamente o texto
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [expanded, sidebarHovered]);

  // Manipulador de evento para quando o cursor entrar na barra lateral
  const handleMouseEnter = () => {
    setSidebarHovered(true);
  };

  // Manipulador de evento para quando o cursor sair da barra lateral
  const handleMouseLeave = () => {
    setSidebarHovered(false);
  };

  return (
    <div className={styles.identity} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <div className={styles.logo}><img className={styles.logoArt} src='/LogoArt.png'></img></div>
        <div className={`${styles.name} anta-regular ${showText ? styles.show : ''}`}>
          <a className='pulse-text'>João Pedro</a>
          
        </div>
      </div>
    </div>

  );
};

export default SidebarIdentity;




