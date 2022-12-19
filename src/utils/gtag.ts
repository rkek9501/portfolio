type EventTypes = {
  action: string;
  category: string;
  label: string;
  value: string;
}

export const event = ({ action, category, label, value }: EventTypes) => {
  (<any>window).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};