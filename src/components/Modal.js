import React from 'react';
import LayerHead from "./Common/LayerHead";
import Article from "../routes/Article";

const Modal = (props) => {
  const { isOpen, close, postId } = props;  //실제로는 postId 에 해당하는 데이터를 모두 가져와서 뿌린다

  const imageX = {
    backgroundImage:"url('btn_close.svg')",
    backgroundSize:'cover'
}

  return (
    <div>
      {isOpen && (
        <div className="pop_area" aria-modal="true">
          <div className="pop_head">
            <div className="inner">
              <LayerHead user="player1" title="게시물"/>
              <button className="btn_close" style={imageX} onClick={close}></button>
            </div>
          </div>
          <div className="cont_area">
            <Article />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;