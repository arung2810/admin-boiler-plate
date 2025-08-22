import React, { useState } from 'react';
import { Box, IconButton, Paper, Stack, Typography, Tooltip, Snackbar, Link } from '@mui/material';
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useKeenSlider } from 'keen-slider/react'

import Swiper1 from '../../../assets/images/swiper/1.jpg';
import Swiper2 from '../../../assets/images/swiper/2.jpg';
import Swiper3 from '../../../assets/images/swiper/3.jpg';
import Swiper4 from '../../../assets/images/swiper/4.jpg';
import Swiper5 from '../../../assets/images/swiper/5.jpg';
import classNames from 'classnames';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function SwiperPage() {
  const [showCode, setShowCode] = useState({
    swiperBasic: false,
    swiperMultipleSlides: false,
    swiperSpacing: false,
    swiperFreeMode: false,
    swiperCentered: false,
    swiperControls: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const codeStringSwiperBasic = `
// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperBasic = () => {
  // Hooks
  const [ref] = useKeenSlider({
    loop: true
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/1.jpg' alt='swiper 1' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/2.jpg' alt='swiper 2' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/3.jpg' alt='swiper 3' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/4.jpg' alt='swiper 4' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/5.jpg' alt='swiper 5' />
      </div>
    </div>
  )
}

export default SwiperBasic`;

  const codeStringSwiperMultipleSlides = `
// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperMultipleSlides = () => {
  // Hooks
  const [ref] = useKeenSlider({
    slides: {
      perView: 2
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/11.jpg' alt='swiper 11' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/12.jpg' alt='swiper 12' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/13.jpg' alt='swiper 13' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/14.jpg' alt='swiper 14' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/15.jpg' alt='swiper 15' />
      </div>
    </div>
  )
}

export default SwiperMultipleSlides`;

  const codeStringSwiperSpacing = `
// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperSpacing = () => {
  // Hooks
  const [ref] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 16
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/16.jpg' alt='swiper 16' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/17.jpg' alt='swiper 17' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/18.jpg' alt='swiper 18' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/19.jpg' alt='swiper 19' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/20.jpg' alt='swiper 20' />
      </div>
    </div>
  )
}

export default SwiperSpacing`;

  const codeStringSwiperFreeMode = `
// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperFreeMode = () => {
  // Hooks
  const [ref] = useKeenSlider({
    loop: true,
    mode: 'free',
    slides: {
      perView: 2,
      spacing: 16
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/21.jpg' alt='swiper 21' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/22.jpg' alt='swiper 22' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/23.jpg' alt='swiper 23' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/24.jpg' alt='swiper 24' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/25.jpg' alt='swiper 25' />
      </div>
    </div>
  )
}

export default SwiperFreeMode`;

  const codeStringSwiperCentered = `
// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperCentered = () => {
  // Hooks
  const [ref] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 16,
      origin: 'center'
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/16.jpg' alt='swiper 16' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/17.jpg' alt='swiper 17' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/18.jpg' alt='swiper 18' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/19.jpg' alt='swiper 19' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/20.jpg' alt='swiper 20' />
      </div>
    </div>
  )
}

export default SwiperCentered`;

  const codeStringSwiperControls = `
// React Imports
import { useState } from 'react'

// MUI Imports
import Badge from '@mui/material/Badge'

// Third-party Components
import classnames from 'classnames'
import { useKeenSlider } from 'keen-slider/react'

const SwiperControls = () => {
  // States
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hooks
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <>
      <Box className='navigation-wrapper'>        
        <Box ref={sliderRef} className='keen-slider'>
          <Box className='keen-slider__slide'>
            <img src={Swiper1} alt={Swiper1} />
          </Box>
          <Box className='keen-slider__slide'>
            <img src={Swiper2} alt={Swiper2} />
          </Box>
          <Box className='keen-slider__slide'>
            <img src={Swiper3} alt={Swiper3} />
          </Box>
          <Box className='keen-slider__slide'>
            <img src={Swiper4} alt={Swiper4} />
          </Box>
          <Box className='keen-slider__slide'>
            <img src={Swiper5} alt={Swiper5} />
          </Box>
          
        </Box>
        {loaded && instanceRef.current && (
          <>
            <Box
              className={classNames("arrow left", {
                "arrow-disabled": currentSlide === 0,
              })}
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
            >
              <FiChevronLeft />
            </Box>

            <Box
              className={classNames("arrow right", {
                "arrow-disabled":
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1,
              })}
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
            >
              <FiChevronRight />
            </Box>
          </>
        )}

        {/* Dots */}
        {loaded && instanceRef.current && (
          <Box className="swiper-dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => (
              <Box
                key={idx}
                component="div"
                className={classNames("dot", {
                  active: currentSlide === idx,
                })}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
              />
            ))}
          </Box>
        )}
      </Box>
    </>
  )
}

export default SwiperControls`;



  const handleCopy = async (codeKey) => {
    const codeMap = {
      swiperBasic: codeStringSwiperBasic,
      swiperMultipleSlides: codeStringSwiperMultipleSlides,
      swiperSpacing: codeStringSwiperSpacing,
      swiperFreeMode: codeStringSwiperFreeMode,
      swiperCentered: codeStringSwiperCentered,
      swiperControls: codeStringSwiperControls,
    };

    try {
      await navigator.clipboard.writeText(codeMap[codeKey]);
      setShowCode((prev) => ({ ...prev, [codeKey]: true })); 
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };
 

  const [refBasic] = useKeenSlider({
    loop: true
  })

  const [refMultipleSlider] = useKeenSlider({
    slides: {
      perView: 2
    }
  })

  const [refSpacing] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 16
    }
  })

  const [refFreeMode] = useKeenSlider({
    loop: true,
    mode: 'free',
    slides: {
      perView: 2,
      spacing: 16
    }
  })

  const [refCentered] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 16,
      origin: 'center'
    }
  })

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <Typography variant="h6" className="page-title" mb={2}>
        Swiper
      </Typography>

        <Stack gap={3}>
          
          {/* BASIC INFORMATION */}
          <Paper elevation={0}>
             <Typography variant="h6" className="page-title" mb={2}>Important Information</Typography>
              <Typography className="page-title">'keen-slider' is a third-party library. Please refer to its <Link href="https://keen-slider.io/" className='quick-link'>official documentation</Link> for more details.</Typography>            
              <Typography className="page-title">You may refer to <Link href='https://demos.pixinvent.com/vuexy-nextjs-admin-template/documentation/docs/faqs/how-to-add-rtl-in-swiper/' className='quick-link'>this</Link> link on how to implement rtl support for keen-slider</Typography>            
          </Paper>

          {/* BASIC SWIPER */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Basic</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, swiperBasic: !prev.swiperBasic }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("swiperBasic")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
                                      
              <Box ref={refBasic} className='keen-slider'>
                <Box className='keen-slider__slide'>
                  <img src={Swiper1} alt={Swiper1} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper2} alt={Swiper2} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper3} alt={Swiper3} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper4} alt={Swiper4} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper5} alt={Swiper5} />
                </Box>
                
              </Box>
              {showCode.swiperBasic && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringSwiperBasic}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* MULTIPLE SLIDER */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Multiple Slides</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, swiperMultipleSlides: !prev.swiperMultipleSlides }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("swiperMultipleSlides")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
                                      
              <Box ref={refMultipleSlider} className='keen-slider'>
                <Box className='keen-slider__slide'>
                  <img src={Swiper1} alt={Swiper1} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper2} alt={Swiper2} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper3} alt={Swiper3} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper4} alt={Swiper4} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper5} alt={Swiper5} />
                </Box>
                
              </Box>
              {showCode.swiperMultipleSlides && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringSwiperMultipleSlides}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* SPACING */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Spacing</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, swiperSpacing: !prev.swiperSpacing }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("swiperSpacing")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
                                      
              <Box ref={refSpacing} className='keen-slider'>
                <Box className='keen-slider__slide'>
                  <img src={Swiper1} alt={Swiper1} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper2} alt={Swiper2} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper3} alt={Swiper3} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper4} alt={Swiper4} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper5} alt={Swiper5} />
                </Box>
                
              </Box>
              {showCode.swiperSpacing && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringSwiperSpacing}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* FREE MODE */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Free Mode</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, swiperFreeMode: !prev.swiperFreeMode }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("swiperFreeMode")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
                                      
              <Box ref={refFreeMode} className='keen-slider'>
                <Box className='keen-slider__slide'>
                  <img src={Swiper1} alt={Swiper1} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper2} alt={Swiper2} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper3} alt={Swiper3} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper4} alt={Swiper4} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper5} alt={Swiper5} />
                </Box>
                
              </Box>
              {showCode.swiperFreeMode && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringSwiperFreeMode}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* CENTERED */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Centered</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, swiperCentered: !prev.swiperCentered }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("swiperCentered")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>
                                      
              <Box ref={refCentered} className='keen-slider'>
                <Box className='keen-slider__slide'>
                  <img src={Swiper1} alt={Swiper1} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper2} alt={Swiper2} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper3} alt={Swiper3} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper4} alt={Swiper4} />
                </Box>
                <Box className='keen-slider__slide'>
                  <img src={Swiper5} alt={Swiper5} />
                </Box>
                
              </Box>
              {showCode.swiperCentered && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringSwiperCentered}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>

          {/* CONTROLS */}
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
              <Typography variant="h6" className="page-title">Controls</Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Show Code">
                  <IconButton className='icon-button' onClick={() => setShowCode((prev) => ({ ...prev, swiperControls: !prev.swiperControls }))}>
                    <RiCodeSSlashFill />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Code">
                  <IconButton className='icon-button' onClick={() => handleCopy("swiperControls")}>
                    <TbCopy />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack gap={3}>

              <Box className='navigation-wrapper'>        
                <Box ref={sliderRef} className='keen-slider'>
                  <Box className='keen-slider__slide'>
                    <img src={Swiper1} alt={Swiper1} />
                  </Box>
                  <Box className='keen-slider__slide'>
                    <img src={Swiper2} alt={Swiper2} />
                  </Box>
                  <Box className='keen-slider__slide'>
                    <img src={Swiper3} alt={Swiper3} />
                  </Box>
                  <Box className='keen-slider__slide'>
                    <img src={Swiper4} alt={Swiper4} />
                  </Box>
                  <Box className='keen-slider__slide'>
                    <img src={Swiper5} alt={Swiper5} />
                  </Box>
                  
                </Box>
                {loaded && instanceRef.current && (
                  <>
                    <Box
                      className={classNames("nav-arrow left", {
                        "arrow-disabled": currentSlide === 0,
                      })}
                      onClick={(e) => {
                        e.stopPropagation();
                        instanceRef.current?.prev();
                      }}
                    >
                      <FiChevronLeft />
                    </Box>

                    <Box
                      className={classNames("nav-arrow right", {
                        "arrow-disabled":
                          currentSlide ===
                          instanceRef.current.track.details.slides.length - 1,
                      })}
                      onClick={(e) => {
                        e.stopPropagation();
                        instanceRef.current?.next();
                      }}
                    >
                      <FiChevronRight />
                    </Box>
                  </>
                )}

                {/* Dots */}
                {loaded && instanceRef.current && (
                  <Box className="swiper-dots">
                    {[
                      ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => (
                      <Box
                        key={idx}
                        component="div"
                        className={classNames("dot", {
                          active: currentSlide === idx,
                        })}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                      />
                    ))}
                  </Box>
                )}
              </Box>
              {showCode.swiperControls && (
                <Box className="code-block" sx={{ position: 'relative' }}>
                  <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                    {codeStringSwiperControls}
                  </SyntaxHighlighter>
                </Box>
              )}
            </Stack>
          </Paper>



        </Stack>
      

      {/* Copy feedback */}
      <Snackbar
        open={copySuccess}
        message="Code copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default SwiperPage;
