interface Dimension {
  width: number;
  height: number;
}

export const decreaseBy = (factor: number, value: number) => value / factor;

export const getDimensions = (largestDimension: Dimension, size: 'sm' | 'md' | 'lg'): Dimension => ({
  sm: { 
    width: decreaseBy(2, largestDimension.width),
    height: decreaseBy(2, largestDimension.height)
  },
  md: { 
    width: decreaseBy(1.5, largestDimension.width),
    height: decreaseBy(1.5, largestDimension.height)
  },
  lg: largestDimension
}[size]);

export default getDimensions;