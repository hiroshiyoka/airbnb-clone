"use client";

import { SafeUser } from "@/app/types";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead = () => {
  return <div>Listing Head</div>;
};

export default ListingHead;
