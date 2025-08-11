import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Briefcase, Brain, Clock, CheckCircle, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
    const navigate = useNavigate();
  return (
    <div className="bg-white-100 text-gray-200 min-h-screen px-6 py-12">
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black">Our Services</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Tailored solutions to help you ace interviews, sharpen your skills,
          and land the job you deserve.
        </p>
        <Separator className="my-8 bg-gray-700" />
      </section>

      {/* Service List */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex items-center space-x-3">
            <Briefcase className="text-gray-400" size={28} />
            <CardTitle className="text-white">Mock Job Interviews</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400">
            Simulate real interview scenarios with AI-driven or expert
            interviewers to prepare you for high-stakes situations.
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex items-center space-x-3">
            <Brain className="text-gray-400" size={28} />
            <CardTitle className="text-white">Skill Gap Analysis</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400">
            Identify strengths and weaknesses with detailed performance
            feedback to improve your interview responses.
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex items-center space-x-3">
            <Clock className="text-gray-400" size={28} />
            <CardTitle className="text-white">Time Management Practice</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400">
            Learn how to answer effectively within time limits to leave a
            strong impression without feeling rushed.
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex items-center space-x-3">
            <CheckCircle className="text-gray-400" size={28} />
            <CardTitle className="text-white">Offer Maximization</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400">
            Boost your chances of getting multiple offers by mastering
            communication, confidence, and clarity.
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex items-center space-x-3">
            <Brain className="text-gray-400" size={28} />
            <CardTitle className="text-white">Industry-Specific Coaching</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400">
            Get personalized mock interviews and feedback tailored to your
            industry, role, and experience level.
          </CardContent>
        </Card>

        {/* New Service Card */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex items-center space-x-3">
            <MessageSquare className="text-gray-400" size={28} />
            <CardTitle className="text-white">Personalized Feedback</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400">
            Receive in-depth, customized feedback on your answers, tone, and
            delivery to help you improve with every mock interview.
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto text-center mt-16">
        <h2 className="text-2xl font-semibold text-black">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-600 mt-3">
        Choose your service and start practicing today to shine in interviews.
        </p>
        <Button
          variant="outline"
          className="mt-6 border-gray-500 text-gray-500 hover:bg-gray-800 hover:text-white"
           onClick={() => navigate("/generate")}
        >
         Start Practice
        </Button>
      </section>
    </div>
  );
}
