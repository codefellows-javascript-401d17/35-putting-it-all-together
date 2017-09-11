import React from 'react';

export default (props) => {
  let data = require(`./asset/${props.name}.icon.svg`);
  let innerHtml = {_html: data};
  return(
    <div
      className={props.className||''}
      dangerouslySetInnerHTML={innerHtml}></div>
  )
}
