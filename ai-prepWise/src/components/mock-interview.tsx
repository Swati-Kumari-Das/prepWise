// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { FormProvider, useForm } from "react-hook-form"
// import { useEffect } from "react";
// import type { Interview } from "@/types";
// import CustomBreadCrumb from "./custom-bread-crumb";
// import { toast } from "sonner";
// import { useState } from "react";
// import { useAuth } from "@clerk/clerk-react";
// import { useNavigate } from "react-router";
// import { Description } from "@radix-ui/react-dialog";
// import { Headings } from "./headings";
// import { Button } from "./ui/button";
// import {Loader, Trash2 } from "lucide-react";
// import { Separator } from "./ui/separator";
// import { FormField,FormItem,FormControl,FormLabel,FormMessage } from "./ui/form";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";

// interface FormMockInterviewProps {
//     initialData: Interview | null;
// }

// const formSchema = z.object({
//     position: z
//         .string()
//         .min(1, "Position is required")
//         .max(100, "Position must be 100 characters or less"),
//     description: z
//         .string()
//         .min(10, "Description is required"),
//     experience: z.coerce
//         .number()
//         .min(0, "Experience cannot be empty or negative"),
//     techStack: z
//         .string()
//         .min(1, "Tech stack must be at least a character"),
// });

// type FormData=z.infer<typeof formSchema>
// const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
      
//        const form = useForm<FormData>({
//         resolver: zodResolver(formSchema),
//         defaultValues: initialData || {}
//       });
     
//     const {isValid,isSubmitting}=form.formState;
//     const [loading,setLoading]=useState(false)
//     const navigate=useNavigate();
//     const {userId}=useAuth();
//     const title=initialData?.position? initialData?.position:"Create a new Mock Interview";

    
//     const breadCrumpPage=initialData?.position? initialData?.position:"Create";


//     const actions=initialData ? "Save Changes" : "Create";
//     const toastMessage=initialData
//     ?{title:"Updated..!",description:"Changes save successfully..."}
//     :{title:"Created..!",description:"New Mock Interview created..."};
    
//     const onSubmit= async(data:FormData)=>{
//        try{
//           setLoading(true);
//           console.log(data);
//        }catch(error){
//         console.log(error);
//         toast.error("Error..",{
//           description:`Something went erong.Please try again later`,
//         });
//        } finally{
//         setLoading(false);
//        }
//     }

//     useEffect(() => {
//     if (initialData) {
//         form.reset({
//             position: initialData.position,
//             description: initialData.description,
//             experience: initialData.experience,
//             techStack: initialData.techStack
//         });
//     }
// }, [initialData, form]);

//     return (
//         <div className="w-full flex-col space-y-4">
//             <CustomBreadCrumb
//                 breadCrumbPage={breadCrumpPage}
//                 breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
//             />

//         <div className="mt-4 flex items-center justify-between w-full">
//             <Headings title={title} isSubHeading />
           
//            {initialData && (
//             <Button size={"icon"} variant={"ghost"}>
//               < Trash2 className="min-w-4 min-h-4 text-red-500" />
//             </Button>
//            )}

//         </div>

//         <Separator className="my-4" />

//         <div className="my-6"></div>

//         <FormProvider {...form}>
//     <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="w-full p-8 rounded-lg flex flex-col items-start justify-start gap-6 shadow-md"
//     >
//         <FormField
//             control={form.control}
//             name="position"
//             render={({ field }) => (
//                 <FormItem className="w-full space-y-4">
//                     <div className="w-full flex items-center justify-between">
//                         <FormLabel>Job Role / Job Position</FormLabel>
//                         <FormMessage className="text-sm" />
//                     </div>
//                     <FormControl>
//                          <Input
//                             disabled={loading}
//                             className="h-12"
//                             placeholder="e.g.: Full stack developer"
//                             {...field}
//                         />
                     
//                     </FormControl>
//                 </FormItem>
//             )}
//         />
//          <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//                 <FormItem className="w-full space-y-4">
//                     <div className="w-full flex items-center justify-between">
//                         <FormLabel>Job Description</FormLabel>
//                         <FormMessage className="text-sm" />
//                     </div>
//                     <FormControl>
                         
//                         <Textarea

//                             disabled={loading}
//                             className="h-12"
//                             placeholder="e.g.:- Describe your Job role or position..."
//                             {...field}
//                            value={field.value ?? ""}
//                         />
//                     </FormControl>
//                 </FormItem>
//             )}
//         />

//         {/* //experience */}
//          <FormField
//             control={form.control}
//             name="experience"
//             render={({ field }) => (
//                 <FormItem className="w-full space-y-4">
//                     <div className="w-full flex items-center justify-between">
//                         <FormLabel>Years of Experience</FormLabel>
//                         <FormMessage className="text-sm" />
//                     </div>
//                     <FormControl>
//                          <Input
//                          {...field}
//                            type="number"
//                             disabled={loading}
//                             className="h-12"
//                             placeholder="eg:- 5 "
//                            value={field.value ?? ""}
//                         />
                 
//                     </FormControl>
//                 </FormItem>
//             )}
//         />


//          <FormField
//             control={form.control}
//             name="techStack"
//             render={({ field }) => (
//                 <FormItem className="w-full space-y-4">
//                     <div className="w-full flex items-center justify-between">
//                         <FormLabel>Tech Stacks</FormLabel>
//                         <FormMessage className="text-sm" />
//                     </div>
//                     <FormControl>
//                          <Textarea
//                          {...field}
//                             value={field.value ?? ""}
//                             disabled={loading}
//                             className="h-12"
//                             placeholder="eg:-React, Typescript...(Seperate the values using commas) "
                          
//                         />
                 
//                     </FormControl>
//                 </FormItem>
//             )}
//         />



// <div className="w-full flex items-center justify-end gap-6">
//   <Button type="reset" size={"sm"} variant={"outline"} disabled={isSubmitting || loading}> Reset </Button>

//     <Button type="submit" size={"sm"}  disabled={isSubmitting || loading || !isValid}> {loading? ( <Loader className="text-gray-50 animate-spin" />) :(actions)} </Button>
// </div>
// </form>
// </FormProvider>
// </div>
//     );
// };

// export default FormMockInterview;



