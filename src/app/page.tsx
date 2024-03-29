"use client";
import siteContent from "./siteContent.json";
import LandingHeader from "../components/LandingHeader";
import LandingProjectCard from "../components/LandingProjectCard";
import { ResponsiveImageProps } from "@/components/_types";

export default function Home() {
  const images: ResponsiveImageProps[] = [
    {
      alt: "Desktop sizes image of the times.pilot app",
      imageSize: {
        h: 2680,
        w: 3498
      },
      imageUrls: {
        small: {
          imageUrl_1x: "/optimizedImages/timesPilotSingle.c577402c-opt-771.WEBP",
          imageUrl_2x: "/optimizedImages/timesPilotSingle.c577402c-opt-1920.WEBP",
          imageUrl_3x: "/optimizedImages/timesPilotSingle.c577402c-opt-2332.WEBP",
        },
        medium: {
          imageUrl_1x: "/optimizedImages/timesPilotSingle.c577402c-opt-514.WEBP",
          imageUrl_2x: "/optimizedImages/timesPilotSingle.c577402c-opt-1125.WEBP",
          imageUrl_3x: "/optimizedImages/timesPilotSingle.c577402c-opt-1920.WEBP",
        },
        large: {
          imageUrl_1x: "/optimizedImages/timesPilotSingle.c577402c-opt-771.WEBP",
          imageUrl_2x: "/optimizedImages/timesPilotSingle.c577402c-opt-1920.WEBP",
          imageUrl_3x: "/optimizedImages/timesPilotSingle.c577402c-opt-2332.WEBP",
        }
      },
      blurDataUrl: "data:image/jpeg;base64,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"
    },
    {
      alt: "Three screens from the Circuit iOS App",
      imageSize: {
        h: 2054,
        w: 3340
      },
      imageUrls: {
        small: {
          imageUrl_1x: "/optimizedImages/MainStaticFrontPage.1443cdea-opt-771.WEBP",
          imageUrl_2x: "/optimizedImages/MainStaticFrontPage.1443cdea-opt-1920.WEBP",
          imageUrl_3x: "/optimizedImages/MainStaticFrontPage.1443cdea-opt-2332.WEBP",
        },
        medium: {
          imageUrl_1x: "/optimizedImages/MainStaticFrontPage.1443cdea-opt-514.WEBP",
          imageUrl_2x: "/optimizedImages/MainStaticFrontPage.1443cdea-opt-1125.WEBP",
          imageUrl_3x: "/optimizedImages/MainStaticFrontPage.1443cdea-opt-1920.WEBP",
        },
        large: {
          imageUrl_1x: "/optimizedImages/MainStaticFrontPage.1443cdea-opt-771.WEBP",
          imageUrl_2x: "/optimizedImages/MainStaticFrontPage.1443cdea-opt-1920.WEBP",
          imageUrl_3x: "/optimizedImages/MainStaticFrontPage.1443cdea-opt-2332.WEBP",
        }
      },
      blurDataUrl: "data:image/jpeg;base64,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"
    }
  ];
  return (
    <main className='main_wrap'>
      <LandingHeader />
      <ul className="landing_project-ul">
        {siteContent.map(({ projectHeadline, description, landingToolList, slug }, index) => (
          <li className="landing_project-li" key={projectHeadline}>
            <LandingProjectCard
              headline={projectHeadline}
              desc={description}
              tools={landingToolList}
              image={images[index]}
              slug={slug}
            />
          </li>
        ))}
      </ul>
      <div className="main_wrap-about_wrap">
        About
      </div>
    </main>
  );
}
