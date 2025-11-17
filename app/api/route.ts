// this is an example of how a route.ts file should look like

import { NextResponse } from "next/server";

// define the types related just this file here, exclude the input/output type for the route

// the input/output type for the route needs to be declared in the root of the project inside types/ directory
export async function GET() {
  return NextResponse.json({ hello: "world" });
}

// define all the helper functions here, these function should have clear input/output types (described at the top of the file) and documentation of their functionality
// Example function

/**
 * Adds two numbers and returns the result.
 *
 * @param {number} a - First number to add.
 * @param {number} b - Second number to add.
 * @returns {number} The sum of the two numbers.
 */
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}