//2nd tryy

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { FormProvider, useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import type { Interview } from "@/types";
// import CustomBreadCrumb from "./custom-bread-crumb";
// import { toast } from "sonner";
// import { useAuth } from "@clerk/clerk-react";
// import { useNavigate } from "react-router";
// import { Headings } from "./headings";
// import { Button } from "./ui/button";
// import { Loader, Trash2 } from "lucide-react";
// import { Separator } from "./ui/separator";

// import {
//   FormField,
//   FormItem,
//   FormControl,
//   FormLabel,
//   FormMessage,
// } from "./ui/form";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";

// interface FormMockInterviewProps {
//   initialData: Interview | null;
// }

// const formSchema = z.object({
//   position: z
//     .string()
//     .min(1, "Position is required")
//     .max(100, "Position must be 100 characters or less"),
//   description: z.string().min(10, "Description is required"),
//   experience: z.coerce
//     .number()
//     .min(0, "Experience cannot be empty or negative"),
//   techStack: z.string().min(1, "Tech stack must be at least a character"),
// });

// type FormData = z.infer<typeof formSchema>;

// const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       position: "",
//       description: "",
//       experience: 0,
//       techStack: "",
//       ...(initialData ?? {}),
//     },
//   });

//   const { isValid, isSubmitting } = form.formState;
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { userId } = useAuth();

//   const title = initialData?.position
//     ? initialData.position
//     : "Create a new Mock Interview";
//   const breadCrumpPage = initialData?.position ? initialData.position : "Create";

//   const actions = initialData ? "Save Changes" : "Create";
//   const toastMessage = initialData
//     ? { title: "Updated..!", description: "Changes saved successfully..." }
//     : { title: "Created..!", description: "New Mock Interview created..." };


//   const generateAiResult = async (data: FormData) => {
//     const prompt = `
//             As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

//             [
//               { "question": "<Question text>", "answer": "<Answer text>" },
//               ...
//             ]

//             Job Information:
//             - Job Position: ${data?.position}
//             - Job Description: ${data?.description}
//             - Years of Experience Required: ${data?.experience}
//             - Tech Stacks: ${data?.techStack}

//             The questions should assess skills in ${data?.techStack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
//             `;

//     const aiResult = await chatSession.sendMessage(prompt);
//     console.log(aiResult.response.text().trim());

//     const cleanedResponse = cleanJsonResponse(aiResult.response.text());

//     return cleanedResponse;
//   };

//   const onSubmit = async (data: FormData) => {
//     try {
//       setLoading(true);
//       console.log(data);

//       if(initialData){
//            // update api
//         if (isValid) {
//           // create a new mock interview
//           const aiResult = await generateAiResult(data);

//           await updateDoc(doc(db, "interviews", initialData?.id), {
//             questions: aiResult,
//             ...data,
//             updatedAt: serverTimestamp(),
//           });
//            toast.success(toastMessage.title, { description: toastMessage.description });
//         //update
//       }else{
//         //create a new mock interview
//             // create api

//         if (isValid) {
//           // create a new mock interview
//           const aiResult = await generateAiResult(data);

//           const interviewRef = await addDoc(collection(db, "interviews"), {
//             ...data,
//             userId,
//             questions: aiResult,
//             createdAt: serverTimestamp(),
//           });

//           const id = interviewRef.id;

//           await updateDoc(doc(db, "interviews", id), {
//             id,
//             updatedAt: serverTimestamp(),
//           });

//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       }

//       navigate("/generate", { replace: true });
//       }
//       // TODO: Save data to backend
//       toast.success(toastMessage.title, { description: toastMessage.description });
//     } catch (error) {
//       console.error(error);
//       toast.error("Error..", {
//         description: "Something went wrong. Please try again later.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (initialData) {
//       form.reset({
//         position: initialData.position || "",
//         description: initialData.description || "",
//         experience: initialData.experience || 0,
//         techStack: initialData.techStack.join(", ") || "",
//       });
//     }
//   }, [initialData, form]);

//   return (
//     <div className="w-full flex-col space-y-4">
//       <CustomBreadCrumb
//         breadCrumbPage={breadCrumpPage}
//         breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
//       />

//       <div className="mt-4 flex items-center justify-between w-full">
//         <Headings title={title} isSubHeading />

//         {initialData && (
//           <Button size={"icon"} variant={"ghost"}>
//             <Trash2 className="min-w-4 min-h-4 text-red-500" />
//           </Button>
//         )}
//       </div>

//       <Separator className="my-4" />

//       <FormProvider {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-full p-8 rounded-lg flex flex-col items-start justify-start gap-6 shadow-md"
//         >
//           {/* Position Field */}
//           <FormField
//             control={form.control}
//             name="position"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Role / Job Position</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     disabled={loading}
//                     className="h-12"
//                     placeholder="e.g.: Full stack developer"
//                     {...field}
//                     value={field.value ?? ""}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           {/* Description Field */}
//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Description</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     disabled={loading}
//                     className="h-12"
//                     placeholder="e.g.:- Describe your Job role or position..."
//                     {...field}
//                     value={field.value ?? ""}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           {/* Experience Field */}
//           <FormField
//             control={form.control}
//             name="experience"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Years of Experience</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     type="number"
//                     disabled={loading}
//                     className="h-12"
//                     placeholder="eg:- 5"
//                     value={field.value ?? ""}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           {/* Tech Stack Field */}
//           <FormField
//             control={form.control}
//             name="techStack"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Tech Stacks</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     {...field}
//                     value={field.value ?? ""}
//                     disabled={loading}
//                     className="h-12"
//                     placeholder="eg:-React, Typescript...(Separate values with commas)"
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           {/* Submit & Reset Buttons */}
         
//       <div className="w-full flex items-center justify-end gap-6">
//    <Button type="reset" size={"sm"} variant={"outline"} disabled={isSubmitting || loading}> Reset </Button>

//      <Button type="submit" size={"sm"}  disabled={isSubmitting || loading || !isValid}> {loading? ( <Loader className="text-gray-50 animate-spin" />) :(actions)} </Button>
// </div>
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default FormMockInterview;



//2nd try
// import { FormProvider, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import type { Interview } from "@/types";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@clerk/clerk-react";

// import CustomBreadCrumb from "@/components/custom-bread-crumb";
// import { Headings } from "@/components/headings";
// import { Button } from "@/components/ui/button";
// import { Loader, Trash2 } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { chatSession } from "@/scripts";
// import {
//   addDoc,
//   collection,
//   doc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "@/config/firebase.config";
// import { toast } from "sonner";

// interface FormMockInterview {
//   initialData: Interview | null;
// }

// const formSchema = z.object({
//   position: z
//     .string()
//     .min(1, "Position is required")
//     .max(100, "Position must be 100 characters or less"),
//   description: z.string().min(10, "Description is required"),
//   experience: z.coerce
//     .number()
//     .min(0, "Experience cannot be empty or negative"),
//   techStack: z.string().min(1, "Tech stack must be at least a character"),
// });

// type FormData = z.infer<typeof formSchema>;

// const FormMockInterview = ({ initialData }: FormMockInterview) => {
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: initialData || {
//        position: "",
//     description: "",
//     experience: 0,
//     techStack: "",
//     },
//   });

//   const { isValid, isSubmitting } = form.formState;
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { userId } = useAuth();

//   const title = initialData
//     ? initialData.position
//     : "Create a new mock interview";

//   const breadCrumpPage = initialData ? initialData?.position : "Create";
//   const actions = initialData ? "Save Changes" : "Create";
//   const toastMessage = initialData
//     ? { title: "Updated..!", description: "Changes saved successfully..." }
//     : { title: "Created..!", description: "New Mock Interview created..." };

//   const cleanAiResponse = (responseText: string) => {
//     // Step 1: Trim any surrounding whitespace
//     let cleanText = responseText.trim();

//     // Step 2: Remove any occurrences of "json" or code block symbols (``` or `)
//     cleanText = cleanText.replace(/(json|```|`)/g, "");

//     // Step 3: Extract a JSON array by capturing text between square brackets
//     const jsonArrayMatch = cleanText.match(/\[.*\]/s);
//     if (jsonArrayMatch) {
//       cleanText = jsonArrayMatch[0];
//     } else {
//       throw new Error("No JSON array found in response");
//     }

//     // Step 4: Parse the clean JSON text into an array of objects
//     try {
//       return JSON.parse(cleanText);
//     } catch (error) {
//       throw new Error("Invalid JSON format: " + (error as Error)?.message);
//     }
//   };

//   const generateAiResult = async (data: FormData) => {
//     const prompt = `
//             As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

//             [
//               { "question": "<Question text>", "answer": "<Answer text>" },
//               ...
//             ]

//             Job Information:
//             - Job Position: ${data?.position}
//             - Job Description: ${data?.description}
//             - Years of Experience Required: ${data?.experience}
//             - Tech Stacks: ${data?.techStack}

//             The questions should assess skills in ${data?.techStack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
//             `;

//     const aiResult = await chatSession.sendMessage(prompt);

//     const cleanedResponse = cleanAiResponse(aiResult.response.text());
      
//     return cleanedResponse;
//   };

//   const onSubmit = async (data: FormData) => {
//     try {
//       setIsLoading(true);

//       if (initialData) {
//         // update api
//         if (isValid) {
//           // create a new mock interview
//           const aiResult = await generateAiResult(data);

//           await updateDoc(doc(db, "interviews", initialData?.id), {
//             questions: aiResult,
//             ...data,
//             updatedAt: serverTimestamp(),
//           });

//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       } else {
//         // create api

//         if (isValid) {
//           // create a new mock interview
//           const aiResult = await generateAiResult(data);

//           await addDoc(collection(db, "interviews"), {
//             ...data,
//             userId,
//             questions: aiResult,
//             createdAt: serverTimestamp(),
//           });

         
//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       }

//       navigate("/generate", { replace: true });
//     } catch (error) {
//       console.log(error);
//       toast.error("Error..", {
//         description: `Something went wrong. Please try again later`,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (initialData) {
//       form.reset({
//         position: initialData.position,
//         description: initialData.description,
//         experience: initialData.experience,
//         techStack: initialData.techStack,
//       });
//     }
//   }, [initialData, form]);

//   return (
//     <div className="w-full flex-col space-y-4">
//       {/* Bread Crumb */}
//       <CustomBreadCrumb
//         breadCrumbPage={breadCrumpPage}
//         breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
//       />

//       <div className="mt-4 flex items-center justify-between w-full">
//         <Headings title={title} isSubHeading />

//         {initialData && (
//           <Button size={"icon"} variant={"ghost"}>
//             <Trash2 className="text-red-500 min-w-4 min-h-4" />
//           </Button>
//         )}
//       </div>

//       <Separator className="my-4" />

//       <div className="my-6"></div>

//       <FormProvider {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-full p-8 rounded-lg flex-col flex items-start justify-start gap-6 shadow-md "
//         >
//           <FormField
//             control={form.control}
//             name="position"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Role / Job Position</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- Full Stack Developer"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Description</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- describle your job role"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="experience"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Years of Experience</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- 5 Years"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="techStack"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Tech Stacks</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- React, Typescript..."
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <div className="w-full flex items-center justify-end gap-6">
//             <Button
//               type="reset"
//               size={"sm"}
//               variant={"outline"}
//               disabled={isSubmitting || isLoading}
//             >
//               Reset
//             </Button>
//             <Button
//               type="submit"
//               size={"sm"}
//               disabled={isSubmitting || !isValid || isLoading}
//             >
//               {isLoading ? (
//                 <Loader className="text-gray-50 animate-spin" />
//               ) : (
//                 actions
//               )}
//             </Button>
//           </div>
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default FormMockInterview;



//3rd try
// import { FormProvider, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import type { Interview } from "@/types";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@clerk/clerk-react";

// import CustomBreadCrumb from "@/components/custom-bread-crumb";
// import { Headings } from "@/components/headings";
// import { Button } from "@/components/ui/button";
// import { Loader, Trash2 } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { chatSession } from "@/scripts";
// import {
//   addDoc,
//   collection,
//   doc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "@/config/firebase.config";
// import { toast } from "sonner";

// interface FormMockInterviewProps {
//   initialData: Interview | null;
// }

// const formSchema = z.object({
//   position: z
//     .string()
//     .min(1, "Position is required")
//     .max(100, "Position must be 100 characters or less"),
//   description: z.string().min(10, "Description is required"),
//   experience: z.coerce
//     .number()
//     .min(0, "Experience cannot be empty or negative"),
//   techStack: z.string().min(1, "Tech stack must be at least a character"),
// });

// type FormData = z.infer<typeof formSchema>;

// const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: initialData
//       ? {
//           position: initialData.position,
//           description: initialData.description,
//           experience: initialData.experience,
//           techStack: Array.isArray(initialData.techStack)
//             ? initialData.techStack.join(", ")
//             : (initialData.techStack as string),
//         }
//       : {
//           position: "",
//           description: "",
//           experience: 0,
//           techStack: "",
//         },
//   });

//   const { isValid, isSubmitting } = form.formState;
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { userId } = useAuth();

//   const title = initialData
//     ? initialData.position
//     : "Create a new mock interview";

//   const breadCrumpPage = initialData ? initialData?.position : "Create";
//   const actions = initialData ? "Save Changes" : "Create";
//   const toastMessage = initialData
//     ? { title: "Updated..!", description: "Changes saved successfully..." }
//     : { title: "Created..!", description: "New Mock Interview created..." };

//   const cleanAiResponse = (responseText: string) => {
//     let cleanText = responseText.trim();
//     cleanText = cleanText.replace(/(json|```|`)/g, "");
//     const jsonArrayMatch = cleanText.match(/\[.*\]/s);
//     if (jsonArrayMatch) {
//       cleanText = jsonArrayMatch[0];
//     } else {
//       throw new Error("No JSON array found in response");
//     }
//     try {
//       return JSON.parse(cleanText);
//     } catch (error) {
//       throw new Error("Invalid JSON format: " + (error as Error)?.message);
//     }
//   };

//   const generateAiResult = async (data: FormData) => {
//     const prompt = `
//             As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

//             [
//               { "question": "<Question text>", "answer": "<Answer text>" },
//               ...
//             ]

//             Job Information:
//             - Job Position: ${data?.position}
//             - Job Description: ${data?.description}
//             - Years of Experience Required: ${data?.experience}
//             - Tech Stacks: ${data?.techStack}

//             The questions should assess skills in ${data?.techStack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
//             `;

//     const aiResult = await chatSession.sendMessage(prompt);

//     const cleanedResponse = cleanAiResponse(aiResult.response.text());
//     return cleanedResponse;
//   };

//   const onSubmit = async (data: FormData) => {
//     try {
//       setIsLoading(true);

//       if (initialData) {
//         if (isValid) {
//           const aiResult = await generateAiResult(data);

//           await updateDoc(doc(db, "interviews", initialData?.id), {
//             questions: aiResult,
//             ...data,
//             techStack: data.techStack.split(",").map((s) => s.trim()),
//             updatedAt: serverTimestamp(),
//           });

//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       } else {
//         if (isValid) {
//           const aiResult = await generateAiResult(data);

//           await addDoc(collection(db, "interviews"), {
//             ...data,
//             techStack: data.techStack.split(",").map((s) => s.trim()),
//             userId,
//             questions: aiResult,
//             createdAt: serverTimestamp(),
//           });

//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       }

//       navigate("/generate", { replace: true });
//     } catch (error) {
//       console.log(error);
//       toast.error("Error..", {
//         description: `Something went wrong. Please try again later`,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (initialData) {
//       form.reset({
//         position: initialData.position,
//         description: initialData.description,
//         experience: initialData.experience,
//         techStack: Array.isArray(initialData.techStack)
//           ? initialData.techStack.join(", ")
//           : (initialData.techStack as string),
//       });
//     }
//   }, [initialData, form]);

//   return (
//     <div className="w-full flex-col space-y-4">
//       <CustomBreadCrumb
//         breadCrumbPage={breadCrumpPage}
//         breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
//       />

//       <div className="mt-4 flex items-center justify-between w-full">
//         <Headings title={title} isSubHeading />

//         {initialData && (
//           <Button size={"icon"} variant={"ghost"}>
//             <Trash2 className="text-red-500 min-w-4 min-h-4" />
//           </Button>
//         )}
//       </div>

//       <Separator className="my-4" />

//       <div className="my-6"></div>

//       <FormProvider {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-full p-8 rounded-lg flex-col flex items-start justify-start gap-6 shadow-md "
//         >
//           <FormField
//             control={form.control}
//             name="position"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Role / Job Position</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- Full Stack Developer"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Description</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- describe your job role"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="experience"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Years of Experience</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- 5 Years"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="techStack"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Tech Stacks</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- React, Typescript..."
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <div className="w-full flex items-center justify-end gap-6">
//             <Button
//               type="reset"
//               size={"sm"}
//               variant={"outline"}
//               disabled={isSubmitting || isLoading}
//             >
//               Reset
//             </Button>
//             <Button
//               type="submit"
//               size={"sm"}
//               disabled={isSubmitting || !isValid || isLoading}
//             >
//               {isLoading ? (
//                 <Loader className="text-gray-50 animate-spin" />
//               ) : (
//                 actions
//               )}
//             </Button>
//           </div>
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default FormMockInterview;



// //corrected 3rd tryyy
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import type { Interview } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

import CustomBreadCrumb from "@/components/custom-bread-crumb";
import { Headings } from "@/components/headings";
import { Button } from "@/components/ui/button";
import { Loader, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/scripts";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { toast } from "sonner";

interface FormMockInterviewProps {
  initialData: Interview | null;
}

const formSchema = z.object({
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be 100 characters or less"),
  description: z.string().min(10, "Description is required"),
  experience: z.coerce
    .number()
    .min(0, "Experience cannot be empty or negative"),
  techStack: z.string().min(1, "Tech stack must be at least a character"),
});

type FormData = z.infer<typeof formSchema>;

const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver<FormData, any, FormData>(formSchema), // <-- fix here
    defaultValues: initialData
      ? {
          position: initialData.position,
          description: initialData.description,
          experience: initialData.experience,
          techStack: Array.isArray(initialData.techStack)
            ? initialData.techStack.join(", ")
            : (initialData.techStack as string),
        }
      : {
          position: "",
          description: "",
          experience: 0,
          techStack: "",
        },
  });

  const { isValid, isSubmitting } = form.formState;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();

  const title = initialData
    ? initialData.position
    : "Create a new mock interview";

  const breadCrumpPage = initialData ? initialData?.position : "Create";
  const actions = initialData ? "Save Changes" : "Create";
  const toastMessage = initialData
    ? { title: "Updated..!", description: "Changes saved successfully..." }
    : { title: "Created..!", description: "New Mock Interview created..." };

  const cleanAiResponse = (responseText: string) => {
    let cleanText = responseText.trim();
    cleanText = cleanText.replace(/(json|```|`)/g, "");
    const jsonArrayMatch = cleanText.match(/\[.*\]/s);
    if (jsonArrayMatch) {
      cleanText = jsonArrayMatch[0];
    } else {
      throw new Error("No JSON array found in response");
    }
    try {
      return JSON.parse(cleanText);
    } catch (error) {
      throw new Error("Invalid JSON format: " + (error as Error)?.message);
    }
  };

  const generateAiResult = async (data: FormData) => {
    const prompt = `
            As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

            [
              { "question": "<Question text>", "answer": "<Answer text>" },
              ...
            ]

            Job Information:
            - Job Position: ${data?.position}
            - Job Description: ${data?.description}
            - Years of Experience Required: ${data?.experience}
            - Tech Stacks: ${data?.techStack}

            The questions should assess skills in ${data?.techStack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
            `;

    const aiResult = await chatSession.sendMessage(prompt);

    const cleanedResponse = cleanAiResponse(aiResult.response.text());
    return cleanedResponse;
  };

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);

      if (initialData) {
        if (isValid) {
          const aiResult = await generateAiResult(data);

          await updateDoc(doc(db, "interviews", initialData?.id), {
            questions: aiResult,
            ...data,
            techStack: data.techStack.split(",").map((s) => s.trim()),
            updatedAt: serverTimestamp(),
          });

          toast(toastMessage.title, { description: toastMessage.description });
        }
      } else {
        if (isValid) {
          const aiResult = await generateAiResult(data);

          await addDoc(collection(db, "interviews"), {
            ...data,
            techStack: data.techStack.split(",").map((s) => s.trim()),
            userId,
            questions: aiResult,
            createdAt: serverTimestamp(),
          });

          toast(toastMessage.title, { description: toastMessage.description });
        }
      }

      navigate("/generate", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Error..", {
        description: `Something went wrong. Please try again later`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (initialData) {
      form.reset({
        position: initialData.position,
        description: initialData.description,
        experience: initialData.experience,
        techStack: Array.isArray(initialData.techStack)
          ? initialData.techStack.join(", ")
          : (initialData.techStack as string),
      });
    }
  }, [initialData, form]);

  return (
    <div className="w-full flex-col space-y-4">
      <CustomBreadCrumb
        breadCrumbPage={breadCrumpPage}
        breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]} // <-- fix typo here
      />

      <div className="mt-4 flex items-center justify-between w-full">
        <Headings title={title} isSubHeading />

        {initialData && (
          <Button size={"icon"} variant={"ghost"}>
            <Trash2 className="text-red-500 min-w-4 min-h-4" />
          </Button>
        )}
      </div>

      <Separator className="my-4" />

      <div className="my-6"></div>

      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full p-8 rounded-lg flex-col flex items-start justify-start gap-6 shadow-md "
        >
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Job Role / Job Position</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Input
                    className="h-12"
                    disabled={isLoading}
                    placeholder="eg:- Full Stack Developer"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Job Description</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Textarea
                    className="h-12"
                    disabled={isLoading}
                    placeholder="eg:- describe your job role"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Years of Experience</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Input
                    type="number"
                    className="h-12"
                    disabled={isLoading}
                    placeholder="eg:- 5 Years"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Tech Stacks</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Textarea
                    className="h-12"
                    disabled={isLoading}
                    placeholder="eg:- React, Typescript..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="w-full flex items-center justify-end gap-6">
            <Button
              type="reset"
              size={"sm"}
              variant={"outline"}
              disabled={isSubmitting || isLoading}
            >
              Reset
            </Button>
            <Button
              type="submit"
              size={"sm"}
              disabled={isSubmitting || !isValid || isLoading}
            >
              {isLoading ? (
                <Loader className="text-gray-50 animate-spin" />
              ) : (
                actions
              )}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormMockInterview;


