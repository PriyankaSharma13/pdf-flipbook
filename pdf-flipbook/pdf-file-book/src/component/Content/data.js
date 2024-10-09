
import EasyUse from "../../assets/banner/easy.png";
import customizable from "../../assets/banner/creativity.png";
import PDF from "../../assets/banner/pdf.png";
import mobile from "../../assets/banner/mobile.png";
import fullscreen from "../../assets/banner/fullscreen.png";
import responsive from "../../assets/banner/responsive.png";
import Interactive from "../../assets/banner/interactive.png";
import retina from "../../assets/banner/retina.png";
import technologies from "../../assets/banner/html.png";
import coding from "../../assets/banner/code.png";
import lightbox from "../../assets/banner/lightbox.png";
import siglePage from "../../assets/banner/singlepageIcon.png";

const featureList = [
  {
    id: 1,
    image: siglePage,
    title: "Single page view",
    description: "The flipbook layout can be changed based on the device type. Besides the standard double page view, there is a single page view that can be used on mobile devices or both desktop and mobile. This view offers a better reading experience on smaller screens while maintaining the 3D flipping effect and shadows.",
  },
  {
    id: 2,
    image: EasyUse,
    title: "Easy to use",
    description: "Creating flipbooks is fast and easy. For the jQuery version, many ready-to-use HTML examples are provided with the plugin. For the WordPress version, just upload your PDF or images and insert the shortcode into your post or page.",
  },
  {
    id: 3,
    image: customizable,
    title: "Fully customizable",
    description: "The Real3D Flipbook fits perfectly in any theme because you can completely customize the user interface. You can change menu colors, button colors, shapes, sizes, borders, shadows, and hide buttons you don’t need.",
  },
  {
    id: 4,
    image: PDF,
    title: "PDF Flipbook",
    description: "Display PDFs directly on your website without requiring downloads or leaving the page. PDF pages load progressively, allowing users to start reading immediately. It supports internal and external links, with automatic functionality inside the flipbook. Users can also select text and search with keyword highlighting. On mobile, it offers a native app-like experience with touch swipe and pinch-to-zoom features.",
  },
  {
    id: 5,
    image: mobile,
    title: "Optimized for mobile",
    description: "The look and feel of a native app on mobile, with touch swipe and pinch zoom features.",
  },
  {
    id: 6,
    image: lightbox,
    title: "Lightbox mode",
    description: "With lightbox mode, you can put a text link or an image link anywhere on your site. By clicking on a link, the flipbook will open in a lightbox. This allows you to have multiple books, magazines, or brochures on the same page.",
  },
  {
    id: 7,
    image: responsive,
    title: "Responsive mode",
    description: "Responsive mode creates a flipbook with an optional size that can be placed anywhere inside a page or post.",
  },
  {
    id: 8,
    image: Interactive,
    title: "Interactive pages",
    description: "You can add any HTML content to pages. Create interactive pages with links, buttons, videos, music players, iframes, etc. Build video albums, portfolio books with interactive pages, magazines with links, videos, and music.",
  },
  {
    id: 9,
    image: retina,
    title: "Retina ready icons",
    description: "HTML5, CSS3, JavaScript, and jQuery are the technologies behind the scenes. Pageflip generates valid HTML5 documents styled with CSS3 and powered by JavaScript & jQuery.",
  },
  {
    id: 10,
    image: fullscreen,
    title: "Fullscreen mode",
    description: "With Fullscreen mode, the flipbook will cover the entire page.",
  },
  {
    id: 11,
    image: coding,
    title: "No coding needed",
    description: "No coding is required to deliver and share your interactive documents. Create beautiful publications with a page flip effect today.",
  },
  {
    id: 12,
    image: technologies,
    title: "Latest technologies",
    description: "HTML5, CSS3, JavaScript, and jQuery are the technologies behind the scenes. Pageflip generates valid HTML5 documents styled with CSS3 and powered by JavaScript & jQuery.",
  },
];

const Real3DWordpressList = [
  {
    id: 1,
    heading: "Real3D Flipbook WordPress Plugin",
    description: "The Real3D Flipbook WordPress Plugin is a versatile tool designed for creating interactive, realistic 3D flipbooks within WordPress websites. It allows you to convert PDFs or images into engaging flipbook-style presentations, mimicking the look and feel of physical books or magazines. The plugin offers various customization options, including different page-turning effects, lightbox integration, and responsive layouts that adapt to different screen sizes.",
    features: [
      {
        title: "PDF Support",
        detail: "Converts PDF documents into a flipbook format, eliminating the need to manually upload individual pages.",
      },
      {
        title: "Customization Options",
        detail: "Offers a range of skins, UI controls, and backgrounds to tailor the look and behavior of the flipbook.",
      },
      {
        title: "Mobile-Friendly",
        detail: "Flipbooks can be viewed across devices, including desktops, tablets, and smartphones, with support for touch gestures.",
      },
      {
        title: "Advanced Features",
        detail: "Incorporates realistic lighting effects, 3D shadows, and other enhancements to improve the reading experience.",
      },
    ],
  },
];


const Real3DJsList = [
    {
      id: 1,
      heading: "Real3D Flipbook for HTML",
      description: "The Real3D Flipbook for HTML is a cutting-edge tool designed to bring your digital publications to life. With its stunning 3D flipping effect, users can effortlessly navigate through pages as if they were handling a physical book. This interactive experience enhances user engagement, making it ideal for e-books, magazines, catalogs, and presentations.",
      features: [
        {
          title: "Realistic 3D Animation",
          detail: "Experience a lifelike page-turning effect that captivates users, simulating the sensation of flipping through a real book.",
        },
        {
          title: "Cross-Platform Compatibility",
          detail: "Fully responsive design ensures that your flipbook looks great on all devices, including desktops, tablets, and smartphones.",
        },
        {
          title: "User-Friendly Interface",
          detail: "Intuitive navigation tools make it easy for readers to flip through pages, zoom in and out, and access additional features without any hassle.",
        },
        {
          title: "Customizable Options",
          detail: "Tailor your flipbook with a variety of settings, including layout options, background colors, and page transitions, to match your brand identity.",
        },
        // {
        //   title: "Interactive Elements",
        //   detail: "Incorporate multimedia content such as videos, audio, and links directly within the pages for a richer user experience.",
        // },
        // {
        //   title: "SEO Friendly",
        //   detail: "Optimize your flipbook for search engines, ensuring your content is discoverable and accessible to a wider audience.",
        // },
      ],
    },
  ];
  
  export { Real3DWordpressList, featureList, Real3DJsList };