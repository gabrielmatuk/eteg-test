import React, { useState } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  onChange: (color: ColorResult) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [color, setColor] = useState<ColorResult>({
    rgb: { r: 241, g: 112, b: 19, a: 1 },
    hsl: { h: 25, s: 0.86, l: 0.52, a: 1 },
    hex: '#f17013',
  });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleColorChange = (newColor: ColorResult) => {
    setColor(newColor);
    onChange(newColor);
  };


  const styles = reactCSS<{
    color: React.CSSProperties;
    swatch: React.CSSProperties;
    popover: React.CSSProperties;
    cover: React.CSSProperties;
  }>({
    'default': {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color.rgb} onChange={handleColorChange} />
        </div>
      ) : null}
    </div>
  );
};
export default ColorPicker;