//4th 





//corecting 4th try 
// import { FormProvider, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import type { Interview } from "@/types";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@clerk/clerk-react";

// import CustomBreadCrumb from "@/components/custom-bread-crumb";
// import { Headings } from "@/components/headings";
// import { Button } from "@/components/ui/button";
// import { Loader, Trash2 } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { chatSession } from "@/scripts";
// import {
//   addDoc,
//   collection,
//   doc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "@/config/firebase.config";
// import { toast } from "sonner";

// interface FormMockInterviewProps {
//   initialData: Interview | null;
// }

// const formSchema = z.object({
//   position: z
//     .string()
//     .min(1, "Position is required")
//     .max(100, "Position must be 100 characters or less"),
//   description: z.string().min(10, "Description is required"),
//   experience: z.coerce
//     .number()
//     .min(0, "Experience cannot be empty or negative"),
//   techStack: z.string().min(1, "Tech stack must be at least a character"),
// });

// type FormData = z.infer<typeof formSchema>;

// const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
//   const form = useForm<FormData>({
//     // FIX: remove explicit generics here to avoid the TS error
//     resolver: zodResolver(formSchema), 
//     defaultValues: initialData
//       ? {
//           position: initialData.position,
//           description: initialData.description,
//           experience: initialData.experience,
//           techStack: Array.isArray(initialData.techStack)
//             ? initialData.techStack.join(", ")
//             : (initialData.techStack as string),
//         }
//       : {
//           position: "",
//           description: "",
//           experience: 0,
//           techStack: "",
//         },
//   });

