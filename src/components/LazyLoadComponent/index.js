import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import { useHasBeenPartlyVisible } from '../hooks/useVisibility';

import FullWidthSection from './FullWidthSection';




function LazyLoadComponent({halfPageComponent, lazyComponents}) {
  

  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.3);
  const isScrolling = useHasBeenVisible(preload);

  return(
      <>
                        {halfPageComponent}

                        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
                        <p> XD</p>
                {hasScrolled ? (
                    <>
                    {lazyComponents}
                    </>
                ) : (
                    <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
                )}

        </>
  )
  

}

export default LazyLoadComponent
