import React from 'react';
import { SmoothScrollHero } from './SmoothScrollHero';
import useCanvasCursor from './hooks/useCanvasCursor';
import { VelocityText } from './components/VelocityText';
import { Contact } from './components/Contact'
const App = () => {
      // Activate the custom cursor effect
      useCanvasCursor();

      return (
            <>
                  {/*custom cursor */}
                  <canvas id="canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}></canvas>


                  {/* MAIN CONTENT HERE */}

                  <SmoothScrollHero />
                  <VelocityText />
                  <Contact />

            </>
      );
};

export default App;