//   const { isValid, isSubmitting } = form.formState;
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { userId } = useAuth();

//   const title = initialData
//     ? initialData.position
//     : "Create a new mock interview";

//   const breadCrumpPage = initialData ? initialData?.position : "Create";
//   const actions = initialData ? "Save Changes" : "Create";
//   const toastMessage = initialData
//     ? { title: "Updated..!", description: "Changes saved successfully..." }
//     : { title: "Created..!", description: "New Mock Interview created..." };

//   const cleanAiResponse = (responseText: string) => {
//     let cleanText = responseText.trim();
//     cleanText = cleanText.replace(/(json|```|`)/g, "");
//     const jsonArrayMatch = cleanText.match(/\[.*\]/s);
//     if (jsonArrayMatch) {
//       cleanText = jsonArrayMatch[0];
//     } else {
//       throw new Error("No JSON array found in response");
//     }
//     try {
//       return JSON.parse(cleanText);
//     } catch (error) {
//       throw new Error("Invalid JSON format: " + (error as Error)?.message);
//     }
//   };

//   const generateAiResult = async (data: FormData) => {
//     const prompt = `
//             As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

//             [
//               { "question": "<Question text>", "answer": "<Answer text>" },
//               ...
//             ]

//             Job Information:
//             - Job Position: ${data?.position}
//             - Job Description: ${data?.description}
//             - Years of Experience Required: ${data?.experience}
//             - Tech Stacks: ${data?.techStack}

