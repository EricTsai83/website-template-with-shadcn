import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WarningCard() {
  return (
    <Card className="w-full bg-primary-foreground shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-primary">Notice</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing....
        </CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur.{" "}
        <span className="underline underline-offset-2 font-medium">
          Aug. 5th, 2024
        </span>{" "}
        to{" "}
        <span className="underline underline-offset-2 font-medium">
          Nay 5th, 2024
        </span>
        . Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        odit eum quas possimus.
      </CardContent>
    </Card>
  );
}
