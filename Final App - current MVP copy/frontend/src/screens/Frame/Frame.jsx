import React from "react";
import { Link } from "../../components/Link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SocialMediaIcon } from "../../components/SocialMediaIcon";
import { LineRoundedChevronDown } from "../../icons/LineRoundedChevronDown";
import { SocialMediaIconSquareFacebook } from "../../icons/SocialMediaIconSquareFacebook";
import { SocialMediaIconSquareLinkedin } from "../../icons/SocialMediaIconSquareLinkedin";
import { SocialMediaIconSquareTwitter1 } from "../../icons/SocialMediaIconSquareTwitter1";
import { SocialMediaIconSquareYoutube1 } from "../../icons/SocialMediaIconSquareYoutube1";
import { makeContractCall, broadcastTransaction, uintCV, standardPrincipalCV } from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';
import { makeContractCall, broadcastTransaction, uintCV, standardPrincipalCV } from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';

const network = new StacksTestnet();

async function activateContract() {
  const contractAddress = 'STRWM9TYV1N7MT0MJ1AV4EES9QXR63PHV2YD9SH0';
  const contractName = 'Diamond-Transaction';
  const functionName = 'broadcast-message';
  const senderKey = 'ST319CF5WV77KYR1H3GT0GZ7B8Q4AQPY42ETP1VPF';
  const message = 'Emerald -7 CARATS - 22/10/23';

  const txOptions = {
    contractAddress,
    contractName,
    functionName,
    functionArgs: [uintCV(Buffer.from(message))],
    senderKey,
    validateWithAbi: true,
    network,
  };

  const transaction = await makeContractCall(txOptions);
  const response = await broadcastTransaction(transaction, network);
  console.log(response);
}