//             The questions should assess skills in ${data?.techStack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
//             `;

//     const aiResult = await chatSession.sendMessage(prompt);

//     const cleanedResponse = cleanAiResponse(aiResult.response.text());
//     return cleanedResponse;
//   };

//   const onSubmit = async (data: FormData) => {
//     try {
//       setIsLoading(true);

//       if (initialData) {
//         if (isValid) {
//           const aiResult = await generateAiResult(data);

//           await updateDoc(doc(db, "interviews", initialData?.id), {
//             questions: aiResult,
//             ...data,
//             techStack: data.techStack.split(",").map((s) => s.trim()),
//             updatedAt: serverTimestamp(),
//           });

//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       } else {
//         if (isValid) {
//           const aiResult = await generateAiResult(data);

//           await addDoc(collection(db, "interviews"), {
//             ...data,
//             techStack: data.techStack.split(",").map((s) => s.trim()),
//             userId,
//             questions: aiResult,
//             createdAt: serverTimestamp(),
//           });

//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       }

//       navigate("/generate", { replace: true });
//     } catch (error) {
//       console.log(error);
//       toast.error("Error..", {
//         description: `Something went wrong. Please try again later`,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (initialData) {
//       form.reset({
//         position: initialData.position,
//         description: initialData.description,
//         experience: initialData.experience,
//         techStack: Array.isArray(initialData.techStack)
//           ? initialData.techStack.join(", ")
//           : (initialData.techStack as string),
//       });
//     }
//   }, [initialData, form]);

