import React, { createRef } from "react";
import "../../../../assets/css/sectionLeft.css";

import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";

export const SectionLeft = () => {
  let sectionRef = createRef();

  const checkAllCheckbox = (event) => {
    if (event.target.id === "generalCheckbox") {
      if (event.target.checked === true) {
        sectionRef.current.querySelectorAll("input").forEach((item) => {
          if (item.type === "checkbox") {
            item.checked = true;
          }
        });
      } else {
        sectionRef.current.querySelectorAll("input").forEach((item) => {
          if (item.type === "checkbox") {
            item.checked = false;
          }
        });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-left"
      onClick={checkAllCheckbox}
    >
      <div className="table-container d-flex col" style={{ color: "#cbd1d9" }}>
        <div className="one ">
          <input type="checkbox" id="generalCheckbox" />
        </div>
        <div className="two col-4">
          <p>
            KEYWORD
            <i className="down arrow" />
          </p>
        </div>
        <div className="three col-2">
          <p>
            TREND <i className="down arrow" />
          </p>
        </div>
        <div className="four col-2">
          <p>
            COMP <i className="down arrow" />
          </p>
        </div>
        <div className="five col-2 ">
          <p>
            <span>
              CPC <i className="down arrow" />
            </span>
          </p>
        </div>
        <div className="six col-2">
          <p>
            VOLUME <i className="down arrow" />
          </p>
        </div>
      </div>

      <div className="table-container d-flex col" style={{ color: "#646d82" }}>
        <div className="one">
          <input type="checkbox" />
        </div>
        <div className="two col-4" style={{ color: "#5cd888" }}>
          <p>Lorem Ipsum dolar sit</p>
        </div>
        <div className="three col-2">
          <img
            src={require("../../../../assets/icons/soundIcon.png")}
            alt="soundIcon"
          />
        </div>
        <div className="four col-2">
          <p>2.5</p>
        </div>
        <div className="five col-2">
          <p>2.5</p>
        </div>
        <div className="six col-1">
          <p>849</p>
        </div>
        <div className="seven w-100 pt-3 p-3">
          <i className="fa fa-play play-icon float-right p-15" />
        </div>
      </div>
    </section>
  );
};
