'use client';
import { Icon } from "./Icons";
import LandingTag from "./LandingTag";
import LandingTitle from "./LandingTitle";
import renderEmail from "./_helpers/renderEmail";

export default function LandingHeader() {

  function emailClick() {
    return window.location.href = renderEmail();
  }

  return (
    <header className="landing_header">
      <div>
        <LandingTitle />
      </div>
      <LandingTag />
      <div className="landing_header-vertical"></div>
      <div className="landing_header-icon_wrapper">
        <a
          title="Github Link"
          href="https://github.com/MisterPea" rel="noopener noreferrer" target="_blank">
          <Icon.github />
        </a>
        <a
          title="LinkedIn Link"
          href="https://www.linkedin.com/in/perry-angelora/" rel="noopener noreferrer" target="_blank">
          <Icon.linkedIn />
        </a>
        <button
          title="Email Perry!" onClick={emailClick}>
          <Icon.mail />
        </button>
      </div>
    </header>
  );
}