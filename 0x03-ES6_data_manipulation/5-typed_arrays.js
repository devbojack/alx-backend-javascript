export default function createInt8TypedArray(length, position, value) {
  const myBuffer = new ArrayBuffer(length);
  const dataView = new DataView(myBuffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  dataView.setInt8(position, value);
  return dataView;
}
