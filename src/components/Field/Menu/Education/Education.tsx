import * as React from "react";
import "./Education.less";
import "../MenuContent.less";

export const Education = () => {
  return (
    <div className="Education">
      <div className="Education__Text">Kvalifikace</div>
      <p className="Education__Paragraph">
        {" "}
        <a href="./src/images/resources/Diplom.pdf" target="_blank">
          Vysokoškolské vzdělání v oboru „Pozemkové úpravy a převody
          nemovitostí“ na Jihočeské univerzitě v Českých Budějovicích{"  "}
          <strong>(PDF)</strong>
        </a>
      </p>
      <p className="Education__Paragraph">
        {" "}
        <a href="./src/images/resources/KURZ.pdf" target="_blank">
          Úšpěšné absolvování kurzu „Oceňování nemovitostí“ akreditovaného MŠMT{" "}
          {"  "}
          <strong>(PDF)</strong>
        </a>
      </p>
      <p className="Education__Paragraph">
        {" "}
        <a target="_blank" href="./src/images/resources/ZL.pdf">
          Živnostenské oprávnění v oboru odhady a oceňování nemovitých věcí
          {"  "}
          <strong>(PDF)</strong>
        </a>
      </p>
      <br />
      <p className="Education__ParagraphOne">
        {" "}
        Během studia na Vysoké škole dvouletá praxe v realitní kanceláři,
        následně práce v pojišťovně.
      </p>
    </div>
  );
};
//https://www.docdroid.net/MyRqPzC/dokumenty-pdf
//<PDFViewer url="https://www.docdroid.net/MyRqPzC/dokumenty-pdf" />
