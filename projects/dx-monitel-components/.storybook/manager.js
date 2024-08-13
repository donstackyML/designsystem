import { addons } from "@storybook/manager-api";
// import { create } from "@storybook/theming";
// import logo from "../assets/images/logoSK.png";

addons.setConfig({
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 600,
  panelPosition: "right",
  enableShortcuts: true,
  showToolbar: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: "sidebar",
  sidebar: {
    showRoots: true,
    collapsedRoots: ["other"],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
  // theme: create({
  //   brandTitle: "СК21",
  //   brandImage: logo,
  //   brandTarget: "_self",
  // }),
});
