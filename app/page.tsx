// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="border-b border-gray-200">
          <CardTitle className="text-center text-2xl font-semibold">
            AI-Powered CV Application
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <p className="text-center text-gray-700">
            Welcome! This app will help anonymize, reformat, and refine your CV using AI.
          </p>
          <Link href="/upload">
            <Button className="w-full">Get Started: Upload CV</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
