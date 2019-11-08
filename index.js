/**
 * @author [Ramy Mamdouh](https://github.com/RamyMamdouhEl-nabawy).
 * @version 1.0.0
 */
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * Data array passed to component for rendering calculated columns.
  */
  Data: PropTypes.arrayOf(Object).isRequired  
}

const defaultProps = {
  Data: [{}]
}

/**
 * This component is used as a UTILITY to render two columns design separated from eachOther,
 * 
 * bassed on the calculations on length of objects inside array sent form BE to avoid 
 * affection of spaces taken on actions.
 * 
 * Data is the array of objects that contain the data.
 * children is the element we want to pass data into for making the design.
 */
const ColSix = props => {
  const { Data, children } = props;

  const dataLength = Data.length;
  let end = Math.round(dataLength / 2);
  let leftSide = Data.slice(0, end);
  let rightSide = Data.slice(end, dataLength);

  return (
    <div className="row">
      <div className="col-lg-6 col-xs-12">
        {leftSide.map((data, index) => {
          return (
            <div key={index}>
              {React.cloneElement(children, { data: data })}
            </div>
          );
        })}
      </div>
      <div className="col-lg-6 col-xs-12">
        {rightSide.map((data, index) => {
          return (
            <div key={index}>
              {React.cloneElement(children, { data: data })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

ColSix.propTypes = propTypes;
ColSix.defaultProps = defaultProps;

export default ColSix;
