import Image from 'next/image';

const Spinner = ({ size = 50 }) => (
  <Image alt="spinner" width={size} height={size} src="/images/loading.gif" />
);

export default Spinner;
