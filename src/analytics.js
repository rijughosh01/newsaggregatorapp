import ReactGA from "react-ga";

const trackingId = "G-6BX46GM9D4";
ReactGA.initialize(trackingId);

export const trackPageView = (page) => {
  ReactGA.pageview(page);
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
