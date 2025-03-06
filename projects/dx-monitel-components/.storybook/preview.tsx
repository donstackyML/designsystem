import { Preview } from "@storybook/angular";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

const style = document.createElement("style");
style.textContent = `
  .me-tooltip-custom {
    overflow: hidden;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.12);
    width: 100%;
    max-width: 390px;
  }

  .me-tooltip-image {
    width: 100%;
    height: 140px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(135deg, #FF8A00 0%, #9C4DFF 50%, #4A7DFF 100%);
  }

  .me-tooltip-image svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .me-tooltip-content {
    padding: 16px;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .me-tooltip-title {
    margin: 0 0 4px;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #18181A;
    text-align: left;
    width: 100%;
  }

  .me-tooltip-text {
    margin: 0;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #18181A;
    opacity: 0.87;
    text-align: left;
    width: 100%;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .me-custom-tooltip-wrapper {
    border-radius: 8px;
    overflow: hidden;
    padding: 0;
    max-width: 390px;
  }

  dx-tooltip {
    max-width: 390px;
  }

  .dx-button {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding: 8px 16px;
    border: 1px solid #DFE0ED;
    border-radius: 4px;
    background: #FFFFFF;
  }
`;

document.head.appendChild(style);
