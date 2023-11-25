// import { useEffect } from "react";

// const FacebookSDK = () => {
//   useEffect(() => {
//     // Load the Facebook SDK script
//     window.fbAsyncInit = function () {
//       window.FB.init({
//         xfbml: true,
//         version: "v18.0",
//       });
//     };

//     (function (d, s, id) {
//       var js,
//         fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s);
//       js.id = id;
//       js.defer = true;
//       js.src = "https://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, "script", "facebook-jssdk");
//   }, []);

//   return null;
// };

// export default FacebookSDK;

// <div
//   className="fb-page w-[50%] h-[20vh]"
//   data-href="https://www.facebook.com/BPMexico"
//   data-tabs="timeline,events"
//   data-width="500"
//   data-height="500"
//   data-small-header="false"
//   data-adapt-container-width="true"
//   data-hide-cover="false"
//   data-show-facepile="false"
//   data_lazy="false"
// >
//   <blockquote
//     cite="https://www.facebook.com/BPMexico"
//     className="fb-xfbml-parse-ignore"
//   ></blockquote>
// </div>;

// useEffect(() => {
//   if (typeof window !== "undefined" && window.FB) {
//     window.FB.XFBML.parse();
//   }
// }, []);
