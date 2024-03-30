import { useBridgeProvider } from '@/providers/BridgeProvider';
import Input from '../Input';
import { parseEther } from 'viem';

const SourceInput = () => {
  const { setBridgeAmount } = useBridgeProvider() as any;

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    const wei = parseEther(newValue);
    setBridgeAmount(wei);
  };

  return (
    <div className="flex justify-between items-center">
      <Input
        type="number"
        onChange={handleChange}
        className="text-2xl font-semibold"
        placeholder="0.0"
      />
      <span className="text-2xl font-semibold">ETH</span>
    </div>
  );
};

export default SourceInput;
