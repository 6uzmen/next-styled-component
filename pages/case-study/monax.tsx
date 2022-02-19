import { ReactElement } from "react";
import HorizontalMenu from "../../components/HorizontalMenu";
import * as S from "./styles";
import { MenuItems } from "./menuItems";
import CaseStudyDetail, {
  CaseStudyDetailType,
} from "../../containers/CaseStudyDetail";
import Layout from "../../components/Layout";

export const caseStudy: CaseStudyDetailType = {
  title: `Monax 📝`,
  overview: `Monax is a contract lifecycle management platform which allows consumers to easily procure lawyer-tested agreements and stay in full control of their business contracts. Harnessing a unique combination of active agreements, blockchain technology, and a contract modeling engine, the platform is designed to move business legal obligations into the networked world.`,
  challenge: `Monax's main challenge was to develop a cutting-edge platform using state-of-the-art technology. In many respects they were pioneers, developing legal technology on blockchain.`,
  solution: `We collaborated with the development of the Vent component of the Bosmarmot open source project. Bosmarmot is a set of tools developed by Monax for use with Hyperledger Burrow (Hyperledger Burrow provides a modular Blockchain client with a partially authorized smart contract interpreter, developed according to the specification of the Ethereum Virtual Machine (EVM)). What the Vent component does is interact with Burrow gRPC obtaining blocks, transactions and events generated from smart contracts implemented in Solidity, unpacking and decoding them to store in legible form in sql tables created on the fly. We are also helping Monax with the development of new features and the frontend of their NFT legal agreement tool.`,
  displayImage: `https://monax.io/resources/images/og/og_default.jpg`,
  link: `/case-study/monax`,
};

export default function Monax() {
  return (
    <div>
      <S.Content className="d-flex flex-wrap gap-3">
        <div className="flex-grow-1 d-none d-xl-flex">
          <HorizontalMenu
            active="monax"
            className="flex-grow-1 col-12"
            items={MenuItems}
          />
        </div>
        <CaseStudyDetail caseStudy={caseStudy} />
      </S.Content>
    </div>
  );
}

Monax.getLayout = (page: ReactElement) => {
  return <Layout navBarVariant={true}>{page}</Layout>;
};
