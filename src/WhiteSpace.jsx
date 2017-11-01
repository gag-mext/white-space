import '../style';
import React from 'react';
import classNames from 'classnames';

class WhiteSpace extends React.Component{

  render() {
    const { prefixCls, size, className, style, onClick } = this.props;

    let wrapCls = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-${size}`]: true,
      [className]: !!className,
    });

    return (
      <div className={wrapCls} style={style} onClick={onClick} />
    );
  }
}
WhiteSpace.defaultProps = {
    prefixCls: 'am-whitespace',
    size: 'md',
};
WhiteSpace.propTypes = {
  size:React.PropTypes.oneOf(['xs','sm','md','lg','xl']),
  onClick:React.PropTypes.func,
  /** web only */
  prefixCls: React.PropTypes.string,
  /** web only */
  className: React.PropTypes.string
};
WhiteSpace.displayName = "WhiteSpace";
module.exports=WhiteSpace;
