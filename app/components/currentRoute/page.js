"use client"
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

export default function CurrentRoute() {
  const pathname = usePathname();
  console.log("pathname", pathname)
  return pathname;
}
