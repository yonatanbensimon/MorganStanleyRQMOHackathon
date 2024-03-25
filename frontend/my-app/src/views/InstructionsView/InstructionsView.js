import React, { useState } from 'react';
import BestButton from '../../components/BestButton';
import ButtonChoice from "../../components/ButtonChoice";
import TextBox from "../../components/TextBox";
import image from '../../assets/doctor.png';
import previous from '../../assets/previous.png';
import previous_grey from '../../assets/previous_grey.png';
import next from '../../assets/next.png';

const InstructionsView = ({ changeView }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const textPages = [
    "page 1",
    "page 2",
    "page 3",
    // Static, not dynamic (should be fine its instructions it should stay the same)
  ];

  const handleNextPage = () => {
    setPageIndex(prevIndex => Math.min(prevIndex + 1, textPages.length - 1));
  };

  const handlePreviousPage = () => {
    setPageIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const isLastPage = pageIndex === textPages.length - 1;
  const isFirstPage = pageIndex === 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <img src={image} alt="Doc" style={{ maxWidth: '100%', maxHeight: '300px' }} />
      </div>
      <div style={{ width: '200%' }}>
        <h2 style={{ textAlign: 'center' }}></h2>
        <TextBox message={textPages[pageIndex]}/>
        <div style={{ textAlign: 'center', marginTop: '-20px', marginBottom: '25px'}}>
        {isFirstPage ? (
            <div style={{ display: 'inline-block' }}>
              <ButtonChoice src={previous_grey} imageSize="30px" onClick={handlePreviousPage} disabled={pageIndex === 0} style={{ marginRight: '10px' }} />
            </div>
          ) : (
            <div style={{ display: 'inline-block' }}>
              <ButtonChoice src={previous} imageSize="30px" onClick={handlePreviousPage} disabled={pageIndex === 0} style={{ marginRight: '10px' }} />
            </div>
          )}
          {isLastPage ? (
            <div style={{ display: 'inline-block', verticalAlign: 'top', paddingTop: '30px'}}>
              <BestButton style={{ marginLeft: '10px' }} onClick={() => changeView("game")}>Continue</BestButton>
            </div>
          ) : (
            <div style={{ display: 'inline-block' }}>
              <ButtonChoice src={next} imageSize="30px" onClick={handleNextPage} style={{ marginLeft: '10px' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructionsView;