import { FrameMetadata } from '@coinbase/onchainkit';
import { TITLE, VERCEL_URL } from '@/lib/consts';
import CollectorPage from '@/components/CollectorPage';
import getButtons from '@/lib/getButtons';

const Page = ({ params }: { params: { collectorId: string } }) => (
  <>
    <FrameMetadata
      ogTitle={TITLE}
      ogDescription={TITLE}
      buttons={getButtons(params.collectorId)}
      image={{
        src: `${VERCEL_URL}/api/images/collector/collections?address=${params.collectorId}`,
      }}
      postUrl={`${VERCEL_URL}/api/frame`}
    />
    <meta property="of:accepts:xmtp" content="2024-02-01" />
    <CollectorPage collectorId={params.collectorId} />
  </>
);

export default Page;
