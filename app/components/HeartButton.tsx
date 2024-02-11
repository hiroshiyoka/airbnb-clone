"use client";

import { SafeUser } from "../types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  return (
    <div className="relative hover:opacity-80 transition cursor-pointer"></div>
  );
};

export default HeartButton;
