export {};

type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin-${Side}`; // "margin-top" | "margin-right" | "margin-bottom" | "margin-left"
type Padding = `padding-${Side}`; // "padding-top" | "padding-right" | "padding-bottom" | "padding-left"

// ---------------------------------------------------------------------------------------------------------
type Margin2 = `margin${'' | Capitalize<Side>}`;
// 'margin' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft';

// ---------------------------------------------------------------------------------------------------------
type Direction = 'down' | 'left' | 'right' | 'up';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';

type FadeClassName = `fade${Capitalize<Entry>}${Capitalize<
  '' | Direction | Position
>}`;

//   'fadeIn' |
//   'fadeInTop' |
//   'fadeInRight' |
//   'fadeInBottom' |
//   'fadeInLeft' |
//   'fadeInDown' |
//   'fadeInUp' |
//   'fadeOut' |
//   'fadeOutTop' |
//   'fadeOutRight' |
//   'fadeOutBottom' |
//   'fadeOutLeft' |
//   'fadeOutDown' |
//   'fadeOutUp';

// ---------------------------------------------------------------------------------------------------------
interface Car {
  brand: string;
  model: string;
  year: number;
}

type CarFactory = {
  [K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void;
};

// {
//     setBrand: (car: Car, value: string) => void;
//     setModel: (car: Car, value: string) => void;
//     setYear: (car: Car, value: number) => void;
// }
