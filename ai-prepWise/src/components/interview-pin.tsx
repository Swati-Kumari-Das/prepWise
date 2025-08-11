// import type { Interview } from "@/types";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
// import { TooltipButton } from "./tooltip-button";
// import { Eye, Newspaper, Sparkles, Trash2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { toast } from "sonner";
// import {
//   collection,
//   doc,
//   getDocs,
//   query,
//   where,
//   writeBatch,
// } from "firebase/firestore";
// import { db } from "@/config/firebase.config";
// import { useAuth } from "@clerk/clerk-react";

// interface InterviewPinProps {
//   data: Interview;
//   onMockPage?: boolean;
// }

// export const InterviewPin = ({
//   data,
//   onMockPage = false,
// }: InterviewPinProps) => {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const { userId } = useAuth();
//   const onDelete = async () => {
//     setLoading(true);

//     try {
//       const interviewRef = doc(db, "interviews", data.id);
//       const userAnswerQuery = query(
//         collection(db, "userAnswers"),
//         where("userId", "==", userId),
//         where("mockIdRef", "==", data.id)
//       );

//       // get all matching user answer
//       const querySnap = await getDocs(userAnswerQuery);

//       // initialize the firebase batch

//       const batch = writeBatch(db);

//       // add delete -> interview batch

//       batch.delete(interviewRef);

//       querySnap.forEach((docRef) => batch.delete(docRef.ref));

//       // commit

//       await batch.commit();

//       toast("Success", { description: "Your interview has been removed" });
//     } catch (error) {
//       console.log(error);
//       toast("Error", {
//         description: "Something went wrong!. Please try again later",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Card className="p-4 rounded-md shadow-none hover:shadow-md shadow-gray-100 cursor-pointer transition-all space-y-4">
//       <CardTitle>{data?.position}</CardTitle>
//       <CardDescription>{data?.description}</CardDescription>
//       <div className="w-full flex items-center gap-2 flex-wrap">
//         {data.techStack.split(",").map((word, index) => (
//           <Badge
//             key={index}
//             variant={"outline"}
//             className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
//           >
//             {word}
//           </Badge>
//         ))}
//       </div>

//       <CardFooter
//         className={cn(
//           "w-full flex items-center p-0",
//           onMockPage ? "justify-end" : "justify-between"
//         )}
//       >
//         <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
//           {`${new Date(data.createdAt.toDate()).toLocaleDateString("en-US", {
//             dateStyle: "long",
//           })} - ${new Date(data.createdAt.toMillis()).toLocaleTimeString(
//             "en-US",
//             {
//               timeStyle: "short",
//             }
//           )}`}
//         </p>

//         {!onMockPage && (
//           <div className="flex items-center justify-center ">
//             <TooltipButton
//               content="View"
//               buttonVariant={"ghost"}
//               onClick={() => {
//                 navigate(`/generate/${data.id}`, { replace: true });
//               }}
//               disabled={false}
//               buttonClassName="hover:text-red-500"
//               icon={<Eye />}
//               loading={false}
//             />

//             <TooltipButton
//               content="Delete"
//               buttonVariant={"ghost"}
//               onClick={onDelete}
//               disabled={false}
//               buttonClassName="hover:text-red-500"
//               icon={<Trash2 />}
//               loading={loading}
//             />

            

//             <TooltipButton
//               content="Start"
//               buttonVariant={"ghost"}
//               onClick={() => {
//                 navigate(`/generate/interview/${data.id}`, { replace: true });
//               }}
//               disabled={false}
//               buttonClassName="hover:text-sky-500"
//               icon={<Sparkles />}
//               loading={false}
//             />

//             <TooltipButton
//               content="Feedback"
//               buttonVariant={"ghost"}
//               onClick={() => {
//                 navigate(`/generate/feedback/${data.id}`, { replace: true });
//               }}
//               disabled={false}
//               buttonClassName="hover:text-yellow-500"
//               icon={<Newspaper />}
//               loading={false}
//             />
//           </div>
//         )}
//       </CardFooter>
//     </Card>
//   );
// };



// import type { Interview } from "@/types";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
// import { TooltipButton } from "./tooltip-button";
// import { Eye, Newspaper, Sparkles, Trash2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { toast } from "sonner";
// import {
//   collection,
//   doc,
//   getDocs,
//   query,
//   where,
//   writeBatch,
// } from "firebase/firestore";
// import { db } from "@/config/firebase.config";
// import { useAuth } from "@clerk/clerk-react";