//   return (
//     <div className="w-full flex-col space-y-4">
//       <CustomBreadCrumb
//         breadCrumbPage={breadCrumpPage}
//         breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
//       />

//       <div className="mt-4 flex items-center justify-between w-full">
//         <Headings title={title} isSubHeading />

//         {initialData && (
//           <Button size={"icon"} variant={"ghost"}>
//             <Trash2 className="text-red-500 min-w-4 min-h-4" />
//           </Button>
//         )}
//       </div>

//       <Separator className="my-4" />

//       <div className="my-6"></div>

//       <FormProvider {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-full p-8 rounded-lg flex-col flex items-start justify-start gap-6 shadow-md "
//         >
//           <FormField
//             control={form.control}
//             name="position"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Role / Job Position</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- Full Stack Developer"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Description</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- describe your job role"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="experience"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Years of Experience</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- 5 Years"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="techStack"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Tech Stacks</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- React, Typescript..."
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <div className="w-full flex items-center justify-end gap-6">
//             <Button
//               type="reset"
//               size={"sm"}
//               variant={"outline"}
//               disabled={isSubmitting || isLoading}
//             >
//               Reset
//             </Button>
//             <Button
//               type="submit"
//               size={"sm"}
//               disabled={isSubmitting || !isValid || isLoading}
//             >
//               {isLoading ? (
//                 <Loader className="text-gray-50 animate-spin" />
//               ) : (
//                 actions
//               )}
//             </Button>
//           </div>
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default FormMockInterview;





//correcting two erroos??????????????????????????????????????????????



// src/components/mock-interview.tsx
// import { FormProvider, useForm } from "react-hook-form";
// import type { SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import type { Interview } from "@/types";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@clerk/clerk-react";

// import CustomBreadCrumb from "@/components/custom-bread-crumb";
// import { Headings } from "@/components/headings";
// import { Button } from "@/components/ui/button";
// import { Loader, Trash2 } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { chatSession } from "@/scripts";
// import {
//   addDoc,
//   collection,
//   doc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "@/config/firebase.config";
// import { toast } from "sonner";

// interface FormMockInterviewProps {
//   initialData: Interview | null;
// }

// // Validation schema
// const formSchema = z.object({
//   position: z
//     .string()
//     .min(1, "Position is required")
//     .max(100, "Position must be 100 characters or less"),
//   description: z.string().min(10, "Description is required"),
//   experience: z.coerce
//     .number()
//     .min(0, "Experience cannot be empty or negative"),
//   techStack: z.string().min(1, "Tech stack must be at least a character"),
// });

// type FormData = z.infer<typeof formSchema>;

// const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
  
//   const form = useForm<FormData>({
//     resolver: zodResolver<FormData, unknown, FormData>(formSchema),
//     defaultValues: initialData
//       ? {
//           position: initialData.position,
//           description: initialData.description,
//           experience: initialData.experience,
//           techStack: Array.isArray(initialData.techStack)
//             ? initialData.techStack.join(", ")
//             : (initialData.techStack as string),
//         }
//       : {
//           position: "",
//           description: "",
//           experience: 0,
//           techStack: "",
//         },
//   });

//   const { isValid, isSubmitting } = form.formState;
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { userId } = useAuth();

//   const title = initialData
//     ? initialData.position
//     : "Create a new mock interview";

//   const breadCrumpPage = initialData ? initialData?.position : "Create";
//   const actions = initialData ? "Save Changes" : "Create";
//   const toastMessage = initialData
//     ? { title: "Updated..!", description: "Changes saved successfully..." }
//     : { title: "Created..!", description: "New Mock Interview created..." };

//   const cleanAiResponse = (responseText: string) => {
//     let cleanText = responseText.trim();
//     cleanText = cleanText.replace(/(json|```|`)/g, "");
//     const jsonArrayMatch = cleanText.match(/\[.*\]/s);
//     if (jsonArrayMatch) {
//       cleanText = jsonArrayMatch[0];
//     } else {
//       throw new Error("No JSON array found in response");
//     }
//     try {
//       return JSON.parse(cleanText);
//     } catch (error) {
//       throw new Error("Invalid JSON format: " + (error as Error)?.message);
//     }
//   };

//   const generateAiResult = async (data: FormData) => {
//     const prompt = `
//       As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer".

//       Job Information:
//       - Job Position: ${data?.position}
//       - Job Description: ${data?.description}
//       - Years of Experience Required: ${data?.experience}
//       - Tech Stacks: ${data?.techStack}
//     `;
//     const aiResult = await chatSession.sendMessage(prompt);
//     return cleanAiResponse(aiResult.response.text());
//   };

//   const onSubmit: SubmitHandler<FormData> = async (data) => {
//     try {
//       setIsLoading(true);