export const Frame = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-[1440px] h-[931px] relative">
        <div className="flex-col w-[1440px] gap-[48px] pt-[48px] pb-0 px-[167px] absolute top-[751px] left-0 bg-neutral-colors100 border-t [border-top-style:solid] border-neutral-colors300 flex items-center">
          <div className="w-[940px] justify-between relative flex-[0_0_auto] flex items-center">
            <div className="items-start gap-[40px] inline-flex relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-end gap-[32px] relative flex-[0_0_auto]">
                <div className="items-center gap-[24px] inline-flex relative flex-[0_0_auto]">
                  <Link
                    className="!flex-[0_0_auto]"
                    color="default"
                    iconLeft={false}
                    iconRight={false}
                    size="default"
                    text="Home"
                    weight="regular"
                  />
                  <Link
                    className="!flex-[0_0_auto]"
                    color="default"
                    iconLeft={false}
                    iconRight={false}
                    size="default"
                    text="About"
                    weight="regular"
                  />
                  <Link
                    className="!flex-[0_0_auto]"
                    color="default"
                    iconLeft={false}
                    iconRight={false}
                    size="default"
                    text="Pricing"
                    weight="regular"
                  />
                  <Link
                    className="!flex-[0_0_auto]"
                    color="default"
                    iconLeft={false}
                    iconRight={false}
                    size="default"
                    text="Contact"
                    weight="regular"
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
              <SocialMediaIconSquareFacebook className="!relative !w-[24px] !h-[24px]" />
              <SocialMediaIconSquareTwitter1 className="!relative !w-[24px] !h-[24px]" />
              <SocialMediaIcon />
              <SocialMediaIconSquareLinkedin className="!relative !w-[24px] !h-[24px]" />
              <SocialMediaIconSquareYoutube1 className="!relative !w-[24px] !h-[24px]" />
            </div>
          </div>
          <div className="h-[60px] justify-around gap-[23px] px-0 py-[24px] relative self-stretch w-full border-t [border-top-style:solid] border-neutral-colors400 flex items-center">
            <p className="relative w-fit mt-[-6.00px] mb-[-4.00px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[16px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
              <span className="text-[#b3b8c8] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] leading-[var(--display-3-regular-line-height)] text-[length:var(--display-3-regular-font-size)]">
                Copyright © 2025 Valeur{" "}
              </span>
              <span className="text-[#e1e3ec] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] leading-[var(--display-3-regular-line-height)] text-[length:var(--display-3-regular-font-size)]">
                |
              </span>
              <span className="text-[#b3b8c8] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] leading-[var(--display-3-regular-line-height)] text-[length:var(--display-3-regular-font-size)]">
                {" "}
                All Rights Reserved{" "}
              </span>
              <span className="text-[#e1e3ec] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] leading-[var(--display-3-regular-line-height)] text-[length:var(--display-3-regular-font-size)]">
                |
              </span>
              <span className="text-[#b3b8c8] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] leading-[var(--display-3-regular-line-height)] text-[length:var(--display-3-regular-font-size)]">
                &nbsp;
              </span>
              <span className="text-[#6c748f] underline font-display-3-underline-regular [font-style:var(--display-3-underline-regular-font-style)] font-[number:var(--display-3-underline-regular-font-weight)] tracking-[var(--display-3-underline-regular-letter-spacing)] leading-[var(--display-3-underline-regular-line-height)] text-[length:var(--display-3-underline-regular-font-size)]">
                Terms and Conditions
              </span>
              <span className="text-[#b3b8c8] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] leading-[var(--display-3-regular-line-height)] text-[length:var(--display-3-regular-font-size)]">
                &nbsp;
              </span>
              <span className="text-[#e1e3ec] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] leading-[var(--display-3-regular-line-height)] text-[length:var(--display-3-regular-font-size)]">
                |
              </span>
              <span className="text-[#b3b8c8] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] leading-[var(--display-3-regular-line-height)] text-[length:var(--display-3-regular-font-size)]">
                &nbsp;
              </span>
              <span className="text-[#6c748f] underline font-display-3-underline-regular [font-style:var(--display-3-underline-regular-font-style)] font-[number:var(--display-3-underline-regular-font-weight)] tracking-[var(--display-3-underline-regular-letter-spacing)] leading-[var(--display-3-underline-regular-line-height)] text-[length:var(--display-3-underline-regular-font-size)]">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-[1440px] items-center justify-between px-[167px] py-[24px] absolute top-0 left-0 bg-[#fdfdfd]">
          <img className="relative w-[76.87px] h-[51px]" alt="Group" src="/img/group-8.png" />
          <div className="items-center gap-[24px] inline-flex relative flex-[0_0_auto]">
            <Link
              className="!flex-[0_0_auto]"
              color="default"
              iconLeft={false}
              iconRight={false}
              size="default"
              text="Home"
              weight="regular"
            />
            <Link
              className="!flex-[0_0_auto]"
              color="default"
              iconLeft={false}
              iconRight={false}
              size="default"
              text="About"
              weight="regular"
            />
            <div className="relative w-fit font-display-3-regular font-[number:var(--display-3-regular-font-weight)] text-neutral-colors600 text-[length:var(--display-3-regular-font-size)] text-center tracking-[var(--display-3-regular-letter-spacing)] leading-[var(--display-3-regular-line-height)] whitespace-nowrap [font-style:var(--display-3-regular-font-style)]">
              Blog
            </div>
            <Link
              className="!flex-[0_0_auto]"
              color="default"
              icon={<LineRoundedChevronDown className="!relative !w-[15px] !h-[15px]" />}
              iconLeft={false}
              iconRight
              size="default"
              text="Features"
              weight="regular"
            />
            <Link
              className="!flex-[0_0_auto]"
              color="default"
              iconLeft={false}
              iconRight={false}
              size="default"
              text="Pricing"
              weight="regular"
            />
          </div>
          <PrimaryButton
            className="!flex-[0_0_auto] !bg-[#600bd0]"
            color="default"
            iconLeft={false}
            iconRight
            size="default"
            text="Log in | Sign Up"
          />
        </div>
        <img className="absolute w-[1440px] h-[649px] top-[102px] left-0" alt="Sign in" src="/img/sign-in.png" />
        <button 
          style={{ position: 'absolute', top: '102px', left: '0', width: '1440px', height: '649px', opacity: '0' }} 
          onClick={activateContract}
        >
          Activate Contract
        </button>
      </div>
    </div>
  );
};
