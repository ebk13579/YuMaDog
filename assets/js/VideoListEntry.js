require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');

module.exports = function(props){
  // console.log('heres props?')
  // console.log(props)
  return ( 
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={props.item.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={function(){props.clickHandler(props.item)}}>{props.item.snippet.title}</div>
        <div className="video-list-entry-detail">{props.item.snippet.description}</div>
      </div>
    </div>
  )

};

console.log('video-list-entry')