//       if (initialData) {
//         if (isValid) {
//           const aiResult = await generateAiResult(data);
//           await updateDoc(doc(db, "interviews", initialData?.id), {
//             questions: aiResult,
//             ...data,
//             techStack: data.techStack.split(",").map((s) => s.trim()),
//             updatedAt: serverTimestamp(),
//           });
//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       } else {
//         if (isValid) {
//           const aiResult = await generateAiResult(data);
//           await addDoc(collection(db, "interviews"), {
//             ...data,
//             techStack: data.techStack.split(",").map((s) => s.trim()),
//             userId,
//             questions: aiResult,
//             createdAt: serverTimestamp(),
//           });
//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       }
//       navigate("/generate", { replace: true });
//     } catch (error) {
//       console.error(error);
//       toast.error("Error..", {
//         description: `Something went wrong. Please try again later`,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (initialData) {
//       form.reset({
//         position: initialData.position,
//         description: initialData.description,
//         experience: initialData.experience,
//         techStack: Array.isArray(initialData.techStack)
//           ? initialData.techStack.join(", ")
//           : (initialData.techStack as string),
//       });
//     }
//   }, [initialData, form]);

//   return (
//     <div className="w-full flex-col space-y-4">
//       <CustomBreadCrumb
//         breadCrumbPage={breadCrumpPage}
//         breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
//       />

//       <div className="mt-4 flex items-center justify-between w-full">
//         <Headings title={title} isSubHeading />
//         {initialData && (
//           <Button size={"icon"} variant={"ghost"}>
//             <Trash2 className="text-red-500 min-w-4 min-h-4" />
//           </Button>
//         )}
//       </div>

//       <Separator className="my-4" />
//       <div className="my-6"></div>

//       <FormProvider {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-full p-8 rounded-lg flex-col flex items-start justify-start gap-6 shadow-md "
//         >
//           <FormField
//             control={form.control}
//             name="position"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Role / Job Position</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- Full Stack Developer"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Description</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- describe your job role"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="experience"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Years of Experience</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- 5 Years"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="techStack"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Tech Stacks</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- React, Typescript..."
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <div className="w-full flex items-center justify-end gap-6">
//             <Button
//               type="reset"
//               size={"sm"}
//               variant={"outline"}
//               disabled={isSubmitting || isLoading}
//             >
//               Reset
//             </Button>
//             <Button
//               type="submit"
//               size={"sm"}
//               disabled={isSubmitting || !isValid || isLoading}
//             >
//               {isLoading ? (
//                 <Loader className="text-gray-50 animate-spin" />
//               ) : (
//                 actions
//               )}
//             </Button>
//           </div>
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default FormMockInterview;




// //5th try 
// import { FormProvider, useForm } from "react-hook-form";
// import type { SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import type { Interview } from "@/types";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@clerk/clerk-react";

// import CustomBreadCrumb from "@/components/custom-bread-crumb";
// import { Headings } from "@/components/headings";
// import { Button } from "@/components/ui/button";
// import { Loader, Trash2 } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { chatSession } from "@/scripts";
// import {
//   addDoc,
//   collection,
//   doc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "@/config/firebase.config";
// import { toast } from "sonner";

// interface FormMockInterviewProps {
//   initialData: Interview | null;
// }

// // Validation schema
// const formSchema = z.object({
//   position: z
//     .string()
//     .min(1, "Position is required")
//     .max(100, "Position must be 100 characters or less"),
//   description: z.string().min(10, "Description is required"),
//   experience: z.coerce
//     .number()
//     .min(0, "Experience cannot be empty or negative")
//     .transform((val) => Number(val)), // Ensure final type is number
//   techStack: z.string().min(1, "Tech stack must be at least a character"),
// });

// type FormData = z.infer<typeof formSchema>;

// const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema), // ✅ No extra generics needed
//     defaultValues: initialData
//       ? {
//           position: initialData.position,
//           description: initialData.description,
//           experience: Number(initialData.experience),
//           techStack: Array.isArray(initialData.techStack)
//             ? initialData.techStack.join(", ")
//             : (initialData.techStack as string),
//         }
//       : {
//           position: "",
//           description: "",
//           experience: 0,
//           techStack: "",
//         },
//   });

//   const { isValid, isSubmitting } = form.formState;
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { userId } = useAuth();

//   const title = initialData
//     ? initialData.position
//     : "Create a new mock interview";

//   const breadCrumpPage = initialData ? initialData?.position : "Create";
//   const actions = initialData ? "Save Changes" : "Create";
//   const toastMessage = initialData
//     ? { title: "Updated..!", description: "Changes saved successfully..." }
//     : { title: "Created..!", description: "New Mock Interview created..." };

//   const cleanAiResponse = (responseText: string) => {
//     let cleanText = responseText.trim();
//     cleanText = cleanText.replace(/(json|```|`)/g, "");
//     const jsonArrayMatch = cleanText.match(/\[.*\]/s);
//     if (jsonArrayMatch) {
//       cleanText = jsonArrayMatch[0];
//     } else {
//       throw new Error("No JSON array found in response");
//     }
//     try {
//       return JSON.parse(cleanText);
//     } catch (error) {
//       throw new Error("Invalid JSON format: " + (error as Error)?.message);
//     }
//   };

//   const generateAiResult = async (data: FormData) => {
//     const prompt = `
//       As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer".

//       Job Information:
//       - Job Position: ${data?.position}
//       - Job Description: ${data?.description}
//       - Years of Experience Required: ${data?.experience}
//       - Tech Stacks: ${data?.techStack}
//     `;
//     const aiResult = await chatSession.sendMessage(prompt);
//     return cleanAiResponse(aiResult.response.text());
//   };

//   const onSubmit: SubmitHandler<FormData> = async (data) => {
//     try {
//       setIsLoading(true);

//       if (initialData) {
//         if (isValid) {
//           const aiResult = await generateAiResult(data);
//           await updateDoc(doc(db, "interviews", initialData?.id), {
//             questions: aiResult,
//             ...data,
//             techStack: data.techStack.split(",").map((s) => s.trim()),
//             updatedAt: serverTimestamp(),
//           });
//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       } else {
//         if (isValid) {
//           const aiResult = await generateAiResult(data);
//           await addDoc(collection(db, "interviews"), {
//             ...data,
//             techStack: data.techStack.split(",").map((s) => s.trim()),
//             userId,
//             questions: aiResult,
//             createdAt: serverTimestamp(),
//           });
//           toast(toastMessage.title, { description: toastMessage.description });
//         }
//       }
//       navigate("/generate", { replace: true });
//     } catch (error) {
//       console.error(error);
//       toast.error("Error..", {
//         description: `Something went wrong. Please try again later`,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (initialData) {
//       form.reset({
//         position: initialData.position,
//         description: initialData.description,
//         experience: Number(initialData.experience),
//         techStack: Array.isArray(initialData.techStack)
//           ? initialData.techStack.join(", ")
//           : (initialData.techStack as string),
//       });
//     }
//   }, [initialData, form]);

