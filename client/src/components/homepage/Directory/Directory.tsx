import React from "react";
import MenuItem from "../MenuItem";
import "./Directory.scss";

interface DirectoryProps {
  sections: {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size: string;
  }[];
  onMenuItemClick: (linkUrl: string) => void;
}

const Directory: React.FC<DirectoryProps> = ({ onMenuItemClick, sections }) => {
  return (
    <div className="directory">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => {
        return (
          <MenuItem
            key={id}
            imageUrl={imageUrl}
            menuTitle={title}
            size={size}
            onMenuItemClick={() => onMenuItemClick(linkUrl)}
          />
        );
      })}
    </div>
  );
};

export default Directory;
