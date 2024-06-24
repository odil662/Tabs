import React, { useState } from "react";

const TabsRender = ({ company }) => {
  const [titleKey, setTitleKey] = useState(0);

  const buttonClickHandler = (key) => {
    setTitleKey(key);
  };

  return (
    <>
      <div className="block">
        <div className="buttonBlock">
          {company.map((el, index) => (
            <button
              key={index}
              className={index === titleKey ? "buttonBlock_title-click" : ""}
              onClick={() => buttonClickHandler(index)}
            >
              {el.title}
            </button>
          ))}
        </div>
        <div className="content">
          {company.map((el, i) => (
            <div key={i} className={i === titleKey ? "contentItem" : "hidden"}>
              {el.content.map((elem, i) =>
                el.content.length === 5 ? (
                  <div key={i}>
                    <h3 className="contentItem__title">{elem.title}</h3>
                    <div className="contentItem__case">
                      <h4>{elem.describe}</h4>
                      <p className="contentItem__text">
                        {elem.describe === "E-mail:" ? (
                          <a href={`mailto:${elem.text}`}>{elem.text}</a>
                        ) : (
                          elem.text
                        )}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div key={i}>
                    <h3 className="contentItem__title">{elem.title}</h3>
                    {elem.describe ? <h4>{elem.describe}</h4> : ""}
                    <p>{elem.text}</p>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabsRender;