// interface InterviewPinProps {
//   data: Interview;
//   onMockPage?: boolean;
// }

// export const InterviewPin = ({
//   data,
//   onMockPage = false,
// }: InterviewPinProps) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const { userId } = useAuth();

//   const onDelete = async () => {
//     setLoading(true);
//     try {
//       const interviewRef = doc(db, "interviews", data.id);
//       const userAnswerQuery = query(
//         collection(db, "userAnswers"),
//         where("userId", "==", userId),
//         where("mockIdRef", "==", data.id)
//       );

//       const querySnap = await getDocs(userAnswerQuery);
//       const batch = writeBatch(db);

//       batch.delete(interviewRef);
//       querySnap.forEach((docRef) => batch.delete(docRef.ref));

//       await batch.commit();

//       toast("Success", { description: "Your interview has been removed" });
//     } catch (error) {
//       console.error(error);
//       toast("Error", {
//         description: "Something went wrong!. Please try again later",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Card className="p-4 rounded-md shadow-none hover:shadow-md shadow-gray-100 cursor-pointer transition-all space-y-4">
//       <CardTitle>{data?.position}</CardTitle>
//       <CardDescription>{data?.description}</CardDescription>

//       {/* techStack is already string[], so no .split() needed */}
//       <div className="w-full flex items-center gap-2 flex-wrap">
//         {data.techStack.map((word: string, index: number) => (
//           <Badge
//             key={index}
//             variant="outline"
//             className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
//           >
//             {word}
//           </Badge>
//         ))}
//       </div>

//       <CardFooter
//         className={cn(
//           "w-full flex items-center p-0",
//           onMockPage ? "justify-end" : "justify-between"
//         )}
//       >
//         <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
//           {`${new Date(data.createdAt.toDate()).toLocaleDateString("en-US", {
//             dateStyle: "long",
//           })} - ${new Date(data.createdAt.toMillis()).toLocaleTimeString(
//             "en-US",
//             {
//               timeStyle: "short",
//             }
//           )}`}
//         </p>

//         {!onMockPage && (
//           <div className="flex items-center justify-center">
//             <TooltipButton
//               content="View"
//               buttonVariant="ghost"
//               onClick={() => {
//                 navigate(`/generate/${data.id}`, { replace: true });
//               }}
//               disabled={false}
//               buttonClassName="hover:text-red-500"
//               icon={<Eye />}
//               loading={false}
//             />

//             <TooltipButton
//               content="Delete"
//               buttonVariant="ghost"
//               onClick={onDelete}
//               disabled={false}
//               buttonClassName="hover:text-red-500"
//               icon={<Trash2 />}
//               loading={loading}
//             />

//             <TooltipButton
//               content="Start"
//               buttonVariant="ghost"
//               onClick={() => {
//                 navigate(`/generate/interview/${data.id}`, { replace: true });
//               }}
//               disabled={false}
//               buttonClassName="hover:text-sky-500"
//               icon={<Sparkles />}
//               loading={false}
//             />

//             <TooltipButton
//               content="Feedback"
//               buttonVariant="ghost"
//               onClick={() => {
//                 navigate(`/generate/feedback/${data.id}`, { replace: true });
//               }}
//               disabled={false}
//               buttonClassName="hover:text-yellow-500"
//               icon={<Newspaper />}
//               loading={false}
//             />
//           </div>
//         )}
//       </CardFooter>
//     </Card>
//   );
// };


