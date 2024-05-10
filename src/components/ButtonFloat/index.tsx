import { useEffect } from "react";
import { Box } from "./style"

export default ()=>{
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // ou 'auto' para uma rolagem instantânea
        });
      };
    
      useEffect(() => {
        const handleScrollToTop = () => {
          scrollToTop();
        }
        window.addEventListener('scrollToTop', handleScrollToTop);
    
        return () => {
          window.removeEventListener('scrollToTop', handleScrollToTop);
        };
      }, []);

    return <Box onClick={scrollToTop}>
        ir para o topo
    </Box>
}