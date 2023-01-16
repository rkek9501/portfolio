import { ReactElement } from "react";

import Icons from "@src/components/Icons";
import type { EventTypes } from "@src/utils/gtag";

export type LinkType = {
  href: string;
  event: EventTypes;
  icon: ReactElement;
  label: string;
  text: string;
  type: "contact" | "channel"
};

export const ProfileImgSrc = "https://de-er.link/uploads/user/20221125073941_doyoung.JPG";

export const Email: LinkType = {
  href: "mailto:rkek9501@gmail.com",
  label: "Email",
  text: "rkek9501@gmail.com",
  type: "contact",
  event: { action: "click_link", category: "click_email", label: "contact", value: "email" },
  icon: <Icons.Email size={14}/>
};

export const Phone: LinkType = {
  href: "tel://+821087471647",
  label: "Phone",
  text: "010-8747-1647",
  type: "contact",
  event: { action: "click_link", category: "click_phone", label: "contact", value: "phone call" },
  icon: <Icons.Phone size={14}/>
};

export const Blog: LinkType = {
  href: "https://de-er.link",
  label: "Blog",
  text: "https://de-er.link",
  type: "channel",
  event: { action: "click_link", category: "move_to_blog", label: "channel", value: "de-er.link" },
  icon: <Icons.Link size={14}/>
};

export const Github: LinkType = {
  href: "https://github.com/rkek9501",
  label: "Github",
  text: "https://github.com/rkek9501",
  type: "channel",
  event: { action: "click_link", category: "move_to_github", label: "channel", value: "github" },
  icon: <Icons.Link size={14}/>
};