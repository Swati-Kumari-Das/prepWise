import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="bg-white-100 text-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
        <p className="text-gray-700 mb-8 text-lg">
          At <span className="text-black font-semibold">AI PrepWise</span>, we believe that preparation is the key to success.
          Our mission is to help you ace your interviews through realistic, AI-powered mock interviews that build confidence and sharpen skills.
        </p>

        <Separator className="bg-gray-700 mb-8" />

        {/* Why Mock Interviews Matter */}
        <Card className="bg-gray-900 border border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Why Mock Interviews Matter</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Mock interviews simulate real-life scenarios, helping you practice under conditions similar
              to an actual interview. This reduces anxiety, improves clarity, and builds confidence.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Boost confidence and reduce interview-day stress</li>
              <li>Identify and improve weak areas in communication</li>
              <li>Get familiar with industry-specific questions</li>
              <li>Receive constructive feedback to enhance performance</li>
            </ul>
          </CardContent>
        </Card>

        {/* How We Help */}
        <Card className="bg-gray-900 border border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">How We Help You Succeed</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Our platform uses advanced AI to create customized interview simulations tailored to your
              role, industry, and skill level. We provide detailed feedback so you can improve with every session.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Role-specific interview simulations</li>
              <li>Instant AI-generated performance feedback</li>
              <li>Progress tracking and improvement suggestions</li>
              <li>Access to a library of best interview practices</li>
            </ul>
          </CardContent>
        </Card>

        {/* Closing */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-white">Your Success is Our Goal</h2>
          <p className="text-gray-300">
            Every great career opportunity starts with a great interview. Let us help you walk into your next interview prepared,
            confident, and ready to impress. Practice today — succeed tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}
