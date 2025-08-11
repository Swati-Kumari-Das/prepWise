// import { Button } from "@/components/ui/button";
// import { Container } from "@/components/container";
// import { Sparkle, Sparkles } from "lucide-react";
// import Marquee from "react-fast-marquee";
// import { Link } from "react-router";
// import { MarqueImg } from "@/components/marquee-img";
// const HomePage = () => {
//     return (
//         <div className="flex-col w-full pb-24">
//             <Container>
//                 <div className="my-8">
//                     <h2 className="text-3xl text-center md:text-left md:text-6xl">
//                         <span className="text-outline font-extrabold md:text-8xl">
//                             AI Superpower
//                         </span>
//                         <span className="text-gray-500 font-extrabold">
//                             - A better way to
//                         </span>
//                         <br />
//                         improve your interview chances and skills
//                     </h2>

//                     <p className="mt-4 text-muted-foreground text-sm">
//                         Boost your interview skills and increase your success rate with AI-driven insights. 
//                         Discover a smarter way to prepare, practice, and stand out.
//                     </p>
//                 </div>

              
//   <div className="flex w-full items-center justify-evenly md:px-12 md:py-8">
//     <p className="text-3xl font-semibold text-gray-900 text-center">
//       256k+
//       <span className="block text-xl text-muted-foreground font-normal">
//         offers Received
//       </span>
//     </p>
//     <p className="text-3xl font-semibold text-gray-900 text-center">
//       1.2M+
//       <span className="block text-xl text-muted-foreground font-normal">
//         Interviews Aced
//       </span>
//     </p>
//   </div>
  

//   {/* Image section */}
// <div className="relative w-full mt-4 rounded-xl bg-gray-100  h-[550px] drop-shadow-md">
//     <img
//         src="/assets/img/her4.jpg"
//         alt="Interview preparation" 
//         className="w-full h-full object-cover rounded-xl"
//     />

//     {/* Badge */}
//     <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white text-sm font-medium shadow-sm">
//         Interviews Copilot&copy;
//     </div>

//     {/* Card */}
//     <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-3 bg-white rounded-lg shadow-lg">
//         <h2 className="text-neutral-800 font-semibold">AI Interview Coach</h2>
//         <p className="text-sm text-neutral-500 mt-1">
//            Get real-time analysis of your responses, body language, and speaking patterns with actionable improvement suggestions.
//         </p>
//         <Button className="mt-3">
//             Generate <Sparkle />
//         </Button>
//     </div>

//     </div>


//             </Container>

//         {/* marquee section */}
//         {/* Marquee section */}
// <div className="w-full my-12">
// <div className="w-full text-center text-base md:text-lg lg:text-xl font-medium text-gray-800 py-4">
//   Trusted by candidates from top companies
// </div>
//     <Marquee pauseOnHover>
//         <MarqueImg img="/assets/img/logo/firebase.png" />
//         <MarqueImg img="/assets/img/logo/meet.png" />
//         <MarqueImg img="/assets/img/logo/zoom.png" />
//         <MarqueImg img="/assets/img/logo/firebase.png" />
//         <MarqueImg img="/assets/img/logo/microsoft.png" />
//         <MarqueImg img="/assets/img/logo/meet.png" />
//         <MarqueImg img="/assets/img/logo/tailwindcss.png" />
//         <MarqueImg img="/assets/img/logo/microsoft.png" />
//     </Marquee>
// </div>

//      <Container className="py-8 space-y-8">
//     <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
//         Unleash your potential with personalized AI insights and targeted interview practice.
//     </h2>

//     <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
//         <div className="col-span-1 md:col-span-3">
//             <img 
//                 src="/assets/img/office.jpg" 
//                 alt="Professional office environment" 
//                 className="w-full max-h-96 rounded-md object-cover" 
//             />
//         </div>

//         <div className="col-span-1 md:col-span-2 flex flex-col justify-center gap-8 max-h-96 min-h-96 w-full">
//             <p className="text-center text-muted-foreground">
//                 Transform the way you prepare, gain confidence, and boost your chances of landing your dream job. Let AI be your edge in today&apos;s competitive job market.
//             </p>

//             <Link to="/generate" className="w-full flex justify-center">
//                 <Button className="w-3/4">
//                     Generate <Sparkles className="ml-2" />
//                 </Button>
//             </Link>
//         </div>
//     </div>
// </Container>


//         </div>
//     );
// };

// export default HomePage;



import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import { MarqueImg } from "@/components/marquee-img";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      {/* Hero Section */}
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              AI Superpower
            </span>
            <span className="text-gray-500 font-extrabold"> - A better way to</span>
            <br />
            improve your interview chances and skills
          </h2>

          <p className="mt-4 text-muted-foreground text-sm md:text-base">
            Boost your interview skills and increase your success rate with AI-driven insights. 
            Discover a smarter way to prepare, practice, and stand out.
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className="flex flex-col md:flex-row w-full items-center justify-evenly md:px-12 md:py-8 gap-4">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            256k+
            <span className="block text-xl text-muted-foreground font-normal">
              Offers Received
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-muted-foreground font-normal">
              Interviews Aced
            </span>
          </p>
        </div> */}

        {/* Hero Image with Card */}
        <div className="relative w-full mt-4 rounded-xl bg-gray-100 h-[400px] md:h-[550px] drop-shadow-md">
          <img
            src="/assets/img/her4.jpg"
            alt="Interview preparation"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Top Left Badge */}
          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white text-sm font-medium shadow-sm">
            Interviews Copilot&copy;
          </div>

          {/* Bottom Right Floating Card (Desktop) */}
          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-3 bg-white rounded-lg shadow-lg">
            <h2 className="text-neutral-800 font-semibold">AI Interview Coach</h2>
            <p className="text-sm text-neutral-500 mt-1">
              Get real-time analysis of your responses, body language, and speaking patterns with actionable improvement suggestions.
            </p>
            {/* <Button className="mt-3">
              Generate <Sparkle className="ml-2" />
            </Button> */}
             <Link to="/generate" className="w-full flex justify-center md:justify-start">
              <Button className="w-3/4 mt-2">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>

          {/* Mobile Version of the Card (Visible only on mobile) */}
          <div className="block md:hidden mt-4 px-4">
            <div className="w-full px-4 py-3 bg-white rounded-lg shadow-lg">
              <h2 className="text-neutral-800 font-semibold text-center">AI Interview Coach</h2>
              <p className="text-sm text-neutral-500 mt-1 text-center">
                Real-time feedback with AI. Prepare smarter, not harder.
              </p>
              {/* <Button className="mt-3 w-full">
                Generate <Sparkle className="ml-2" />
              </Button> */}
                <Link to="/generate" className="w-full flex justify-center md:justify-start">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Marquee Section */}
      <div className="w-full my-12">
        <div className="w-full text-center text-base md:text-lg lg:text-xl font-medium text-gray-800 py-4">
          Trusted by candidates from top companies
        </div>
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      {/* Final Section */}
      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold text-center md:text-left">
          Unleash your potential with personalized AI insights and targeted interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt="Professional office environment"
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col justify-center gap-6 max-h-96 min-h-96 w-full">
            <p className="text-center md:text-left text-muted-foreground px-2 md:px-0">
              Transform the way you prepare, gain confidence, and boost your chances of landing your dream job.
              Let AI be your edge in today&apos;s competitive job market.
            </p>

            <Link to="/generate" className="w-full flex justify-center md:justify-start">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;

