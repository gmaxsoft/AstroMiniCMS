import { Fancybox } from "@fancyapps/ui";

Fancybox.bind('[data-fancybox="cms-carousel"]', {
  animated: true,
  showClass: "f-fadeIn",
  hideClass: "f-fadeOut",
  Toolbar: {
    display: {
      left: [],
      middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
      right: ["close"],
    },
  },
});