import type { Interview } from "@/types";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./tooltip-button";
import { Eye, Newspaper, Sparkles, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { useAuth } from "@clerk/clerk-react";

interface InterviewPinProps {
  data: Interview;
  onMockPage?: boolean;
}

/** Utility: normalize techStack to string[] safely */
const normalizeTechStack = (techStack: unknown): string[] => {
  if (!techStack) return [];
  if (Array.isArray(techStack)) return techStack.map(String).filter(Boolean);
  if (typeof techStack === "string")
    return techStack.split(",").map((s) => s.trim()).filter(Boolean);
  if (typeof techStack === "object") {
    // handle objects like {0: "React", 1: "Node"} or {React:true}
    const vals = Object.values(techStack as Record<string, any>);
    // if values are strings/numbers, use them
    if (vals.every((v) => typeof v === "string" || typeof v === "number")) {
      return vals.map(String).filter(Boolean);
    }
    // fallback to keys (useful for {React: true})
    return Object.keys(techStack as Record<string, any>).filter(Boolean);
  }
  return [];
};

/** Utility: robustly format createdAt that may be Timestamp | number | string */
const formatCreatedAt = (raw: unknown) => {
  let date = new Date();
  try {
    if (raw && typeof raw === "object" && "toDate" in (raw as any) && typeof (raw as any).toDate === "function") {
      date = (raw as any).toDate();
    } else if (raw && typeof raw === "object" && "toMillis" in (raw as any) && typeof (raw as any).toMillis === "function") {
      date = new Date((raw as any).toMillis());
    } else if (typeof raw === "number") {
      date = new Date(raw);
    } else if (typeof raw === "string") {
      const parsed = Date.parse(raw);
      date = isNaN(parsed) ? new Date() : new Date(parsed);
    }
  } catch {
    date = new Date();
  }

  return `${date.toLocaleDateString("en-US", { dateStyle: "long" })} - ${date.toLocaleTimeString("en-US", { timeStyle: "short" })}`;
};

export const InterviewPin = ({ data, onMockPage = false }: InterviewPinProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();

  const techArray = normalizeTechStack((data as any)?.techStack);
  const createdAtLabel = formatCreatedAt((data as any)?.createdAt);

  const onDelete = async () => {
    if (!userId) {
      toast("Error", { description: "You must be signed in to delete." });
      return;
    }

    setLoading(true);
    try {
      const interviewRef = doc(db, "interviews", data.id);

      // find userAnswers for this user + this mock/interview id
      const userAnswerQuery = query(
        collection(db, "userAnswers"),
        where("userId", "==", userId),
        where("mockIdRef", "==", data.id)
      );

      const querySnap = await getDocs(userAnswerQuery);
      const batch = writeBatch(db);

      // delete interview doc
      batch.delete(interviewRef);

      // delete user answers docs (if any)
      querySnap.docs.forEach((snap) => batch.delete(snap.ref));

      await batch.commit();

      toast("Success", { description: "Your interview has been removed" });
    } catch (err) {
      // keep error generic for users, but log for devs
      console.error("Failed to delete interview:", err);
      toast("Error", {
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 rounded-md shadow-none hover:shadow-md shadow-gray-100 cursor-pointer transition-all space-y-4">
      <CardTitle>{data?.position ?? "Untitled"}</CardTitle>
      <CardDescription>{data?.description ?? "No description"}</CardDescription>

      <div className="w-full flex items-center gap-2 flex-wrap">
        {techArray.length > 0 ? (
          techArray.map((word, index) => (
            <Badge
              key={`${word}-${index}`}
              variant="outline"
              className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
            >
              {word}
            </Badge>
          ))
        ) : (
          <Badge variant="secondary" className="text-xs">
            No techs listed
          </Badge>
        )}
      </div>

      <CardFooter
        className={cn(
          "w-full flex items-center p-0",
          onMockPage ? "justify-end" : "justify-between"
        )}
      >
        <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
          {createdAtLabel}
        </p>

        {!onMockPage && (
          <div className="flex items-center justify-center">
            <TooltipButton
              content="View"
              buttonVariant="ghost"
              onClick={() => navigate(`/generate/${data.id}`, { replace: true })}
              disabled={false}
              buttonClassName="hover:text-red-500"
              icon={<Eye />}
              loading={false}
            />

            <TooltipButton
              content="Delete"
              buttonVariant="ghost"
              onClick={onDelete}
              disabled={loading}
              buttonClassName="hover:text-red-500"
              icon={<Trash2 />}
              loading={loading}
            />

            <TooltipButton
              content="Start"
              buttonVariant="ghost"
              onClick={() => navigate(`/generate/interview/${data.id}`, { replace: true })}
              disabled={false}
              buttonClassName="hover:text-sky-500"
              icon={<Sparkles />}
              loading={false}
            />

            <TooltipButton
              content="Feedback"
              buttonVariant="ghost"
              onClick={() => navigate(`/generate/feedback/${data.id}`, { replace: true })}
              disabled={false}
              buttonClassName="hover:text-yellow-500"
              icon={<Newspaper />}
              loading={false}
            />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
