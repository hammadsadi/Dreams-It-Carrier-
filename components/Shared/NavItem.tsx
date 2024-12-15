import Link from "next/link";
import React from "react";

const NavItem = ({
  dLink,
  linkTitle,
}: {
  dLink: string;
  linkTitle: string;
}) => {
  return (
    <li>
      <Link
        className="text-body-secondary transition hover:text-action-primary"
        href={dLink}
      >
        {linkTitle}
      </Link>
    </li>
  );
};

export default NavItem;