//   return (
//     <div className="w-full flex-col space-y-4">
//       <CustomBreadCrumb
//         breadCrumbPage={breadCrumpPage}
//         breadCrumbItems={[{ label: "Mock Interviews", link: "/generate" }]}
//       />

//       <div className="mt-4 flex items-center justify-between w-full">
//         <Headings title={title} isSubHeading />
//         {initialData && (
//           <Button size={"icon"} variant={"ghost"}>
//             <Trash2 className="text-red-500 min-w-4 min-h-4" />
//           </Button>
//         )}
//       </div>

//       <Separator className="my-4" />
//       <div className="my-6"></div>

//       <FormProvider {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-full p-8 rounded-lg flex-col flex items-start justify-start gap-6 shadow-md "
//         >
//           <FormField
//             control={form.control}
//             name="position"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Role / Job Position</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- Full Stack Developer"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Job Description</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- describe your job role"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="experience"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Years of Experience</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- 5 Years"
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="techStack"
//             render={({ field }) => (
//               <FormItem className="w-full space-y-4">
//                 <div className="w-full flex items-center justify-between">
//                   <FormLabel>Tech Stacks</FormLabel>
//                   <FormMessage className="text-sm" />
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     className="h-12"
//                     disabled={isLoading}
//                     placeholder="eg:- React, Typescript..."
//                     {...field}
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <div className="w-full flex items-center justify-end gap-6">
//             <Button
//               type="reset"
//               size={"sm"}
//               variant={"outline"}
//               disabled={isSubmitting || isLoading}
//             >
//               Reset
//             </Button>
//             <Button
//               type="submit"
//               size={"sm"}
//               disabled={isSubmitting || !isValid || isLoading}
//             >
//               {isLoading ? (
//                 <Loader className="text-gray-50 animate-spin" />
//               ) : (
//                 actions
//               )}
//             </Button>
//           </div>
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default FormMockInterview;





///7th
// import { FormProvider, useForm } from "react-hook-form";
// import type { SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import type { Interview } from "@/types";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@clerk/clerk-react";

// import CustomBreadCrumb from "@/components/custom-bread-crumb";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Loader2 } from "lucide-react";
// import { createMockInterview, getMockInterviews } from "@/lib/api";
// import { toast } from "sonner";

// // ✅ Zod schema
// const formSchema = z.object({
//   position: z.string().min(1, "Position is required"),
//   description: z.string().min(1, "Description is required"),
//   experience: z.number().min(0, "Experience must be 0 or more"),
//   techStack: z.string().min(1, "Tech stack is required")
// });

// type FormValues = z.infer<typeof formSchema>;

// export default function MockInterviewPage() {
//   const { isSignedIn, userId } = useAuth();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [interviews, setInterviews] = useState<Interview[]>([]);

//   const methods = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       position: "",
//       description: "",
//       experience: 0,
//       techStack: ""
//     }
//   });

//   const fetchInterviews = async () => {
//     try {
//       const res = await getMockInterviews();
//       setInterviews(res);
//     } catch {
//       toast.error("Failed to fetch interviews");
//     }
//   };

//   useEffect(() => {
//     fetchInterviews();
//   }, []);

//   const onSubmit: SubmitHandler<FormValues> = async (data) => {
//     if (!isSignedIn) {
//       toast.error("You must be signed in to create an interview");
//       return;
//     }
//     setLoading(true);
//     try {
//       await createMockInterview({ ...data, userId });
//       toast.success("Mock interview created successfully");
//       methods.reset();
//       fetchInterviews();
//     } catch {
//       toast.error("Failed to create mock interview");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <CustomBreadCrumb
//         items={[
//           { title: "Dashboard", href: "/" },
//           { title: "Mock Interviews", href: "/mock-interview" }
//         ]}
//       />

//       <Card>
//         <CardHeader>
//           <CardTitle>Create Mock Interview</CardTitle>
//           <CardDescription>
//             Fill in the details to schedule a mock interview session.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <FormProvider {...methods}>
//             <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
//               <div>
//                 <Label htmlFor="position">Position</Label>
//                 <Input id="position" {...methods.register("position")} />
//                 {methods.formState.errors.position && (
//                   <p className="text-sm text-red-500">
//                     {methods.formState.errors.position.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea id="description" {...methods.register("description")} />
//                 {methods.formState.errors.description && (
//                   <p className="text-sm text-red-500">
//                     {methods.formState.errors.description.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label htmlFor="experience">Experience (years)</Label>
//                 <Input
//                   id="experience"
//                   type="number"
//                   {...methods.register("experience", { valueAsNumber: true })}
//                 />
//                 {methods.formState.errors.experience && (
//                   <p className="text-sm text-red-500">
//                     {methods.formState.errors.experience.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label>Tech Stack</Label>
//                 <Select onValueChange={(val) => methods.setValue("techStack", val)}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select tech stack" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="react">React</SelectItem>
//                     <SelectItem value="node">Node.js</SelectItem>
//                     <SelectItem value="python">Python</SelectItem>
//                     <SelectItem value="java">Java</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 {methods.formState.errors.techStack && (
//                   <p className="text-sm text-red-500">
//                     {methods.formState.errors.techStack.message}
//                   </p>
//                 )}
//               </div>

//               <Button type="submit" disabled={loading}>
//                 {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//                 Submit
//               </Button>
//             </form>
//           </FormProvider>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Previous Mock Interviews</CardTitle>
//         </CardHeader>
//         <CardContent>
//           {interviews.length > 0 ? (
//             <ul className="space-y-4">
//               {interviews.map((interview) => (
//                 <li key={interview.id} className="border p-4 rounded-lg">
//                   <h3 className="font-bold">{interview.position}</h3>
//                   <p>{interview.description}</p>
//                   <p className="text-sm text-gray-500">
//                     Experience: {interview.experience} years
//                   </p>
//                   <p className="text-sm">Tech Stack: {interview.techStack}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No mock interviews found.</p>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
