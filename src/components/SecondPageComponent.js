import React from "react";

function SecondPageComponent({ setShowDifferentComponent }) {
  return (
    <>
      <div style={{ marginLeft: "5rem" }}>
        <h1>Page 2</h1>
        <section>
          <h1 style={{ textAlign: "center" }}>
            Meta rolling out support NFT support on Instagram to 100 countries
          </h1>
          <p>
            Collectors and creators in India will now be able to display their
            non-fungible tokens (NFTs) on their Instagram profiles in their push
            to build out the metaverse with the Meta-owned photo-and-video
            sharing application launching the feature on Friday.
          </p>
          <p>
            In India, Instagram launched the feature with popular influencers
            Shereen Sikka and Rushindra Sinha, who have about 333,000 and 61,000
            followers on the app, respectively.
          </p>
          <p>
            Users in 100 countries in Africa, Asia-Pacific, the Middle East and
            the Americas will have the ability to display their NFTs that have
            been minted on Ethereum, Polygon, or Flow blockchain. They can do so
            by connecting their digital wallet to Instagram. The platform
            supports third-party wallets, including Rainbow, MetaMask, Trust
            Wallet, Coinbase Wallet and Dapper Wallet.
          </p>
          <p>
            In India, NFTs have had limited takers, according to operators of
            marketplaces. ET has previously reported how startups and social
            platforms were working towards unlocking utility for NFT holders
            from the ability to show it off to using the NFTs to unlock rewards
            in digital words or access to physical spaces—to grow the NFT market
            in India.
          </p>
          <a
            target="_blank"
            href="https://economictimes.indiatimes.com/tech/technology/meta-rolling-out-nft-support-on-instagram-to-100-countries/articleshow/93361263.cms"
          >
            Reference
          </a>
        </section>
        <button
          onClick={() => setShowDifferentComponent("page-1")}
          style={{ marginTop: "10px" }}
        >
          {">"} Back
        </button>
      </div>
    </>
  );
}

export default SecondPageComponent;
