"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md mx-4 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-center flex flex-col items-center gap-y-4">
                <ExclamationTriangleIcon className="w-12 h-12" />
                <span className="text-2xl font-bold">
                  500 | Internal Server Error
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-center">
                Something went wrong. Please try again later.
              </CardDescription>
              <div className="flex justify-center">
                <Link href="/">
                  <Button variant="link">Back to Home</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
